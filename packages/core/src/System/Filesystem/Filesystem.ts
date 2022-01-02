// noinspection ES6UnusedImports

import { File } from './File';
import { basename, dirname, extname, isAbsolute, join } from 'path';
import { accessSync, appendFileSync, chmodSync, chownSync, close, closeSync, copyFileSync, existsSync, mkdirSync, Mode, open, openSync, read, readdirSync, readFileSync, renameSync, rmSync, statSync, symlinkSync, writeFileSync } from 'fs';
import glob, { IOptions as GlobOptions } from 'glob';
import { MimeTypes, NodeMimeTypeGuesser } from './Mime';
import * as crypto from 'crypto';
import { Filesize, filesize, isReadable, isWritable, toStatType } from './utils';
import { constant, over } from 'lodash';
import { Directory } from './Directory';
import { macroProxy, MacroProxy } from '@radic/shared';
import { CopyOptionsSync, copySync } from 'fs-extra';
import { userInfo } from 'os';
import { app, inject, injectable } from '../../Foundation';
import { StatTypeName } from './types';


export { GlobOptions };

export interface Filesystem extends MacroProxy<Filesystem> {

}

export class Filesystem {

    static get mimes(): MimeTypes { return app.get('mimes');}

    constructor() {
        // return macroProxy(this);
    }

    /** Get all of the files from the given directory (recursive). */
    static allFiles(directory: string): File[] {
        return this.glob(join(directory, '**/*'), { absolute: true, nodir: true }).map(filePath => new File(filePath));
    };

    /** Get all of the files from the given directory .*/
    static files(directory: string): File[] {
        return this.glob(join(directory, '*'), { absolute: true, nodir: true }).map(filePath => new File(filePath));
    };

    static append(path: string, content: string): false | number {
        let fd: number;
        try {
            fd = openSync('message.txt', 'a');
            appendFileSync(fd, 'data to append', 'utf8');
        } catch (err) {
            return false;
        } finally {
            if ( fd !== undefined ) {
                closeSync(fd);
            }
        }
        return fd;
    };

    static basename(path: string) {
        return basename(path);
    }

    static chmod(path: string, mode: Mode) {
        return chmodSync(path, mode);
    }

    static cleanDirectory(directory: string) {
        return this.deleteDirectory(directory, true);
    }

    /**Copy a file to a new location.*/
    static copy(path: string, target: string) {
        return copyFileSync(path, target);
    }

    static copyDirectory(directory: string, target: string, options?: CopyOptionsSync) {
        return copySync(directory, target, options);
    }

    static delete(paths: string | string[]) {
        let p: string[] = Array.isArray(paths) ? paths : [ paths ];
        for ( const p of paths ) {
            rmSync(p, { force: true, recursive: true });
        }
    };

    /** Remove all of the directories within a given directory. */
    static deleteDirectories(directory: string) {
        let dirs = this.directories(directory);
        if ( dirs.length > 0 ) {
            for ( let dir of dirs ) {
                dir.delete();
            }
            return true;
        }
        return false;
    };

    /**
     * Recursively delete a directory.
     *
     * The directory itself may be optionally preserved.
     */
    static deleteDirectory(directory: string, preserve: boolean = false) {
        if ( preserve ) {
            this.glob(join(directory, '**/*'), { absolute: true }).forEach(path => {
                if ( this.exists(path) ) {
                    rmSync(path, { recursive: true, force: true });
                }
            });
            return true;
        }
        rmSync(directory, { recursive: true, force: true });
        return true;
    };

    /** Get all of the directories within a given directory. */

    static directories(directory: string) {
        return readdirSync(directory, { encoding: 'utf8', withFileTypes: true }).filter(o => o.isDirectory()).map(o => new Directory(join(directory, o.name)));
    }

    /** get All the diectories within a given directory (recursive)*/
    static allDirectories(directory: string) {
        return this.glob(join(directory, '**/*/'), { absolute: true }).map(filePath => new Directory(filePath));
    }

