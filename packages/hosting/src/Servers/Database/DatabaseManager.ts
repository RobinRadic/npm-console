import {injectable , config } from '@radic/core';
import { DatabaseConnectionConfiguration, DatabasesConfiguration } from './DatabaseServiceProvider';
import { merge } from 'lodash';
import { createConnection } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';


@injectable()
export class DatabaseManager {
    @config protected _config: config;
    protected connections: Record<DatabaseConnectionConfiguration['name'], Connection> = {};

    get config(): DatabasesConfiguration {
        return this._config.db;
    }

    getConnectionNames() {return Object.keys(this.config.connections); }

    getConnectionConfig(name: string): DatabaseConnectionConfiguration {
        return merge({ name }, this.config.connections[ name ]);
    }

    async connection(name: string): Promise<Connection> {
        return this.connect(name);
    }

    async connect(name: string): Promise<Connection> {
        if ( this.connections[ name ] === undefined ) {
            this.connections[ name ] = await createConnection(this.getConnectionConfig(name));
        }
        return this.connections[ name ];
    }

    async createConnection(options:ConnectionOptions){
        return createConnection(options);
    }

    exist(name:string){return this.getConnectionNames().includes(name)}
}
