import { Connection } from 'typeorm/connection/Connection';
import { injectable } from 'inversify';
import { inject } from '@radic/core';
import { ConnectionManager } from 'typeorm';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

@injectable()
export class ConnectionHelper {
    @inject('db.connections') manager:ConnectionManager
    protected con: Connection
    protected name:string

    use(name:string, options?: ConnectionOptions){
        this.name = name;
        this.con = this.manager.get(name)
        if ( options ) {
            let newopts:any = {
                ...this.con.options,
                ...options,
            };
            this.con = this.manager.create(newopts);
        }
        return this;
    }

    isConnected(){return this.con && this.con.isConnected}

    async connect(): Promise<Connection> {
        let connection = this.manager.get(this.name);
        if ( !connection.isConnected ) {
            await connection.connect();
        }
        return connection;
    }

    async listDatabases(): Promise<string[]> {
        let rows = await this.con.query('show databases;');
        let names = [];
        for(const row of rows) {
            names.push(row[ 'Database' ]);
        }
        return names;
    }

    async dropDatabase(name: string): Promise<boolean> {
        return this.con.query(`drop database \`${name}\``);
    }

    async createDatabase(name: string): Promise<boolean> {
        return this.con.query(`create schema \`${name}\``);
    }

    async hasDatabase(name:string){
        return (await this.listDatabases()).includes(name)
    }
}
