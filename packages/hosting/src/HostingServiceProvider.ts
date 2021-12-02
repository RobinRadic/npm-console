import { ServiceProvider } from '@radic/shared';
import { HostFileServiceProvider } from './Hosts';
import { ServersServiceProvider } from './Servers';
import { PHPServiceProvider } from './PHP';
import { DatabaseServiceProvider } from './Servers/Database';


export class HostingServiceProvider extends ServiceProvider {
    providers = [
        HostFileServiceProvider,
        PHPServiceProvider,
        ServersServiceProvider,
        DatabaseServiceProvider
    ];
}
