import { CacheManager } from './CacheManager';
import { ServiceProvider } from '@radic/shared';
import { CacheAdapter } from './CacheAdapter';
declare module '../Foundation/Application' {
    interface Application {
        cache: CacheManager;
    }
    interface Bindings {
        cache: CacheManager;
    }
}
declare module '../types/config' {
    interface Configuration {
        cache?: CacheConfiguration;
    }
}
export interface CacheConfiguration {
    default?: string;
    adapters?: CacheAdapter[];
}
export declare class CacheServiceProvider extends ServiceProvider {
    load(): any;
    register(): any;
    protected registerCache(): void;
}
