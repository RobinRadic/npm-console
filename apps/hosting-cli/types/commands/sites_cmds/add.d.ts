/// <reference types="node" />
import { SitesCommand } from '../../SitesCommand';
import { Url } from 'url';
import { HTTPServer } from '@radic/hosting';
export default class AddCommand extends SitesCommand {
    hostname?: string;
    parsedHostname?: Url;
    rootPath?: string;
    logPath?: string;
    server?: HTTPServer;
    createDatabase?: boolean;
    databaseType?: string;
    databaseName?: string;
    addToHostfile?: boolean;
    handle(): Promise<void>;
    handleHostfile(hostname: string): Promise<void>;
}
