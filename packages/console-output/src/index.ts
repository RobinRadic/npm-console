import 'reflect-metadata';
import { Color } from './colors';
import { CliString } from './colors/CliString';

export * from 'trucolor';
export * from './colors';
export * from './ui';
export * from './utils';
export * from './figures';
export * from './interfaces';
export * from './macros';
export * from './Output';
// export * from './log';
// export * from './OutputServiceProvider';

//
// export const output: Output = new Output();

export {};
declare global {
    interface String {
        getHashCode(): number;

        toHexColor(): string;

        toColor(): Color;

        toCliColor(): string;

        get colors(): CliString;

        colorize(): CliString;
    }
}
