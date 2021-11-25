import { Application, CacheServiceProvider, SystemServiceProvider } from '@radic/core';
import { CliServiceProvider } from '@radic/console';

export async function cli() {
    const app = Application.instance;
    app.registerPaths(__dirname);
    await app.initialize({
        providers: [
            CacheServiceProvider,
            SystemServiceProvider,
            CliServiceProvider
        ],
        config   : {
            startFn: async (app, ...args) => {
                app.cli
                   .showHelpOnFail()
                   .demandCommand();
                await app.cliStart()
                return app.cli as any;
            },
            system: {
                processes: ['php-fpm8.0'],
                services: ['php8.0-fpm']
            },
            cli: {
                commandDir: __dirname + '/commands',

            }
        },
    });
    await app.boot();
    await app.start();
    app.cache.put('a', 'n');
    const services = await app.services.refreshAll();
    await app.services.each(async s => {
        let status = await s.exec('status')
        console.log('status',s.name,s.pids,status);
    })

    return app;
}
