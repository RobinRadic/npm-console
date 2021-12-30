import { ServiceProvider } from '@radic/shared';
import { MonoRepo, MonoRepoOptions } from './mono';
declare module './mono' {
    interface MonoRepo {
        build(name: string): this;
        rebuild(name: string): this;
        clean(name: string): this;
        watch(name: string): this;
        buildAll(): this;
        rebuildAll(): this;
        cleanAll(): this;
        watchAll(): this;
    }
}
declare module '@radic/core/types/Foundation/Application' {
    interface Bindings {
        monoRepo: MonoRepo;
    }
    interface Application {
        monoRepo: MonoRepo;
    }
}
declare module '@radic/core/types/types/config' {
    interface Configuration {
        mono?: MonoConfiguration;
    }
}
export interface MonoConfiguration {
    rootDir?: string;
    options?: MonoRepoOptions;
}
export declare class MonoServiceProvider extends ServiceProvider {
    load(): void;
    register(): void;
    boot(): void;
}
