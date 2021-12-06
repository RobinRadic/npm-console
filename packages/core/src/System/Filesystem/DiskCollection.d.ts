import { Collection } from '../../Support';
import { Disk } from './Disk';
import { PartitionCollection } from './PartitionCollection';
export declare class DiskCollection extends Collection<Disk> {
    add(disk: Disk): Disk;
    getAllPartitions(): PartitionCollection;
}
