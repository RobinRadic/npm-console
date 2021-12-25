import { existsSync, statSync } from 'fs';
import { join } from 'path';
import { iml, ImlDocument } from './ImlDocument';
import glob from 'glob';
import { DirectoryMark } from './types';
import SourceFolder = iml.module.component.content.SourceFolder;

export class IDE {
    #iml: ImlDocument;

    get iml(): ImlDocument {
        if ( !this.#iml ) {
            const path = glob.sync(join('**/*.iml'), { absolute: true, root: this.rootPath, dot: true })[ 0 ];
            if ( path ) {
                this.#iml = new ImlDocument(this, path);
            }
        }
        return this.#iml;
    }

    public constructor(public readonly rootPath: string) {
        if ( !existsSync(rootPath) ) throw new Error(`The given [directory] path does not exist: ${rootPath}`);
        let dstat = statSync(rootPath);
        if ( !dstat.isDirectory() ) throw new Error(`The given [directory] path is not a valid directory`);
    }

}
