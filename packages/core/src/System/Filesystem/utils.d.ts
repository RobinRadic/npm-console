import { DiskCollection } from './DiskCollection';
import { StatTypeName } from './types';
import { Options, Result } from 'file-size';
export interface Filesize extends Result {
    bytes: number;
}
export declare function filesize(bytes: number, options?: Options): Filesize;
export declare function isReadable(path: string): boolean;
export declare function isWritable(path: string): boolean;
export declare function resolveDisks(): Promise<DiskCollection>;
export declare const toStatType: (path: string) => StatTypeName;
