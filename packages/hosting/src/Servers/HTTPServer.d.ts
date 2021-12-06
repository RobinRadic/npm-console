import { Server } from './Server';
import { Constructor } from '@radic/shared';
import { Site } from './Sites';
import { Collection } from '@radic/core';
export interface HTTPServerPaths {
    sitesAvailable: string;
    sitesEnabled: string;
    modsAvailable: string;
    modsEnabled: string;
    configAvailable: string;
    configEnabled: string;
    configDir: string;
    configFiles: string[];
    sitesFileExtensions: string[];
    configFileExtensions: string[];
    modsFileExtensions: string[];
    [key: string]: string | string[];
}
export declare abstract class HTTPServer<SITE extends Site = Site> extends Server {
    paths: HTTPServerPaths;
    readonly SiteClass: Constructor<SITE>;
    readonly sites: Collection<SITE>;
    constructor(paths: HTTPServerPaths, SiteClass: Constructor<SITE>);
    protected get sitesFileExtensionsGlob(): string;
    getAvailableSitePaths(): string[];
    getEnabledSitePaths(): string[];
    resolvePaths(): HTTPServerPaths;
    protected resolvePath(path: string): string;
}
