/// <reference types="collect.js" />
import { Collection } from '../../Support';
import { Partition } from './Partition';
export declare class PartitionCollection extends Collection<Partition> {
    add(partition: Partition): void;
    mounted(): import("collect.js").Collection<Partition>;
    unmounted(): import("collect.js").Collection<Partition>;
    getByDeviceName(name: string): Partition;
    getByMountPath(path: string): Partition;
}
