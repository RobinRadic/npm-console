"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartitionCollection = void 0;
const Support_1 = require("../../Support");
class PartitionCollection extends Support_1.Collection {
    add(partition) {
        this.put(partition.deviceName, partition);
    }
    mounted() { return this.filter(par => par.mount.length > 0); }
    unmounted() { return this.filter(par => par.mount.length === 0); }
    getByDeviceName(name) { return this.where('deviceName', name).first(); }
    getByMountPath(path) { return this.where('mount', path).first(); }
}
exports.PartitionCollection = PartitionCollection;
//# sourceMappingURL=PartitionCollection.js.map