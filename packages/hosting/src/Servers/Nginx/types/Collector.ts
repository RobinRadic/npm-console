// @ts-ignore
import JQuery, { JQueryStatic } from 'jquery';
import { basename } from 'path';
import { Fetcher } from './Fetcher';
import {Collection, inject, injectable , caching } from '@radic/core';
import { Collected, ScrapedDirective, Variable } from './types';

@injectable()
/**
 * Collector class is a dumb class. It fetches HTML pages and extracts information using JSDOM with JQuery. Prone to errors if just used to write typings. Another proper cleaning swipe should be done on all collected stuff
 */
export class Collector {
    @inject('nginx.types.fetcher') fetcher: Fetcher;
    @caching('nginx.types') protected cache: caching;
    protected cacheEnabled: boolean = true;
    protected cacheKey: string      = 'collector';

    public enableCache(enable: boolean = true) {
        this.cacheEnabled = enable;
        this.fetcher.enableCache(enable);
        return this;
    }

    public disableCache() {
        this.fetcher.disableCache();
        return this.enableCache(false);
    }

    protected contexts: string[] = [];
    protected modules: string[]  = [];

    public async collect(force: boolean = false): Promise<Collected> {
        this.contexts = [];
        this.modules  = [];

        if ( this.cacheEnabled && this.cache.has(this.cacheKey) && !force ) {
            const { modules, contexts, directives, variables } = this.cache.get(this.cacheKey);
            return this.makeCollected(modules, contexts, directives, variables);
        }
        const uris                         = await this.fetcher.fetchModuleDocUris(force);
        let directives: ScrapedDirective[] = [];
        let variables: Variable[]          = [];
        for ( const uri of uris ) {
            const $        = await this.fetcher.getModuleDocJquery(uri, force);
            const pageName = $('#content > h2').text();
            variables.push(...await this.getVariables($, this.fetcher.makeUrl(uri)));
            directives.push(...await this.getDirectives($, this.fetcher.makeUrl(uri)));
        }
        let collected = { modules: this.modules, contexts: this.contexts, directives, variables };
        if ( this.cacheEnabled ) {
            this.cache.put(this.cacheKey, collected);
        }
        return this.makeCollected(collected.modules, collected.contexts, directives, variables);
    }

    protected makeCollected(modules: string[], contexts: string[], directives: ScrapedDirective[], variables: Variable[]): Collected {
        return {
            modules   : modules,
            contexts  : contexts,
            directives: new Collection<ScrapedDirective>(directives),
            variables : new Collection<Variable>(variables),
        };
    }


    protected getVariables($: JQueryStatic, url: string) {
        const variables: Variable[] = [];
        const $variables            = $('a[name="variables_hash_max_size"]');
        if ( $variables.length === 0 ) {
            return [];
        }
        const moduleName = $('#content > h2').text().replace('Module ', '');
        $('a[name="variables"]').nextAll('dl.compact').children('dt').each((i, el) => {
            let $el = $(el);
            let id  = $el.attr('id').toString();
            variables.push({
                name     : '$' + id.replace('var_', ''),
                doc      : $el.next('dd').text(),
                url      : url + '#var' + id,
                module   : moduleName,
                hasSuffix: id.endsWith('_'),
            });
            if ( !this.modules.includes(moduleName) ) {
                this.modules.push(moduleName);
            }
        });
        return variables;
    }

    protected getDirectives($: JQueryStatic, url: string): ScrapedDirective[] {
        let strings    = [ 'size', 'path', 'time' ];
        let directives = [];
        $('.directive').each((i, el) => {
            let $el        = $(el);
            let moduleName = basename(url).replace('.html', '');
            if ( !this.modules.includes(moduleName) ) {
                this.modules.push(moduleName);
            }
            let directive: ScrapedDirective = {
                name   : null,
                value  : null,
                type   : 'any',
                context: null,
                default: null,
                url    : null,
                module : moduleName,
                isBlock: false,
            };
            let $tds                        = $el.find('> table > tbody td');

            // name
            let $code      = $tds.first().find('> code').first();
            directive.name = $code.find('> strong').text().trim();

            // value
            let value: any = $tds.first().text().replace(directive.name, '');
            if ( value.includes('|') ) {
                value = value.replace('/[\n]/gm', '');
            }
            value = value.trim().replace(/[\n\;]/gm, '');
            if ( value.includes('|') ) {
                value          = value.split('|').map(v => v.trim()).filter(Boolean).map(val => {
                    if ( val === 'string' ) {
                        return 'string';
                    }
                    if ( val.endsWith('...') ) {
                        return 'string';
                    }
                    return '"' + val + '"';
                }).join(' | ');
                directive.type = 'union';
            }
            if ( value.length === 1 ) {
                value = value.shift();
            }

            // type
            if ( strings.includes(value) ) {
                directive.type = 'string';
            }
            if ( directive.type === 'union' ) {
                directive.type = value;
            }
            directive.value = value;
            if ( directive.value.includes('{') ) {
                directive.isBlock = true;
            }

            //context
            directive.context = $tds.eq(2).text().trim().split(',').map(v => v.trim()); //.filter(context => this.contexts.includes(context));

            directive.context.forEach(context => {
                if ( !this.contexts.includes(context as any) ) {
                    this.contexts.push(context as any);
                }
            });
            // documentation url
            directive.url = url + '#' + directive.name;

            let $p = $(el).next('p');
            if ( $p ) {
                directive.doc = $p.text();
            }
            if ( $el.nextUntil('.directive').filter('.example') ) {
                directive.example = $el.nextUntil('.directive').filter('.example').text();
            }

            directives.push(directive);
        });

        //console.dir(directives)
        return directives;
    }
}
