import { Systeminformation } from 'systeminformation';
import { Disk } from './Disk';
import { app } from '../../Foundation';
import { FSCollection } from './FSCollection';
import fileSize, { Result } from 'file-size';
import { StatTypeName, Units } from './types';
import { filesize, toStatType } from './utils';

export interface IPartition extends Omit<Systeminformation.BlockDevicesData, 'size'> {
    fsSize?: Systeminformation.FsSizeData;
    size: Result;
}

export interface Partition extends IPartition {}


export class Partition {
    filesystem: FSCollection&Units = new FSCollection({});
    deviceName: string;
    statType: StatTypeName;

    totalSize?: Result;
    usedSize?: Result;
    availableSize?: Result;

    constructor(public disk: Disk, partition: IPartition) {
        const fs           = app.fs;
        this.deviceName    = '/dev/' + partition.name;
        this.statType      = toStatType(this.deviceName);
        if(partition.fsSize) {
            this.totalSize     = filesize(partition.fsSize.size);
            this.usedSize      = filesize(partition.fsSize.used);
            this.availableSize = filesize(partition.fsSize.available);
        }
        Object.assign(this, partition);
        this.size = filesize(partition.size as any)
        if ( fs.isDirectory(partition.mount) ) {
            fs.directories(partition.mount).forEach(dir => this.filesystem.put(dir.basename, dir));
            fs.files(partition.mount).forEach(file => this.filesystem.put(file.basename, file));
        }
    }

}
