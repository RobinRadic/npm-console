import { CacheAdapter, CacheItem } from './CacheAdapter';
import { DirectoryStorage } from '../Storage';
export interface FileCacheAdapterOptions {
    name: string;
    compression?: boolean;
}
export declare class FileCacheAdapter implements CacheAdapter {
    protected options: FileCacheAdapterOptions;
    storage: DirectoryStorage;
    get name(): string;
    constructor(options: FileCacheAdapterOptions);
    protected get fileName(): string;
    protected getData(): any;
    protected setData(data: any): this;
    getType(): string;
    getName(): string;
    protected createCacheItem<T>(value: T, ttl?: number): CacheItem<T>;
    put(key: string, value: any, ttl?: number): this;
    has(key: string): boolean;
    get<T>(key: string, defaultValue?: any): T;
    getCacheItem<T>(key: string): CacheItem<T>;
    del(key: string): this;
    clear(): this;
    size(): number;
    keys(): string[];
}
