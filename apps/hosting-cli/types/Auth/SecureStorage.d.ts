import { DirectoryStorage } from '@radic/core';
import { Encrypter } from './Encrypter';
import { Key } from './Key';
export declare class SecureStorage<T extends object = any> {
    #private;
    protected name: string;
    protected key: Key;
    storage: DirectoryStorage;
    encrypter: Encrypter;
    constructor(name: string, key: Key);
    get(path: string, defaultValue?: any): Credential;
    set(path: string, value: any): this;
    has(path: string): boolean;
    unset(path: string): boolean;
    merge(data: any): this;
    mergeAt(path: string, data: any): this;
    protected get filename(): string;
    protected save(): this;
    protected load(): this;
}
