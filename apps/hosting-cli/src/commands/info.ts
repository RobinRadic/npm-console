import { Cli, command } from '@radic/console';
import { Command } from '../Command';


@command('info', 'Show all information')
export default class InfoCommand extends Command {
    builder = (cli:Cli) => {};

    async handle() {
        this.app.config;
    }
}
