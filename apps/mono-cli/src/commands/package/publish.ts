import { arg, command, option } from '@radic/console';
import { Command } from '../../Command';


@command('publish', 'Publish package',['p'])
export default class extends Command {
    async handle(@arg('Package name') name?: string) {
        name = await this.getPackageName(name);
    }
}
