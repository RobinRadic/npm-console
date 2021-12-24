import { UiBase } from './UiBase';
export interface Erasers {
    screen: string;
    screenLeft: string;
    screenRight: string;
    line: string;
    lineLeft: string;
    lineRight: string;
}
export declare class Erase extends UiBase {
    protected _proxy: any;
    get get(): Erasers;
    screen: () => this;
    screenLeft: () => this;
    screenRight: () => this;
    line: () => this;
    lineLeft: () => this;
    lineRight: () => this;
}
