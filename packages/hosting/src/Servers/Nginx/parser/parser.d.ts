import { types } from '../types';
export declare type Name = keyof types.Directives | '[root]' | string;
export interface TreeNodeOptions {
    name: Name;
    value: string | number | null;
    parent: this | null;
    children: this[] | null;
    comments: string[];
    isVerbatim: boolean;
    isBlock: boolean;
}
export declare class NginxParseTreeNode {
    name: Name;
    value: string;
    parent: NginxParseTreeNode | null;
    readonly children: NginxParseTreeNode[] | null;
    comments: string[];
    isVerbatim: boolean;
    isBlock: boolean;
    constructor(name: Name, value: string | number | null, parent: NginxParseTreeNode | null, children?: NginxParseTreeNode[] | null);
}
export interface NginxParseError extends Error {
    message: string;
    index: number;
    line: number;
}
export declare class NginxParser {
    private source;
    private index;
    private context;
    private tree;
    private error;
    constructor();
    parse(source: string, callback?: (err: Error | null, tree?: NginxParseTreeNode) => void): void;
    private setError;
    private parseNext;
    readString(): string;
    readWord(): string;
    readComment(): string;
    readVerbatimBlock(): string;
    parseFile(file: string, encoding?: any, callback?: (err: Error | null, tree?: NginxParseTreeNode) => void): void;
}
export declare const parse: (source: string, callback: (err: Error | null, tree?: NginxParseTreeNode) => void) => void;
export declare const parseFile: (file: string, encoding: string, callback: (err: Error | null, tree?: NginxParseTreeNode) => void) => void;
