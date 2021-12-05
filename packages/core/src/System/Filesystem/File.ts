import { Base } from './Base';
import { Directory } from './Directory';


const a = 'a';

export class File extends Base {
    type: 'file';

    directory(): Directory {return new Directory(this.dirname); }

    parent(): Directory {return this.directory();}

    symlink(dest: string) {
        this.fs.link(this.path, dest);
        return this.createType('link', dest);
    }
}

Base.classes.file = File;
