import { Collection } from '../../Support';
import { Partition } from './Partition';


export class PartitionCollection extends Collection<Partition> {
    public add(partition: Partition) {
        this.put(partition.deviceName, partition);
    }

    mounted() {return this.filter(par => par.mount.length > 0);}

    unmounted() {return this.filter(par => par.mount.length === 0);}

    getByDeviceName(name: string) {return this.where('deviceName', name).first(); }

    getByMountPath(path: string) {return this.where('mount', path).first(); }
}
