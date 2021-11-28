import truncate from 'cli-truncate';
import wrapAnsi from 'wrap-ansi';
import slice from 'slice-ansi';
import widest from 'widest-line';
import width from 'string-width';
import { TruncateOptions, WrapOptions } from './interfaces';
import { Output } from './Output';


export class OutputUtil {

    constructor(protected output: Output) { }

    truncate(input: string, columns: number, options?: TruncateOptions): string { return truncate(input, columns, options);}

    wrap(input: string, columns: number, options?: WrapOptions): string { return wrapAnsi(input, columns, options);}

    slice(input: string, beginSlice: number, endSlice?: number): string { return slice(input, beginSlice, endSlice);}

    widestLine(input: string): number { return widest(input);}
    widest(input: string[]): number {
        let widest=0
        for(const i of input){
            let width = this.width(i);
            if(width => widest){
                widest = width
            }
        }
        return widest
    }

    width(input: string): number { return width(input);}


}
