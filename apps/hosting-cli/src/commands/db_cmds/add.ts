import { command } from '@radic/console';
import { config, inject } from '@radic/core';
import { Command } from '../../Command';
import { DatabaseManager } from '@radic/hosting';

@command('add', 'Add a database server')
export default class AddCommand extends Command {
    @inject('db') db: DatabaseManager;
    @config config: config;


    async handle(value: string) {
        const { app, ask, log, out, db, config } = this;

        const dbType = await this.ask.list('What kind of database server type do you want to add', db.supports);
        const conf= db.getConnectionConfiguration(dbType);


        config.hosting.db.connections;
    }
}
