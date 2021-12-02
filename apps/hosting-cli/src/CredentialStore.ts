import { app, DirectoryStorage, injectable } from '@radic/core';
import crypto, { CipherGCM, DecipherGCM } from 'crypto';

export interface Credential {
    name: string;
    identifier: string;
    password: string;
    type: string;

    [ key: string ]: any;
}

export class CredentialStore {
    protected storage: DirectoryStorage;
    protected credentials: Record<Credential['name'], Credential> = {};
    protected algorithm                                           = 'sha256';
    protected initVector: Buffer;
    protected key: Buffer;
    protected cypher: CipherGCM;
    protected decipher: DecipherGCM;
    protected filename                 :string

    constructor(name:string, secret:string) {
        this.storage    = DirectoryStorage.env('data', app.pkg.name);
        this.initVector = Buffer.allocUnsafe(16);
        this.filename = name + '.crypto'

        this.key        = crypto.createHash(this.algorithm).update(secret).digest();
        this.cypher     = crypto.createCipheriv('aes-256-gcm', this.key, this.initVector);
        this.decipher   = crypto.createDecipheriv('aes-256-gcm', this.key, this.initVector);


        if ( !this.storage.exists(this.filename) ) {
            this.save();
        }

        this.load();
    }

    protected encrypt(message: string) {
        return [ this.cypher.update(message, 'binary', 'hex'), this.cypher.final('hex') ].join('');
    }

    protected decrypt(message: string) {
        return [ this.decipher.update(message, 'hex', 'binary'), this.decipher.final('binary') ].join('');
    }
    static unlock(name:string,secret:string){
        return new (this.constructor as any)(name,secret)
    }

    get(name: string): Credential {
        return this.credentials[ name ];
    }

    set(name: string, credential: Credential) {
        this.credentials[ name ] = credential;
        this.save();
        return this;
    }

    has(name: string): boolean {return this.credentials[ name ] !== undefined;}

    protected save() {
        this.storage.write(this.filename, this.encrypt(JSON.stringify(this.credentials)));
        return this;
    }

    protected load() {
        this.credentials = JSON.parse(this.decrypt(this.storage.read(this.filename)));
        return this;
    }

}
