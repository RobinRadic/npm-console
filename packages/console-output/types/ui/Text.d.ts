import { Data, Options } from 'columnify';
import { UiBase } from './UiBase';
export declare class Text extends UiBase {
    truncate(input: string, columns: number, position?: 'start' | 'middle' | 'end'): string;
    wrap(input: string, columns: number, options?: {
        hard?: boolean;
        trim?: boolean;
        wordWrap?: boolean;
    }): string;
    slice(inputu: string, beginSlice: number, endSlice?: number): string;
    columns(data: Data, options: Options): string;
    widestLine(input: string): number;
    widest(input: string[]): number;
    width(input: string): number;
    strip(input: string): any;
}
