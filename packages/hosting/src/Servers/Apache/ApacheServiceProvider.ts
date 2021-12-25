import { ApacheServer } from './ApacheServer';
import { ApacheSite } from './ApacheSite';
import { ServiceProvider } from '@radic/shared';
import { ServerConfiguration } from '../ServersServiceProvider';


declare module '../ServersServiceProvider' {
    export interface ServersConfiguration {
        apache?: ApacheServersConfiguration;
    }
}

export interface ApacheServerConfiguration extends ServerConfiguration {
}

export interface ApacheServersConfiguration {
    servers?: ApacheServerConfiguration[];
}

export class ApacheServiceProvider extends ServiceProvider {
    public load(): any {
        this.config({
            key     : 'hosting.servers.apache',
            defaults: {
                servers: [],
            },
        });
    }

    async boot() {
        let a = 'a';
        for ( const config of this.app.config.hosting.servers.apache.servers ) {
            const server = new ApacheServer(config.paths, ApacheSite);
            this.app.servers.set(server.name, server);
            server.sites.each(site => this.app.sites.set(site.filename, site));
        }

    }
}
