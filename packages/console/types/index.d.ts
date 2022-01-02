import 'reflect-metadata';
import { AsyncSeriesHook, AsyncSeriesWaterfallHook, SyncHook, SyncWaterfallHook } from 'tapable';
import { Args, Cli, CliCustomize, CliOptions, CliSetup, CliStart, OptionDefinition } from './cli';
import { Command } from './decorators';
import { Argv } from 'yargs';
export * from './decorators';
export * from './types';
export * from './cli';
export * from './utils';
declare module '@radic/core/types/Foundation/Application' {
    interface Hooks {
        cli: {
            setup: AsyncSeriesHook<Cli>;
            argv: SyncWaterfallHook<string[]>;
            args: AsyncSeriesWaterfallHook<Args>;
            command: {
                options: SyncWaterfallHook<Record<string, OptionDefinition>>;
                handler: SyncHook<[Command, any[]]>;
                constructor: SyncHook<Command>;
                builder: SyncHook<[Command, Cli]>;
                decorator: SyncHook<any>;
                command: AsyncSeriesWaterfallHook<typeof Command>;
            };
        };
    }
    interface Bindings {
        'cli': Argv;
        'cli.start': CliStart;
        'cli.setup': CliSetup;
        'cli.customize': CliCustomize;
    }
    interface Application {
        cli: Cli;
        cliStart: CliStart;
        cliCustomize: CliCustomize;
    }
}
declare module '@radic/core/types/types/config' {
    interface Configuration {
        cli?: CliOptions;
    }
}
