import { PHP } from './PHP';
import { cache, config } from '@radic/core';
import { FileCacheAdapter } from '@radic/core';
import { PhpInfo } from './types';
import { PHPApi } from './PHPApi';
export declare class PHPManager {
    protected cache: cache;
    protected config: config;
    protected phps: Record<PHP['bin'], PHP>;
    createAdd(info: PhpInfo): PHP;
    add(php: PHP): this;
    addFromPath(path: string): Promise<PHP>;
    isValidPhpPath(path: string): Promise<boolean>;
    get(version: string, api: PHPApi): PHP;
    get(version: string, api: PHPApi.Key): PHP;
    hasVersion(version: string): boolean;
    hasPath(path: string): boolean;
    getBy<T extends keyof PHP>(key: T | string, value: any): PHP | undefined;
    find(cb: (php: PHP) => boolean): PHP;
    toArray(): PHP[];
    paths(): string[];
    clean(): this;
    /**
     * returns PHP binary executable paths
     */
    scan(): Promise<string[]>;
    getPhpInfoByPath(path: string, cache?: boolean): Promise<PhpInfo>;
    protected getPhpInfoByBinPathFromFile(path: string): Promise<PhpInfo>;
    protected getPhpInfoByBinPathFromCache(path: string): PhpInfo;
    protected hasInCache(path: string): boolean;
    protected refreshCached(php: PHP): any;
    protected refreshCached(path: string): any;
    protected refreshCached(): any;
    protected putPhpInfoInCache(path: string, info: PhpInfo): this;
    protected getPhpCache(): FileCacheAdapter;
}
