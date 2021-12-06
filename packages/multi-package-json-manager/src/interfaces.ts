// import { PackageJson as BasePackageJson } from '@radic/shared';

export interface JsonFileDetails<T =object> {
    absoluteFilePath: string;
    relativeFilePath: string;
    dirName: string;
    data: T,
    [key:string]:any
}
export type FileFilterCallback = <T>(fileDetails: JsonFileDetails<T>) => boolean
export type SpliceCallback = (array: any[]) => number | [ number, number ]
export type ChangeType =
    'set'
    | 'merge'
    | 'mergeAt'
    | 'unset'
    | 'push'
    | 'splice';

export interface Change {
    type: ChangeType;
    fileFilter?: FileFilterCallback;
    splice?: SpliceCallback;
    path?: string;
    value?: any;
}
export type Variables={
    [key:string]:string|Variables
}
export type JsonStringifyFunction = (doc: object | any[] | string | number | boolean | null) => string;
