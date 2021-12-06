import { JQueryStatic } from 'jquery';
import { Fetcher } from './Fetcher';
import { caching } from '@radic/core';
import { Collected, ScrapedDirective, Variable } from './types';
export declare class Collector {
    fetcher: Fetcher;
    protected cache: caching;
    protected cacheEnabled: boolean;
    protected cacheKey: string;
    enableCache(enable?: boolean): this;
    disableCache(): this;
    protected contexts: string[];
    protected modules: string[];
    collect(force?: boolean): Promise<Collected>;
    protected makeCollected(modules: string[], contexts: string[], directives: ScrapedDirective[], variables: Variable[]): Collected;
    protected getVariables($: JQueryStatic, url: string): Variable[];
    protected getDirectives($: JQueryStatic, url: string): ScrapedDirective[];
}
