import { Cli } from '@radic/console';
import { php } from '@radic/hosting';
import { Command } from '../../Command';
export default class XdebugCommand extends Command {
    php: php;
    builder: (cli: Cli) => Cli;
    get phpchoices(): string[];
    handle(phpversion?: string, command?: 'enable' | 'disable'): Promise<any>;
}
