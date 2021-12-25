import { ServiceProvider } from '@radic/shared';
import { AuthServiceProvider } from './Auth/AuthServiceProvider';
export declare class HostingCliServiceProvider extends ServiceProvider {
    providers: (typeof AuthServiceProvider)[];
}
