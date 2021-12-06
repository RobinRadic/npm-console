import { Application } from '@radic/core';
import { HTTPServer } from '../HTTPServer';
import { AbstractHostLine } from '../../Hosts';
export declare abstract class Site<CONFIG = any, SERVER extends HTTPServer<any> = HTTPServer<any>> {
    readonly server: SERVER;
    readonly configFilePath: string;
    app: Application;
    constructor(server: SERVER, configFilePath: string);
    abstract getHostNames(): Promise<string[]>;
    abstract getConfig(force?: boolean): Promise<CONFIG>;
    getHostFileEntries(): Promise<AbstractHostLine[]>;
    hasHostFileEntry(): Promise<boolean>;
    get filename(): string;
    isEnabled(): boolean;
    setEnabled(value: boolean): void;
}
