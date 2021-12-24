import { ServiceProvider } from '@radic/shared';
import { HostFileServiceProvider } from './Hosts';
export declare class HostingServiceProvider extends ServiceProvider {
    providers: (typeof HostFileServiceProvider)[];
}
