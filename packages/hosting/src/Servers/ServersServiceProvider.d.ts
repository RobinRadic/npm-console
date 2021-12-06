import { ServiceProvider } from '@radic/shared';
import { HTTPServerPaths } from './HTTPServer';
import { ServerManager } from './ServerManager';
import { SitesServiceProvider } from './Sites';
import { ApacheServiceProvider } from './Apache';
declare module '@radic/core/lib/types/config' {
    interface Configuration {
        servers?: ServersConfiguration;
    }
}
declare module '@radic/core/lib/Foundation/Application' {
    interface Bindings {
        servers: ServerManager;
    }
    interface Application {
        servers: ServerManager;
    }
}
export interface ServerConfiguration {
    paths: HTTPServerPaths;
}
export interface ServersConfiguration {
}
export declare class ServersServiceProvider extends ServiceProvider {
    providers: (typeof SitesServiceProvider | typeof ApacheServiceProvider)[];
    load(): any;
    register(): any;
}
