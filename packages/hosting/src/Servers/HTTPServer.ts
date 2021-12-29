import { Server } from './Server';
import { glob } from 'glob';
import { join } from 'path';
import { Constructor, objectify } from '@radic/shared';
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

    [ key: string ]: string | string[];
}

export abstract class HTTPServer<SITE extends Site=Site> extends Server {
    public readonly sites: Collection<SITE>;


    constructor(public paths: HTTPServerPaths, public readonly SiteClass: Constructor<SITE>) {
        super();
        this.paths  = this.resolvePaths();
        const sites = this.getAvailableSitePaths().map(path => {
            let site = new this.SiteClass(this, path);
            return [ site.filename, site ];
        }).reduce(objectify, {});
        this.sites  = new Collection<SITE>(sites);
    }

    protected get sitesFileExtensionsGlob(){
        return this.paths.sitesFileExtensions.length === 1 ? this.paths.sitesFileExtensions[0] : `{${this.paths.sitesFileExtensions.join(',')}}`;
    }

    getAvailableSitePaths() {return glob.sync(join(this.paths.sitesAvailable, `*.${this.sitesFileExtensionsGlob}`)); }

    getEnabledSitePaths() {return glob.sync(join(this.paths.sitesEnabled, `*.${this.sitesFileExtensionsGlob}`)); }

    resolvePaths():HTTPServerPaths {
        let e                      = Object.entries(this.paths);
        let paths: HTTPServerPaths = {} as any;
        for ( const [ key, value ] of e ) {
            if ( Array.isArray(value) ) {
                paths[ key ] = value.map(p => this.resolvePath(p));
            } else if ( typeof value === 'string' ) {
                paths[ key ] = this.resolvePath(value);
            }
        }
        return paths;
    }

    protected resolvePath(path: string): string {
        if ( path.includes('{') ) {
            let keys = path.match(/{(.*?)}/gm).map(key => key.replace('{', '').replace('}', ''));
            for ( const key of keys ) {
                let value = this.paths[ key ];
                if ( value === undefined || typeof value !== 'string' ) continue;
                value = this.resolvePath(value);
                path  = path.replace(`{${key}}`, value);
            }
        }
        return path;
    }
}
