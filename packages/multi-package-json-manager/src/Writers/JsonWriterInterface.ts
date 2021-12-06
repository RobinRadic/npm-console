import { JsonFileDetails } from '../interfaces';

export interface JsonWriterInterface<T extends any = any> {

    writeDetailsToJsonFile(details: JsonFileDetails<T>);

    writeDetailsToTestJsonFile(details: JsonFileDetails<T>);
}
