import { php } from '@radic/hosting';
import { Command } from '../../Command';
import { cache } from '@radic/core';
export default class ListCommand extends Command {
    php: php;
    cache: cache;
    all: boolean;
    paths: boolean;
    versions: boolean;
    handle(value: string): Promise<void>;
}
