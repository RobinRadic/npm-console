import { ServiceProvider } from '@radic/shared';
import { Bindings } from '@radic/core';
export declare class OutputServiceProvider extends ServiceProvider {
    load(): void;
    register(): void;
    boot(): void;
}
export declare const out: (proto: any, key: string) => void;
export declare type out = Bindings['output'];
