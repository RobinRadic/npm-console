import { Manager } from '../Support/Manager';
import { Process } from './Process';
import { processes, Systeminformation } from 'systeminformation';
import { Collection } from 'collect.js';
import ProcessesData = Systeminformation.ProcessesData;
import ProcessesProcessData = Systeminformation.ProcessesProcessData;

export interface ProcessManagerData extends Omit<ProcessesData, 'list'> {
}

export class ProcessManager extends Manager<Process> {
    info: ProcessManagerData;
    processes: Collection<ProcessesProcessData>=new Collection();

    async loadData() {
        let data  = await processes();
        data.list.forEach(p => {
            let proc = this.processes.where('pid',p.pid).first()
            if(!proc){
                this.processes.push(p);
            }
        })
        this.processes.map(p => {
            return data.list.find(pp => pp.pid = p.pid)
        })
        delete data.list;
        this.info = data;
        return this;
    }

    register(name: string) {
        if ( !this.has(name) ) {
            this.set(name, new Process(this, name));
        }
    }
}
