import { Filesystem } from './Filesystem';
import { Constructor } from '@radic/shared';
import { Base } from './Base';
import { Directory } from './Directory';
import { File } from './File';
import { Symlink } from './Symlink';
import { Disk } from './Disk';
import { Partition } from './Partition';
export declare type FS = typeof Filesystem;
export declare type StatConstructors = Partial<StatTypeConstructorsMap>;
export declare type StatTypeConstructorsMap = {
    [P in keyof StatTypeMap]: Constructor<StatTypeMap[P]>;
};
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
    disk: Disk;
    part: Partition;
    loop: null;
}
export declare type ValueOf<T> = T[keyof T];
export declare type StatTypeName = keyof StatTypeMap;
export declare type StatTypeValue = ValueOf<StatTypeMap> & {
    [key: string]: any;
};
export declare type BlockTypeName = keyof StatTypeMap;
export declare type BlockTypeValue = ValueOf<BlockTypeMap>;
export declare type Units<T extends StatTypeValue = StatTypeValue> = Record<string, T>;
