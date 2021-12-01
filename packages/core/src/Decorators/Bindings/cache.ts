// lazy shorthands

import { Constructor } from '@radic/shared';
import { CacheAdapter, CacheManager, FileCacheAdapter } from '../../Cache';
import { app, Bindings, inject } from '../../Foundation';

export const caching = (name: string, Adapter?: Constructor<CacheAdapter>) => {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            get         : () => {
                let manager: CacheManager = app.get<CacheManager>('cache');
                if ( !manager.has(name) ) {
                    if ( !Adapter ) {
                        Adapter = FileCacheAdapter;
                    }
                    manager.register(new Adapter(name));
                }
                return manager.get<CacheAdapter>(name);
            },
            enumerable  : true,
            configurable: true,
        });
    };
};
export type caching = CacheAdapter
export const cache = inject('cache');
export type cache = Bindings['cache']
