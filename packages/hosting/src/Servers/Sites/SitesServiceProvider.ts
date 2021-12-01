import { ServiceProvider } from '@radic/shared';
import { SiteManager } from './SiteManager';

declare module '@radic/core/lib/types/config' {
    export interface Configuration {
        sites?: SitesConfiguration;
    }
}
declare module '@radic/core/lib/Foundation/Application' {
    export interface Bindings {
        sites: SiteManager;
    }

    export interface Application {
        sites: SiteManager;
    }
}

export interface SitesConfiguration {

}

export class SitesServiceProvider extends ServiceProvider {

    register() {
        this.registerSites();
    }

    registerSites() {
        this.app.singleton('sites', SiteManager).addBindingGetter('sites');
    }
}
