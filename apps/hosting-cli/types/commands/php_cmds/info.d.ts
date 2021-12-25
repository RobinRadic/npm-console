import { php, PHPApi } from '@radic/hosting';
import { Command } from '../../Command';
import { Cli } from '@radic/console';
export default class ListCommand extends Command {
    php: php;
    builder: (cli: Cli) => import("@radic/console").YargsInstance;
    handle(version?: string, api?: PHPApi.Key): Promise<any>;
}
