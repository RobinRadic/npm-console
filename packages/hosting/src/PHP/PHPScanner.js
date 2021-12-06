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
exports.PHPScanner = void 0;
const core_1 = require("@radic/core");
const shared_1 = require("@radic/shared");
const util_1 = require("util");
const child_process_1 = require("child_process");
const ini_1 = require("ini");
const fs_1 = require("fs");
const path_1 = require("path");
const glob_1 = require("glob");
const lodash_1 = require("lodash");
const exec = (0, util_1.promisify)(child_process_1.exec);
class PHPScanner {
    static get path() { return core_1.app.path; }
    static searchForPhpBins() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.path.match(this.path.search('php', { realpath: true }), '--help', out => out.trim().startsWith('Usage: php'));
        });
    }
    static searchForPhpServices() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.path.match(glob_1.glob.sync('/etc/init.d/*php*', { realpath: true }), ' status', out => out.trim().includes('Loaded:'));
        });
    }
    static isValidPhpBinPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.parsePhpInfo(path, yield this.extractPhpInfoFromBin(path));
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    static extractPhpInfoFromBin(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { stdout, stderr } = yield exec(path + ' -i', {
                    env: process.env,
                    timeout: 1000,
                });
                return stdout;
            }
            catch (e) {
                throw e;
            }
        });
    }
    static parsePhpInfo(path, info) {
        let parsed = info.match(/^(.*?)=>(.*)$/gm).map(str => str.split('=>').map(str => str.trim())).reduce(shared_1.objectify, {});
        let iniFiles = [parsed['Additional .ini files parsed'].replace(',', '')], reachedLastIniLine = false, reachedFirstIniLine = false;
        info.split(/\n/g).forEach((line, i) => {
            if (reachedFirstIniLine && !reachedLastIniLine) {
                if (line.endsWith('.ini,')) {
                    iniFiles.push(line.replace(',', ''));
                }
                if (line.endsWith('.ini')) {
                    iniFiles.push(line);
                    reachedLastIniLine = true;
                }
            }
            if (line.includes('Additional .ini files parsed')) {
                reachedFirstIniLine = true;
            }
        });
        let pools = {};
        glob_1.glob.sync((0, path_1.join)(parsed['Configuration File (php.ini) Path'], '*.conf')).forEach(path => {
            let parsed = (0, ini_1.parse)((0, fs_1.readFileSync)(path, { encoding: 'utf8' }));
            (0, lodash_1.merge)(pools, parsed);
            if (parsed.include || parsed.global.include) {
                glob_1.glob.sync(parsed.include || parsed.global.include).forEach(path => {
                    let parsed = (0, ini_1.parse)((0, fs_1.readFileSync)(path, { encoding: 'utf8' }));
                    (0, lodash_1.merge)(pools, parsed);
                });
            }
            return parsed;
        });
        let config = (0, ini_1.parse)((0, fs_1.readFileSync)(parsed['Loaded Configuration File'], { encoding: 'utf8' }));
        const extensions = iniFiles.map(filePath => {
            let name = (0, path_1.basename)(filePath).replace(/^[\d]+/g, '');
            name = shared_1.Str.stripLeft(name, '-');
            name = shared_1.Str.stripRight(name, '.ini');
            let ini = {};
            if ((0, fs_1.existsSync)(filePath)) {
                let content = (0, fs_1.readFileSync)(filePath, { encoding: 'utf8' });
                ini = (0, ini_1.parse)(content);
            }
            return [name, ini];
        }).reduce(shared_1.objectify, {});
        return { bin: path, config, extensions, iniFiles, parsed, pools };
    }
}
exports.PHPScanner = PHPScanner;
//# sourceMappingURL=PHPScanner.js.map