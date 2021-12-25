/// <reference types="node" />
import { Key } from './Key';
import { CipherGCM, DecipherGCM } from 'crypto';
export declare class Encrypter {
    protected key: Key;
    protected initVector: Buffer;
    protected cypher: CipherGCM;
    protected decipher: DecipherGCM;
    constructor(key: Key);
    encrypt(message: string): string;
    decrypt(message: string): string;
}
