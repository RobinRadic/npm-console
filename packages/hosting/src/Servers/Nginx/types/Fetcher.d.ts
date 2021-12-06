import { JQueryStatic } from 'jquery';
import { caching } from '@radic/core';
export declare class Fetcher {
    protected cache: caching;
    protected baseUrl: string;
    protected docPageULPositions: number[];
    protected cacheEnabled: boolean;
    protected cachePrefix: string;
    enableCache(enable?: boolean): this;
    disableCache(): this;
    protected fetchDomJqueryFromUri(uri?: string | null | undefined, force?: boolean): JQueryStatic;
    protected getCacheKey(uri?: string): string;
    makeUrl(uri?: string): string;
    fetchModuleDocUris(force?: boolean): Promise<string[]>;
    getModuleDocJquery(uri: any, force?: boolean): Promise<JQueryStatic>;
}
