import { CacheAdapter } from './CacheAdapter';
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


    put(key: string, value: any, dotNotation: boolean = true): this {
        let data = this.getData();
        if ( dotNotation ) {
            return this.setData(set(data, key, value));
        }
        data[ key ] = value;
        return this.setData(data);
    }

    has(key: string): boolean {return has(this.getData(), key); }

    merge(value: any): this {return this.setData(merge(this.getData(), value)); }

    get<T>(key: string, defaultValue?: any): T {return get(this.getData(), key, defaultValue); }

    del(key: string): this {
        let data = this.getData();
        unset(data, key);
        return this.setData(data);
    }

    clear(): this {return this.setData({}); }

    size(): number { return this.storage.stat(this.fileName).size; }

    keys(): string[] { return Object.keys(this.getData()); }


}
