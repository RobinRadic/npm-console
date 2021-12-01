import {  isArray, isArrayable, objectify } from '@radic/shared';
import { BlockType, injectable, TypeDefinitionBuilder } from '@radic/core';
import { inject } from 'inversify';
import { camelCase, get, set, upperFirst } from 'lodash';
import { Collected, DetailedOverride, isDetailedOverride, isDetailedOverrides, isSimpleOverride, NginxContext, ScrapedDirective, TypeOverrides } from './types';


@injectable()
export class TypeGenerator {
    protected collected: Collected;
    protected overrides: TypeOverrides;
    protected prefix = '';

    protected get directives(): Collected['directives'] { return this.collected.directives; }

    protected get variables(): Collected['variables'] { return this.collected.variables; }

    protected get contexts(): Collected['contexts'] { return this.collected.contexts; }

    protected get modules(): Collected['modules'] { return this.collected.modules; }

    constructor(@inject('nginx.types.collector:collected') collected: Collected) {
        this.overrides = {
            include         : { in: [ 'any' ], replace: 'string[]' },
            charset         : { in: [ 'any' ], replace: 'string | "off"' },
            aio             : '"on" | "off" | string',
            listen          : 'string',
            resolver        : 'any',
            disable_symlinks: 'any',
            server          : [
                { in: [], not: [ 'upstream' ], replace: this.getContextInterfaceName('server') + '[]' },
                { in: [ 'upstream' ], not: [], replace: 'string' },
            ],
            allow           : { append: ' | string[]' },
            deny            : { append: ' | string[]' },
            mail            : this.getContextInterfaceName('mail'),
            stream          : this.getContextInterfaceName('stream'),
            events          : this.getContextInterfaceName('events'),
            http            : this.getContextInterfaceName('http'),
            location        : this.getContextInterfaceName('location') + ' | string',
        };
        this.collected = this.fixCollected(collected);
        this.generateMaps();

    }

    mainContextDirectives: ScrapedDirective[];
    contextContextMap: Record<string, string[]>;
    contextDirectiveMaps: Record<string, ScrapedDirective[]>;

    protected generateMaps() {

        this.mainContextDirectives = this.directives.filter(d => d.context.includes('main')).toArray<ScrapedDirective>();
        this.contextContextMap     = this.mainContextDirectives
                                         .map(dir => [ dir.name, this.directives.filter(d => d.context.includes(dir.name) && d.isBlock).toArray() ])
                                         .filter(([ k, v ]) => v.length > 0)
                                         .map(([ k, v ]: [ string, ScrapedDirective[] ]) => ([ k, v.map(v => v.name) ]))
                                         .reduce(objectify, {});
        this.contextDirectiveMaps  = this.mainContextDirectives
                                         .map(dir => [ dir.name, this.directives.filter(d => d.context.includes(dir.name) && d.isBlock).toArray() ])
                                         .map(([ context, dirs ]: [ string, ScrapedDirective[] ]) => ([ context, this.directives.filter(d => d.context.includes(context)) ]))
                                         .reduce(objectify, {});
        Object.keys(this.contextDirectiveMaps).forEach(k => {
            if ( isArrayable(this.contextDirectiveMaps[ k ]) && this.contextDirectiveMaps[ k ].length === 0 ) {
                delete this.contextDirectiveMaps[ k ];
            }
        });

    }

    protected getContextInterfaceName(context: NginxContext) {
        return this.prefix + upperFirst(camelCase(context + 'Directives')); //context[ 0 ].toUpperCase() + context.slice(1) + 'Directives';
    }

    protected getContextTypeName(context: NginxContext) {
        return this.prefix + upperFirst(camelCase(context + 'Directivee'));
    }

    protected getDirectiveType(directive: ScrapedDirective) {
        let override       = this.overrides[ directive.name ];
        const isNotIn      = (o: DetailedOverride, is: 'in' | 'not', contexts: NginxContext[]) => {
            if ( o[ is ] && isArray(o[ is ]) && o[ is ].length ) {
                return contexts.filter(context => o[ is ].includes(context) === (is === 'in')).length = 0;
            }
            // return (o[ is ] && Array.isArray(o[ is ]) && o[ is ].length) && (o[ is ].includes(context) === (is === 'in'))
        };
        const modifyType   = (d: ScrapedDirective, o: DetailedOverride) => {
            if ( o.prepend ) {
                return o.prepend + d.type;
            }
            if ( o.append ) {
                return d.type + o.append;
            }
            if ( o.replace ) {
                return o.replace;
            }
            return d.type;
        };
        const overrideType = (d: ScrapedDirective, o: DetailedOverride) => {
            if ( isNotIn(o, 'not', d.context) ) {
                return modifyType(d, o);
            }
            if ( isNotIn(o, 'in', d.context) ) {
                return modifyType(d, o);
            }
            return modifyType(d, o);
        };
        if ( override === undefined ) {
            return directive.type;
        }
        if ( isSimpleOverride(override) ) {
            return override;
        }
        if ( isDetailedOverride(override) ) {
            return overrideType(directive, override);
        }
        if ( isDetailedOverrides(override) ) {
            for ( const o of override ) {
                return overrideType(directive, o);
            }
        }
    }

    protected pushToModule(module: string, directive: ScrapedDirective) {
        const segments   = module.replace('ngx_', '').replace('_module', '').split('_');
        const path       = segments.join('.');
        const directives = get(this.modules, path, []);
        directives.push(directive);
        set(this.modules, path, directives);
    }

    protected fixCollected(collected: Collected): Collected {
        // @ts-ignore
        collected.directives = collected.directives.map(d => {
            d.type = this.getDirectiveType(d);
            if ( d.isBlock ) {
                d.type += '[]';
            }
            return d;
        });
        return collected;
    }

    public async generate() {
        let b   = new TypeDefinitionBuilder();
        let bns = b.export.open('namespace', 'types');
        bns.export.type('Context', '"' + this.contexts.join('" | "') + '"');
        this.addDirectivesToBlock(bns, 'interface', 'MainDirectives', this.mainContextDirectives);
        let interfaces = [ 'MainDirectives' ];
        let contexts   = Object.keys(this.contextDirectiveMaps);
        for ( const context of contexts ) {
            let ifcs = this.getContextInterfaceName(context);
            interfaces.push(ifcs);
            this.addDirectivesToBlock(bns, 'interface', ifcs, this.contextDirectiveMaps[ context ]);
        }
        let ds = bns.export.open('interface', 'Directives');
        for ( const context of contexts ) {
            ds.add(context, this.getContextInterfaceName(context));
        }
        ds.close();

        bns.export.type('Directive',  interfaces.join(' | ') );
        bns.close();
        return b.build();
    }

    protected addDirectivesToBlock(block: TypeDefinitionBuilder, type: BlockType, name: string, directives: ScrapedDirective[]) {
        const innerBlock = block.export.open(type, name);
        for ( const directive of this.mainContextDirectives ) {
            this.addDirectiveToBlock(directive, innerBlock);
        }
        innerBlock.close();
        return name;
    }

    protected addDirectiveToBlock(directive: ScrapedDirective, block: TypeDefinitionBuilder) {
        if ( directive.doc ) {
            let doc = directive.doc.replace('*/', '* /').split('\n').filter(Boolean);
            doc.push(`\n`);
            doc.push(`module: ${directive.module}`);
            if ( directive.example ) {
                doc.push('@example');
                doc.push('```nginx');
                doc = doc.concat(directive.example.replace('*/', '* /').split('\n').filter(Boolean));
                doc.push('```');

            }
            block.docblock(doc);
        }
        block.add(directive.name, directive.type);
    }

}
