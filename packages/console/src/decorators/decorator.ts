import { Arguments, BaseCommand, Cli, CommandHandlerDefinition, OptionDefinition } from '../cli';
import { app } from '@radic/core';
import {  getParamNames } from '@radic/shared';
import { ICommand } from '../cli';


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

        let examples:Array<{example:string,description:string}> = Reflect.getMetadata('examples', Target.prototype);
        let usage = Reflect.getMetadata('usage', Target.prototype);
        let options: Record<string, OptionDefinition> = Reflect.getMetadata('options', Target.prototype) || {};
        options= app.hooks.cli.command.options.call(options);

        return class Command implements DecoratorCommandHandlerDefinition {
            instance: ICommand;

            command  = name;
            commandName = name.split(' ')[0]
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
                if(examples){
                    for(const example of examples) {
                        if ( app.isBound('output') ) {
                            example.example = app.get('output').parse(example.example)
                            example.description = app.get('output').parse(example.description)
                        }
                        cli.example(example.example, example.description);
                    }
                }

                if(usage){
                    usage = app.isBound('output') ? app.get('output').parse(usage) : usage;
                } else if(app.isBound('output')){
                    usage = `{bold}${this.describe}:{/bold}\n{green}$\{/green} ${this.command}`
                    usage=app.get('output').parse(usage)
                }
                cli.usage(usage);


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
                    if(name.startsWith('...')){
                        name = name.replace('...','')
                        if ( args[ name ] !== undefined ) {
                            params.push(...args[ name ]);
                        }
                    } else if ( args[ name ] !== undefined ) {
                        params.push(args[ name ]);
                    } else {
                        params.push(undefined);
                    }
                });
                let context = this.instance.cli.getContext();
                let command = this.instance.cli.getCommand();
                let a = {context,command}
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

