import { PackageJson, TSconfigJson } from '../types';
import { AbstractJsonWriter } from './AbstractJsonWriter';
import { JsonFileDetails, JsonStringifyFunction } from '../interfaces';
import jsonStringify, { Schema } from 'fast-json-stringify';
import { readFileSync } from 'fs';
import { format } from 'prettier-package-json';
import sortObject from 'sort-object-keys';

export class TypescriptConfigJsonWriter<T extends TSconfigJson=TSconfigJson> extends AbstractJsonWriter<T>{
    protected packageSchemaJson: Schema;
    protected jsonStringify: JsonStringifyFunction;

    detailsToPackageJson(details: JsonFileDetails<any>): string {
        let data = sortObject(details.data, this.manager.keyOrder);
        let json = JSON.stringify(data, null, this.manager.indent);
        json     = this.compileString(json, details);

        return json;
    }

    setPackageSchemaJsonFilePath(packageSchemaJsonFilePath: string) {
        this.packageSchemaJson = JSON.parse(readFileSync(packageSchemaJsonFilePath, 'utf8'));
        delete this.packageSchemaJson[ 'properties' ].jspm;
        this.jsonStringify = jsonStringify(this.packageSchemaJson);
    }

}
