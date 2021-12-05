import { injectable } from '@radic/core';

export class Key {
    constructor(public readonly name: string, protected readonly content: string, protected encoding: BufferEncoding) {}

    get filename(): string {return this.name + '.key';}

    get value(): Buffer {return Buffer.from(this.content, this.encoding);}
}
