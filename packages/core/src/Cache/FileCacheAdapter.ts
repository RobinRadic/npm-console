import { CacheAdapter, CacheItem } from './CacheAdapter';
import { DirectoryStorage } from '../Storage';
import { app } from '../Foundation';
// noinspection ES6UnusedImports
import { get, has, merge, remove, set, unset } from 'lodash';

export interface FileCacheAdapterOptions {
    name: string;
    compression?: boolean;
}

export class FileCacheAdapter implements CacheAdapter {
    storage: DirectoryStorage;

    get name(): string {return this.options.name;}

    constructor(protected options: FileCacheAdapterOptions) {
        this.storage = new DirectoryStorage({
            basePath: app.paths.env.cache(),
            json    : {
                compression: options.compression,
            },
        });
        if ( !this.storage.exists(this.fileName) ) {
            this.setData({});
        }
    }

    protected get fileName() {return this.name + '.json'; }

    protected getData(): any {return this.storage.readJson(this.fileName); }

    protected setData(data: any) {
        this.storage.writeJson(this.fileName, data);
        return this;
    }

    public getType(): string { return 'file'; }

    public getName(): string {return this.name; }

    protected createCacheItem<T>(value:T, ttl?:number):CacheItem<T>{
        let item:CacheItem<T> = {
            created: Date.now(),
            ttl,
            value
        }
        return item;
    }

    put(key: string, value: any, ttl?:number): this {
        let data = this.getData();
        data[ key ] = this.createCacheItem(value, ttl);
        return this.setData(data);
    }

    has(key: string): boolean {return has(this.getData(), key); }

    get<T>(key: string, defaultValue?: any): T {
        if(this.has(key)){
            return this.getCacheItem<T>(key).value
        }
        return defaultValue
    }

    getCacheItem<T>(key:string):CacheItem<T>{
        if(this.has(key)){
            let item :CacheItem<T>= get(this.getData(), key)
            if(item.ttl){
                if(item.created+item.ttl < Date.now()){
                    this.del(key);
                    return;
                }
            }
            return item;
        }
    }

    del(key: string): this {
        let data = this.getData();
        unset(data, key);
        return this.setData(data);
    }

    clear(): this {return this.setData({}); }

    size(): number { return this.storage.stat(this.fileName).size; }

    keys(): string[] { return Object.keys(this.getData()); }


}
