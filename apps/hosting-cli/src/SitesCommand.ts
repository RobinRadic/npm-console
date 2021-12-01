import { Bindings, inject } from '@radic/core';
import { HTTPServer, Site } from '@radic/hosting';
import { Command } from './Command';

const isHTTPServer = (value: any): value is HTTPServer<any> => value instanceof HTTPServer;

export abstract class SitesCommand extends Command {
    @inject('servers') servers: Bindings['servers'];
    @inject('sites') sites: Bindings['sites'];

    protected async askServer() {
        const name = await this.ask.list('Choose server:', this.servers.names());
        return this.getServer(name);
    }

    protected async askServers() {
        const names = await this.ask.checkbox('Choose servers:', this.servers.names());
        return names.map(name => this.getServer(name));
    }

    protected async askSite<T extends Site>(server?: string | HTTPServer<T>, filter: (item: Site) => boolean = () => true): Promise<T> {
        const name = await this.ask.list('Choose site:', this.getSites(server, filter).map(site => ({ name: `${site.server.name} : ${site.filename}`, value: site.filename })));
        return this.getSite(name, server);
    }

    protected async askSites<T extends Site>(server?: string | HTTPServer<T>, filter: (item: Site) => boolean = () => true): Promise<T[]> {
        const names = await this.ask.checkbox('Choose sites:', this.getSites(server, filter).map(site => ({ name: `${site.server.name} : ${site.filename}`, value: site.filename })));
        return names.map(name => this.getSite(name, server));
    }

    protected getServer<T extends HTTPServer<any>>(_server?: string | HTTPServer<any>): T {
        return isHTTPServer(_server) ? _server : this.servers.get(_server) as any;
    }

    protected getSites(_server?: string | HTTPServer<any>, filter: (item: Site) => boolean = () => true): Site[] {
        let sites: Site[] = [];
        if ( _server ) {
            let server = this.getServer(_server);
            sites      = server.sites.filter(filter).toArray();
        } else {
            sites = this.sites.toCollection().filter(filter).toArray();
        }
        return sites;
    }

    protected getSite<T extends Site>(name: string, _server?: string | HTTPServer<T>): T {
        let sites = this.sites.toCollection();
        if ( _server ) {
            sites = this.getServer(_server).sites;
        }
        return sites.get(name) as any;
    }

}
