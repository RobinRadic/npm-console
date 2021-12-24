import { JsonFileDetails } from '../interfaces';
export interface JsonFileReaderInterface<T = object> {
    getParsedFilesDetails(basePath: string, absoluteFilePaths: string[]): JsonFileDetails<T>[];
}
