import { Line } from './Line';
export declare class InvalidLine implements Line {
    protected content: string;
    constructor(content: string);
    format(): string;
}
