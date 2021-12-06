"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disk = void 0;
const file_size_1 = __importDefault(require("file-size"));
const PartitionCollection_1 = require("./PartitionCollection");
const Partition_1 = require("./Partition");
const utils_1 = require("./utils");
class Disk {
    constructor(device) {
        this.partitions = new PartitionCollection_1.PartitionCollection([]);
        Object.assign(this, device);
        this.fileSize = (0, file_size_1.default)(device.size);
        this.statType = (0, utils_1.toStatType)(this.deviceName);
    }
    get deviceName() { var _a; return ((_a = this === null || this === void 0 ? void 0 : this.layout) === null || _a === void 0 ? void 0 : _a.device) || '/dev/' + this.name; }
    ;
    get diskType() { return this.layout.type; }
    ;
    get vendor() { return this.layout.vendor; }
    ;
    get interfaceType() { return this.layout.interfaceType; }
    ;
    get smartStatus() { return this.layout.smartStatus; }
    get bytesPerSector() { return this.layout.bytesPerSector; }
    get totalCylinders() { return this.layout.totalCylinders; }
    get totalHeads() { return this.layout.totalHeads; }
    get totalSectors() { return this.layout.totalSectors; }
    get totalTracks() { return this.layout.totalTracks; }
    get tracksPerCylinder() { return this.layout.tracksPerCylinder; }
    get sectorsPerTrack() { return this.layout.sectorsPerTrack; }
    get firmwareRevision() { return this.layout.firmwareRevision; }
    addPartition(partition) {
        this.partitions.push(new Partition_1.Partition(this, partition));
    }
    setLayout(layout) {
        this.layout = layout;
    }
}
exports.Disk = Disk;
//# sourceMappingURL=Disk.js.map