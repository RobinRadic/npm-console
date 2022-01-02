import { isFunction, isPromise, isString, objectify, ServiceProvider } from '@radic/shared';
import { AsyncSeriesHook, AsyncSeriesWaterfallHook, SyncHook, SyncWaterfallHook } from 'tapable';
import cli, { Cli } from './Cli';
import { Command } from '../decorators/decorator';
import { Args, OptionDefinition } from '../yargs';

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
    setup?: (cli: Cli) => any;
}

export interface CliArguments {

}

export type CliCustomize = AsyncSeriesHook<Cli>
export type CliSetup = (cli: Cli) => Promise<Cli>
export type CliStart = <T extends CliArguments = CliArguments>() => Promise<CliStartReturn<T>>
export type CliStartReturn<T extends CliArguments = CliArguments> = { [key in keyof Args<T>]: Args<T>[key] }

function getLocaleStrings(locale: any, out: any) {
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
                    maxWidth  : {
                        type: 'number',
                    },
                    setup     : {
                        type: 'object',
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
                .commandos(this.app.config.cli.commandDir)
                .version(false)
                // .commandDir(this.app.config.cli.commandDir, {
                //     extensions: [ 'ts', 'js' ],
                //     exclude: path => path.endsWith('d.ts'),
                //     visit     : (commandObject, pathToFile, filename) => {
                //         return new commandObject.default();
                //     },
                // })
                .demandCommand()
                .parserConfiguration({
                    'dot-notation': false,
                });
                if ( this.app.isBound('output') ) {
                    const locale = require('../../yargs/locale.json');
                    cli.updateStrings(getLocaleStrings(locale, this.app.get('output')));
                }
                if ( maxWidth !== false && cli.terminalWidth() > maxWidth ) {
                    cli.wrap(maxWidth);
                    this.app.instance('cli.wrap', maxWidth);
                } else {
                    this.app.instance('cli.wrap', cli.terminalWidth());
                }
                if ( this.app.config.has('cli.setup') ) {
                    let cliSetup = this.app.config.get('cli.setup');
                    if ( isFunction(cliSetup) ) {
                        if ( isPromise(cliSetup) ) {
                            await cliSetup(cli);
                        } else {
                            cliSetup(cli);
                        }
                    }
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
                const cli: Cli        = ctx.container.get('cli');
                const setup: CliSetup = ctx.container.get('cli.setup');
                await setup(cli);
                try {
                    let args = await cli.parseAsync(process.argv.slice(2),{

                    });
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
