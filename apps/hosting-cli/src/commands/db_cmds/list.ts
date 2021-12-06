import { Cli, command } from '@radic/console';
import { Bindings, config, inject } from '@radic/core';
import { dot } from 'dot-object';
import { Command } from '../../Command';
import { DatabaseManager } from '@radic/hosting';

@command('list', 'List database servers')
export default class ListCommand extends Command {
    @inject('db') db: DatabaseManager;
    @config config: config;

    builder = (cli:Cli) => cli.positional('what',{desc:'What to do'})

    async handle(value: string) {
        const {app,ask,log,out,db,config} =this

        // const dbType = await this.ask.list('What kind of database server type do you want to add', db.types)
        // db.getConnectionConfig()


    }
}