    /** Extract the parent directory from a file path.*/
    static dirname(path: string) {
        return dirname(path);
    }

    static ensureDirectoryExists(path: string, mode: number = 755, recursive: boolean = true) {
        if(this.isFile(path)){
            path = dirname(path)
        }
        if ( this.isDirectory(path) ) {
            return true;
        }
        return this.makeDirectory(path, mode, recursive, true);
    };

    static exists(path: string) {
        return existsSync(path);
    }

    static extension(path: string) {
        return extname(path);
    }

    static get(path: string, lock: boolean = false) {
        return readFileSync(path, 'utf8');
    }

    static glob(path: string, options?: GlobOptions) {
        return glob.sync(path, options);
    }

    static guessExtension(path: string) {
        let mimeType = this.mimeType(path);
        if ( mimeType ) {
            return this.mimes.getExtensions(mimeType)[ 0 ] || null;
        }
        return false;
    };

    static hash(path: string) {
        return crypto.createHash('md5').update(path, 'utf8').digest().toString('utf8');
    }

    static isDirectory(path: string) {
        return this.exists(path) && statSync(path).isDirectory();
    }

    static isFile(path: string) {
        return this.exists(path) &&statSync(path).isFile();
    }

    static isReadable(path: string) {
        return this.exists(path) &&isReadable(path);
    }

    static isWritable(path: string) {
        return isWritable(path);
    }

    static lastModified(path: string) {
        return this.exists(path) &&statSync(path).mtime;
    }

    static lines(path: string) {
        return readFileSync(path, 'utf8').split('\n');
    }

    static link(source: string, dest: string) {
        return symlinkSync(source, dest, this.isDirectory(source) ? 'dir' : 'file');
    }

    static makeDirectory(path: string, mode: number = 755, recursive: boolean = false, force: boolean = false) {
        if ( this.isDirectory(path) ) {
            if ( !force ) {
                return false;
            }
            rmSync(path, { force: true, recursive: true });
        }
        mkdirSync(path, {
            mode,
            recursive,
        });
        return true;
    };

    static mimeType(path: string) {
        return this.mimes.lookup(path);
    }

    static missing(path: string) {return !this.exists(path);}

    static move(path: string, target: string) {
        renameSync(path, target);
        return this.exists(target);
    };

    static moveDirectory(from: string, to: string, overwrite: boolean = false) {
        if ( overwrite && this.isDirectory(to) && !this.deleteDirectory(to) ) {
            return false;
        }
        renameSync(from, to);
    };

    static filename(path) {
        if ( this.isFile(path) ) {
            return basename(path);
        }
    };

    static prepend(path: string, data: string) {
        if ( this.exists(path) ) {
            return this.put(path, data + this.get(path));
        }
        return this.put(path, data);
    };

    static put(path: string, data: string) {
        writeFileSync(path, data, 'utf8');
        return true;
    };

    static replace(path: string, content: string) {
        return this.put(path, content);
    }

    static replaceInFile(search: string | RegExp, replace: string, path: string) {
        return this.put(path, this.get(path).replace(search, replace));
    }

    // requireOnce() => null;
    static async sharedGet(path: string) {
        return new Promise((resolve, reject) => {
            open('myfile', 'rb', (err, fd) => {
                if ( err ) return reject(err);

                try {
                    let buffer = Buffer.allocUnsafe(32);
                    read(fd, buffer, 0, Infinity, 0, (err, bytesRead, buffer) => {
                        if ( err ) return reject(err);
                        resolve(buffer.toString('utf8'));
                    });
                } finally {
                    close(fd, (err) => {
                        if ( err ) reject(err);
                    });
                }
            });
        });
    };

    static size(path: string):Filesize {
        return filesize(statSync(path).size)
    }

    static type(path: string): StatTypeName {return toStatType(path);}
}


