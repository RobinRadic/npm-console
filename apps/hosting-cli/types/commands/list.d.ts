import { Cli } from '@radic/console';
import { config } from '@radic/core';
import { Command } from '../Command';
import { DatabaseManager } from '@radic/hosting';
export default class ListCommand extends Command {
    db: DatabaseManager;
    config: config;
    builder: (cli: Cli) => import("@radic/console").YargsInstance;
    handle(value: string): Promise<any>;
}
