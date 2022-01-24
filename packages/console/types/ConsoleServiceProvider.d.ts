import { ServiceProvider } from '@radic/shared';
import { AsyncSeriesHook, AsyncSeriesWaterfallHook, SyncHook, SyncWaterfallHook } from 'tapable';
import { Cli } from './cli';
import { Command } from './decorators/decorator';
import { Args, OptionDefinition } from './yargs';
import { Argv } from 'yargs';
import { CliCustomize, CliOptions, CliSetup, CliStart } from './types';
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
declare module './cli/types' {
    interface GlobalOptions {
        h: boolean;
        help: boolean;
        V: boolean;
        version: boolean;
        v: number;
        verbose: number;
    }
}
export declare class ConsoleServiceProvider extends ServiceProvider {
    providers: any[];
    load(): void;
    register(): any;
    protected registerHooks(): void;
    protected registerCli(): void;
    protected setupCli(): void;
    protected registerStartCli(): void;
}
