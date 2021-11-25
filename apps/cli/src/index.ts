import { Application, CacheServiceProvider, SystemServiceProvider } from '@radic/core';

export async function cli() {
    const app = Application.instance;
    app.registerPaths(__dirname);
    await app.initialize({
        providers: [
            CacheServiceProvider,
            SystemServiceProvider
        ],
        config   : {
            startFn: async (app, ...args) => {
                return app as any;
            },
            system: {
                processes: ['php-fpm8.0'],
                services: ['php8.0-fpm']
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
