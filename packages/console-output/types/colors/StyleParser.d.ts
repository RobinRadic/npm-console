import { IParser } from '../interfaces';
import { Colors } from './Colors';
import { Output } from '../Output';
export interface ColorsParserParsedTag {
    colors: string[];
    replacements: {
        [old: string]: string;
    };
    string: string;
    replace: (text: string) => string;
}
export declare class StyleParser implements IParser {
    protected output: Output;
    get colors(): Colors;
    constructor(output: Output);
    parse(text: string): string;
    clean(text: string): string;
    protected getTagsExp(): RegExp;
    protected getTextTags(text: string, tagExp: RegExp): Array<string[]>;
    protected parseTag(tag: string[]): ColorsParserParsedTag;
    protected fstack: any[];
    protected bstack: any[];
    protected parseColor(color: string): string;
}
