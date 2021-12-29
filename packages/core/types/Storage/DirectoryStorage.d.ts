/// <reference types="node" />
import { EnvPaths } from '../Support';
import { IOptions } from 'glob';
export interface DirectoryStorageOptions {
    basePath: string;
    encoding?: BufferEncoding;
    json?: DirectoryStorage.JsonOptions;
}
export declare namespace DirectoryStorage {
    interface JsonOptions {
        compression?: boolean;
        pretty?: boolean;
    }
}
export declare class DirectoryStorage {
    protected options: DirectoryStorageOptions;
    protected get encoding(): BufferEncoding;
    protected set encoding(encoding: BufferEncoding);
    constructor(options: DirectoryStorageOptions);
    mergeOptions(options: DirectoryStorageOptions): void;
    static env(type: keyof EnvPaths, name: string, suffix?: string): DirectoryStorage;
    withEncoding<T>(encoding: BufferEncoding, callback: (storage: DirectoryStorage) => T): T;
    setEncoding(_encoding?: BufferEncoding): this;
    compress(data: string): string;
    decompress(data: string): string;
    path(...parts: any[]): string;
    ensureDir(...parts: string[]): string;
    ensureFile(...parts: string[]): string;
    ensureFileWithContent(content: string, ...parts: string[]): string;
    exists(...parts: string[]): boolean;
    stat(...parts: string[]): import("fs").Stats;
    isFile(...parts: string[]): boolean;
    isDirectory(...parts: string[]): boolean;
    isSymbolicLink(...parts: string[]): boolean;
    read(path: string): string;
    write(path: string, content: string): this;
    glob(pattern: string, options?: IOptions): string[];
    delete(path: string): this;
    readJson<T>(path: string, options?: DirectoryStorage.JsonOptions): T;
    writeJson(path: string, data: any, options?: DirectoryStorage.JsonOptions): this;
}
