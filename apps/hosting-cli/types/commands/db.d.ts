import { config } from '@radic/core';
import { Command } from '../Command';
import { DatabaseManager } from '@radic/hosting';
export default class ListCommand extends Command {
    db: DatabaseManager;
    config: config;
    add: boolean;
    create: boolean;
    list: boolean;
    drop: boolean;
    handle(name?: string): Promise<import("winston").Logger>;
}
