import { ServiceProvider } from '@radic/shared';
import { HTTPServerPaths } from './HTTPServer';
import { ServerManager } from './ServerManager';
import { SiteManager, SitesServiceProvider } from './Sites';
import { ApacheServiceProvider } from './Apache';
import { NginxServiceProvider } from './Nginx';


declare module '@radic/core/types/types' {
    export interface Configuration {
        servers?: ServersConfiguration;
    }
}

declare module '@radic/core/types' {
    export interface Bindings {
        servers: ServerManager;
    }

    export interface Application {
        servers: ServerManager;
    }
}

export interface ServerConfiguration {
    paths: HTTPServerPaths;

}
export interface ServersConfiguration {
}
export class ServersServiceProvider extends ServiceProvider {
    providers = [
        ApacheServiceProvider,
        NginxServiceProvider,
        SitesServiceProvider
    ]
    public load(): any {
        this.config({
            key:'servers',
            defaults: {}
        })
    }

    public register(): any {
        this.app.singleton('servers',ServerManager).addBindingGetter('servers');
    }
}
