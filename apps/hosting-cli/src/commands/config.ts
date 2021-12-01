import { command } from '@radic/console';
import { Command } from '../Command';

@command('config <command>', 'Manage the configuration')
export default class ConfigCommand extends Command {

    builder = (cli) => {
        return cli.commandos(__dirname + '/config_cmds');
    };

    async handle() {}
}
