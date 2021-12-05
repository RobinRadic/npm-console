import { app, DirectoryStorage } from '@radic/core';
import { Credential } from '../CredentialStore';
import { Encrypter } from './Encrypter';
import { get, has, merge, set, unset } from 'lodash';
import { Key } from './Key';

export class SecureStorage<T extends object = any> {
    #data: T = {} as any;
    storage: DirectoryStorage;
    encrypter: Encrypter;

    constructor(protected name: string, protected key: Key) {
        this.encrypter = new Encrypter(key);
        this.storage   = DirectoryStorage.env('data', app.pkg.name);
    }


    get(path: string, defaultValue?: any): Credential {
        return get(this.#data, path, defaultValue);
    }

    set(path: string, value: any) {
        set(this.#data, path, value);
        this.save();
        return this;
    }

    has(path: string): boolean {return has(this.#data, path);}

    unset(path: string): boolean {return unset(this.#data, path);}

    merge(data: any): this {
        merge(this.#data, data);
        return this;
    }

    mergeAt(path: string, data: any): this {
        let obj = this.get(path, {});
        this.set(path, merge({}, obj, data));
        return this;
    }

    protected get filename() {return this.name + '.storage';}


    protected save() {
        this.storage.write(this.filename, this.encrypter.encrypt(JSON.stringify(this.#data)));
        return this;
    }

    protected load() {
        if ( !this.storage.exists(this.filename) ) {
            this.save();
        }
        this.#data = JSON.parse(this.encrypter.decrypt(this.storage.read(this.filename)));
        return this;
    }

}
