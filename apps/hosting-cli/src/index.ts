import { join } from 'path';

import { HostingServiceProvider } from '@radic/hosting';
import { InputServiceProvider } from '@radic/console-input';
import { OutputServiceProvider,LogServiceProvider } from '@radic/console-output';
import { macros } from '@radic/console-output';
import { HostingCliServiceProvider } from './HostingCliServiceProvider';
import { Application, App, CoreServiceProvider } from '@radic/core';
import { CliServiceProvider, CliStartReturn } from '@radic/console';


export async function bootApp() {
    let commandDir = join(__dirname, 'commands');
    const app      = Application.instance;

    await app.initialize({
        dirname  : __dirname,
        providers: [
            CoreServiceProvider,
            CliServiceProvider,
            HostingServiceProvider,
            InputServiceProvider,
            OutputServiceProvider,
            LogServiceProvider,
            HostingCliServiceProvider,
        ],
        config   : {
            debug  : true,
            cli    : {
                commandDir,
            },
            startFn: async <T>(app:App, ...params: any[]) => {
                app.events.on('Application:error', (error, exit) => {
                    throw new Error(error)
                })
                try {
                    const args = await app.cliStart();
                    return args;
                } catch (e) {
                    app.error(e, true);
                }
            },
            // db     : {
            //     main       : 'main',
            //     connections: {
            //         mysql: [ {
            //             name        : 'main',
            //             type        : 'mysql',
            //             host        : '127.0.0.1',
            //             username    : 'root',
            //             // insecureAuth: true,
            //             // debug       : true,
            //             // trace       : true,
            //         } ],
            //     },
            // },
            output : {},
            // servers: {
            //     nginx : {
            //         servers: [
            //             {
            //                 paths: {
            //                     configDir           : '/etc/nginx',
            //                     modsAvailable       : '{configDir}/mods-available',
            //                     modsEnabled         : '{configDir}/mods-enabled',
            //                     sitesAvailable      : '{configDir}/sites-available',
            //                     sitesEnabled        : '{configDir}/sites-enabled',
            //                     configAvailable     : '{configDir}/conf-available',
            //                     configEnabled       : '{configDir}/conf-enabled',
            //                     configFiles         : [ '{configDir}/nginx.ini' ],
            //                     configFileExtensions: [ 'ini', 'nginx', 'conf' ],
            //                     modsFileExtensions  : [ 'conf', 'nginx' ],
            //                     sitesFileExtensions : [ 'conf', 'nginx' ],
            //                 },
            //             },
            //         ],
            //     },
            //     apache: {
            //         servers: [
            //             {
            //                 paths: {
            //                     configDir           : '/etc/apache2',
            //                     modsAvailable       : '{configDir}/mods-available',
            //                     modsEnabled         : '{configDir}/mods-enabled',
            //                     sitesAvailable      : '{configDir}/sites-available',
            //                     sitesEnabled        : '{configDir}/sites-enabled',
            //                     configAvailable     : '{configDir}/conf-available',
            //                     configEnabled       : '{configDir}/conf-enabled',
            //                     configFiles         : [ '{configDir}/apache2.conf' ],
            //                     configFileExtensions: [ 'conf' ],
            //                     modsFileExtensions  : [ 'conf' ],
            //                     sitesFileExtensions : [ 'conf' ],
            //                 },
            //
            //             },
            //         ],
            //     },
            // },
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
    app.hooks.cli.setup.tap('MY', async cli => {
        cli
        .scriptName('hosting')
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
        .usage(app.output.parse('{bold}Hosting Manager:{/bold}\n {green}${/green} hosting <{yellow}command{/yellow}>'))
        ;
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

export async function startCli() {
    const app  = await bootApp();
    return await app.start<CliStartReturn>();
}
