import { command, option } from '@radic/console';
import { Command } from '../../Command';
import { cache, CacheAdapter } from '@radic/core';

@command('cache [name]', 'Manage internal cache')
export default class CacheCommand extends Command {
    @cache cache: cache;
    @option('l', 'List all cache stores') list: boolean     = false;
    @option('c', 'Clear the cache store(s)') clear: boolean = false;


    async handle(name?: string) {
        if ( this.list ) {
            for ( const name of this.cache.adapterNames() ) {
                this.out.line('- ' + name);
            }
            return;
        }
        if ( name ) {
            let cache = this.cache.getAdapter(name);
            return this.handleCache(cache);
        }
        for ( const cache of this.cache.allAdapters() ) {
            this.handleCache(cache);
        }
    }

    handleCache(cache: CacheAdapter) {
        if ( this.clear ) {
            cache.clear();
        }
        return;
    }

}
