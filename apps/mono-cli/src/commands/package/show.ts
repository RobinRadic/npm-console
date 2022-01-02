import { arg, command } from '@radic/console';
import { Command } from '../../Command';


@command('show', 'Show package',['s'])
export default class extends Command {
    async handle(@arg('Package name') name?: string) {
        name = await this.getPackageName(name);
    }
}
