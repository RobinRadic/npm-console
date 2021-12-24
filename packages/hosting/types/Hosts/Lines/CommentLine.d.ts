import { Line } from './Line';
export declare class CommentLine implements Line {
    protected content: string;
    constructor(content: string);
    format(): string;
}
