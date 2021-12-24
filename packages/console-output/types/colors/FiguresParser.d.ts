import { Figures, IParser } from '../interfaces';
import { Output } from '../Output';
export declare class FiguresParser implements IParser {
    protected output: Output;
    protected get figures(): Figures;
    constructor(output: Output);
    getFiguresExp(): RegExp;
    hasFigures(text: string): boolean;
    clean(text: string): string;
    parse(text: string): string;
}
