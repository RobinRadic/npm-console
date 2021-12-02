import { ServiceProvider } from '@radic/shared';

import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { DatabaseManager } from './DatabaseManager';

export {ConnectionOptions}
export type DatabaseConnectionConfiguration =
    ConnectionOptions
    & {}

export interface DatabasesConfiguration {
    connectOnBoot?: string[];
    main?: string;
    connections?: Record<ConnectionOptions['name'], ConnectionOptions>;
}


declare module '@radic/core/lib/Foundation/Application' {
    export interface Application {
        db: DatabaseManager;
    }

    export interface Bindings {
        db: DatabaseManager;
    }
}

declare module '@radic/core/lib/types/config' {
    export interface Configuration {
        db?: DatabasesConfiguration;
    }
}

export class DatabaseServiceProvider extends ServiceProvider {

    load() {
        this.config<DatabasesConfiguration>({
            key     : 'db',
            defaults: {
                connectOnBoot: [],
                main         : null,
                connections  : {},
            },
        });
    }

    register() {
        this.app.singleton('db', DatabaseManager).addBindingGetter('db');
    }

    async boot() {
        await Promise.all(this.app.config.db.connectOnBoot.map(name => this.app.db.connect(name)));
    }
}
