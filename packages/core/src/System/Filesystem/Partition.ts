import { Systeminformation } from 'systeminformation';
import { Disk } from './Disk';
import { app } from '../../Foundation';
import { FSCollection } from './FSCollection';
import { Result } from 'file-size';
import { StatTypeName, Units } from './types';
import { filesize, toStatType } from './utils';

export interface IPartition extends Omit<Systeminformation.BlockDevicesData, 'size'> {
    fsSize?: Systeminformation.FsSizeData;
    size: Result;
}

export interface Partition extends IPartition {}


export class Partition {
    filesystem: FSCollection & Units = new FSCollection({});
    deviceName: string;
    statType: StatTypeName;
    #fsSize: Systeminformation.FsSizeData;

    set fsSize(fsSize: Systeminformation.FsSizeData) {
        this.#fsSize       = fsSize;
        this.totalSize     = filesize(fsSize.size);
        this.usedSize      = filesize(fsSize.used);
        this.availableSize = filesize(fsSize.available);
    }

    get fsSize(): Systeminformation.FsSizeData {return this.#fsSize;}

    totalSize?: Result;
    usedSize?: Result;
    availableSize?: Result;

    constructor(public disk: Disk, partition: IPartition) {
        const fs        = app.fs;
        this.deviceName = '/dev/' + partition.name;
        this.statType   = toStatType(this.deviceName);
        Object.assign(this, partition);
        this.size = filesize(partition.size as any);
        if ( fs.isDirectory(partition.mount) ) {
            fs.directories(partition.mount).forEach(dir => this.filesystem.put(dir.basename, dir));
            fs.files(partition.mount).forEach(file => this.filesystem.put(file.basename, file));
        }
    }

}
