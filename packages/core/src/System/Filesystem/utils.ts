import { accessSync, constants, existsSync, Stats, statSync } from 'fs';
import { DiskCollection } from './DiskCollection';
import { blockDevices, diskLayout, fsSize, Systeminformation } from 'systeminformation';
import { Disk } from './Disk';
import { wait } from '@radic/shared';
import { StatTypeName } from './types';
import fileSize, { Options, Result } from 'file-size';

export interface Filesize extends Result {
    bytes: number;
}

export function filesize(bytes: number, options?: Options): Filesize {
    return { ...fileSize(bytes, options),  bytes };
}

export function isReadable(path: string) {
    if ( !existsSync(path) ) {
        return false;
    }
    try {
        accessSync(path, constants.R_OK | constants.O_RDONLY);
    } catch (e) {
        return false;
    }
    return true;
}

export function isWritable(path: string) {
    try {
        accessSync(path, constants.W_OK);
    } catch (e) {
        return false;
    }
    return true;
}


export async function resolveDisks() {
    const disks   = new DiskCollection({});
    const layouts = await diskLayout();
    const devices = await blockDevices();
    await fsSize();
    await wait(100);
    const fssizes: Systeminformation.FsSizeData[] = await fsSize();

    let deviceDisks = devices.filter(d => d.type === 'disk');
    let deviceParts = devices.filter(d => d.type === 'part');

    for ( const device of deviceDisks ) {
        let disk = disks.add(new Disk(device));
        if ( device.fsType.length > 0 ) {
            disk.addPartition(device as any);
        }
        for ( const part of deviceParts ) {
            if ( part.name.startsWith(disk.name) ) {
                disk.addPartition(part as any);
            }
        }
        for ( const layout of layouts ) {
            if ( disk.deviceName === layout.device ) {
                disk.setLayout(layout);
            }
        }
        for ( const fsize of fssizes ) {
            if ( fsize.fs.startsWith(disk.deviceName) ) {
                for ( const part of disk.partitions ) {
                    if ( part.deviceName === fsize.fs ) {
                        part.fsSize = fsize;
                    }
                }
            }
        }
    }
    return disks;
}


export const toStatType = (pathOrStat: string|Stats): StatTypeName => {
    let stat:Stats
    if(typeof pathOrStat === 'string') {
        stat = statSync(pathOrStat);
    } else {
        stat = pathOrStat
    }
    if ( stat.isFile() ) return 'file';
    if ( stat.isDirectory() ) return 'dir';
    if ( stat.isBlockDevice() ) return 'block';
    if ( stat.isCharacterDevice() ) return 'char';
    if ( stat.isFIFO() ) return 'fifo';
    if ( stat.isSymbolicLink() ) return 'link';
    if ( stat.isSocket() ) return 'socket';
    return 'unknown';
};
