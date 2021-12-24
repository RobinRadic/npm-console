import { applyExtends, argsert, isPromise, objFilter, parseCommand, PlatformShim, processArgv, RequireType, YError } from '../yargs';
import esPlatformShim from '../yargs/lib/platform-shims/es';
import { CliInstance } from './CliInstance';
export declare function CliFactory(_shim: PlatformShim): (processArgs?: string | string[], cwd?: string, parentRequire?: RequireType) => CliInstance;
declare const Parser: any;
declare const Yargs: (processArgs?: string | string[], cwd?: string, parentRequire?: RequireType) => CliInstance;
export { applyExtends, esPlatformShim, Yargs, argsert, isPromise, objFilter, parseCommand, Parser, processArgv, YError, };
