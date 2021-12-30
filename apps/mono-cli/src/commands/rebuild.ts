import { arg, command, option } from '@radic/console';
import { Command } from '../Command';


@command('rebuild', 'Rebuild package')
export default class extends Command {
    @option('a', 'All') all: boolean;

    async handle(@arg('Name of the package') name?: string) {
        if ( this.all ) {
            this.monoRepo.rebuildAll();
        } else {
            name = await this.getPackageName(name);
            this.monoRepo.rebuild(name);
        }
    }
}
