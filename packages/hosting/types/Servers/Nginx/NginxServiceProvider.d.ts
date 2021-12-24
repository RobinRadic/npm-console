import { Collector, Fetcher, TypeGenerator } from './types';
import { ServiceProvider } from '@radic/shared';
import { ServerConfiguration } from '../ServersServiceProvider';
declare module '../ServersServiceProvider' {
    interface ServersConfiguration {
        nginx?: NginxServersConfiguration;
    }
}
export interface NginxServerConfiguration extends ServerConfiguration {
}
export interface NginxServersConfiguration {
    servers?: NginxServerConfiguration[];
}
declare module '@radic/core/types/Foundation/Application' {
    interface Bindings {
        'nginx.types.fetcher': Fetcher;
        'nginx.types.collector': Collector;
        'nginx.types.generator': TypeGenerator;
    }
}
export declare class NginxServiceProvider extends ServiceProvider {
    load(): any;
    register(): void;
    boot(): Promise<void>;
}
