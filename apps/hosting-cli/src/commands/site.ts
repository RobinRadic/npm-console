
import { command, option } from '@radic/console';
import { Command } from '../Command';


@command('site [name]', 'Manage site')
export default class SiteCommand extends Command {

    @option('e', 'Enable the site') enable: boolean   = false;
    @option('d', 'Disable the site') disable: boolean = false;
    @option('w', 'Start wizard') wizard: boolean      = false;

    async handle() {
        const {  out, ask } = this;


    }
}
