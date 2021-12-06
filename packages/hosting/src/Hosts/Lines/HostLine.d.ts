import { CommentedHostLine } from './CommentedHostLine';
import { AbstractHostLine } from './AbstractHostLine';
import { Line } from './Line';
export declare class HostLine extends AbstractHostLine implements Line {
    commentOut(): CommentedHostLine;
    format(addressWidth?: number, hostsWidth?: number): string;
}
