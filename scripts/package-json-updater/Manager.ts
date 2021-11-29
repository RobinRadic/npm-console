import { Change, FileFilterCallback, PackageJson, SpliceCallback, Variables } from './interfaces';
import { JsonFileHandler } from './JsonFileHandler';
import glob from 'glob';
import { objectify } from '@radic/shared';
import { get, merge, set, unset } from 'lodash';

export class Manager<T extends PackageJson = PackageJson> {
    protected changes: Change[]                  = [];
    protected files: string[]                    = [];
    protected _dryRun: boolean                   = false;
    protected _testRun: boolean                  = false;
    protected _testOutputDir: string             = '.jsonUpdaterTests';
    public readonly variables: Variables         = {};
    protected fileHandler: JsonFileHandler;

    setKeyOrder(keyOrder: Array<keyof PackageJson>) {
        this.fileHandler.keyOrder = keyOrder;
        return this;
    }

    setVariable(name: string, value: string): this {
        this.variables[ name ] = value;
        return this;
    }

    addVariables(variables: Variables, override: boolean = false): this {
        Object.entries(variables).forEach(([ name, value ]) => {
            if ( this.variables[ name ] !== undefined && override !== true ) {
                return;
            }
            this.variables[ name ] = value;
        });
        return this;
    }

    mergeVariables(variables: Variables): this {
        merge(this.variables, variables);
        return this;
    }

    constructor(public readonly basePath: string) {
        this.fileHandler = new JsonFileHandler(this);
    }

    enableDryRun(enable: boolean = true) {
        this._dryRun = enable;
        return this;
    }

    enableTestRun(enable: boolean = true, testOutputDir: string = '.jsonUpdaterTests') {
        this._testRun       = enable;
        this._testOutputDir = testOutputDir;
        return this;
    }

    get isDryRun(): boolean {return this._dryRun;}

    get isTestRun(): boolean {return this._testRun;}

    get testOutputDir(): string {return this._testOutputDir;}

    protected addChange(change: Change) {
        change            = {
            splice: null,
            ...change,
        };
        change.fileFilter = change.fileFilter || ((fileDetails) => true);
        this.changes.push(change);
        return this;
    }


    addPackageJsons(globStr: string) {
        let files = glob.sync(globStr, { cwd: this.basePath, absolute: true });
        for ( const file of files ) {
            if ( this.files.includes(file) ) {
                continue;
            }
            this.files.push(file);
        }
        return;
    }

    /** type safe key / value setting */
    setKey<K extends keyof PackageJson>(key: K, value: T[K], fileFilter?: FileFilterCallback) {
        return this.addChange({
            type: 'set',
            path: key as string,
            value,
            fileFilter,
        });
    }

    /** dot notated path / value setting */
    set(path: string, value: any, fileFilter?: FileFilterCallback): this {
        return this.addChange({
            type: 'set',
            path,
            value,
            fileFilter,
        });
    }

    merge(value: PackageJson, fileFilter?: FileFilterCallback): this {
        return this.addChange({ type: 'merge', value, fileFilter });
    }

    mergeAt(path: string, value: any, fileFilter?: FileFilterCallback): this {
        return this.addChange({ type: 'mergeAt', path, value, fileFilter });
    }

    unset(path: string, fileFilter?: FileFilterCallback): this {
        return this.addChange({ type: 'unset', path, fileFilter });
    }

    push(path: string, value: any, fileFilter?: FileFilterCallback): this {
        return this.addChange({ type: 'push', path, value, fileFilter });
    }

    splice(path: string, splice: SpliceCallback, fileFilter?: FileFilterCallback): this {
        return this.addChange({ type: 'splice', path, splice, fileFilter });
    }

    update() {
        const filesDetails                          = this.fileHandler.getFilesDetails(this.basePath, this.files);
        const packages: Record<string, PackageJson> = filesDetails.map(details => [ details.absoluteFilePath, details.pkg ]).reduce(objectify, {});
        for ( const change of this.changes ) {
            let { type, value, path, splice } = change;
            let filteredFilesDetails          = filesDetails.filter(details => change.fileFilter(details));
            for ( const details of filteredFilesDetails ) {
                let pkg = details.pkg;
                // @formatter:off
                switch ( type ) {
                    case 'set': set(pkg, path, value); break;
                    case 'merge': merge(pkg,value); break;
                    case 'unset': unset(pkg,path); break;
                    case 'push':
                        let pval = get(pkg, path, []);
                        pval.push(value);
                        set(pkg, path, value)
                        break;
                    case 'mergeAt':
                        let mval = get(pkg, path,  {});
                        value = merge({},mval, value)
                        set(pkg, path, value)
                        break;
                    case 'splice':
                        let sval = get(pkg, path,  []);
                        let result = splice(Array.from(sval));
                        let start:number
                        let deleteCount=1
                        if(Array.isArray(result)){
                            [start, deleteCount] = result;
                        } else {
                            start=result
                        }
                        sval.slice(start, deleteCount)
                        set(pkg, path, sval);

                }
                // @formatter:on
                // details.pkg = pkg;
            }
            for ( let details of filteredFilesDetails ) {
                // details = this.fileHandler.compileDetails(details);
                if ( this._dryRun ) {
                    continue;
                }
                if ( this._testRun ) {
                    this.fileHandler.writeDetailsToTestJsonFile(details);
                    continue;
                }
                this.fileHandler.writeDetailsToJsonFile(details);
            }
        }
    }

}
