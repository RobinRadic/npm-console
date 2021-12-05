import crypto, { CipherGCM, DecipherGCM } from 'crypto';
import { app, DirectoryStorage, injectable } from '@radic/core';
import { join } from 'path';
import { Key } from './Key';
import { Passport } from './Passport';

@injectable()
export class Guard {

    protected algorithm                         = 'sha256';
    protected initVector: Buffer;
    protected cypher: CipherGCM;
    protected decipher: DecipherGCM;
    protected storage: DirectoryStorage;
    protected keyStringEncoding: BufferEncoding = 'base64';
    #keysDir                                    = 'keys';

    constructor() {
        this.storage = DirectoryStorage.env('data', app.pkg.name);
        this.storage.ensureDir(this.#keysDir);
    }

    login(name: string, password: string): Passport | false {
        if ( !this.hasKey(name) ) {
            return false;
        }
        let key   = this.getKey(name);
        let valid = this.verify(key, password);
        if ( !valid ) {
            return false;
        }
        return new Passport(name, key);
    }

    verify(key: Key, password: string) {
        let b = crypto.createHash(this.algorithm).update(key.name + password).digest();
        return b.equals(key.value);
    }

    createKey(name: string, password: string) {
        if ( this.hasKey(name) ) {
            return false;
        }
        let content = crypto.createHash(this.algorithm).update(name + password).digest();

        let key = new Key(name, content.toString(this.keyStringEncoding), this.keyStringEncoding);
        this.writeKey(key);
        return key;
    }

    getKey(name: string): Key {
        if ( !this.hasKey(name) ) {
            throw new Error(`No user with ${name} found`);
        }
        return new Key(name, this.readKey(name), this.keyStringEncoding);
    }

    protected filename(name: string) {
        return join(this.#keysDir, name + '.key');
    }

    protected readKey(name: string) {
        return this.storage.read(this.filename(name));
    }

    protected writeKey(key: Key) {
        return this.storage.write(this.filename(key.name), key.value.toString(this.keyStringEncoding));
    }

    hasKey(name: string) {
        return this.storage.exists(this.filename(name));
    }

}


