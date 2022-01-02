import { ServiceProvider } from '@radic/shared';
import { MonoRepoOptions } from './mono';
import { MonoRepo } from './mono/MonoRepo';
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
declare module '@radic/console-output/types/colors/StyleManager' {
    interface Styles {
    }
}
declare module '@radic/console-output/types/Output' {
    interface Output {
        info(message: string): this;
        error(message: string, title?: string, error?: Error): this;
        warning(message: string): this;
        success(message: string): this;
    }
}
export declare class MonoServiceProvider extends ServiceProvider {
    load(): void;
    register(): void;
    boot(): void;
    hookPackageBuilders(): void;
    bootOutputMacros(): void;
    bootMonoRepoMacros(): void;
}
