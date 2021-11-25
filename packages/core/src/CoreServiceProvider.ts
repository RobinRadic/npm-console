import { CacheServiceProvider } from './Cache';
import { SystemServiceProvider } from './System';
import { ServiceProvider } from '@radic/shared';

export class CoreServiceProvider extends ServiceProvider {
    providers = [
        CacheServiceProvider,
        SystemServiceProvider,
    ];


    public register(): any {
    }


    async boot() {
    }

}
