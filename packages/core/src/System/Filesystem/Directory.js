"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
const Base_1 = require("./Base");
const FSCollection_1 = require("./FSCollection");
const utils_1 = require("./utils");
class Directory extends Base_1.Base {
    get items() { return this.all().items; }
    get children() { return this.all(); }
    clean() {
        this.fs.deleteDirectory(this.path, true);
        return this;
    }
    directory() { return new Directory(this.dirname); }
    parent() { return this.directory(); }
    files() {
        return (0, FSCollection_1.fscollect)(this.fs.files(this.path));
    }
    directories() {
        return (0, FSCollection_1.fscollect)(this.fs.directories(this.path));
    }
    all() {
        return (0, FSCollection_1.fscollect)([
            ...this.fs.directories(this.path),
            ...this.fs.files(this.path),
        ]);
    }
    get(name) {
        if (!this.has(name)) {
            return false;
        }
        let type = (0, utils_1.toStatType)(this.resolve(name));
        return this.createType(type, this.resolve(name));
    }
    getFile(name) { return this.get(name); }
    getDir(name) { return this.get(name); }
    getSymlink(name) { return this.get(name); }
    symlink(dest) {
        this.fs.link(this.path, dest);
        return this.createType('link', dest);
    }
    has(name) { return this.fs.exists(this.resolve(name)); }
}
exports.Directory = Directory;
Base_1.Base.classes.dir = Directory;
//# sourceMappingURL=Directory.js.map