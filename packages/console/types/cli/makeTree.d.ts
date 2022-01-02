import { Cli } from './Cli';
import { RequireDirectoryOptions } from '../yargs';
export declare function makeTree<T = any, U = T>(cli: Cli, dir: string, opts?: RequireDirectoryOptions): import("require-directory").RequireDirectoryResult<unknown>;
