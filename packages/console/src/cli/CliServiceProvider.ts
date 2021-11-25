import { Application } from '@radic/core';
import { isString, objectify, ServiceProvider } from '@radic/shared';
import { Argv } from 'yargs';
import { AsyncSeriesHook, AsyncSeriesWaterfallHook, SyncHook, SyncWaterfallHook } from 'tapable';
import cli, { Cli } from './Cli';
import locale from './locale.json';
import { Command } from '../decorators/decorator';
import { Args, OptionDefinition } from '../yargs';

declare module '@radic/core/lib/Foundation/Application' {
    export interface Hooks {
        cli: {
            setup: AsyncSeriesHook<Cli>
            argv: SyncWaterfallHook<string[]>
            args: AsyncSeriesWaterfallHook<Args>
            command: {
                options: SyncWaterfallHook<Record<string, OptionDefinition>>
                handler: SyncHook<[ Command, any[] ]>
                constructor: SyncHook<Command>
                builder: SyncHook<[ Command, Cli ]>
                decorator: SyncHook<any>
                command: AsyncSeriesWaterfallHook<typeof Command>
            }
        };
    }

    export interface Bindings {
        'cli': Argv,
        'cli.start': CliStart
        'cli.setup': CliSetup
        'cli.customize': CliCustomize
    }

    export interface Application {
        cli: Cli;
        cliStart: CliStart;
        cliCustomize: CliCustomize;
    }
}
declare module '@radic/core/lib/types/config' {

    export interface Configuration {
        cli?: CliOptions;
    }
}

declare module './types' {
    export interface GlobalOptions {
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
}

export interface CliArguments {

}

export type CliCustomize = AsyncSeriesHook<Cli>
export type CliSetup = (cli: Cli) => Promise<Cli>
export type CliStart = <T extends CliArguments = CliArguments>() => Promise<CliStartReturn<T>>
export type CliStartReturn<T extends CliArguments = CliArguments> = { [key in keyof Args<T>]: Args<T>[key] }

function getLocaleStrings(out: any) {
    function transform(obj) {
        return Object.entries(obj).map(([ key, value ]) => {
            if ( isString(value) ) {
                return [ key, out.parse(value) ];
            }
            return [ key, transform(value) ];
        }).reduce(objectify, {});
    }

    return transform(locale);
}

export class CliServiceProvider extends ServiceProvider {
    providers = [];

    load() {
        this.config<Partial<CliOptions>>({
            key     : 'cli',
            defaults: {
                maxWidth: 150,
            },
            schema  : {
                type      : 'object',
                properties: {
                    commandDir: {
                        type: 'string',
                    },
                },
                required  : [ 'commandDir' ],
            },
        });
    }

    register(): any {
        this.registerHooks();
        this.registerCli();
        this.setupCli();
        this.registerStartCli();
    }

    protected registerHooks() {
        this.app.hooks.cli = {
            setup  : new AsyncSeriesHook<Cli>([ 'cli' ]),
            argv   : new SyncWaterfallHook<string | string[]>([ 'argv' ]),
            args   : new AsyncSeriesWaterfallHook<Args>([ 'args' ]),
            command: {
                command    : new AsyncSeriesWaterfallHook<typeof Command>([ 'command' ]),
                constructor: new SyncHook<Command>(),
                options    : new SyncWaterfallHook<Record<string, OptionDefinition>>([ 'options' ]),
                builder    : new SyncHook<[ Command, Cli ]>([ 'command', 'cli' ]),
                decorator  : new SyncHook(),
                handler    : new SyncHook<[ Command, any[] ]>([ 'command', 'params' ]),
            },
        };
    }

    protected registerCli() {
        this.app.instance('cli', cli)
            .addBindingGetter('cli');
    }

    protected setupCli() {
        this.app.bind('cli.setup').toFactory(ctx => {
            return async (cli: Cli) => {
                let { maxWidth } = this.app.config.cli;
                cli
                .version(false)
                .commandDir(this.app.config.cli.commandDir, {
                    extensions: [ 'ts', 'js', 'tsx' ],
                    visit     : (commandObject, pathToFile, filename) => {
                        return new commandObject.default();
                    },
                })
                .demandCommand()
                .parserConfiguration({
                    'dot-notation': false,
                })
                .help('h', 'Show Help').alias('h', 'help')
                // .group('h', this.app.out.parse('{bold}Global Options:{/bold}'))
                .option('V', { type: 'boolean', alias: 'version', global: false });
                // .showHelpOnFail(true)

                if ( this.app.isBound('out') ) {
                    cli.updateStrings(getLocaleStrings(this.app.get('out')));
                }

                if ( maxWidth !== false && cli.terminalWidth() > maxWidth ) {
                    cli.wrap(maxWidth);
                    this.app.instance('cli.wrap', maxWidth);
                } else {
                    this.app.instance('cli.wrap', cli.terminalWidth());
                }
                try {
                    await this.app.hooks.cli.setup.promise(cli);
                } catch (e) {
                    throw e;
                }

                return cli;
            };
        });
    }

    protected registerStartCli() {
        this.app.bind('cli.start').toFactory((ctx) => {
            return async () => {
                const cli   = ctx.container.get<Cli>('cli');
                const setup = ctx.container.get<CliSetup>('cli.setup');
                await setup(cli);
                let argv = this.app.hooks.cli.argv.call(process.argv.slice(2) as any);
                try {
                    let args = await cli.parse(argv);
                    args     = await this.app.hooks.cli.args.promise(args);
                    return args;
                } catch (e) {
                    throw e;
                }
            };
        });
        this.app.addBindingGetter('cli.start');
    }
}
