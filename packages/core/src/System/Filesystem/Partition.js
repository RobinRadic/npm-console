"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partition = void 0;
const Foundation_1 = require("../../Foundation");
const FSCollection_1 = require("./FSCollection");
const utils_1 = require("./utils");
class Partition {
    constructor(disk, partition) {
        this.disk = disk;
        this.filesystem = new FSCollection_1.FSCollection({});
        const fs = Foundation_1.app.fs;
        this.deviceName = '/dev/' + partition.name;
        this.statType = (0, utils_1.toStatType)(this.deviceName);
        if (partition.fsSize) {
            this.totalSize = (0, utils_1.filesize)(partition.fsSize.size);
            this.usedSize = (0, utils_1.filesize)(partition.fsSize.used);
            this.availableSize = (0, utils_1.filesize)(partition.fsSize.available);
        }
        Object.assign(this, partition);
        this.size = (0, utils_1.filesize)(partition.size);
        if (fs.isDirectory(partition.mount)) {
            fs.directories(partition.mount).forEach(dir => this.filesystem.put(dir.basename, dir));
            fs.files(partition.mount).forEach(file => this.filesystem.put(file.basename, file));
        }
    }
}
exports.Partition = Partition;
//# sourceMappingURL=Partition.js.map