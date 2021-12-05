import { injectable } from '@radic/core';
import { Encrypter } from './Encrypter';
import { Key } from './Key';
import { SecureStorage } from './SecureStorage';

export class Passport {
    public readonly encrypter: Encrypter;
    public readonly storage: SecureStorage;

    constructor(public name: string, public key: Key) {
        this.encrypter = new Encrypter(key);
        this.storage   = new SecureStorage(this.name, this.key);
    }
}
