import { JsonWriterInterface } from './JsonWriterInterface';
import { JsonFileDetails, Variables } from '../interfaces';
import { Manager } from '../Manager';
export declare abstract class AbstractJsonWriter<T extends any = any> implements JsonWriterInterface<T> {
    protected manager: Manager<T>;
    get basePath(): string;
    get testOutputDir(): string;
    get variables(): Variables;
    constructor(manager: Manager<T>);
    writeDetailsToJsonFile(details: JsonFileDetails<T>): void;
    writeDetailsToTestJsonFile(details: JsonFileDetails<T>): void;
    protected detailsToPackageJson(details: JsonFileDetails<T>): string;
    protected getCompileInterpolateExp(): RegExp;
    protected compileString(str: string, details: JsonFileDetails<T>, variables?: Record<string, any>): string;
}
