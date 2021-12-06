import { Line } from './Line';
export declare class BlankLine implements Line {
    protected content: string;
    constructor(content: string);
    format(): string;
}
