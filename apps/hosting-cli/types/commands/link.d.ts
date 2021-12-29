import { Cli } from '@radic/console';
import { Command } from '../Command';
export default class LinkCommand extends Command {
    builder: (cli: Cli) => void;
}
