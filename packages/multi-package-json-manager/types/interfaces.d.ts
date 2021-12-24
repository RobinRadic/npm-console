export interface JsonFileDetails<T = any> {
    absoluteFilePath: string;
    relativeFilePath: string;
    dirName: string;
    data: T;
    [key: string]: any;
}
export declare type FileFilterCallback = <T = any>(this: Change, fileDetails: JsonFileDetails<T>) => boolean;
export declare type SpliceCallback = (array: any[]) => number | [number, number];
export declare type ChangeType = 'set' | 'merge' | 'mergeAt' | 'unset' | 'push' | 'splice';
export interface Change<T = any> {
    type: ChangeType;
    fileFilter?: FileFilterCallback;
    splice?: SpliceCallback;
    path?: string;
    value?: T;
}
export declare type Variables = {
    [key: string]: string | Variables;
};
export declare type JsonStringifyFunction = (doc: object | any[] | string | number | boolean | null) => string;
