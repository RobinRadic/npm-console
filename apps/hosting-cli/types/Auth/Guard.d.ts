/// <reference types="node" />
import { CipherGCM, DecipherGCM } from 'crypto';
import { config, DirectoryStorage } from '@radic/core';
import { Key } from './Key';
import { Passport } from './Passport';
export declare class Guard {
    #private;
    config: config;
    protected algorithm: string;
    protected initVector: Buffer;
    protected cypher: CipherGCM;
    protected decipher: DecipherGCM;
    protected storage: DirectoryStorage;
    protected keyStringEncoding: BufferEncoding;
    constructor();
    isLogggedIn(): boolean;
    logout(): this;
    user(): Passport;
    login(name: string, password: string): Passport | false;
    verify(key: Key, password: string): boolean;
    createKey(name: string, password: string): false | Key;
    getKey(name: string): Key;
    protected filename(name: string): string;
    protected readKey(name: string): string;
    protected writeKey(key: Key): DirectoryStorage;
    hasKey(name: string): boolean;
}
