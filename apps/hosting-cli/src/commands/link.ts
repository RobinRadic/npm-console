import { Cli, command } from '@radic/console';
import { Command } from '../Command';


@command('link', 'Create a directory containing symlinks of all relative hosting configuration')
export default class LinkCommand extends Command {
    builder = (cli:Cli) => {
    };
}
