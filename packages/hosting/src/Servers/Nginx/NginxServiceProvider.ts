import { NginxServer } from './NginxServer';
import { NginxSite } from './NginxSite';
import { Collected, Collector, Fetcher, TypeGenerator } from './types';
import { ServiceProvider } from '@radic/shared';
import { ServerConfiguration } from '../ServersServiceProvider';

declare module '../ServersServiceProvider' {
    export interface ServersConfiguration {
        nginx?: NginxServersConfiguration;
    }
}

export interface NginxServerConfiguration extends ServerConfiguration {
}

export interface NginxServersConfiguration {
    servers?: NginxServerConfiguration[];
}

declare module '@radic/core/types/Foundation/Application' {
    export interface Bindings {
        'nginx.types.fetcher': Fetcher;
        'nginx.types.collector': Collector;
        'nginx.types.generator': TypeGenerator;
    }
}

export class NginxServiceProvider extends ServiceProvider {
    public load(): any {
        this.config({
            key     : 'servers.nginx',
            defaults: {
                servers: [],
            },
        });
    }

    register() {
        this.app.binding('nginx.types.fetcher', Fetcher);
        this.app.binding('nginx.types.collector', Collector);
        this.app.bind('nginx.types.generator.factory').toFactory(context => (collected: Collected) => {
            this.app.bind('nginx.types.collector:collected').toConstantValue(collected)
                .onActivation((context1, injectable) => {
                    context1.container.unbind('nginx.types.collector:collected');
                    return injectable;
                });
            return context.container.get('nginx.types.generator')
        });
        this.app.binding('nginx.types.generator', TypeGenerator);
    }

    async boot() {
        for ( const config of this.app.config.servers.nginx.servers ) {
            const server = new NginxServer(config.paths, NginxSite);
            this.app.servers.set(server.name, server);
            server.sites.each(site => this.app.sites.set(site.filename, site));
        }
    }
}
