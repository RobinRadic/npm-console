import { Change, FileFilterCallback, SpliceCallback, Variables } from './interfaces';
import { Adapter } from './Adapters';
import { Constructor } from '@radic/shared';
import { KeyOrder } from './sorter';
export declare class Manager<T = object> {
    readonly basePath: string;
    protected changes: Change[];
    protected files: string[];
    protected _dryRun: boolean;
    protected _testRun: boolean;
    protected _testOutputDir: string;
    readonly variables: Variables;
    keyOrder: KeyOrder<T>;
    indent: number;
    protected adapter: Adapter<T>;
    get isDryRun(): boolean;
    get isTestRun(): boolean;
    get testOutputDir(): string;
    constructor(basePath: string);
    addJsonFiles(globStr: string): this;
    run(): void;
    /** type safe key / value setting */
    setKey<K extends keyof T>(key: K, value: T[K], fileFilter?: FileFilterCallback): this;
    /** dot notated path / value setting */
    set(path: string, value: any, fileFilter?: FileFilterCallback): this;
    merge(value: T, fileFilter?: FileFilterCallback): this;
    mergeAt(path: string, value: any, fileFilter?: FileFilterCallback): this;
    unset(path: string, fileFilter?: FileFilterCallback): this;
    push(path: string, value: any, fileFilter?: FileFilterCallback): this;
    splice(path: string, splice: SpliceCallback, fileFilter?: FileFilterCallback): this;
    setAdapter(Adapter: Constructor<Adapter<T>>): this;
    setKeyOrder(keyOrder: KeyOrder<T>): this;
    setIndent(indent: number): this;
    setVariable(name: string, value: string): this;
    addVariables(variables: Variables, override?: boolean): this;
    mergeVariables(variables: Variables): this;
    enableDryRun(enable?: boolean): this;
    enableTestRun(enable?: boolean, testOutputDir?: string): this;
    protected addChange(change: Change): this;
}
