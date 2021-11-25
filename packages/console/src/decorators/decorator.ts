import { Arguments, BaseCommand, Cli, CommandHandlerDefinition, OptionDefinition } from '../modules/cli';
import { app, getParamNames } from '../core';
import { ICommand } from '../modules/cli';


export interface CommandDecoratorOptions {
    name: string;
    desc: string;
    aliases?: string[];
    directory?: string;
}

export type CommandDecoratorType =
    'group'
    | 'command'


export interface DecoratorCommandHandlerDefinition<T={}> extends CommandHandlerDefinition {
    instance?: ICommand<T>;
    builder: (yargs: Cli) => any;
}

export declare class Command<T={}> implements DecoratorCommandHandlerDefinition {
    builder: (yargs: Cli) => any;
    instance: ICommand<T>;
    command
    describe
    aliases

}

export function decorator(type: CommandDecoratorType, options: CommandDecoratorOptions, callback?: (Target: new (...args: any) => any) => any) {
    const { aliases, desc, directory, name } = options;
    return (Target: new (...args: any) => any) => {

        let options: Record<string, OptionDefinition> = Reflect.getMetadata('options', Target.prototype) || {};
        options= app.hooks.cli.command.options.call(options);

        return class Command implements DecoratorCommandHandlerDefinition {
            instance: ICommand;

            command  = name;
            describe = desc;
            aliases  = aliases;

            constructor() {
                this.instance = app.resolve(Target);
                Object.entries(options).forEach(([ key, value ]) => {
                    if ( this.instance[ key ] !== undefined ) {
                        value.default = this.instance[ key ];
                    }
                });
                app.hooks.cli.command.constructor.call(this);

            }

            builder = async (yargs) => {
                let cli: Cli      = yargs;
                this.instance.cli = cli;
                Object.entries(options).forEach(([ key, value ]) => cli.option(key, value));
                if ( type === 'group' ) {
                    cli.commandos(directory);
                }
                app.hooks.cli.command.builder.call(this,cli)
                if ( typeof this.instance.builder === 'function' ) {
                    return this.instance.builder(cli);
                }
                return yargs;
            };

            handler = async (args: Arguments) => {
                await Promise.all(this.instance.providers.map(Provider => app.register(Provider)));
                let params = [];
                getParamNames(this.instance.handle).forEach(name => {
                    if ( args[ name ] !== undefined ) {
                        params.push(args[ name ]);
                    } else {
                        params.push(undefined);
                    }
                });
                const nonOptsArgs = args._;
                const nodeCommand = args.$0;
                delete args._;
                delete args.$0;
                Object.assign(this.instance, args);
                app.hooks.cli.command.handler.call(this, params)
                return await this.instance.handle(...params);
            };
        } as any;
    };
}

