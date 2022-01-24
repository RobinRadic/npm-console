import { Filesystem } from './Filesystem';
import { Constructor } from '@radic/shared';
import { Base } from './Base';
import { Directory } from './Directory';
import { File } from './File';
import { Symlink } from './Symlink';
import { Disk } from './Disk';
import { Partition } from './Partition';
import { DiskCollection } from './DiskCollection';

export type FS = typeof Filesystem
export type StatConstructors = Partial<StatTypeConstructorsMap>
export type StatTypeConstructorsMap = {
    [P in keyof StatTypeMap]: Constructor<StatTypeMap[P]>
}

export interface StatTypeMap {
    fifo: Base;
    char: Base;
    dir: Directory;
    block: Base;
    link: Symlink;
    file: File;
    socket: Base;
    unknown: Base;
}

export interface BlockTypeMap {
    disk: Disk
    part: Partition
    loop: null
}

export type ValueOf<T> = T[keyof T]
export type StatTypeName = keyof StatTypeMap
export type StatTypeValue = ValueOf<StatTypeMap> & {[key:string]:any}
export type BlockTypeName = keyof StatTypeMap
export type BlockTypeValue = ValueOf<BlockTypeMap>


export type Units<T extends StatTypeValue = StatTypeValue> = Record<string, T>

export type ResolveDiskFn = (refresh?: boolean) => Promise<DiskCollection>
