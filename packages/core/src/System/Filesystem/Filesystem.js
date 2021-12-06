"use strict";
// noinspection ES6UnusedImports
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filesystem = void 0;
const File_1 = require("./File");
const path_1 = require("path");
const fs_1 = require("fs");
const glob_1 = __importDefault(require("glob"));
const crypto = __importStar(require("crypto"));
const utils_1 = require("./utils");
const Directory_1 = require("./Directory");
const fs_extra_1 = require("fs-extra");
const Foundation_1 = require("../../Foundation");
class Filesystem {
    static get mimes() { return Foundation_1.app.get('mimes'); }
    constructor() {
        // return macroProxy(this);
    }
    /** Get all of the files from the given directory (recursive). */
    static allFiles(directory) {
        return this.glob((0, path_1.join)(directory, '**/*'), { absolute: true, nodir: true }).map(filePath => new File_1.File(filePath));
    }
    ;
    /** Get all of the files from the given directory .*/
    static files(directory) {
        return this.glob((0, path_1.join)(directory, '*'), { absolute: true, nodir: true }).map(filePath => new File_1.File(filePath));
    }
    ;
    static append(path, content) {
        let fd;
        try {
            fd = (0, fs_1.openSync)('message.txt', 'a');
            (0, fs_1.appendFileSync)(fd, 'data to append', 'utf8');
        }
        catch (err) {
            return false;
        }
        finally {
            if (fd !== undefined) {
                (0, fs_1.closeSync)(fd);
            }
        }
        return fd;
    }
    ;
    static basename(path) {
        return (0, path_1.basename)(path);
    }
    static chmod(path, mode) {
        return (0, fs_1.chmodSync)(path, mode);
    }
    static cleanDirectory(directory) {
        return this.deleteDirectory(directory, true);
    }
    /**Copy a file to a new location.*/
    static copy(path, target) {
        return (0, fs_1.copyFileSync)(path, target);
    }
    static copyDirectory(directory, target, options) {
        return (0, fs_extra_1.copySync)(directory, target, options);
    }
    static delete(paths) {
        let p = Array.isArray(paths) ? paths : [paths];
        for (const p of paths) {
            (0, fs_1.rmSync)(p, { force: true, recursive: true });
        }
    }
    ;
    /** Remove all of the directories within a given directory. */
    static deleteDirectories(directory) {
        let dirs = this.directories(directory);
        if (dirs.length > 0) {
            for (let dir of dirs) {
                dir.delete();
            }
            return true;
        }
        return false;
    }
    ;
    /**
     * Recursively delete a directory.
     *
     * The directory itself may be optionally preserved.
     */
    static deleteDirectory(directory, preserve = false) {
        if (preserve) {
            this.glob((0, path_1.join)(directory, '**/*'), { absolute: true }).forEach(path => {
                if (this.exists(path)) {
                    (0, fs_1.rmSync)(path, { recursive: true, force: true });
                }
            });
            return true;
        }
        (0, fs_1.rmSync)(directory, { recursive: true, force: true });
        return true;
    }
    ;
    /** Get all of the directories within a given directory. */
    static directories(directory) {
        return (0, fs_1.readdirSync)(directory, { encoding: 'utf8', withFileTypes: true }).filter(o => o.isDirectory()).map(o => new Directory_1.Directory((0, path_1.join)(directory, o.name)));
    }
    /** get All the diectories within a given directory (recursive)*/
    static allDirectories(directory) {
        return this.glob((0, path_1.join)(directory, '**/*/'), { absolute: true }).map(filePath => new Directory_1.Directory(filePath));
    }
    /** Extract the parent directory from a file path.*/
    static dirname(path) {
        return (0, path_1.dirname)(path);
    }
    static ensureDirectoryExists(path, mode = 755, recursive = true) {
        if (this.isDirectory(path)) {
            return true;
        }
        return this.makeDirectory(path, mode, recursive, true);
    }
    ;
    static exists(path) {
        return (0, fs_1.existsSync)(path);
    }
    static extension(path) {
        return (0, path_1.extname)(path);
    }
    static get(path, lock = false) {
        return (0, fs_1.readFileSync)(path, 'utf8');
    }
    static glob(path, options) {
        return glob_1.default.sync(path, options);
    }
    static guessExtension(path) {
        let mimeType = this.mimeType(path);
        if (mimeType) {
            return this.mimes.getExtensions(mimeType)[0] || null;
        }
        return false;
    }
    ;
    static hash(path) {
        return crypto.createHash('md5').update(path, 'utf8').digest().toString('utf8');
    }
    static isDirectory(path) {
        return this.exists(path) && (0, fs_1.statSync)(path).isDirectory();
    }
    static isFile(path) {
        return this.exists(path) && (0, fs_1.statSync)(path).isFile();
    }
    static isReadable(path) {
        return this.exists(path) && (0, utils_1.isReadable)(path);
    }
    static isWritable(path) {
        return (0, utils_1.isWritable)(path);
    }
    static lastModified(path) {
        return this.exists(path) && (0, fs_1.statSync)(path).mtime;
    }
    static lines(path) {
        return (0, fs_1.readFileSync)(path, 'utf8').split('\n');
    }
    static link(source, dest) {
        return (0, fs_1.symlinkSync)(source, dest, this.isDirectory(source) ? 'dir' : 'file');
    }
    static makeDirectory(path, mode = 755, recursive = false, force = false) {
        if (this.isDirectory(path)) {
            if (!force) {
                return false;
            }
            (0, fs_1.rmSync)(path, { force: true, recursive: true });
        }
        (0, fs_1.mkdirSync)(path, {
            mode,
            recursive,
        });
        return true;
    }
    ;
    static mimeType(path) {
        return this.mimes.lookup(path);
    }
    static missing(path) { return !this.exists(path); }
    static move(path, target) {
        (0, fs_1.renameSync)(path, target);
        return this.exists(target);
    }
    ;
    static moveDirectory(from, to, overwrite = false) {
        if (overwrite && this.isDirectory(to) && !this.deleteDirectory(to)) {
            return false;
        }
        (0, fs_1.renameSync)(from, to);
    }
    ;
    static filename(path) {
        if (this.isFile(path)) {
            return (0, path_1.basename)(path);
        }
    }
    ;
    static prepend(path, data) {
        if (this.exists(path)) {
            return this.put(path, data + this.get(path));
        }
        return this.put(path, data);
    }
    ;
    static put(path, data) {
        (0, fs_1.writeFileSync)(path, data, 'utf8');
        return true;
    }
    ;
    static replace(path, content) {
        return this.put(path, content);
    }
    static replaceInFile(search, replace, path) {
        return this.put(path, this.get(path).replace(search, replace));
    }
    // requireOnce() => null;
    static sharedGet(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, fs_1.open)('myfile', 'rb', (err, fd) => {
                    if (err)
                        return reject(err);
                    try {
                        let buffer = Buffer.allocUnsafe(32);
                        (0, fs_1.read)(fd, buffer, 0, Infinity, 0, (err, bytesRead, buffer) => {
                            if (err)
                                return reject(err);
                            resolve(buffer.toString('utf8'));
                        });
                    }
                    finally {
                        (0, fs_1.close)(fd, (err) => {
                            if (err)
                                reject(err);
                        });
                    }
                });
            });
        });
    }
    ;
    static size(path) {
        return (0, utils_1.filesize)((0, fs_1.statSync)(path).size);
    }
    static type(path) { return (0, utils_1.toStatType)(path); }
}
exports.Filesystem = Filesystem;
//# sourceMappingURL=Filesystem.js.map