import { ServiceProvider } from '@radic/shared';
import { HostFileServiceProvider } from './Hosts';
import { DatabasesConfiguration, ServersConfiguration } from './Servers';
import { PhpConfiguration } from './PHP';
export interface HostingConfiguration {
    servers?: ServersConfiguration;
    php?: PhpConfiguration;
    db?: DatabasesConfiguration;
}
declare module '@radic/core/types/types/config' {
    interface Configuration {
        hosting?: HostingConfiguration;
    }
}
export declare class HostingServiceProvider extends ServiceProvider {
    providers: (typeof HostFileServiceProvider)[];
    load(): any;
}
