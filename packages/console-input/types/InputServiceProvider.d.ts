import { ServiceProvider } from '@radic/shared';
import { Input } from './Input';
import { Bindings } from '@radic/core';
declare module '@radic/core/types/Foundation/Application' {
    interface Bindings {
        input: typeof Input;
    }
    interface Application {
        input: typeof Input;
    }
}
export declare class InputServiceProvider extends ServiceProvider {
    register(): void;
}
export declare const ask: (proto: any, key: string) => void;
export declare type ask = Bindings['input'];
