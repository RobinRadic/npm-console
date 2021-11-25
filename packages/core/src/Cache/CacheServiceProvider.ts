import { CacheManager } from './CacheManager';
import { ServiceProvider } from '@radic/shared';
import { CacheAdapter } from './CacheAdapter';
import { FileCacheAdapter } from './FileCacheAdapter';


declare module '../Foundation/Application' {
    export interface Application {
        cache: CacheManager;
    }

    export interface Bindings {
        cache: CacheManager;
    }
}

declare module '../types/config' {
    export interface Configuration {
        cache?: CacheConfiguration;
    }
}

export interface CacheConfiguration {
    default?: string;
    adapters?: CacheAdapter[];
}

export class CacheServiceProvider extends ServiceProvider {
    public load(): any {
        this.app.addConfig<CacheConfiguration>({
            key     : 'cache',
            defaults: {
                default : 'main',
                adapters: [
                    new FileCacheAdapter({ name: 'main', compression: true }),
                ],
            },
        });
    }

    public register(): any {
        this.registerCache();
    }

    protected registerCache() {
        this.app.singleton('cache', CacheManager).addBindingGetter('cache');
        this.app.onActivation('cache', (context, manager: CacheManager) => {
            let config = this.app.config.get<CacheConfiguration>('cache', {
                default: 'main',
                adapters: [],
            });
            config.adapters.forEach(adapter => manager.register(adapter));
            manager.use(config.default);
            return manager;
        });
    }

}
