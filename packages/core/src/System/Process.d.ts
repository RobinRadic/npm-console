import { ProcessManager } from './ProcessManager';
export declare class Process {
    protected manager: ProcessManager;
    readonly path: string;
    readonly name: string;
    instances: Array<{
        proc: string;
        pid: number;
        pids: number[];
        cpu: number;
        mem: number;
        parentPid: number;
        cpuu: number;
        cpus: number;
        priority: number;
        memVsz: number;
        memRss: number;
        nice: number;
        started: string;
        state: string;
        tty: string;
        user: string;
        command: string;
        params: string;
    }>;
    constructor(manager: ProcessManager, path: string);
    refresh(): Promise<this>;
}
