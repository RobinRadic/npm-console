import { ServiceProvider } from '@radic/shared';
import { HostFileServiceProvider } from './Hosts';
import { ServersServiceProvider } from './Servers';
import { PHPServiceProvider } from './PHP';


export class HostingServiceProvider extends ServiceProvider {
    providers = [
        HostFileServiceProvider,
        PHPServiceProvider,
        ServersServiceProvider,
    ];
}
