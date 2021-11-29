import jsonStringify, { Schema } from 'fast-json-stringify';
import { FilePackageDetails, JsonStringifyFunction, PackageJson } from './interfaces';
import { basename, dirname, join, resolve } from 'path';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { template } from 'lodash';
import { Manager } from './Manager';
import { format } from 'prettier-package-json';


export class JsonFileHandler {
    protected packageSchemaJson: Schema;
    protected jsonStringify: JsonStringifyFunction;
    public keyOrder: Array<keyof PackageJson> = [];
    public indent:number = 4

    constructor(protected updater: Manager) {
        this.setPackageSchemaJsonFilePath(resolve(__dirname, 'package.schema.json'));
    }

    setPackageSchemaJsonFilePath(packageSchemaJsonFilePath: string) {
        this.packageSchemaJson = JSON.parse(readFileSync(packageSchemaJsonFilePath, 'utf8'));
        delete this.packageSchemaJson[ 'properties' ].jspm;
        this.jsonStringify = jsonStringify(this.packageSchemaJson);
    }

    getFilesPackages(absoluteFilePaths: string[], ignoreNotFound: boolean = false): Record<string, PackageJson> {
        const filesPackages: Record<string, PackageJson> = {};
        for ( const filePath of absoluteFilePaths ) {
            if ( !existsSync(filePath) ) {
                if ( ignoreNotFound ) {
                    continue;
                }
                throw new Error(`Given filepath does not exist`);
            }
            let content               = readFileSync(filePath, 'utf-8');
            let pkg                   = JSON.parse(content) as PackageJson;
            filesPackages[ filePath ] = pkg;
        }
        return filesPackages;
    }

    getFilePackageDetails(basePath: string, absoluteFilePath: string, pkg: PackageJson): FilePackageDetails {
        let hasScope = pkg.name.includes('/');
        return {
            absoluteFilePath,
            relativeFilePath: absoluteFilePath.replace(basePath + '/', ''),
            dirName         : basename(dirname(absoluteFilePath)),
            pkg,
            names           : {
                hasScope,
                full        : pkg.name,
                scope       : hasScope ? pkg.name.split('/')[ 0 ] : null,
                scopeName   : hasScope ? pkg.name.split('/')[ 0 ].replace('@', '') : null,
                withoutScope: hasScope ? pkg.name.split('/')[ 1 ] : pkg.name,
            },
        };
    }

    getFilesDetails(basePath: string, absoluteFilePaths: string[]): FilePackageDetails[] {
        const filesPackages: Record<string, PackageJson> = this.getFilesPackages(absoluteFilePaths);
        const filesDetails: FilePackageDetails[]         = [];
        Object.entries(filesPackages).forEach(([ absoluteFilePath, pkg ]) => {
            filesDetails.push(this.getFilePackageDetails(basePath, absoluteFilePath, pkg));
        });
        return filesDetails;
    };

    writeDetailsToJsonFile(details: FilePackageDetails) {
        let json = this.detailsToPackageJson(details)
        writeFileSync(details.absoluteFilePath, json, 'utf-8');
    }

    detailsToPackageJson(details: FilePackageDetails): string {
        let json = format(details.pkg, {
            useTabs        : false,
            tabWidth       : this.indent,
            enforceMultiple: false,
            expandUsers    : true,
            keyOrder: this.keyOrder as any
        });
        json     = this.compileString(json, details);
        return json;
    }

    writeDetailsToTestJsonFile(details: FilePackageDetails) {
        let json       = this.detailsToPackageJson(details);
        let outputFile = join(this.updater.basePath, this.updater.testOutputDir, details.dirName, basename(details.absoluteFilePath));
        let outputDir  = dirname(outputFile);
        if ( !existsSync(outputDir) ) {
            mkdirSync(outputDir, { recursive: true });
        }
        writeFileSync(outputFile, json, 'utf-8');
    }

    getCompileInterpolateExp() { return /{{([\s\S]+?)}}/g;}

    compileString(str: string, details: FilePackageDetails, variables: Record<string, any> = {}) {
        let compiled = template(str, {
            interpolate: this.getCompileInterpolateExp(),
            imports    : {
                ...this.updater.variables,
                ...details,
            },
        });
        return compiled(variables);
    }
}
