import { servers } from '@radic/hosting';
import { Command } from '../Command';
import { system } from '@radic/core';
export default class TestCommand extends Command {
    servers: servers;
    system: system;
    handle(foo: string, bar?: string, force?: boolean, ...args: number[]): Promise<{
        configFilePath: string;
        config: import("@radic/hosting").ApacheConfig;
    }[]>;
    handeele(): Promise<void>;
    handggle(): Promise<void>;
}
