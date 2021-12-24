import { JsonFileReaderInterface } from './JsonFileReaderInterface';
import { Manager } from '../Manager';
import { JsonFileDetails } from '../interfaces';
export declare abstract class AbstractJsonFileReader<T extends any = any> implements JsonFileReaderInterface<T> {
    manager: Manager<T>;
    constructor(manager: Manager<T>);
    getParsedFilesDetails(basePath: string, absoluteFilePaths: string[]): JsonFileDetails<T>[];
    protected getFileDetails(basePath: string, absoluteFilePath: string, data: T): JsonFileDetails<T>;
    protected getParsedFiles(absoluteFilePaths: string[], ignoreNotFound?: boolean): Record<string, T>;
    protected readFile(absoluteFilePath: string, ignoreNotFound?: boolean): string | undefined;
    protected parseJson(content: string): T;
}
