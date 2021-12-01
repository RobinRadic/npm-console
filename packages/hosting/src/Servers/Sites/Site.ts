import { basename, join } from 'path';
import { existsSync, symlinkSync, unlinkSync } from 'fs';
import { flatten } from 'lodash';
import { Application } from '@radic/core';
import { HTTPServer } from '../HTTPServer';
import { AbstractHostLine } from '../../Hosts';


export abstract class Site<CONFIG = any, SERVER extends HTTPServer<any> = HTTPServer<any>> {
    app: Application = Application.instance;

    constructor(public readonly server: SERVER, public readonly configFilePath: string) {

    }

    abstract getHostNames(): Promise<string[]>

    abstract getConfig(force?: boolean): Promise<CONFIG>

    async getHostFileEntries(): Promise<AbstractHostLine[]> {
        let hf    = this.app.hostfile.load();
        let names = await this.getHostNames();
        return flatten(names.map(name => hf.getAllByName(name)));
    }

    async hasHostFileEntry(): Promise<boolean> {return (await this.getHostFileEntries()).length > 0;}

    get filename() {return basename(this.configFilePath); }

    isEnabled() {
        let enabledPaths = this.server.getEnabledSitePaths().map(path => basename(path));
        return enabledPaths.includes(this.filename);
    }

    setEnabled(value: boolean) {
        let originalPath = join(this.server.paths.sitesAvailable, this.filename);
        let symlinkPath  = join(this.server.paths.sitesEnabled, this.filename);


        if ( value ) {
            symlinkSync(originalPath, symlinkPath);
            // linkSync(originalPath, symlinkPath);
        } else {
            if ( existsSync(symlinkPath) ) {
                unlinkSync(symlinkPath);
            }
        }
    }

}
