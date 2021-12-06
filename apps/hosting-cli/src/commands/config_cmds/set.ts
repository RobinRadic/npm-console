import { command, option } from '@radic/console';
import { Bindings, inject } from '@radic/core';
import { Command } from '../../Command';

@command('set [key] [value]', 'Set a the config value')
export default class SetCommand extends Command {
    @inject('config') config: Bindings['config'];

    @option('r', 'Reset config data to default') reset:boolean=false

    @option('p', 'Push the value into the array') push:boolean=false
    @option('y', 'Confirm that you want to set the data') yes:boolean=false

    async handle(key: string, value: any) {
        if ( this.yes || await this.ask.confirm('Setting config data is not yet fully supported. This action can lead to a malfunctioning application', false) ) {
            if(this.reset){
                if ( await this.ask.confirm('You are RESETTING CONFIG TO DEFAULT. Are you Absolutely sure???', false) ) {
                    this.config.clearSaved();
                    return this.log.info(`Saved config has been cleared.`);
                }
            }

            try {
                value=JSON.parse(value)
            } catch (e) {
                this.log.verbose('Could not JSON parse value. Inserting raw.')
            }

            if(this.push){
                this.config.push(key, value);
            } else {
                this.config.set(key, value);
            }



            this.log.info(`Config [${key}] was set to: ${value}`);
        }
    }
}
