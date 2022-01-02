import { ServiceProvider } from '@radic/shared';
import { AsyncSeriesHook } from 'tapable';
import { Cli } from './Cli';
import { Args } from '../yargs';
declare module './types' {
    interface GlobalOptions {
        h: boolean;
        help: boolean;
        V: boolean;
        version: boolean;
        v: number;
        verbose: number;
    }
}
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
export declare class CliServiceProvider extends ServiceProvider {
    providers: any[];
    load(): void;
    register(): any;
    protected registerHooks(): void;
    protected registerCli(): void;
    protected setupCli(): void;
    protected registerStartCli(): void;
}
