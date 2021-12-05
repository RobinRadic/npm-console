import { ServiceProvider } from '@radic/shared';
import { AuthServiceProvider } from './Auth/AuthServiceProvider';


export class HostingCliServiceProvider extends ServiceProvider {

    providers = [
        AuthServiceProvider,
    ];
}
