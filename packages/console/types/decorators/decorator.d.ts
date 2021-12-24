import { Cli, CommandHandlerDefinition, ICommand } from '../cli';
export interface CommandDecoratorOptions {
    name: string;
    desc: string;
    aliases?: string[];
    directory?: string;
}
export declare type CommandDecoratorType = 'group' | 'command';
export interface DecoratorCommandHandlerDefinition<T = {}> extends CommandHandlerDefinition {
    instance?: ICommand<T>;
    builder: (yargs: Cli) => any;
}
export declare class Command<T = {}> implements DecoratorCommandHandlerDefinition {
    builder: (yargs: Cli) => any;
    instance: ICommand<T>;
    command: any;
    describe: any;
    aliases: any;
}
export declare function decorator(type: CommandDecoratorType, options: CommandDecoratorOptions, callback?: (Target: new (...args: any) => any) => any): (Target: new (...args: any) => any) => any;
