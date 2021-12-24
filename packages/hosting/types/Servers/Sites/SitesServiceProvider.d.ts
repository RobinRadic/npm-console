import { ServiceProvider } from '@radic/shared';
import { SiteManager } from './SiteManager';
declare module '@radic/core/types/types/config' {
    interface Configuration {
        sites?: SitesConfiguration;
    }
}
declare module '@radic/core/types/Foundation/Application' {
    interface Bindings {
        sites: SiteManager;
    }
    interface Application {
        sites: SiteManager;
    }
}
export interface SitesConfiguration {
}
export declare class SitesServiceProvider extends ServiceProvider {
    register(): void;
    registerSites(): void;
}
