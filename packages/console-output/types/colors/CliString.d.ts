export interface CliString {
    (): string;
}
export declare type CliStringSpecials = 'dim' | 'bold' | 'italic' | 'invert';
export declare class CliString {
    private colors;
    private value;
    private proxy;
    constructor(value: string);
    f(value: string): this;
    b(value: string): this;
    get dim(): this;
    get bold(): this;
    get italic(): this;
    get invert(): this;
    toString(): string;
}
