import { JsonWriterInterface } from './JsonWriterInterface';
import { JsonFileDetails, Variables } from '../interfaces';
import { Manager } from '../Manager';
import { basename, dirname, join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { template } from 'lodash';
// import {} from 'json-format'
import { order } from '../sorter';

export abstract class AbstractJsonWriter<T extends any = any> implements JsonWriterInterface<T> {
    get basePath(): string {return this.manager.basePath;}

    get testOutputDir(): string {return this.manager.testOutputDir;}

    get variables(): Variables {return this.manager.variables;}

    constructor(protected manager: Manager<T>) {

    }

    writeDetailsToJsonFile(details: JsonFileDetails<T>) {
        let json = this.detailsToPackageJson(details);
        writeFileSync(details.absoluteFilePath, json, 'utf-8');
    }

    writeDetailsToTestJsonFile(details: JsonFileDetails<T>) {
        let json       = this.detailsToPackageJson(details);
        let outputFile = join(this.manager.basePath, this.manager.testOutputDir, details.dirName, basename(details.absoluteFilePath));
        let outputDir  = dirname(outputFile);
        if ( !existsSync(outputDir) ) {
            mkdirSync(outputDir, { recursive: true });
        }
        writeFileSync(outputFile, json, 'utf-8');
    }


    protected detailsToPackageJson(details: JsonFileDetails<T>): string {
        let data = order(details.data, this.manager.keyOrder);
        let json = JSON.stringify(data, null, this.manager.indent);
        json     = this.compileString(json, details);

        return json;
    }

    protected getCompileInterpolateExp() { return /{{([\s\S]+?)}}/g;}

    protected compileString(str: string, details: JsonFileDetails<T>, variables: Record<string, any> = {}) {
        let compiled = template(str, {
            interpolate: this.getCompileInterpolateExp(),
            imports    : {
                ...this.manager.variables,
                ...details,
            },
        });
        return compiled(variables);
    }
}
