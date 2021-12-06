import { AbstractHostLine } from './AbstractHostLine';
import { HostLine } from './HostLine';
import { Line } from './Line';
export declare class CommentedHostLine extends AbstractHostLine implements Line {
    uncomment(): HostLine;
    format(addressWidth?: number, hostsWidth?: number): string;
}
