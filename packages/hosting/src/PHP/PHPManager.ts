import { PHP } from './PHP';
import { PHPScanner } from './PHPScanner';
import { injectable } from 'inversify';
import { cache, config } from '@radic/core';
import { FileCacheAdapter } from '@radic/core';
import { PhpInfo } from './types';
import { PHPApi } from './PHPApi';


@injectable()
export class PHPManager {
    @cache protected cache: cache;
    @config protected config: config;

    protected phps: Record<PHP['bin'], PHP> = {};

    public createAdd(info: PhpInfo): PHP {
        let php = new PHP(info);
        this.add(php);
        return php;
    }

    public add(php: PHP): this {
        this.phps[ php.bin ] = php;
        if ( this.config.php.versions.find(v => v.binPath === php.bin) === undefined ) {
            this.config.php.versions.push({
                binPath: php.bin,
            });
            this.config.save();
        }
        return this;
    }

    public async addFromPath(path: string): Promise<PHP> {
        const phpInfo = await this.getPhpInfoByPath(path);
        return this.createAdd(phpInfo);
    }

    public async isValidPhpPath(path: string): Promise<boolean> {
        return await PHPScanner.isValidPhpBinPath(path);
    }

    public get(version: string, api: PHPApi):PHP
    public get(version: string, api: PHPApi.Key):PHP
    public get(version: string, api: string):PHP {
        if ( !PHPApi.isValue(api) ) {
            api = api.toString().toUpperCase();
            if ( PHPApi.isKey(api) ) {
                api = PHPApi.fromKey(api);
            } else {
                throw Error('Unknown api ' + api);
            }
        }
        return this.find(php => php.isApi(api as PHPApi) && (php.version === version || php.shortVersion === version));
    }

    public hasVersion(version: string): boolean {return this.getBy('version', version) !== undefined || this.getBy('shortVersion', version) !== undefined;}

    public hasPath(path: string) {return this.getBy('bin', path) !== undefined;}

    public getBy<T extends keyof PHP>(key: T | string, value: any): PHP | undefined {
        return this.toArray().find(php => php[ key as any ] === value);
    }

    public find(cb: (php: PHP) => boolean) {
        let phps = this.toArray();
        return phps.find(cb);
    }

    public toArray(): PHP[] {return Object.values(this.phps); }

    public paths(): string[] {return this.toArray().map(p => p.bin);}

    public clean() {
        this.phps = {};
        this.getPhpCache().clear();
        return this;
    }

    /**
     * returns PHP binary executable paths
     */
    public async scan(): Promise<string[]> {
        return await PHPScanner.searchForPhpBins();
    }

    public async getPhpInfoByPath(path: string, cache: boolean = true): Promise<PhpInfo> {
        if ( this.hasInCache(path) ) {
            return this.getPhpInfoByBinPathFromCache(path);
        }
        let info = await this.getPhpInfoByBinPathFromFile(path);
        this.putPhpInfoInCache(path, info);
        return info;
    }

    protected async getPhpInfoByBinPathFromFile(path: string): Promise<PhpInfo> {
        const info = await PHPScanner.extractPhpInfoFromBin(path);
        return PHPScanner.parsePhpInfo(path, info);
    }

    protected getPhpInfoByBinPathFromCache(path: string): PhpInfo {
        if ( !this.hasInCache(path) ) {
            throw Error('Cannot create PHP from cache for path ' + path);
        }
        const cache = this.getPhpCache();
        return cache.get<PhpInfo>(path);
    }

    protected hasInCache(path: string): boolean {
        if ( this.cache.has('php') ) {
            let php = this.getPhpCache();
            return php.has(path);
        }
        return false;
    }

    protected async refreshCached(php: PHP)
    protected async refreshCached(path: string)
    protected async refreshCached()
    protected async refreshCached(...args: any[]) {
        if ( args.length === 0 ) {
            for ( const php of this.toArray() ) {
                await this.refreshCached(php);
            }
        }
        let type = typeof args[ 0 ];
        let path;

        if ( type === 'string' ) {
            path = args[ 0 ];
        } else if ( type === 'object' && args[ 0 ] instanceof PHP ) {
            path = args[ 0 ].bin;
        }
        let info = await this.getPhpInfoByBinPathFromFile(path);
        this.putPhpInfoInCache(path, info);
        return true;
    }

    protected putPhpInfoInCache(path: string, info: PhpInfo) {
        this.getPhpCache().del(path).put(path, info, false);
        return this;
    }

    protected getPhpCache(): FileCacheAdapter {return this.cache.get<FileCacheAdapter>('php');}
}
