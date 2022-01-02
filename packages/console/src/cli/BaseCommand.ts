import { injectable } from 'inversify';
import { Options } from 'yargs';
import { Cli } from './Cli';
import { Application, Bindings, inject} from '@radic/core';
import {IServiceProviderClass } from '@radic/shared';
import { GlobalOptions } from './types';

export type CommandBuilder<T = {}, U = {}> =
    { [ key: string ]: Options }
    | ((args: Cli) => Cli)
    | ((args: Cli) => any)
    | ((args: Cli) => PromiseLike<Cli>);

export type ICommand<T = {}> =
    T
    & GlobalOptions
    & {
        builder?: CommandBuilder;
        providers: IServiceProviderClass[]
        app: Application
        cli: Cli
        handle?(...args): Promise<any>;
    }

@injectable()
export abstract class BaseCommand {
    public static type='command'
    providers: IServiceProviderClass[] = [];
    app: Application                   = Application.instance;
    cli: Cli;
    builder?: CommandBuilder;

    async handle(...args):Promise<any> {
        throw new Error('This command has not yet been implemented')
    }
}
