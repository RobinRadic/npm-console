import { applyExtends, argsert, isPromise, objFilter, parseCommand, PlatformShim, processArgv, RequireType, YError } from '../yargs';
import esPlatformShim from '../yargs/lib/platform-shims/es';
import { CliInstance } from './CliInstance';


export function CliFactory(_shim: PlatformShim) {
    return (
        processArgs: string | string[] = [],
        cwd                            = _shim.process.cwd(),
        parentRequire?: RequireType,
    ): CliInstance => {
        const yargs = new CliInstance(processArgs, cwd, parentRequire, _shim);
        // Legacy yargs.argv interface, it's recommended that you use .parse().
        Object.defineProperty(yargs, 'argv', {
            get       : () => {
                return yargs.parse();
            },
            enumerable: true,
        });
        // an app should almost always have --version and --help,
        // if you *really* want to disable this use .help(false)/.version(false).
        yargs.help();
        yargs.version();
        return yargs;
    };
}

'use strict';

// See https://github.com/yargs/yargs#supported-nodejs-versions for our
// version support policy. The YARGS_MIN_NODE_VERSION is used for testing only.
const minNodeVersion = process?.env?.YARGS_MIN_NODE_VERSION
                       ? Number(process.env.YARGS_MIN_NODE_VERSION)
                       : 12;
if ( process && process.version ) {
    const major = Number(process.version.match(/v([^.]+)/)![ 1 ]);
    if ( major < minNodeVersion ) {
        throw Error(
            `yargs supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs#supported-nodejs-versions`,
        );
    }
}

const Parser = require('yargs-parser');
const Yargs  = CliFactory(esPlatformShim as any);

export {
    applyExtends,
    esPlatformShim,
    Yargs,
    argsert,
    isPromise,
    objFilter,
    parseCommand,
    Parser,
    processArgv,
    YError,
};
