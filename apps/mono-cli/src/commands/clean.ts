import { arg, command, option } from '@radic/console';
import { Command } from '../Command';


@command('clean [name]', 'Clean package(s)',['c'])
export default class extends Command {
    @option('a', 'All') all: boolean;

    async handle(name?: string) {
        if ( this.all ) {
            this.monoRepo.cleanAll();
        } else {
            name = await this.getPackageName(name);
            this.monoRepo.clean(name);
        }
    }
}
