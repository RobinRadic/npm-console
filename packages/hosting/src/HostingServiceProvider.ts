import { ServiceProvider } from '@radic/shared';
import { HostFileServiceProvider } from './Hosts';
import { DatabasesConfiguration, ServersConfiguration, ServersServiceProvider } from './Servers';
import { PhpConfiguration, PHPServiceProvider } from './PHP';
import { DatabaseServiceProvider } from './Servers/Database';

export interface HostingConfiguration {
    servers?: ServersConfiguration;
    php?: PhpConfiguration;
    db?: DatabasesConfiguration;
}

declare module '@radic/core/types/types/config' {
    export interface Configuration {
        hosting?: HostingConfiguration;
    }
}

export class HostingServiceProvider extends ServiceProvider {
    providers = [
        HostFileServiceProvider,
        PHPServiceProvider,
        ServersServiceProvider,
        DatabaseServiceProvider,
    ];

    public load(): any {
        this.app.addConfig({
            key     : 'hosting',
            defaults: {

            },
        });
    }
}


