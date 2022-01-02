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

//
// export const output: Output = new Output();


declare module '@radic/core/types/types/config' {
    export interface Configuration {
        output?: OutputOptions;
    }
}
declare module '@radic/core/types/Foundation/Application' {
    export interface Bindings {
        'output': Output;
        'output.ui': Ui;
        'output.options': OutputOptions;
    }

    export interface Application {
        output: Output;
        ui: Ui;
    }
}
import { Color } from './colors';
import { CliString } from './colors/CliString';

export {};
declare global {
    interface String {
        getHashCode(): number;

        toHexColor(): string;

        toColor(): Color;

        toCliColor():string

        get colors():CliString
        colorize():CliString
    }
}
