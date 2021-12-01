import { AbstractHostLine } from './AbstractHostLine';
import { HostLine } from './HostLine';
import { Line } from './Line';

export class CommentedHostLine extends AbstractHostLine implements Line{
    uncomment() {
        return new HostLine(this.address, this.hosts, this.comment);
    }

    format(addressWidth:number=0, hostsWidth:number=0) {
        return `#${this.address.padEnd(addressWidth)} ${this.hosts.join(' ').padEnd(hostsWidth)} ${this.comment || ''}`.trim();
    }
}
