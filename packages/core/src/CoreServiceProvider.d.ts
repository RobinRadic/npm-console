import { CacheServiceProvider } from './Cache';
import { SystemServiceProvider } from './System';
import { ServiceProvider } from '@radic/shared';
export declare class CoreServiceProvider extends ServiceProvider {
    providers: (typeof CacheServiceProvider | typeof SystemServiceProvider)[];
    register(): any;
    boot(): Promise<void>;
}
