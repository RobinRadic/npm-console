import { DatabaseManager, servers } from '@radic/hosting';
import { Command } from '../Command';
import { system } from '@radic/core';
export default class TestCommand extends Command {
    servers: servers;
    system: system;
    db: DatabaseManager;
    connection: string;
    handle(name?: string, action?: string): Promise<any>;
}
