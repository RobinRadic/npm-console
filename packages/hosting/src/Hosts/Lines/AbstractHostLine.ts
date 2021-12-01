import ip from 'ip';
import { Line } from './Line';

export abstract class AbstractHostLine implements Line {
    constructor(public address: string, public hosts: string[], public comment: string='') {
    }

    referencesHost(host: string) {
        host = host.toLowerCase();
        return this.hosts.some(entryHost => entryHost.toLowerCase() === host);
    }

    referencesOnlyHost(host: string) {
        return this.hosts.length === 1 && this.referencesHost(host);
    }

    matchesAddress(address: string) {
        return address && ip.isEqual(address, this.address);
    }

    isLoopback() {
        return ip.isLoopback(this.address);
    }

    isLocal() {
        return this.isLoopback() || ip.isEqual(this.address, '::0');
    }

    abstract format(...args):string;
}
