import { Change, FileFilterCallback, SpliceCallback, Variables } from './interfaces';
import glob from 'glob';
import { get, merge, set, unset } from 'lodash';
import { Adapter } from './Adapters';
import { Constructor } from '@radic/shared';
import { KeyOrder } from './sorter';

export class Manager<T = object> {
    protected changes: Change[]          = [];
    protected files: string[]            = [];
    protected _dryRun: boolean           = false;
    protected _testRun: boolean          = false;
    protected _testOutputDir: string     = '.jsonUpdaterTests';
    public readonly variables: Variables = {};
    public keyOrder: KeyOrder<T>         = [];
    public indent: number                = 4;

    protected adapter: Adapter<T>;

    get isDryRun(): boolean {return this._dryRun;}


    get isTestRun(): boolean {return this._testRun;}

    get testOutputDir(): string {return this._testOutputDir;}

    constructor(public readonly basePath: string) {
    }

    addJsonFiles(globStr: string) {
        let files = glob.sync(globStr, { cwd: this.basePath, absolute: true });
        for ( const file of files ) {
            if ( this.files.includes(file) ) {
                continue;
            }
            this.files.push(file);
        }
        return this;
    }

    run() {
        const filesDetails = this.adapter.getReader().getParsedFilesDetails(this.basePath, this.files);
        // const packages: Record<string, object> = filesDetails.map(details => [ details.absoluteFilePath, details.data ]).reduce(objectify, {});
        for ( const change of this.changes ) {
            let { type, value, path, splice } = change;
            let filteredFilesDetails          = filesDetails.filter(details => change.fileFilter.apply(change,[details]));
            for ( const details of filteredFilesDetails ) {
                let data = details.data as any;
                // @formatter:off
                switch ( type ) {
                    case 'set': set(data, path, value); break;
                    case 'merge': merge(data,value); break;
                    case 'unset': unset(data,path); break;
                    case 'push':
                        let pval = get(data, path, []);
                        pval.push(value);
                        set(data, path, value)
                        break;
                    case 'mergeAt':
                        let mval = get(data, path,  {});
                        value = merge({},mval, value)
                        set(data, path, value)
                        break;
                    case 'splice':
                        let sval = get(data, path,  []);
                        let result = splice(Array.from(sval));
                        let start:number
                        let deleteCount=1
                        if(Array.isArray(result)){
                            [start, deleteCount] = result;
                        } else {
                            start=result
                        }
                        sval.slice(start, deleteCount)
                        set(data, path, sval);

                }
                // @formatter:on
            }
            for ( let details of filteredFilesDetails ) {
                if ( this._dryRun ) {
                    continue;
                }
                if ( this._testRun ) {
                    this.adapter.getWriter().writeDetailsToTestJsonFile(details);
                    continue;
                }
                this.adapter.getWriter().writeDetailsToJsonFile(details);
            }
        }
    }

    /** type safe key / value setting */
    setKey<K extends keyof T>(key: K, value: T[K], fileFilter?: FileFilterCallback) {
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

    merge(value: T, fileFilter?: FileFilterCallback): this {
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

    setAdapter(Adapter: Constructor<Adapter<T>>) {
        this.adapter = new Adapter(this);
        return this;
    }

    setKeyOrder(keyOrder: KeyOrder<T>) {
        this.keyOrder = keyOrder;
        return this;
    }

    setIndent(indent: number) {
        this.indent = indent;
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

    enableDryRun(enable: boolean = true) {
        this._dryRun = enable;
        return this;
    }

    enableTestRun(enable: boolean = true, testOutputDir: string = '.jsonUpdaterTests') {
        this._testRun       = enable;
        this._testOutputDir = testOutputDir;
        return this;
    }

    protected addChange(change: Change) {
        change            = {
            splice: null,
            ...change,
        };
        change.fileFilter = change.fileFilter || ((fileDetails) => true);
        this.changes.push(change);
        return this;
    }

}
