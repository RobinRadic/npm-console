import { Cli, command } from '@radic/console';
import { Bindings, config, inject } from '@radic/core';
import { dot } from 'dot-object';
import { Command } from '../Command';
import { DatabaseManager } from '@radic/hosting';

@command('list', 'List database servers')
export default class ListCommand extends Command {
    @inject('db') db: DatabaseManager;
    @config config: config;

    builder = (cli:Cli) => cli.positional('what',{desc:'What to do'})

    async handle(value: string) {
        const {app,ask,log,out,db,config} =this

        const names = this.db.getConnectionNames();
        const name  = await this.ask.list('Pick database connection', names);
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
        let choices  = [ 'create', 'drop', 'list' ];
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
        // const dbType = await this.ask.list('What kind of database server type do you want to add', db.types)
        // db.getConnectionConfig()


    }
}
