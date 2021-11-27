import { IParser } from '../interfaces';
import { Colors } from './Colors';
import { Output } from '../Output';

export interface ColorsParserParsedTag {
    colors: string[],
    replacements: { [ old: string ]: string }
    string: string
    replace: (text: string) => string
}

export class StyleParser implements IParser {
    get colors(): Colors {return this.output.colors;}

    constructor(protected output: Output) {


    }


    parse(text: string): string {
        if ( !this.getTagsExp().test(text) ) return text;
        this.getTextTags(text, this.getTagsExp()).forEach((tag: string[]) => {
            let parsed = this.parseTag(tag);
            text       = parsed.replace(text);
        });
        return text;
    }

    clean(text: string): string {
        if ( !this.getTagsExp().test(text) ) return text;
        return text.replace(this.getTagsExp(), '');
    }

    protected getTagsExp(): RegExp {
        return /{(.*?)}/g;
    }

    protected getTextTags(text: string, tagExp: RegExp): Array<string[]> {
        let matches = [], myArr;
        while ( (myArr = tagExp.exec(text)) !== null ) { matches.push(myArr); }
        return matches;
    }

    protected parseTag(tag: string[]): ColorsParserParsedTag {
        let replacements = {};
        tag[ 1 ].split('.').forEach((rawColor) => replacements[ rawColor ] = this.parseColor(rawColor));

        let colors  = Object.keys(replacements).map((key) => replacements[ key ]);
        let string  = colors.join('');
        let replace = (text: string) => text.replace(tag[ 0 ], string === '' ? tag[ 0 ] : string);

        return { replacements, colors, string, replace };
    }

    protected fstack = [];
    protected bstack = [];

    protected parseColor(color: string): string {
        let isClose = color.charAt(0) === '/';
        color       = isClose ? color.replace('/', '') : color;

        if ( color.charAt(0) === 'f' || color.charAt(0) === 'b' ) {
            let type = color.charAt(0);

            // https://regex101.com/r/SdwSKD/1
            let exp = /^([fb])([:(])(.*)([)])$/m;
            if ( exp.test(color) ) {
                let segments     = color.match(exp);
                let _color       = segments[ 3 ];
                let isBackground = segments[ 1 ] === 'b';
                if ( isBackground ) {
                    _color = 'background ' + _color;
                }
                if ( !isClose && type === 'b' ) {
                    this.bstack.push(_color);
                } else if ( !isClose && type === 'f' ) {
                    this.fstack.push(_color);
                }
                return this.colors.getColor(_color, isClose);
            }
            if ( isClose ) {
                if ( type === 'f' && this.fstack.length > 0 ) {
                    return this.colors.getColor(this.fstack.shift(), true);
                }
                if ( type === 'b' && this.bstack.length > 0 ) {
                    return this.colors.getColor(this.bstack.shift(), true);
                }
            }

            //throw Error('cant parase f or b in parseColor')
        }

        if ( color === 'reset' ) {
            this.fstack = [];
            this.bstack = [];
        }

        try {
            return this.colors.getColor(color, isClose);
        } catch (err) {
            return '';
        }
    }
}

