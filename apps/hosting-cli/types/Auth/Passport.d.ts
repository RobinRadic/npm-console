import { Encrypter } from './Encrypter';
import { Key } from './Key';
import { SecureStorage } from './SecureStorage';
export declare class Passport {
    name: string;
    key: Key;
    readonly encrypter: Encrypter;
    readonly storage: SecureStorage;
    constructor(name: string, key: Key);
}
