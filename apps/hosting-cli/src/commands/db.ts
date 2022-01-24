import { command, option } from '@radic/console';
import { config, inject } from '@radic/core';
import { Command } from '../Command';
import { DatabaseManager } from '@radic/hosting';

let choices = [ 'create', 'drop', 'list' ];


@command('db [connection]', 'Manage databases')
export default class ListCommand extends Command {
    @inject('db') db: DatabaseManager;
    @config config: config;

    @option('a', 'Add a connection') add: boolean;
    @option('L', 'List connections ') listConnections: boolean;
    @option('c', 'Create database') create: boolean;
    @option('l', 'List databases') list: boolean;
    @option('d', 'Drop database') drop: boolean;


    async handle(connection?: string) {
        const { app, ask, log, out, db, config } = this;
        const names = this.db.getConnectionNames();
        if ( !connection ) {
            connection  = await this.ask.list('Pick database connection', names);
        }
        if ( !this.db.exist(connection) ) {
            return this.log.error(`Connection "${connection}" does not exist`);
        }
        let options           = this.db.getConnectionConfiguration(connection);
        let helper            = this.db.getDatabaseHelper();
        options[ 'password' ] = await this.ask.password(`Password for connection "${connection}"`);
        helper.use(connection, options);
        let conn = await helper.connect();
        if ( !conn.isConnected ) {
            return this.log.error('Could not connect');
        }
        let choice;
        if ( this.create ) {
            choice = 'create';
        } else if ( this.list ) {
            choice = 'list';
        } else if ( this.drop ) {
            choice = 'drop';
        }
        if ( !choice ) {
            choice = await this.ask.list('What would you like to do?', choices);
        }
        if ( choice === 'create' ) {
            const dbname = await this.ask.input('Database name');
            let created  = await helper.createDatabase(dbname);
            this.out.line(`created: ${created}`);
        } else if ( choice === 'list' ) {
            const databases = await helper.listDatabases();
            databases.forEach(database => this.out.line(` - ${database}`));
        } else if ( choice === 'drop' ) {
            const dbname = await this.ask.input('Database name');
            let dropped  = await helper.dropDatabase(dbname);
            this.out.line(`dropped: ${dropped}`);
        }

        await conn.close();

    }
}
