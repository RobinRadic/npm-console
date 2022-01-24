import { Cli } from '@radic/console';
import { php } from '@radic/hosting';
import { Command } from '../../Command';
import { CheckboxChoiceMap, DistinctChoice } from 'inquirer';
export default class XdebugCommand extends Command {
    php: php;
    list: boolean;
    builder: (cli: Cli) => Cli;
    get phpchoices(): DistinctChoice<CheckboxChoiceMap>[];
    handle(phpversion?: string, command?: 'enable' | 'disable'): Promise<any>;
}
