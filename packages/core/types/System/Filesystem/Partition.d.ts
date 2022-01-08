import { Systeminformation } from 'systeminformation';
import { Disk } from './Disk';
import { FSCollection } from './FSCollection';
import { Result } from 'file-size';
import { StatTypeName, Units } from './types';
export interface IPartition extends Omit<Systeminformation.BlockDevicesData, 'size'> {
    fsSize?: Systeminformation.FsSizeData;
    size: Result;
}
export interface Partition extends IPartition {
}
export declare class Partition {
    #private;
    disk: Disk;
    filesystem: FSCollection & Units;
    deviceName: string;
    statType: StatTypeName;
    set fsSize(fsSize: Systeminformation.FsSizeData);
    get fsSize(): Systeminformation.FsSizeData;
    totalSize?: Result;
    usedSize?: Result;
    availableSize?: Result;
    constructor(disk: Disk, partition: IPartition);
}
