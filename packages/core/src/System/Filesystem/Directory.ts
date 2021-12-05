import { Base } from './Base';
import { fscollect, FSCollection } from './FSCollection';
import { toStatType } from './utils';
import { File } from './File';
import { Symlink } from './Symlink';
import { StatTypeValue } from './types';

export class Directory extends Base {
    type: 'dir';

    get items(): Record<string, StatTypeValue> {return this.all().items;}

    get children(): FSCollection {return this.all();}

    clean() {
        this.fs.deleteDirectory(this.path, true);
        return this;
    }

    directory(): Directory {return new Directory(this.dirname); }

    parent(): Directory {return this.directory(); }

    files() {
        return fscollect(this.fs.files(this.path));
    }

    directories() {
        return fscollect(this.fs.directories(this.path));
    }

    all() {
        return fscollect([
            ...this.fs.directories(this.path),
            ...this.fs.files(this.path),
        ]);
    }

    get<T extends Base>(name: string): T {
        if ( !this.has(name) ) {
            return false as any;
        }
        let type = toStatType(this.resolve(name));
        return this.createType(type, this.resolve(name)) as any;
    }

    getFile(name: string) {return this.get<File>(name); }

    getDir(name: string) {return this.get<Directory>(name); }

    getSymlink(name: string) {return this.get<Symlink>(name); }

    symlink(dest: string) {
        this.fs.link(this.path, dest);
        return this.createType('link', dest);
    }

    has(name: string) { return this.fs.exists(this.resolve(name)); }

}

Base.classes.dir = Directory;
