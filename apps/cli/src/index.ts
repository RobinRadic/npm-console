import { Application, CacheServiceProvider, SystemServiceProvider } from '@radic/core';
import { CliServiceProvider } from '@radic/console';
import { InputServiceProvider } from '@radic/console-input/InputServiceProvider';
import { OutputServiceProvider } from '@radic/console-output/OutputServiceProvider';
import { macros, Output } from '@radic/console-output';

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
    let out: Output = app.get('output');
    out.ui.addMacros([ macros.beep, macros.spinner, macros.sparkly, macros.notify, macros.highlight ]);
    await app.start();
    return app;
}

declare module '@radic/console-output/lib/ui/Ui' {
    interface Ui {
        beep: macros.BeeperCallback;
        spinner: macros.SpinnerCallback;
        sparkly: macros.SparklyCallback;
        notify: macros.NotifyCallback;
        highlight: macros.HighlightCallback;
    }
}
