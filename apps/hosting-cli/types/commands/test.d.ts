import { DatabaseManager, servers } from '@radic/hosting';
import { Command } from '../Command';
import { system } from '@radic/core';
export default class TestCommand extends Command {
    servers: servers;
    system: system;
    db: DatabaseManager;
    handle(foo: string, bar?: string, force?: boolean, ...args: number[]): Promise<void>;
    handeele(): Promise<void>;
    handggle(): Promise<void>;
}
