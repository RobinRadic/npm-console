"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskCollection = void 0;
const Support_1 = require("../../Support");
const PartitionCollection_1 = require("./PartitionCollection");
class DiskCollection extends Support_1.Collection {
    add(disk) {
        this.put(disk.deviceName, disk);
        return disk;
    }
    getAllPartitions() {
        const partitions = new PartitionCollection_1.PartitionCollection({});
        this.each(disk => disk.partitions.each(partition => partitions.add(partition)));
        return partitions;
    }
}
exports.DiskCollection = DiskCollection;
//# sourceMappingURL=DiskCollection.js.map