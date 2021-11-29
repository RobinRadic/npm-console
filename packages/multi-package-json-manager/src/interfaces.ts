// import { PackageJson as BasePackageJson } from '@radic/shared';
import {PackageJson as BasePackageJson} from 'prettier-package-json/build/types'

export interface PackageJson extends Partial<BasePackageJson> {
    [ key: string ]: any;
}

export interface FilePackageDetails {
    absoluteFilePath: string;
    relativeFilePath: string;
    dirName: string;
    pkg: PackageJson;
    names: {
        hasScope:boolean
        /** @example @company/my-package */
        full:string
        /** @example @company */
        scope: string
        /** @example company */
        scopeName: string
        /** @example my-package */
        withoutScope: string
    }
}

export type FileFilterCallback = (fileDetails: FilePackageDetails) => boolean
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
