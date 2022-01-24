import crypto, { CipherGCM, DecipherGCM } from 'crypto';
import { app, config, DirectoryStorage, injectable } from '@radic/core';
import { join } from 'path';
import { Key } from './Key';
import { Passport } from './Passport';
import { AuthConfiguration } from './AuthServiceProvider';

@injectable()
export class Guard {
    @config config: config & { auth: AuthConfiguration };
    protected algorithm                         = 'sha256';
    protected initVector: Buffer;
    protected cypher: CipherGCM;
    protected decipher: DecipherGCM;
    protected storage: DirectoryStorage;
    protected keyStringEncoding: BufferEncoding = 'base64';
    #keysDir                                    = 'keys';
    #currentUser: Passport;

    constructor() {
        this.storage = DirectoryStorage.env('data', app.pkg.name);
        this.storage.ensureDir(this.#keysDir);
    }

    isLogggedIn() {
        let name = this.config?.auth?.currentUser;
        if ( name && this.hasKey(name) ) {
            return true;
        }
        return false;
    }

    logout() {
        this.config.auth.currentUser = undefined;
        this.config.save();
        return this;
    }

    user(): Passport {
        if ( this.#currentUser !== undefined ) {
            return this.#currentUser;
        }
        if ( !this.isLogggedIn() ) {
            throw new Error('Not logged in');
        }
        let name = this.config.auth.currentUser;
        let key  = this.getKey(name);
        return new Passport(name, key);
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
        this.config.auth.currentUser = name;
        this.config.save();
        return this.#currentUser = new Passport(name, key);
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


