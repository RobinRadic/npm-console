// @ts-ignore
import JQuery, { JQueryStatic } from 'jquery';
import { join } from 'path';
import { JSDOM } from 'jsdom';
import Axios from 'axios';
import { caching, injectable } from '@radic/core';

@injectable()
/**
 * 1. Fetches all the NGINX documentation pages
 * 2. Caches them if enabled
 * 3. Wraps the fetched HTML into JSDOM
 * 4. And returns a {@type JQueryStatic} for each documentation page
 *
 */
export class Fetcher {
    @caching('nginx.types') protected cache: caching;
    protected baseUrl: string              = 'https://nginx.org/en/docs';
    protected docPageULPositions: number[] = [ 9, 10, 11, 12, 13 ];
    protected cacheEnabled: boolean        = true;
    protected cachePrefix: string          = 'fetcher:';


    public enableCache(enable: boolean = true) {
        this.cacheEnabled = enable;
        return this;
    }

    public disableCache() {return this.enableCache(false); }

    protected async fetchDomJqueryFromUri(uri?: string | null | undefined, force: boolean = false): JQueryStatic {
        let url      = this.makeUrl(uri);
        let cacheKey = this.getCacheKey(uri);
        let html;
        if ( this.cacheEnabled === true && this.cache.has(cacheKey) ) {
            html = this.cache.get(cacheKey);
        } else {
            let response = await Axios.get(url);
            html         = response.data;
        }
        if ( this.cacheEnabled === true && ((force && this.cache.has(cacheKey)) || !this.cache.has(cacheKey)) ) {
            this.cache.put(cacheKey, html);
            html = this.cache.get(cacheKey);
        }
        const dom             = new JSDOM(html);
        const $: JQueryStatic = JQuery(dom.window);
        return $;
    }

    protected getCacheKey(uri?: string) {
        let key = join(this.cachePrefix, this.makeUrl(uri)).replace(/\//g, '.');
        return key;
    }

    public makeUrl(uri?: string): string { return uri ? `${this.baseUrl}/${uri}` : this.baseUrl; }

    public async fetchModuleDocUris(force: boolean = false): Promise<string[]> {
        const uris = [];
        const $    = await this.fetchDomJqueryFromUri(undefined, force);
        for ( const elementPosition of this.docPageULPositions ) {
            const anchors = $('ul.compact').eq(elementPosition).find('> li > a');
            anchors.each(function () {
                let $anchor = $(this);
                uris.push($anchor.attr('href'));
            });
        }
        return uris;
    }

    public async getModuleDocJquery(uri, force: boolean = false): Promise<JQueryStatic> {
        const $ = await this.fetchDomJqueryFromUri(uri, force);
        return $;
    }
}

