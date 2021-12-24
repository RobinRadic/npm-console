import { Manager } from '../Support/Manager';
import { Process } from './Process';
import { Systeminformation } from 'systeminformation';
import { Collection } from 'collect.js';
import ProcessesData = Systeminformation.ProcessesData;
import ProcessesProcessData = Systeminformation.ProcessesProcessData;
export interface ProcessManagerData extends Omit<ProcessesData, 'list'> {
}
export declare class ProcessManager extends Manager<Process> {
    info: ProcessManagerData;
    processes: Collection<ProcessesProcessData>;
    loadData(): Promise<this>;
    register(name: string): void;
}
