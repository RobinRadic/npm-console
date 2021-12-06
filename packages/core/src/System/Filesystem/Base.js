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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const file_size_1 = __importDefault(require("file-size"));
const Foundation_1 = require("../../Foundation");
const moment_1 = __importDefault(require("moment"));
const open_1 = __importDefault(require("open"));
class Base {
    constructor(path) {
        this.path = path;
        this.stat();
        this.constructed();
    }
    createType(type, path) {
        let Class = Base.classes[type];
        return new Class(path);
    }
    get fs() { return Foundation_1.app.get('fs'); }
    get parsed() { return (0, path_1.parse)(this.path); }
    get dirname() { return (0, path_1.dirname)(this.path); }
    get basename() { return (0, path_1.basename)(this.path); }
    get size() { return (0, file_size_1.default)(this.stats.size); }
    get changedOn() { return (0, moment_1.default)(this.stats.ctime); }
    get modifiedOn() { return (0, moment_1.default)(this.stats.mtime); }
    get accessedOn() { return (0, moment_1.default)(this.stats.atime); }
    get createdOn() { return (0, moment_1.default)(this.stats.birthtime); }
    get mimeType() { return this.fs.mimeType(this.path); }
    get contentType() { return this.fs.mimes.contentType(this.path); }
    open(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, open_1.default)(this.path, options);
        });
    }
    constructed() { }
    resolve(...parts) {
        return (0, path_1.resolve)(this.path, ...parts);
    }
    stat(force = false) {
        if (!this.stats || force) {
            this.stats = (0, fs_1.statSync)(this.path);
        }
        return this.stats;
    }
    delete() { this.fs.delete(this.path); }
    move(dest) {
        this.fs.move(this.path, dest);
        this.path = dest;
    }
    chmod(mode) {
        this.fs.chmod(this.path, mode);
        return this;
    }
    toProxy() {
        const proxy = new Proxy(this, {
            get(target, p, receiver) {
                if (Reflect.has(target, p)) {
                    return Reflect.get(target, p);
                }
                if (target.stats === undefined) {
                    target.stat();
                }
                if (Reflect.has(target.stats, p)) {
                    return Reflect.get(target, p);
                }
            },
        });
        return proxy;
    }
}
exports.Base = Base;
Base.classes = {
    file: null,
    dir: null,
    link: null,
    block: null,
    char: null,
    fifo: null,
    socket: null,
    unknown: null,
};
//# sourceMappingURL=Base.js.map