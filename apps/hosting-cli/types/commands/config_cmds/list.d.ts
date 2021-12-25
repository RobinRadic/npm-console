import { config } from '@radic/core';
import { Command } from '../../Command';
export default class ListCommand extends Command {
    config: config;
    builder: (cli: any) => any;
    handle(value: string): Promise<void>;
}
