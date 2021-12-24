import { JsonFileDetails } from '../interfaces';
import { PackageJson } from '../types';
import { AbstractJsonFileReader } from './AbstractJsonFileReader';
export interface NodePackageJsonFileDetails extends JsonFileDetails<PackageJson> {
    names?: {
        hasScope: boolean;
        /** @example @company/my-package */
        full: string;
        /** @example @company */
        scope: string;
        /** @example company */
        scopeName: string;
        /** @example my-package */
        withoutScope: string;
    };
}
export declare class NodePackageJsonFileReader<T extends PackageJson = PackageJson> extends AbstractJsonFileReader<T> {
    protected getFileDetails(basePath: string, absoluteFilePath: string, data: T): JsonFileDetails<T>;
}
