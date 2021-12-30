import { command } from '@radic/console';
import { Command } from '../Command';


@command('list', 'List packages')
export default class extends Command {

    async handle() {
        this.out.write(' - ').writeln(this.monoRepo.packagesArray.map(pkg => pkg.name).join('\n - '));
    }
}
