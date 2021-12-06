import { JsonFileDetails } from '../interfaces';
import { PackageJson } from '../types';
import { basename, dirname } from 'path';
import { AbstractJsonFileReader } from './AbstractJsonFileReader';

export interface NodePackageJsonFileDetails extends JsonFileDetails<PackageJson> {
    names?: {
        hasScope: boolean
        /** @example @company/my-package */
        full: string
        /** @example @company */
        scope: string
        /** @example company */
        scopeName: string
        /** @example my-package */
        withoutScope: string
    };
}

export class NodePackageJsonFileReader<T extends PackageJson = PackageJson> extends AbstractJsonFileReader<T> {
    protected getFileDetails(basePath: string, absoluteFilePath: string, data: T): JsonFileDetails<T> {
        let hasScope = data.name.includes('/');
        return {
            absoluteFilePath,
            relativeFilePath: absoluteFilePath.replace(basePath + '/', ''),
            dirName         : basename(dirname(absoluteFilePath)),
            data,
            names           : {
                hasScope,
                full        : data.name,
                scope       : hasScope ? data.name.split('/')[ 0 ] : null,
                scopeName   : hasScope ? data.name.split('/')[ 0 ].replace('@', '') : null,
                withoutScope: hasScope ? data.name.split('/')[ 1 ] : data.name,
            },
        };
    }


}
