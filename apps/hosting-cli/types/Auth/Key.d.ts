/// <reference types="node" />
export declare class Key {
    readonly name: string;
    protected readonly content: string;
    protected encoding: BufferEncoding;
    constructor(name: string, content: string, encoding: BufferEncoding);
    get filename(): string;
    get value(): Buffer;
}
