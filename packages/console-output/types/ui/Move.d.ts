import { UiBase } from './UiBase';
export interface Movers {
    up?(num?: number): string;
    down?(num?: number): string;
    right?(num?: number): string;
    left?(num?: number): string;
    top: string;
    bottom: string;
    lineBegin: string;
    lineEnd: string;
    to(x: number, y: number): string;
    lines(num: number): string;
}
export declare class Move extends UiBase {
    protected _proxy: any;
    get get(): Movers;
    up: (num?: number) => this;
    down: (num?: number) => this;
    right: (num?: number) => this;
    left: (num?: number) => this;
    top: () => this;
    bottom: () => this;
    lineBegin: () => this;
    lineEnd: () => this;
    to: (x: number, y: number) => this;
    lines: (num: number) => this;
}
