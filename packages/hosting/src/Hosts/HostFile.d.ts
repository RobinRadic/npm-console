import { AbstractHostLine, CommentLine, HostLine, Line } from './Lines';
interface HostMatcher {
    test(value: string): boolean;
}
export declare class HostFile {
    readonly path?: string;
    protected lines: Line[];
    protected content: string;
    constructor(path?: string);
    load(force?: boolean): this;
    save(): this;
    isLoaded(): boolean;
    all(): Line[];
    hosts(): AbstractHostLine[];
    add(address: string, hosts: string[], comment?: string): HostLine;
    remove(lines: Array<AbstractHostLine | CommentLine>): this;
    getAllByName(name: string): AbstractHostLine[];
    getAllByAddress(address: string): AbstractHostLine[];
    protected parse(): this;
    protected getHostMatcher(pattern: string): HostMatcher;
    protected parseHostFileLine(text: string): any;
    protected formatLines(lines: Line[]): string[];
}
export {};
