import { Base } from './Base';
import { Directory } from './Directory';
export declare class File extends Base {
    type: 'file';
    directory(): Directory;
    parent(): Directory;
    symlink(dest: string): import("./Symlink").Symlink;
}
