import { Repository } from '../core/Config';
import { Constructor, IServiceProviderClass } from '../core/Support';
import { CacheAdapter, StartFn } from '../core';


export type Config =
    Repository<Configuration>
    & Configuration


export interface Configuration {
    debug?: boolean;
    startFn?:StartFn
    cache?: {
        places: Array<{
            name: string,
            adapter: Constructor<CacheAdapter>
        }>
    };
}

export interface ApplicationInitOptions {
    providers?: IServiceProviderClass[];
    config?: Configuration;
}
