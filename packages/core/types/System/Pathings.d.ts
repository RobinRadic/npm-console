import { IOptions } from 'glob';
export interface PathSearchOptions extends IOptions {
}
export declare class Pathings {
    static getinPaths(): string;
    static getBinPaths(): string[];
    static search(name: string, options?: PathSearchOptions): string[];
    static match(paths: string[], args: string, matcher: (output: string) => boolean): Promise<string[]>;
}
