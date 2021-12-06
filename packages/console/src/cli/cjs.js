"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.YError = exports.processArgv = exports.Parser = exports.parseCommand = exports.objFilter = exports.isPromise = exports.argsert = exports.Yargs = exports.esPlatformShim = exports.applyExtends = exports.CliFactory = void 0;
const yargs_1 = require("../yargs");
Object.defineProperty(exports, "applyExtends", { enumerable: true, get: function () { return yargs_1.applyExtends; } });
Object.defineProperty(exports, "argsert", { enumerable: true, get: function () { return yargs_1.argsert; } });
Object.defineProperty(exports, "isPromise", { enumerable: true, get: function () { return yargs_1.isPromise; } });
Object.defineProperty(exports, "objFilter", { enumerable: true, get: function () { return yargs_1.objFilter; } });
Object.defineProperty(exports, "parseCommand", { enumerable: true, get: function () { return yargs_1.parseCommand; } });
Object.defineProperty(exports, "processArgv", { enumerable: true, get: function () { return yargs_1.processArgv; } });
Object.defineProperty(exports, "YError", { enumerable: true, get: function () { return yargs_1.YError; } });
const es_1 = __importDefault(require("../yargs/lib/platform-shims/es"));
exports.esPlatformShim = es_1.default;
const CliInstance_1 = require("./CliInstance");
function CliFactory(_shim) {
    return (processArgs = [], cwd = _shim.process.cwd(), parentRequire) => {
        const yargs = new CliInstance_1.CliInstance(processArgs, cwd, parentRequire, _shim);
        // Legacy yargs.argv interface, it's recommended that you use .parse().
        Object.defineProperty(yargs, 'argv', {
            get: () => {
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
exports.CliFactory = CliFactory;
'use strict';
// See https://github.com/yargs/yargs#supported-nodejs-versions for our
// version support policy. The YARGS_MIN_NODE_VERSION is used for testing only.
const minNodeVersion = ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.YARGS_MIN_NODE_VERSION)
    ? Number(process.env.YARGS_MIN_NODE_VERSION)
    : 12;
if (process && process.version) {
    const major = Number(process.version.match(/v([^.]+)/)[1]);
    if (major < minNodeVersion) {
        throw Error(`yargs supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs#supported-nodejs-versions`);
    }
}
const Parser = require('yargs-parser');
exports.Parser = Parser;
const Yargs = CliFactory(es_1.default);
exports.Yargs = Yargs;
//# sourceMappingURL=cjs.js.map