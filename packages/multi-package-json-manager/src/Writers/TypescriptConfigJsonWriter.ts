import { TSconfigJson } from '../types';
import { AbstractJsonWriter } from './AbstractJsonWriter';
import { JsonStringifyFunction } from '../interfaces';
import jsonStringify, { Schema } from 'fast-json-stringify';
import { readFileSync } from 'fs';

export class TypescriptConfigJsonWriter<T extends TSconfigJson = TSconfigJson> extends AbstractJsonWriter<T> {
    protected packageSchemaJson: Schema;
    protected jsonStringify: JsonStringifyFunction;

    setPackageSchemaJsonFilePath(packageSchemaJsonFilePath: string) {
        this.packageSchemaJson = JSON.parse(readFileSync(packageSchemaJsonFilePath, 'utf8'));
        delete this.packageSchemaJson[ 'properties' ].jspm;
        this.jsonStringify = jsonStringify(this.packageSchemaJson);
    }

}
