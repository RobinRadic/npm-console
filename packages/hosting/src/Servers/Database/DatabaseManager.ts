import { config, inject, injectable } from '@radic/core';
import { ConnectionManager } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { DatabasesConfiguration } from './types';
import { ConnectionHelper } from './ConnectionHelper';


@injectable()
export class DatabaseManager {
    @config protected _config: config;
    protected connections: Record<string, Connection> = {};
    @inject('db.connections') protected manager: ConnectionManager;
    @inject('db.helper') protected helper: ConnectionHelper;

    constructor() {}

    get config(): DatabasesConfiguration {return this._config.db; }

    protected getConnectionConfigurations() {return Object.values(this.config.connections); }

    getDatabaseHelper(): ConnectionHelper {
        return this.helper;
    }

    async connect(name:string){
        return this.getDatabaseHelper().use(name).connect()
    }

    getConnectionNames() {
        let names = [];
        Object.values(this.config.connections).forEach(c => c.forEach(c => names.push(c.name)));
        return names;
    }

    getConnectionConfiguration(name:string){
        let servers = this.getConnectionConfigurations();
        for ( const serverConfig of servers ) {
            for ( const config of serverConfig ) {
                if ( config.name === name ) {
                    return config
                }
            }
        }
    }

    updateConnections() {
        let servers = this.getConnectionConfigurations();
        for ( const serverConfig of servers ) {
            for ( const config of serverConfig ) {
                if ( !this.manager.has(config.name) ) {
                    this.createConnection(config);
                }
            }
        }
    }

    protected createConnection(options: ConnectionOptions) {
        return this.connections[ options.name ] = this.manager.create(options);
    }

    exist(name: string) {return this.getConnectionNames().includes(name);}
}
