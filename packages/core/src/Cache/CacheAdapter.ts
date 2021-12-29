export interface CacheAdapter {
    getName(): string;

    getType(): string;

    put(key: string, value: any): this;

    get<T>(key: string, defaultValue?: any): T;

    getCacheItem<T>(key: string): CacheItem<T>;

    has(key: string): boolean;

    del(key: string): this;

    clear(): this;

    size(): number;

    keys(): string[];

    toObject<T>(): T;

    toJson(): string;
}

export const isCacheAdapter = (val: any): val is CacheAdapter => val && typeof val.getName === 'function';

export interface CacheItem<T = any> {
    created: number;
    ttl?: number;
    value: T;
}
