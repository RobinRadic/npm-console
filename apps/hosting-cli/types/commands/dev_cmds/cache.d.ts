import { Command } from '../../Command';
import { cache, CacheAdapter } from '@radic/core';
export default class CacheCommand extends Command {
    cache: cache;
    list: boolean;
    clear: boolean;
    handle(name?: string): Promise<void>;
    handleCache(cache: CacheAdapter): void;
}
