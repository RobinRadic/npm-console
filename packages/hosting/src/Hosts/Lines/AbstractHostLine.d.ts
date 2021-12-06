import { Line } from './Line';
export declare abstract class AbstractHostLine implements Line {
    address: string;
    hosts: string[];
    comment: string;
    constructor(address: string, hosts: string[], comment?: string);
    referencesHost(host: string): boolean;
    referencesOnlyHost(host: string): boolean;
    matchesAddress(address: string): boolean;
    isLoopback(): boolean;
    isLocal(): boolean;
    abstract format(...args: any[]): string;
}
