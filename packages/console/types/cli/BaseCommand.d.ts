import { Options } from 'yargs';
import { Cli } from './Cli';
import { Application } from '@radic/core';
import { IServiceProviderClass } from '@radic/shared';
import { GlobalOptions } from './types';
export declare type CommandBuilder<T = {}, U = {}> = {
    [key: string]: Options;
} | ((args: Cli) => Cli) | ((args: Cli) => any) | ((args: Cli) => PromiseLike<Cli>);
export declare type ICommand<T = {}> = T & GlobalOptions & {
    builder?: CommandBuilder;
    providers: IServiceProviderClass[];
    app: Application;
    cli: Cli;
    handle?(...args: any[]): Promise<any>;
};
export declare abstract class BaseCommand {
    providers: IServiceProviderClass[];
    app: Application;
    cli: Cli;
    builder?: CommandBuilder;
    handle(...args: any[]): Promise<any>;
}
