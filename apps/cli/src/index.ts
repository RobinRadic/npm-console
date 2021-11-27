import { Application, CacheServiceProvider, SystemServiceProvider } from '@radic/core';
import { CliServiceProvider } from '@radic/console';
import { InputServiceProvider } from '@radic/console-input/InputServiceProvider';
import { OutputServiceProvider } from '@radic/console-output/OutputServiceProvider';

export async function cli() {
    const app = Application.instance;
    app.registerPaths(__dirname);
    await app.initialize({
        providers: [
            CacheServiceProvider,
            SystemServiceProvider,
            CliServiceProvider,
            InputServiceProvider,
            OutputServiceProvider,
        ],
        config   : {
            startFn: async (app, ...args) => {
                app.cli
                   .showHelpOnFail()
                   .demandCommand();
                await app.cliStart();
                return app.cli as any;
            },
            system : {
                processes: [ 'php-fpm8.0' ],
                services : [ 'php8.0-fpm' ],
            },
            cli    : {
                commandDir: __dirname + '/commands',
            },
            output : {
                colors        : true,
                silent        : false,
                resetOnNewline: true,
            },
        },
    });
    await app.boot();
    await app.start();
    return app;
}
