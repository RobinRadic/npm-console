import 'reflect-metadata';
import { Output } from './Output';
import { OutputOptions } from './interfaces';
import { Ui } from './ui';
export * from 'trucolor';
export * from './colors';
export * from './ui';
export * from './utils';
export * from './figures';
export * from './interfaces';
export * from './macros';
export * from './Output';
export * from './log';
export * from './OutputServiceProvider';
declare module '@radic/core/types/types/config' {
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
import { Color } from './colors';
export {};
declare global {
    interface String {
        getHashCode(): number;
        toHexColor(): string;
        toColor(): Color;
        toCliColor(): string;
    }
}
