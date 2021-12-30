import { Cli } from '@radic/console';
import { Command } from '../Command';
export default class InfoCommand extends Command {
    builder: (cli: Cli) => void;
    handle(): Promise<void>;
}
