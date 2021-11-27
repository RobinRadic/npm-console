import { Figures, IParser } from '../interfaces';
import { Output } from '../Output';


export class FiguresParser implements IParser {
    protected get figures(): Figures{return this.output.figures}
    constructor(protected output:Output) {
    }

    public getFiguresExp(): RegExp { return /\[\[(.*?)\]\]/g; }

    public hasFigures(text: string): boolean {return this.getFiguresExp().test(text); }

    public clean(text: string): string {
        if ( this.hasFigures(text) ) {
            text.replace(this.getFiguresExp(), '');
        }
        return text;
    }

    public parse(text: string): string {
        if ( !this.hasFigures(text) ) {
            return text;
        }
        let match;
        while ( (match = this.getFiguresExp().exec(text)) !== null ) {
            if ( this.figures[ match[ 1 ] ] !== undefined ) {
                text = text.replace(match[ 0 ], this.figures[ match[ 1 ] ]);
            }
        }
        return text;
    }

}
