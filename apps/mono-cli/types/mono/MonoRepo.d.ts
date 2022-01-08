import { macro, PackageJson, ProxyRepository } from '@radic/shared';
import { Package } from './Package';
import { PackageBuilder } from './PackageBuilder';
import { DirectoryStorage } from '@radic/core';
import { PackageCollection } from './PackageCollection';
import { SimpleGit } from 'simple-git';
import { PackageCreator } from './PackageCreator';
export interface MonoRepoOptions {
    rootPackagePath?: string;
    workspaces?: boolean;
    packagePaths?: string[];
    creator?: {
        variables?: any;
    };
}
export interface MonoRepo extends macro.Proxy<MonoRepo> {
}
export declare class MonoRepo {
    rootPath?: string;
    pkg: PackageJson;
    packages: PackageCollection;
    readonly hooks: {};
    git: SimpleGit;
    dir: DirectoryStorage;
    options: ProxyRepository<MonoRepoOptions>;
    constructor(options: MonoRepoOptions);
    protected handlePackages(): void;
    createPackageCreator(packagePath: string): PackageCreator;
    /**
     * Accepts relative path from the @radic/mono-cli resources path and returns the absolute path
     * @param parts
     */
    resourcesPath(...parts: string[]): string;
    /**
     * Accepts relative path from the root project directory and returns the absolute path
     * @param {string[]} parts Relative path
     */
    path(...parts: string[]): string;
    getPackage(name: string): Package;
    get packagesArray(): Package[];
    getBuilderOrder(): Promise<string[]>;
    get builders(): Record<string, PackageBuilder>;
    getOrderedBuilders(): Promise<PackageBuilder[]>;
    getOrderedPackages(): Promise<Package[]>;
    commitAll(message?: string): Promise<boolean>;
}
