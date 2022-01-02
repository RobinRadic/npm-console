// noinspection ES6UnusedImports

import { dirname, isAbsolute, join } from 'path';
import { existsSync, readJSONSync } from 'fs-extra';
import { macro, macroProxy, objectify, PackageJson } from '@radic/shared';
import { Package } from './Package';

import { buildOrder } from 'package-build-order';
import { PackageBuilder } from './PackageBuilder';
import { Collection } from '@radic/core';
import { PackageCollection } from './PackageCollection';
import simpleGit, { SimpleGit } from 'simple-git';

export interface MonoRepoOptions {
    rootPackagePath?: string;
    workspaces?: boolean;
    packagePaths?: string[];
}

export interface MonoRepo extends macro.Proxy<MonoRepo> {}

export class MonoRepo {
    rootPath?: string;
    pkg: PackageJson;
    packages: PackageCollection;
    readonly hooks = {};
    git: SimpleGit;

    constructor(public options: MonoRepoOptions) {
        this.rootPath = dirname(options.rootPackagePath);
        this.pkg      = readJSONSync(options.rootPackagePath);
        this.git      = simpleGit(this.rootPath);
        this.handlePackages();
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

    path(...parts) {return join(this.rootPath, ...parts); }

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

    async commitAll(message:string='upd'){
        const status = await this.git.status();
        const files  = [].concat(status.not_added).concat(status.created).concat(status.modified)
        await this.git.add(files)
        await this.git.commit(message)
        return true;
    }
}
