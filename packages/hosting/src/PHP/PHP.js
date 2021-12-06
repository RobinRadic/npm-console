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
exports.PHP = void 0;
const semver_1 = require("semver");
const PHPApi_1 = require("./PHPApi");
const path_1 = require("path");
const core_1 = require("@radic/core");
class PHP {
    constructor(info) {
        this.info = info;
        this.semver = this.getSemver(this.info['parsed']['PHP Version']);
        this.date = new Date(this.info.parsed['Build Date']);
        this.api = PHPApi_1.PHPApi.toApi(this.info.parsed['Server API']);
        if (this.isFPM) {
            this.fpmService = new core_1.Service(this.fpmServiceName);
        }
    }
    get fpmServiceName() { return (0, path_1.basename)(this.bin); }
    getFPMService() {
        return __awaiter(this, void 0, void 0, function* () { return this.fpmService.refresh(); });
    }
    getSemver(version) {
        return new semver_1.SemVer(version.split('+').slice(0, 2).join('+'));
    }
    get extensions() { return this.info.extensions; }
    get config() { return this.info.config; }
    get parsed() { return this.info.parsed; }
    get bin() { return this.info.bin; }
    get shortVersion() { return this.semver.major + '.' + this.semver.minor; }
    get version() { return this.semver.version; }
    get iniFiles() { return this.info.iniFiles; }
    get isCLI() { return PHPApi_1.PHPApi.isCLI(this.api); }
    get isFPM() { return PHPApi_1.PHPApi.isFPM(this.api); }
    get apiKey() { return PHPApi_1.PHPApi.toKey(this.api); }
    isApi(api) { return PHPApi_1.PHPApi.is(this, api); }
    hasExtension(name) { return this.extensions[name] !== undefined; }
    getExtension(name) { return this.extensions[name]; }
}
exports.PHP = PHP;
//# sourceMappingURL=PHP.js.map