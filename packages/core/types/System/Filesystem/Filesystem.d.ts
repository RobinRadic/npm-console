/// <reference types="node" />
import { File } from './File';
import { Mode } from 'fs';
import { IOptions as GlobOptions } from 'glob';
import { MimeTypes } from './Mime';
import { Filesize } from './utils';
import { Directory } from './Directory';
import { MacroProxy } from '@radic/shared';
import { CopyOptionsSync } from 'fs-extra';
import { StatTypeName } from './types';
export { GlobOptions };
export interface Filesystem extends MacroProxy<Filesystem> {
}
export declare class Filesystem {
    static get mimes(): MimeTypes;
    constructor();
    /** Get all of the files from the given directory (recursive). */
    static allFiles(directory: string): File[];
    /** Get all of the files from the given directory .*/
    static files(directory: string): File[];
    static append(path: string, content: string): false | number;
    static basename(path: string): string;
    static chmod(path: string, mode: Mode): void;
    static cleanDirectory(directory: string): boolean;
    /**Copy a file to a new location.*/
    static copy(path: string, target: string): void;
    static copyDirectory(directory: string, target: string, options?: CopyOptionsSync): void;
    static delete(paths: string | string[]): void;
    /** Remove all of the directories within a given directory. */
    static deleteDirectories(directory: string): boolean;
    /**
     * Recursively delete a directory.
     *
     * The directory itself may be optionally preserved.
     */
    static deleteDirectory(directory: string, preserve?: boolean): boolean;
    /** Get all of the directories within a given directory. */
    static directories(directory: string): Directory[];
    /** get All the diectories within a given directory (recursive)*/
    static allDirectories(directory: string): Directory[];
    /** Extract the parent directory from a file path.*/
    static dirname(path: string): string;
    static ensureDirectoryExists(path: string, mode?: number, recursive?: boolean): boolean;
    static exists(path: string): boolean;
    static extension(path: string): string;
    static get(path: string, lock?: boolean): string;
    static glob(path: string, options?: GlobOptions): string[];
    static guessExtension(path: string): string | false;
    static hash(path: string): string;
    static isDirectory(path: string): boolean;
    static isFile(path: string): boolean;
    static isReadable(path: string): boolean;
    static isWritable(path: string): boolean;
    static lastModified(path: string): Date;
    static lines(path: string): string[];
    static link(source: string, dest: string): void;
    static makeDirectory(path: string, mode?: number, recursive?: boolean, force?: boolean): boolean;
    static mimeType(path: string): string | false;
    static missing(path: string): boolean;
    static move(path: string, target: string): boolean;
    static moveDirectory(from: string, to: string, overwrite?: boolean): boolean;
    static filename(path: any): string;
    static prepend(path: string, data: string): boolean;
    static put(path: string, data: string): boolean;
    static replace(path: string, content: string): boolean;
    static replaceInFile(search: string | RegExp, replace: string, path: string): boolean;
    static sharedGet(path: string): Promise<unknown>;
    static size(path: string): Filesize;
    static type(path: string): StatTypeName;
}
