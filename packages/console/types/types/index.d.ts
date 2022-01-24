import { Args, Cli } from '../cli';
import { AsyncSeriesHook } from 'tapable';
export * from './packageJson';
export * from './options';
export interface CliOptions {
    commandDir: string;
    maxWidth?: number | false;
    setup?: (cli: Cli) => any;
}
export interface CliArguments {
}
export declare type CliCustomize = AsyncSeriesHook<Cli>;
export declare type CliSetup = (cli: Cli) => Promise<Cli>;
export declare type CliStart = <T extends CliArguments = CliArguments>() => Promise<CliStartReturn<T>>;
export declare type CliStartReturn<T extends CliArguments = CliArguments> = {
    [key in keyof Args<T>]: Args<T>[key];
};
