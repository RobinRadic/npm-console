import { Systeminformation } from 'systeminformation';
import fileSize, { Result } from 'file-size';
import { PartitionCollection } from './PartitionCollection';
import { IPartition, Partition } from './Partition';
import { toStatType } from './utils';
import { StatTypeName } from './types';
import Layout = Systeminformation.DiskLayoutData;

export type l = Layout

export interface IDevice extends Systeminformation.BlockDevicesData {
    partitions: PartitionCollection;
}

export interface Disk extends IDevice {}

export class Disk {
    protected layout: Layout;
    partitions: PartitionCollection = new PartitionCollection([]);
    fileSize: Result;
    statType: StatTypeName;

    get deviceName(): l['device'] {return this?.layout?.device || '/dev/'+ this.name;};

    get diskType(): l['type'] {return this.layout.type;};

    get vendor(): l['vendor'] {return this.layout.vendor;};

    get interfaceType(): l['interfaceType'] {return this.layout.interfaceType;};

    get smartStatus(): l['smartStatus'] {return this.layout.smartStatus;}

    get bytesPerSector(): l['bytesPerSector'] {return this.layout.bytesPerSector;}

    get totalCylinders(): l['totalCylinders'] {return this.layout.totalCylinders;}

    get totalHeads(): l['totalHeads'] {return this.layout.totalHeads;}

    get totalSectors(): l['totalSectors'] {return this.layout.totalSectors;}

    get totalTracks(): l['totalTracks'] {return this.layout.totalTracks;}

    get tracksPerCylinder(): l['tracksPerCylinder'] {return this.layout.tracksPerCylinder;}

    get sectorsPerTrack(): l['sectorsPerTrack'] {return this.layout.sectorsPerTrack;}

    get firmwareRevision(): l['firmwareRevision'] {return this.layout.firmwareRevision;}


    constructor(device: Systeminformation.BlockDevicesData) {
        Object.assign(this, device);
        this.fileSize = fileSize(device.size);
        this.statType = toStatType(this.deviceName);
    }

    addPartition(partition: IPartition) {
        this.partitions.push(new Partition(this, partition));
    }

    setLayout(layout: Layout) {
        this.layout = layout;
    }
}

