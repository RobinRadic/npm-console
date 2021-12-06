"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const Base_1 = require("./Base");
const Directory_1 = require("./Directory");
const a = 'a';
class File extends Base_1.Base {
    directory() { return new Directory_1.Directory(this.dirname); }
    parent() { return this.directory(); }
    symlink(dest) {
        this.fs.link(this.path, dest);
        return this.createType('link', dest);
    }
}
exports.File = File;
Base_1.Base.classes.file = File;
//# sourceMappingURL=File.js.map