
import { DatabaseManager, NginxServer, NginxSite, servers } from '@radic/hosting';
import { arg, Cli, command, option, usage } from '@radic/console';
import { Command } from '../Command';
import { inject, system } from '@radic/core';

const choices  = [ 'create', 'drop', 'list' ];

@command('db', 'Manage db')
export default class TestCommand extends Command {
    @servers servers: servers;
    @system system: system;
    @inject('db') db: DatabaseManager;
    @option('c', 'Specify which connection') connection:string
    //
    // builder = (cli:Cli) => {
    //     cli.positional('name', {
    //         desc:'The name of the connection',
    //     })
    //     cli.positional('action', {
    //         desc: 'The action that should be executed',
    //         choices: this.choices
    //     })
    //
    // }

    async handle(
        @arg('The name of the connection') name?:string,
        @arg('The action that should be executed', false) action?:string,

    ) {
        const names = this.db.getConnectionNames();
         name  = await this.ask.list('Pick database connection', names);
        if ( !this.db.exist(name) ) {
            return this.log.error(`Connection "${name}" does not exist`);
        }
        let options           = this.db.getConnectionConfiguration(name);
        let helper            = this.db.getDatabaseHelper();
        options[ 'password' ] = await this.ask.password(`Password for connection "${name}"`);
        helper.use(name, options);
        let conn = await helper.connect();
        if ( !conn.isConnected ) {
            return this.log.error('Could not connect');
        }

        const choice = await this.ask.list('What would you like to do?', choices);
        if ( choice === 'create' ) {
            const dbname = await this.ask.input('Database name');
            let created  = await helper.createDatabase(dbname);
            this.out.line(`created: ${created}`);
        } else if ( choice === 'list' ) {
            const databases = await helper.listDatabases();
            databases.forEach(database => this.out.line(` - ${database}`))
        } else if ( choice === 'drop' ) {
            const dbname = await this.ask.input('Database name');
            let dropped  = await helper.dropDatabase(dbname);
            this.out.line(`dropped: ${dropped}`);
        }

        conn.close();
        return;
    }}
