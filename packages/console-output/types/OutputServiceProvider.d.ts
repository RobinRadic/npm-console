import { ServiceProvider } from '@radic/shared';
import { Output, OutputOptions } from './';
import { Ui } from './ui';
import { Bindings } from '@radic/core';
declare module '@radic/core' {
    interface Configuration {
        output?: OutputOptions;
    }
}
declare module '@radic/core/types/Foundation/Application' {
    interface Bindings {
        'output': Output;
        'output.ui': Ui;
        'output.options': OutputOptions;
    }
    interface Application {
        output: Output;
        ui: Ui;
    }
}
export declare class OutputServiceProvider extends ServiceProvider {
    load(): void;
    register(): void;
    boot(): void;
}
export declare const out: (proto: any, key: string) => void;
export declare type out = Bindings['output'];
