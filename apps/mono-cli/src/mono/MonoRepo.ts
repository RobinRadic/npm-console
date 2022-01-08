// noinspection ES6UnusedImports

import { dirname, isAbsolute, join, resolve } from 'path';
import { existsSync, readJSONSync } from 'fs-extra';
import { macro, macroProxy, objectify, PackageJson, ProxyRepository, Repository } from '@radic/shared';
import { Package } from './Package';

import { buildOrder } from 'package-build-order';
import { PackageBuilder } from './PackageBuilder';
import { Collection, DirectoryStorage } from '@radic/core';
import { PackageCollection } from './PackageCollection';
import simpleGit, { SimpleGit } from 'simple-git';
import { PackageCreator } from './PackageCreator';

export interface MonoRepoOptions {
    rootPackagePath?: string;
    workspaces?: boolean;
    packagePaths?: string[];
    creator?: {
        variables?: any
    };
}

export interface MonoRepo extends macro.Proxy<MonoRepo> {}


export class MonoRepo {
    rootPath?: string;
    pkg: PackageJson;
    packages: PackageCollection;
    readonly hooks                            = {};
    git: SimpleGit;
    dir: DirectoryStorage;
    options: ProxyRepository<MonoRepoOptions> = Repository.asProxy<MonoRepoOptions>({});

    constructor(options: MonoRepoOptions) {
        this.options  = Repository.asProxy(options);
        this.rootPath = dirname(options.rootPackagePath);
        this.pkg      = readJSONSync(options.rootPackagePath);
        this.git      = simpleGit(this.rootPath);
        this.dir      = new DirectoryStorage({
            basePath: this.rootPath,
        });
        this.handlePackages();
        if ( this.dir.exists('mono.json') ) {
            this.options.merge(this.dir.readJson('mono.json'));
        }
        return macro.proxy(this);
    }

    protected handlePackages() {
        let packagePaths: string[];
        if ( this.options.workspaces ) {
            if ( Array.isArray(this.pkg.workspaces) ) {
                packagePaths = this.pkg.workspaces;
            } else {
                packagePaths = this.pkg.workspaces.packages;
            }
        } else {
            packagePaths = this.options.packagePaths;
        }
        this.options.packagePaths = packagePaths.map(p => isAbsolute(p) ? p : this.path(p));
        this.packages             = new PackageCollection(this.options.packagePaths.map(path => new Package(path)));
    }

    createPackageCreator(packagePath: string) {
        const creator = new PackageCreator(this);
        creator.setPackageDirectory(this.path(packagePath));
        creator.opts.merge(this.options.get('creator',{}));
        return creator;
    }

    /**
     * Accepts relative path from the @radic/mono-cli resources path and returns the absolute path
     * @param parts
     */
    resourcesPath(...parts: string[]) {return resolve(__dirname, '../../resources', ...parts); }

    /**
     * Accepts relative path from the root project directory and returns the absolute path
     * @param {string[]} parts Relative path
     */
    path(...parts: string[]) {return join(this.rootPath, ...parts); }

    getPackage(name: string): Package {return this.packages.where('name', name).first();}

    get packagesArray(): Package[] {return this.packages.toArray<Package>();}

    async getBuilderOrder() {
        let paths = this.packagesArray.map(pkg => [ pkg.name, pkg.packageJsonPath ]).reduce(objectify, {});
        return await buildOrder({ paths });
    }

    get builders(): Record<string, PackageBuilder> {
        return this.packagesArray.map(pkg => [ pkg.name, pkg.builder ]).reduce(objectify, {});
    }

    async getOrderedBuilders(): Promise<PackageBuilder[]> {
        let order = await this.getBuilderOrder();
        return order.map(pkgName => this.getPackage(pkgName).builder);
    }

    async getOrderedPackages(): Promise<Package[]> {
        let order = await this.getBuilderOrder();
        return order.map(pkgName => this.getPackage(pkgName));
    }

    async commitAll(message: string = 'upd') {
        const status = await this.git.status();
        const files  = [].concat(status.not_added).concat(status.created).concat(status.modified);
        await this.git.add(files);
        await this.git.commit(message);
        return true;
    }
}
