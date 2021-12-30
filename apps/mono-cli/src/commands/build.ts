import { arg, command, option } from '@radic/console';
import { Command } from '../Command';


@command('build', 'Build package(s)')
export default class extends Command {
    @option('a', 'All') all: boolean;

    async handle(@arg('Name of the package') name?: string) {
        if ( this.all ) {
            this.monoRepo.buildAll();
        } else {
            name = await this.getPackageName(name);
            this.monoRepo.build(name);
        }
    }
}
