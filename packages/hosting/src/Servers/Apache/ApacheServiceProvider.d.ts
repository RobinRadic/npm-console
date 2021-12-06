import { ServiceProvider } from '@radic/shared';
import { ServerConfiguration } from '../ServersServiceProvider';
declare module '../ServersServiceProvider' {
    interface ServersConfiguration {
        apache?: ApacheServersConfiguration;
    }
}
export interface ApacheServerConfiguration extends ServerConfiguration {
}
export interface ApacheServersConfiguration {
    servers?: ApacheServerConfiguration[];
}
export declare class ApacheServiceProvider extends ServiceProvider {
    load(): any;
    boot(): Promise<void>;
}
