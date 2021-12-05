import { Collection } from '../../Support';
import { Disk } from './Disk';
import { PartitionCollection } from './PartitionCollection';


export class DiskCollection extends Collection<Disk> {
    public add(disk: Disk) {
        this.put(disk.deviceName, disk);
        return disk;
    }

    getAllPartitions(): PartitionCollection {
        const partitions = new PartitionCollection({});
        this.each(disk => disk.partitions.each(partition => partitions.add(partition)));
        return partitions;
    }
}
