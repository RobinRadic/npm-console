/// <reference types="node" />
import { ExecSyncOptionsWithStringEncoding } from 'child_process';
export declare function makeBin<ARGS extends any[] = any[], OPTS = any>(path: string, defaults?: Partial<OPTS>, execOpts?: ExecSyncOptionsWithStringEncoding): (args: ARGS, options?: OPTS, sudo?: boolean) => string;
