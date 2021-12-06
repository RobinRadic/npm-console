import { Systeminformation } from 'systeminformation';
import { Result } from 'file-size';
import { PartitionCollection } from './PartitionCollection';
import { IPartition } from './Partition';
import { StatTypeName } from './types';
import Layout = Systeminformation.DiskLayoutData;
export declare type l = Layout;
export interface IDevice extends Systeminformation.BlockDevicesData {
    partitions: PartitionCollection;
}
export interface Disk extends IDevice {
}
export declare class Disk {
    protected layout: Layout;
    partitions: PartitionCollection;
    fileSize: Result;
    statType: StatTypeName;
    get deviceName(): l['device'];
    get diskType(): l['type'];
    get vendor(): l['vendor'];
    get interfaceType(): l['interfaceType'];
    get smartStatus(): l['smartStatus'];
    get bytesPerSector(): l['bytesPerSector'];
    get totalCylinders(): l['totalCylinders'];
    get totalHeads(): l['totalHeads'];
    get totalSectors(): l['totalSectors'];
    get totalTracks(): l['totalTracks'];
    get tracksPerCylinder(): l['tracksPerCylinder'];
    get sectorsPerTrack(): l['sectorsPerTrack'];
    get firmwareRevision(): l['firmwareRevision'];
    constructor(device: Systeminformation.BlockDevicesData);
    addPartition(partition: IPartition): void;
    setLayout(layout: Layout): void;
}
