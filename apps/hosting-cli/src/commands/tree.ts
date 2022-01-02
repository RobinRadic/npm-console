import { arg, command, option } from '@radic/console';
import { Command } from '../Command';


@command('tree', 'Build package(s)')
export default class extends Command {

    async handle() {
        this.cli.showTree(__dirname);
    }
}
