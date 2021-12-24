import { Base } from './Base';
import { FSCollection } from './FSCollection';
import { File } from './File';
import { Symlink } from './Symlink';
import { StatTypeValue } from './types';
export declare class Directory extends Base {
    type: 'dir';
    get items(): Record<string, StatTypeValue>;
    get children(): FSCollection;
    clean(): this;
    directory(): Directory;
    parent(): Directory;
    files(): FSCollection;
    directories(): FSCollection;
    all(): FSCollection;
    get<T extends Base>(name: string): T;
    getFile(name: string): File;
    getDir(name: string): Directory;
    getSymlink(name: string): Symlink;
    symlink(dest: string): Symlink;
    has(name: string): boolean;
}
