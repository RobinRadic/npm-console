import { IOptions } from 'glob';
export interface PathSearchOptions extends IOptions {
}
export declare class PATH {
    read(): string;
    paths(): string[];
    search(name: string, options?: PathSearchOptions): string[];
    match(paths: string[], args: string, matcher: (output: string) => boolean): Promise<string[]>;
}
