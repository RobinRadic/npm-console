import { CommentedHostLine } from './CommentedHostLine';
import { AbstractHostLine } from './AbstractHostLine';
import { Line } from './Line';

export class HostLine extends AbstractHostLine implements Line{
    commentOut() {
        return new CommentedHostLine(this.address, this.hosts, this.comment);
    }

    format(addressWidth:number=0, hostsWidth:number=0) {
        return `${this.address.padEnd(addressWidth + 1)} ${this.hosts.join(' ').padEnd(hostsWidth)} ${this.comment || ''}`.trim();
    }
};
