import { JsonFileReaderInterface } from './JsonFileReaderInterface';
import { Manager } from '../Manager';
import { JsonFileDetails } from '../interfaces';
import { basename, dirname } from 'path';
import { existsSync, readFileSync } from 'fs';

export abstract class AbstractJsonFileReader<T extends any = any> implements JsonFileReaderInterface<T> {
    constructor(public manager: Manager<T>) {
    }

    getParsedFilesDetails(basePath: string, absoluteFilePaths: string[]): JsonFileDetails<T>[] {
        const filesPackages: Record<string, T>   = this.getParsedFiles(absoluteFilePaths);
        const filesDetails: JsonFileDetails<T>[] = [];
        Object.entries(filesPackages).forEach(([ absoluteFilePath, data ]) => {
            filesDetails.push(this.getFileDetails(basePath, absoluteFilePath, data));
        });
        return filesDetails;
    };

    protected getFileDetails(basePath: string, absoluteFilePath: string, data: T): JsonFileDetails<T> {
        return {
            absoluteFilePath,
            relativeFilePath: absoluteFilePath.replace(basePath + '/', ''),
            dirName         : basename(dirname(absoluteFilePath)),
            data,
        };
    }

    protected getParsedFiles(absoluteFilePaths: string[], ignoreNotFound: boolean = false): Record<string, T> {
        const filesPackages: Record<string, T> = {};
        for ( const filePath of absoluteFilePaths ) {
            let content               = this.readFile(filePath, ignoreNotFound);
            try {
            filesPackages[ filePath ] = this.parseJson(content) as T;
            } catch (e) {
                throw new Error(`Could not parse JSON for "${filePath}"`)
            }
        }
        return filesPackages;
    }

    protected readFile(absoluteFilePath: string, ignoreNotFound: boolean = false): string | undefined {
        if ( !existsSync(absoluteFilePath) ) {
            if ( ignoreNotFound ) {
                return;
            }
            throw new Error(`Given filepath does not exist`);
        }
        return readFileSync(absoluteFilePath, 'utf-8');
    }

    protected parseJson(content: string): T {
        if ( content === undefined ) {
            return;
        }
            return JSON.parse(content) as T;
    }

}
