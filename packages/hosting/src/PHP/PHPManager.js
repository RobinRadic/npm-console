"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.PHPManager = void 0;
const PHP_1 = require("./PHP");
const PHPScanner_1 = require("./PHPScanner");
const inversify_1 = require("inversify");
const core_1 = require("@radic/core");
const PHPApi_1 = require("./PHPApi");
let PHPManager = class PHPManager {
    constructor() {
        this.phps = {};
    }
    createAdd(info) {
        let php = new PHP_1.PHP(info);
        this.add(php);
        return php;
    }
    add(php) {
        this.phps[php.bin] = php;
        if (this.config.php.versions.find(v => v.binPath === php.bin) === undefined) {
            this.config.php.versions.push({
                binPath: php.bin,
            });
            this.config.save();
        }
        return this;
    }
    addFromPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const phpInfo = yield this.getPhpInfoByPath(path);
            return this.createAdd(phpInfo);
        });
    }
    isValidPhpPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PHPScanner_1.PHPScanner.isValidPhpBinPath(path);
        });
    }
    get(version, api) {
        if (!PHPApi_1.PHPApi.isValue(api)) {
            api = api.toString().toUpperCase();
            if (PHPApi_1.PHPApi.isKey(api)) {
                api = PHPApi_1.PHPApi.fromKey(api);
            }
            else {
                throw Error('Unknown api ' + api);
            }
        }
        return this.find(php => php.isApi(api) && (php.version === version || php.shortVersion === version));
    }
    hasVersion(version) { return this.getBy('version', version) !== undefined || this.getBy('shortVersion', version) !== undefined; }
    hasPath(path) { return this.getBy('bin', path) !== undefined; }
    getBy(key, value) {
        return this.toArray().find(php => php[key] === value);
    }
    find(cb) {
        let phps = this.toArray();
        return phps.find(cb);
    }
    toArray() { return Object.values(this.phps); }
    paths() { return this.toArray().map(p => p.bin); }
    clean() {
        this.phps = {};
        this.getPhpCache().clear();
        return this;
    }
    /**
     * returns PHP binary executable paths
     */
    scan() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PHPScanner_1.PHPScanner.searchForPhpBins();
        });
    }
    getPhpInfoByPath(path, cache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasInCache(path)) {
                return this.getPhpInfoByBinPathFromCache(path);
            }
            let info = yield this.getPhpInfoByBinPathFromFile(path);
            this.putPhpInfoInCache(path, info);
            return info;
        });
    }
    getPhpInfoByBinPathFromFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield PHPScanner_1.PHPScanner.extractPhpInfoFromBin(path);
            return PHPScanner_1.PHPScanner.parsePhpInfo(path, info);
        });
    }
    getPhpInfoByBinPathFromCache(path) {
        if (!this.hasInCache(path)) {
            throw Error('Cannot create PHP from cache for path ' + path);
        }
        const cache = this.getPhpCache();
        return cache.get(path);
    }
    hasInCache(path) {
        if (this.cache.has('php')) {
            let php = this.getPhpCache();
            return php.has(path);
        }
        return false;
    }
    refreshCached(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (args.length === 0) {
                for (const php of this.toArray()) {
                    yield this.refreshCached(php);
                }
            }
            let type = typeof args[0];
            let path;
            if (type === 'string') {
                path = args[0];
            }
            else if (type === 'object' && args[0] instanceof PHP_1.PHP) {
                path = args[0].bin;
            }
            let info = yield this.getPhpInfoByBinPathFromFile(path);
            this.putPhpInfoInCache(path, info);
            return true;
        });
    }
    putPhpInfoInCache(path, info) {
        this.getPhpCache().del(path).put(path, info);
        return this;
    }
    getPhpCache() { return this.cache.get('php'); }
};
__decorate([
    core_1.cache,
    __metadata("design:type", Object)
], PHPManager.prototype, "cache", void 0);
__decorate([
    core_1.config,
    __metadata("design:type", Object)
], PHPManager.prototype, "config", void 0);
PHPManager = __decorate([
    (0, inversify_1.injectable)()
], PHPManager);
exports.PHPManager = PHPManager;
//# sourceMappingURL=PHPManager.js.map