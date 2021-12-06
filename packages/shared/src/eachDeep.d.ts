export interface KeysDeepOptions extends EachDeepOptions {
    checkCircular?: boolean;
    includeCircularPath?: boolean;
}
export interface EachDeepOptions {
    track?: boolean;
    parents?: {
        values?: any[];
        keys?: any[];
        paths?: any[];
    };
}
export declare type EachDeepCallback = (value: any, key: string, path: string, depth: number, parent: any, parentKey: string, parentPath: string, parents: {
    keys: string[];
    paths: string[];
    values: any[];
}) => false | void;
export declare function eachDeep<T extends object>(obj: T, callback: EachDeepCallback, options?: EachDeepOptions): T;
export declare function keysDeep(obj: object, options?: KeysDeepOptions): any[];
