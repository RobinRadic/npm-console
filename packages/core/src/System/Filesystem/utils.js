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
exports.toStatType = exports.resolveDisks = exports.isWritable = exports.isReadable = exports.filesize = void 0;
const fs_1 = require("fs");
const DiskCollection_1 = require("./DiskCollection");
const systeminformation_1 = require("systeminformation");
const Disk_1 = require("./Disk");
const shared_1 = require("@radic/shared");
const file_size_1 = __importDefault(require("file-size"));
function filesize(bytes, options) {
    return Object.assign(Object.assign({}, (0, file_size_1.default)(bytes, options)), { bytes });
}
exports.filesize = filesize;
function isReadable(path) {
    if (!(0, fs_1.existsSync)(path)) {
        return false;
    }
    try {
        (0, fs_1.accessSync)(path, fs_1.constants.R_OK | fs_1.constants.O_RDONLY);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.isReadable = isReadable;
function isWritable(path) {
    try {
        (0, fs_1.accessSync)(path, fs_1.constants.W_OK);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.isWritable = isWritable;
function resolveDisks() {
    return __awaiter(this, void 0, void 0, function* () {
        const disks = new DiskCollection_1.DiskCollection({});
        const layouts = yield (0, systeminformation_1.diskLayout)();
        const devices = yield (0, systeminformation_1.blockDevices)();
        yield (0, systeminformation_1.fsSize)();
        yield (0, shared_1.wait)(100);
        const fssizes = yield (0, systeminformation_1.fsSize)();
        let deviceDisks = devices.filter(d => d.type === 'disk');
        let deviceParts = devices.filter(d => d.type === 'part');
        for (const device of deviceDisks) {
            let disk = disks.add(new Disk_1.Disk(device));
            if (device.fsType.length > 0) {
                disk.addPartition(device);
            }
            for (const part of deviceParts) {
                if (part.name.startsWith(disk.name)) {
                    disk.addPartition(part);
                }
            }
            for (const layout of layouts) {
                if (disk.deviceName === layout.device) {
                    disk.setLayout(layout);
                }
            }
            for (const fsize of fssizes) {
                if (fsize.fs.startsWith(disk.deviceName)) {
                    for (const part of disk.partitions) {
                        if (part.deviceName === fsize.fs) {
                            part.fsSize = fsize;
                        }
                    }
                }
            }
        }
        return disks;
    });
}
exports.resolveDisks = resolveDisks;
const toStatType = (path) => {
    let stat = (0, fs_1.statSync)(path);
    if (stat.isFile())
        return 'file';
    if (stat.isDirectory())
        return 'dir';
    if (stat.isBlockDevice())
        return 'block';
    if (stat.isCharacterDevice())
        return 'char';
    if (stat.isFIFO())
        return 'fifo';
    if (stat.isSymbolicLink())
        return 'link';
    if (stat.isSocket())
        return 'socket';
    return 'unknown';
};
exports.toStatType = toStatType;
//# sourceMappingURL=utils.js.map