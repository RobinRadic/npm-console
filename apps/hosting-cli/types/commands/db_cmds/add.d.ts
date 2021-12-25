import { config } from '@radic/core';
import { Command } from '../../Command';
import { DatabaseManager } from '@radic/hosting';
export default class AddCommand extends Command {
    db: DatabaseManager;
    config: config;
    handle(value: string): Promise<void>;
}
