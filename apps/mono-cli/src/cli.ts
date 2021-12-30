import { join } from 'path';
import { InputServiceProvider } from '@radic/console-input';
import { macros, OutputServiceProvider } from '@radic/console-output';
import { Application, Configuration, CoreServiceProvider } from '@radic/core';
import { CliServiceProvider, CliStartReturn } from '@radic/console';
import { MonoServiceProvider, MonoConfiguration } from './MonoServiceProvider';
import { merge } from 'lodash';


export async function bootApp(options:MonoConfiguration) {
    let commandDir = join(__dirname, 'commands');
    const app      = Application.instance;
app.events.on('Application:initialize:defaultConfig',(defaultConfig:Configuration) => {
    merge<Configuration,Configuration>(defaultConfig, {
        mono: {
            options: {
                workspaces
            }
        }
    })
})
    await app.initialize({
        dirname  : process.cwd(),
        providers: [
            CoreServiceProvider,
            CliServiceProvider,
            InputServiceProvider,
            OutputServiceProvider,
            MonoServiceProvider
        ],
        config   : {
            cli    : {
                commandDir,
                setup: cli => cli
                .scriptName('mono-cli')
                .parserConfiguration({
                    'boolean-negation': true,
                    'negation-prefix' : 'no-',
                    'dot-notation'    : false,
                })
                .help('h', 'Show Help').alias('h', 'help')
                .option('V', { type: 'boolean', alias: 'version', global: false })
                .option('v', {
                    alias : 'verbose',
                    desc  : 'Increase output verbosity up to 3 times. Eg: -v -vv -vvv',
                    count : true,
                    global: true,
                    group : app.output.parse('{bold}Global Options:{/bold}'),
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
            mono: options
        },

    });


    let epilog = `{dim}Boolean options that have true as default can be negated using --no-[option]. So for example --reload becomes --no-reload{/dim}`;
    app.hooks.cli.command.builder.tap('MY', (command, cli) => {
        cli.epilog(app.output.parse(epilog));
    });
    app.hooks.cli.command.handler.tap('MY', (command, params) => {
        let verbose = 'v'.repeat(command.instance.verbose);
        if ( verbose ) {
            app.log.level = verbose + 'erbose';
        }
    });

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

export async function startCli(options:MonoConfiguration) {
    const app = await bootApp(options);
    return await app.start<CliStartReturn>();
}
