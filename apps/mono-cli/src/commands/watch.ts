import { arg, command, option } from '@radic/console';
import { Command } from '../Command';


@command('watch [name]', 'Watch package(s)',['w'])
export default class extends Command {
    @option('a', 'All') all: boolean;

    async handle(name?: string) {
        if ( this.all ) {
            this.monoRepo.watchAll();
        } else {
            name = await this.getPackageName(name);
            this.monoRepo.watch(name);
        }
    }
}
