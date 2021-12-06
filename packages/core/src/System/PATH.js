"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATH = void 0;
const glob_1 = require("glob");
const path_1 = require("path");
const lodash_1 = require("lodash");
const child_process_1 = require("child_process");
const util_1 = require("util");
const exec = (0, util_1.promisify)(child_process_1.exec);
class PATH {
    read() {
        return process.env.PATH;
    }
    paths() {
        return (process.env.PATH || '').split(':');
    }
    search(name, options = {}) {
        if (!name.startsWith('*')) {
            name = '*' + name;
        }
        if (!name.endsWith('*')) {
            name += '*';
        }
        return (0, lodash_1.flatten)(this.paths().map(path => glob_1.glob.sync((0, path_1.join)(path, name), options)));
    }
    match(paths, args, matcher) {
        return __awaiter(this, void 0, void 0, function* () {
            let promises = paths.map((path) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let { stderr, stdout } = yield exec(path + ' ' + args, {
                        env: process.env,
                        timeout: 1000,
                    });
                    return { path, output: stdout };
                }
                catch (e) {
                    return { path, output: null };
                }
            }));
            const results = yield Promise.all(promises);
            return results.filter(r => r.output !== null).filter(r => matcher(r.output)).map(r => r.path);
        });
    }
}
exports.PATH = PATH;
//# sourceMappingURL=PATH.js.map