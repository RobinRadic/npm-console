import { bootstrap } from './_support/bootstrap';
import { Application, Configuration, CoreServiceProvider } from '@radic/core';
import { MonoServiceProvider } from '../src/MonoServiceProvider';
import { merge } from 'lodash';
import { resolve } from 'path';

export abstract class TestCase {
    protected static rootDir = resolve(__dirname, '../../..');
    protected static app: Application;

    static async bootApp(config: Partial<Configuration> = {}) {
        config   = merge<Configuration, Configuration>({
            debug: true,
            mono : {
                options: {
                    workspaces: true,
                },
            },
        }, config);
        this.app = Application.instance;

        await this.app.initialize({
            dirname  : this.rootDir,
            providers: [
                CoreServiceProvider,
                MonoServiceProvider,
            ],
            config,
        });
        await this.app.boot();
        await this.app.start();
        return this.app
    }

    static before() {
        bootstrap();
    }
}
