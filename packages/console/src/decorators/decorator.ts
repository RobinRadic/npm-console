import { Arguments, Cli, CommandHandlerDefinition, ICommand, OptionDefinition } from '../cli';
import { app } from '@radic/core';
import { ArgumentDefinitions } from './arg';
import { reflectParams } from '@radic/shared';


export interface CommandDecoratorOptions {
    name: string;
    desc: string;
    aliases?: string[];
    directory?: string;
}

export type CommandDecoratorType =
    'group'
    | 'command'


export interface DecoratorCommandHandlerDefinition<T = {}> extends CommandHandlerDefinition {
    instance?: ICommand<T>;
    builder: (yargs: Cli) => any;
}

export declare class Command<T = {}> implements DecoratorCommandHandlerDefinition {
    builder: (yargs: Cli) => any;
    instance: ICommand<T>;
    command;
    describe;
    aliases;

}

export function decorator(type: CommandDecoratorType, options: CommandDecoratorOptions, callback?: (Target: new (...args: any) => any) => any) {
    const { aliases, desc, directory, name } = options;
    return (Target: new (...args: any) => any) => {

        let command = name;

        if ( !Reflect.hasMetadata('arguments', Target.prototype) ) {
            Reflect.defineMetadata('arguments', [], Target.prototype);
        }
        let args: ArgumentDefinitions = Reflect.getMetadata('arguments', Target.prototype);
        if ( args ) {
            args = args.reverse();
            if ( args.length > 0 ) {
                command = buildCommandString(args);
            }
        }
        let examples: Array<{ example: string, description: string }> = Reflect.getMetadata('examples', Target.prototype);
        let usage: { text: string, append: boolean }                  = Reflect.getMetadata('usage', Target.prototype);
        let options: Record<string, OptionDefinition>                 = Reflect.getMetadata('options', Target.prototype) || {};
        options                                                       = app.hooks.cli.command.options.call(options);


        function buildCommandString(args: ArgumentDefinitions) {
            let text = name.split(' ')[ 0 ] + ' ';
            for ( const arg of args ) {
                text += arg.required ? '<' : '[';
                text += arg.name;
                if ( arg.options.alias ) {
                    let alias = Array.isArray(arg.options.alias) ? arg.options.alias : [ arg.options.alias ];
                    text += '|' + alias;
                }
                if ( arg.variadic ) text += '...';
                text += arg.required ? '>' : ']';
                text += ' ';
            }
            return text;
        }


        return class Command implements DecoratorCommandHandlerDefinition {
            instance: ICommand;

            command: string     = command;
            commandName: string = name.split(' ')[ 0 ];
            describe            = desc;
            aliases             = aliases;

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
                if ( args ) {
                    for ( const arg of args ) {
                        let options = {
                            type       : arg.type as any,
                            description: arg.description,
                            array      : arg.variadic,
                            ...arg.options,
                        };
                        if ( arg.required === true ) {
                            options.demand = true;
                        }
                        if ( arg.defaultValue ) {
                            options.default = arg.defaultValue;
                        }
                        cli.positional(arg.name,options);
                    }
                }


                Object.entries(options).forEach(([ key, value ]) => cli.option(key, value));
                if ( type === 'group' ) {
                    cli.commandos(directory);
                }
                if ( examples ) {
                    for ( const example of examples ) {
                        if ( app.isBound('output') ) {
                            example.example     = app.get('output').parse(example.example);
                            example.description = app.get('output').parse(example.description);
                        }
                        cli.example(example.example, example.description);
                    }
                }
                //
                // let cliusage;
                // if ( usage && usage.text && !usage.append ) {
                //     cliusage = app.isBound('output') ? app.get('output').parse(usage.text) : usage.text;
                // } else if ( usage && usage.text && usage.append ) {
                //     cliusage = `{bold}${this.describe}:{/bold}\n{green}$\{/green} ${this.command}`;
                //     cliusage = app.get('output').parse(cliusage + usage.text);
                // } else if ( app.isBound('output') ) {
                //     cliusage = `{bold}${this.describe}:{/bold}\n{green}$\{/green} ${this.command}`;
                //     cliusage = app.get('output').parse(cliusage);
                // }
                // cli.usage(cliusage);

                app.hooks.cli.command.builder.call(this, cli);
                if ( typeof this.instance.builder === 'function' ) {
                    return this.instance.builder(cli);
                }
                return yargs;
            };

            handler = async (args: Arguments) => {
                await Promise.all(this.instance.providers.map(Provider => app.register(Provider)));
                args=this.instance.cli.argv
                let params = [];
                reflectParams(this.instance.handle, true).forEach(param => {
                    if ( param.variadic ) {
                        if ( args[ param.name ] !== undefined ) {
                            params.push(...args[ param.name ]);
                        }
                    } else if ( args[ param.name ] !== undefined ) {
                        params.push(args[ param.name ]);
                    } else {
                        params.push(undefined);
                    }
                });
                let context       = this.instance.cli.getContext();
                let command       = this.instance.cli.getCommand();
                let a             = { context, command };
                const nonOptsArgs = args._;
                const nodeCommand = args.$0;
                delete args._;
                delete args.$0;
                Object.assign(this.instance, args);
                app.hooks.cli.command.handler.call(this, params);
                return await this.instance.handle(...params);
            };
        } as any;
    };
}

