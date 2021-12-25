import { Bindings } from '@radic/core';
import { hostfile, HTTPServer, Site } from '@radic/hosting';
import { Command } from './Command';
export declare abstract class SitesCommand extends Command {
    servers: Bindings['servers'];
    sites: Bindings['sites'];
    hostfile: hostfile;
    protected askServer(): Promise<HTTPServer<any>>;
    protected askServers(): Promise<any>;
    protected askSite<T extends Site>(server?: string | HTTPServer<T>, filter?: (item: Site) => boolean): Promise<T>;
    protected askSites<T extends Site>(server?: string | HTTPServer<T>, filter?: (item: Site) => boolean): Promise<T[]>;
    protected getServer<T extends HTTPServer<any>>(_server?: string | HTTPServer<any>): T;
    protected getSites(_server?: string | HTTPServer<any>, filter?: (item: Site) => boolean): Site[];
    protected getSite<T extends Site>(name: string, _server?: string | HTTPServer<T>): T;
    protected askRestartServer(site: Site): Promise<void>;
}
