import { basename, dirname, parse, ParsedPath, resolve } from 'path';
import { Mode, Stats, statSync } from 'fs';
import filesize, { Result as FilesizeResult } from 'file-size';
import { app } from '../../Foundation';
import { FS, StatConstructors, StatTypeMap } from './types';
import moment, { Moment } from 'moment';
import open from 'open';

export abstract class Base {
    abstract type: keyof StatTypeMap;
    protected stats: Stats;
    static classes: StatConstructors = {
        file   : null,
        dir    : null,
        link   : null,
        block  : null,
        char   : null,
        fifo   : null,
        socket : null,
        unknown: null,
    };

    protected createType<T extends keyof StatTypeMap>(type: T, path: string): StatTypeMap[T] {
        let Class = Base.classes[ type ];
        return new Class(path) as StatTypeMap[T];
    }

    get fs(): FS {return app.get('fs') as any; }

    get parsed(): ParsedPath {return parse(this.path);}

    get dirname() {return dirname(this.path);}

    get basename() {return basename(this.path);}

    get size(): FilesizeResult {return filesize(this.stats.size);}

    get changedOn(): Moment {return moment(this.stats.ctime);}

    get modifiedOn(): Moment {return moment(this.stats.mtime);}

    get accessedOn(): Moment {return moment(this.stats.atime);}

    get createdOn(): Moment {return moment(this.stats.birthtime);}

    get mimeType(): string | false {return this.fs.mimeType(this.path);}

    get contentType(): string | false {return this.fs.mimes.contentType(this.path);}

    async open(options?: open.Options) {
        return await open(this.path, options);
    }


    constructor(public path: string) {
        this.stat();
        this.constructed();
    }

    constructed() {}

    resolve(...parts: string[]) {
        return resolve(this.path, ...parts);
    }

    stat(force: boolean = false) {
        if ( !this.stats || force ) {
            this.stats = statSync(this.path);
        }
        return this.stats;
    }

    delete() {this.fs.delete(this.path); }


    move(dest: string) {
        this.fs.move(this.path, dest);
        this.path = dest;
    }

    chmod(mode: Mode) {
        this.fs.chmod(this.path, mode);
        return this;
    }

    protected toProxy() {
        const proxy = new Proxy(this, {
            get(target: Base, p: string | symbol, receiver: any): any {
                if ( Reflect.has(target, p) ) {
                    return Reflect.get(target, p);
                }
                if ( target.stats === undefined ) {
                    target.stat();
                }
                if ( Reflect.has(target.stats, p) ) {
                    return Reflect.get(target, p);
                }
            },
        });
        return proxy;
    }
}
