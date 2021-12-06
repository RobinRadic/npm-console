import { Manager } from './Manager';
import { PackageJson, TSconfigJson } from './types';
import { JsonAdapter, NodePackageAdapter, TypescriptConfigPackageAdapter } from './Adapters';

export function createManager<T>(basePath: string): Manager<T> {
    return new Manager<T>(basePath);
}

export function createJsonManager<T extends object=object>(basePath: string): Manager<T> {
    return createManager<T>(basePath).setAdapter(JsonAdapter as any);
}

export function createPackageJsonManager(basePath: string): Manager<PackageJson> {
    return createManager<PackageJson>(basePath).setAdapter(NodePackageAdapter);
}

export function createTsconfigJsonManager(basePath: string): Manager<TSconfigJson> {
    return createManager<TSconfigJson>(basePath).setAdapter(TypescriptConfigPackageAdapter);
}
