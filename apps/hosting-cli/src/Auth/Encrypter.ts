import { Key } from './Key';
import crypto, { CipherGCM, DecipherGCM } from 'crypto';

export class Encrypter {
    protected initVector: Buffer;
    protected cypher: CipherGCM;
    protected decipher: DecipherGCM;

    constructor(protected key: Key) {
        this.initVector = Buffer.allocUnsafe(16);
        this.cypher     = crypto.createCipheriv('aes-256-gcm', this.key.value, this.initVector);
        this.decipher   = crypto.createDecipheriv('aes-256-gcm', this.key.value, this.initVector);
    }

    public encrypt(message: string) {
        return [ this.cypher.update(message, 'binary', 'hex'), this.cypher.final('hex') ].join('');
    }

    public decrypt(message: string) {
        return [ this.decipher.update(message, 'hex', 'binary'), this.decipher.final('binary') ].join('');
    }
}
