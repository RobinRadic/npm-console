import { TSconfigJson } from '../types';
import { AbstractJsonWriter } from './AbstractJsonWriter';
import { JsonStringifyFunction } from '../interfaces';
import { Schema } from 'fast-json-stringify';
export declare class TypescriptConfigJsonWriter<T extends TSconfigJson = TSconfigJson> extends AbstractJsonWriter<T> {
    protected packageSchemaJson: Schema;
    protected jsonStringify: JsonStringifyFunction;
    setPackageSchemaJsonFilePath(packageSchemaJsonFilePath: string): void;
}
