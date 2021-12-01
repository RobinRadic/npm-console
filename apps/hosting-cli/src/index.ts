import { Application, CoreServiceProvider } from '@radic/core';
import { join } from 'path';
import { CliServiceProvider, CliStartReturn } from '@radic/console';
import { HostingServiceProvider } from '@radic/hosting';
import { InputServiceProvider } from '@radic/console-input/lib/InputServiceProvider';
import { OutputServiceProvider } from '@radic/console-output/lib/OutputServiceProvider';
import { LogServiceProvider } from '@radic/console-output/lib/log';

export async function bootApp() {
    let commandDir = join(__dirname, 'commands');

    const app      = Application.instance;
    app.registerPaths(__dirname);
    await app.initialize({
        providers: [
            CoreServiceProvider,
            CliServiceProvider,
            HostingServiceProvider,
            InputServiceProvider,
            OutputServiceProvider,
            LogServiceProvider
        ],
        config   : {
            debug  : true,
            cli    : {
                commandDir,
            },
            startFn: async <T>(app, ...params: any[]) => {
                try {
                    const args = await app.cliStart();
                    return args;
                } catch (e) {
                    app.error(e, true);
                }
            },
            servers: {
                nginx : {
                    servers: [
                        {
                            paths: {
                                configDir           : '/etc/nginx',
                                modsAvailable       : '{configDir}/mods-available',
                                modsEnabled         : '{configDir}/mods-enabled',
                                sitesAvailable      : '{configDir}/sites-available',
                                sitesEnabled        : '{configDir}/sites-enabled',
                                configAvailable     : '{configDir}/conf-available',
                                configEnabled       : '{configDir}/conf-enabled',
                                configFiles         : [ '{configDir}/nginx.ini' ],
                                configFileExtensions: [ 'ini', 'nginx', 'conf' ],
                                modsFileExtensions  : [ 'conf', 'nginx' ],
                                sitesFileExtensions : [ 'conf', 'nginx' ],
                            },
                        },
                    ],
                },
                apache: {
                    servers: [
                        {
                            paths: {
                                configDir           : '/etc/apache2',
                                modsAvailable       : '{configDir}/mods-available',
                                modsEnabled         : '{configDir}/mods-enabled',
                                sitesAvailable      : '{configDir}/sites-available',
                                sitesEnabled        : '{configDir}/sites-enabled',
                                configAvailable     : '{configDir}/conf-available',
                                configEnabled       : '{configDir}/conf-enabled',
                                configFiles         : [ '{configDir}/apache2.conf' ],
                                configFileExtensions: [ 'conf' ],
                                modsFileExtensions  : [ 'conf' ],
                                sitesFileExtensions : [ 'conf' ],
                            },

                        },
                    ],
                },
            },
        },
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
        })
        .option('v', {
            alias : 'verbose',
            desc  : 'Increase output verbosity up to 3 times. Eg: -v -vv -vvv',
            count : true,
            global: true,
            group : app.output.parse('{bold}Global Options:{/bold}'),
        })
        ;
    });

    await app.boot();
    return app;
}

export async function startCli() {
    const app  = await bootApp();
    const args = await app.start<CliStartReturn>();
}
