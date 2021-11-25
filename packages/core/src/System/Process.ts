import { basename } from 'path';
import { processLoad } from 'systeminformation';
import { ProcessManager } from './ProcessManager';

export class Process {
    public readonly name: string;
    instances: Array<{
        proc: string;
        pid: number;
        pids: number[];
        cpu: number;
        mem: number;
        // pid: number;
        parentPid: number;
        // name: string,
        // cpu: number;
        cpuu: number;
        cpus: number;
        // mem: number;
        priority: number;
        memVsz: number;
        memRss: number;
        nice: number;
        started: string
        state: string;
        tty: string;
        user: string;
        command: string;
        params: string;
    }> = [];

    // path: string;


    constructor(protected manager: ProcessManager, public readonly path: string) {
        this.name = basename(path);
    }

    async refresh() {
        const loads = await processLoad(this.name);
        const datas = this.manager.processes.filter(proc => proc.path.includes(this.name))
        for ( const data of datas ) {
            let load = loads.find(load => load.pid === data.pid)
            this.instances.push({...data,...load});
        }
        return this;
    }

}
