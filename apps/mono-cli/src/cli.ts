import { join } from 'path';
import { InputServiceProvider } from '@radic/console-input';
import { LogServiceProvider, macros, OutputServiceProvider } from '@radic/console-output';
import { Application, Configuration, CoreServiceProvider } from '@radic/core';
import { CliServiceProvider, CliStartReturn } from '@radic/console';
import { MonoConfiguration, MonoServiceProvider } from './MonoServiceProvider';
import { merge } from 'lodash';
import winston from 'winston'
export const app      = Application.instance;

export async function bootApp(options: MonoConfiguration) {
    let commandDir = join(__dirname, 'commands');


    app.hooks.initializeDefaultConfig.tap('mono', (defaultConfig: Configuration) => {
        return merge<Configuration, Configuration,Configuration>({}, defaultConfig, {
            mono: {
                options: {
                    workspaces: true,
                },
            },
        });
    });

    await app.initialize({
        dirname  : process.cwd(),
        providers: [
            CoreServiceProvider,
            CliServiceProvider,
            InputServiceProvider,
            OutputServiceProvider,
            MonoServiceProvider,
            LogServiceProvider,
        ],
        config   : {
            debug:true,
            cli    : {
                commandDir,
                setup: cli => cli
                .globalHelp('h', 'Show this help')
                .useVerbosity(3)
                .scriptName('mono')
                .parserConfiguration({
                    'boolean-negation': true,
                    'negation-prefix' : 'no-',
                    'dot-notation'    : false,
                })
                .epilog(app.output.parse(epilog))
                .usage(app.output.parse('{bold}Mono Manager:{/bold}\n {green}${/green} mono <{yellow}command{/yellow}>')),
            },
            startFn: async <T>(app, ...params: any[]) => {
                app.events.on('Application:error', (error, exit) => {
                    throw new Error(error);
                });

                try {
                    const result = await app.cliStart();
                    return result;
                } catch (e) {
                    app.error(e, true);
                }
            },
            mono   : options,

        },

    });

    let epilog = `{dim}Boolean options that have true as default can be negated using --no-[option]. So for example --reload becomes --no-reload{/dim}`;
    app.hooks.cli.command.builder.tap('mono', (command, cli) => {
        cli.epilog(app.output.parse(epilog));
    });
    await app.hooks.cli.setup.tapPromise('mono', async(cli)=> {
        let internal = cli.getInternalMethods();
        let usage = internal.getUsageInstance();
        let descs =usage.getDescriptions();
        return ;
    })

    await app.boot();
    app.output.ui.addMacros([
        macros.beep,
        macros.highlight,
        macros.notify,
        macros.sparkly,
        macros.spinner,
        macros.tree,
    ]);
    return app;
}

export async function startCli(options: MonoConfiguration) {
    const app = await bootApp(options);
    return await app.start<CliStartReturn>();
}
