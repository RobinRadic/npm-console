import { Manager } from './Manager';
import { PackageJson, TSconfigJson } from './types';
export declare function createManager<T>(basePath: string): Manager<T>;
export declare function createJsonManager<T extends object = object>(basePath: string): Manager<T>;
export declare function createPackageJsonManager(basePath: string): Manager<PackageJson>;
export declare function createTsconfigJsonManager(basePath: string): Manager<TSconfigJson>;
