import { debug, logger } from '@vuepress/utils';
import { basename, extname, resolve } from 'path';
import { App } from 'vuepress';
import { MonorepoPackage } from './MonorepoPackage';
import { MonorepoOptions, MonorepoPackageOptions } from './interfaces';
import { PackageJson } from '@radic/shared';
import { merge } from 'lodash';
import { DefaultThemeOptions } from '@vuepress/theme-default';
import { NavbarGroup, SidebarConfigObject } from '@vuepress/theme-default/lib/shared/nav';
import { existsSync, mkdirSync, rmSync } from 'fs';
import { ThemeHelper } from './ThemeHelper';

const log = debug.debug('monorepo:monorepo');


export class Monorepo {
    static defaultOptions: Partial<MonorepoOptions> = {
        defaultPackageOptions: {
            docsDir: 'docs',
            readme : 'README.md',
        },
        dirName              : 'packages',
        generateDirIndexPage : true,
        resolve              : {
            packagesFromWorkspaces: true,
            workspacesFromRoot    : true,
            exclude               : [],
        },
        workspaces           : [],
    };
    protected packages: MonorepoPackage[]           = [];
    protected pkg: PackageJson;
    public readonly themeHelper:ThemeHelper

    constructor(public readonly app: App, public options: MonorepoOptions) {
        this.themeHelper = new ThemeHelper(this)
        this.options     = options = merge({}, new.target.defaultOptions, options);
        this.pkg     = require(this.rootPath('package.json'));
        if ( options.resolve.workspacesFromRoot ) {
            if ( this.pkg[ 'workspaces' ] !== undefined ) {
                if ( Array.isArray(this.pkg[ 'workspaces' ]) ) {
                    options.workspaces = this.pkg[ 'workspaces' ];
                } else if ( this.pkg[ 'workspaces' ][ 'packages' ] !== undefined && Array.isArray(this.pkg[ 'workspaces' ][ 'packages' ]) ) {
                    options.workspaces = this.pkg[ 'workspaces' ][ 'packages' ];
                }
            }
        }
        if ( options.resolve.packagesFromWorkspaces ) {
            this.resolveWorkspacePackages();
        }
    }

    protected resolveWorkspacePackages() {
        for ( const relativePath of this.options.workspaces ) {
            if ( this.options.resolve.exclude.includes(relativePath) ) {
                continue;
            }
            this.createPackage({
                path: this.rootPath(relativePath),
            });
        }
    }


    getPackages() {return this.packages;}

    each(cb: (pkg: MonorepoPackage) => any) {
        this.packages.forEach(p => cb(p));
        return this;
    }

    rootPath(...parts) {return resolve(this.options.root, ...parts); }

    docsPackagesPath(...parts) {return resolve(this.app.dir.source(this.options.dirName), ...parts);}

    createPackage(options: MonorepoPackageOptions | string) {
        const pkg = new MonorepoPackage(this, options);
        this.addPackage(pkg);
        pkg.ensureDocDir()
        return pkg;
    }

    addPackage(pkg: MonorepoPackage) {
        if ( this.packages.find(p => p.rootPath() === pkg.rootPath()) ) {
            logger.warn(`Could not add package "${pkg.name}". It is already added.`);
            return this;
        }
        this.packages.push(pkg);
        return this;
    }

    startWatching() {return this.each(p => p.startWatching());}

    stopWatching() { return this.each(p => p.stopWatching());}


    ensureDocDir() {
        if ( !existsSync(this.docsPackagesPath()) ) {
            mkdirSync(this.docsPackagesPath(), { recursive: true });
        }
        return this;
    }

    removeDocDir() {
        if ( existsSync(this.docsPackagesPath()) ) {
            rmSync(this.docsPackagesPath(), { recursive: true, force: true });
        }
        return this;
    }

    remakeDocDir() {return this.removeDocDir().ensureDocDir(); }

    copyPackageDocs() {
        return this.each(p => p.ensureDocDir().copyReadme().copyDocFiles());
    }

}
