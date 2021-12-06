import { Systeminformation } from 'systeminformation';
export declare enum ServiceStatus {
    ERROR = "",
    ACTIVE = "Active: active (running)",
    INACTIVE = "Active: inactive (dead) "
}
export declare namespace ServiceStatus {
    const isActive: (s: ServiceStatus) => boolean;
    const isError: (s: ServiceStatus) => boolean;
    const isInactive: (s: ServiceStatus) => boolean;
}
export declare class Service implements Systeminformation.ServicesData {
    name: string;
    cpu: number;
    mem: number;
    pids: number[];
    running: boolean;
    startmode: string;
    constructor(name: string);
    refresh(): Promise<this>;
    start(): Promise<void>;
    stop(): Promise<void>;
    restart(): Promise<string>;
    reload(): Promise<string>;
    forceReload(): Promise<string>;
    status(): Promise<ServiceStatus>;
    isActive(): Promise<boolean>;
    isInactive(): Promise<boolean>;
    exec(command: string): Promise<string>;
}
