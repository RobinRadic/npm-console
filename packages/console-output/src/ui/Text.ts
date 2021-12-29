import { GlobalOptions as  ColumnifyGlobalOptions} from 'columnify';
import { UiBase } from './UiBase';
import { requireModule } from '../utils';

export { ColumnifyGlobalOptions }

export type ColumnifyData =  Record<string, any> | any[]

export class Text extends UiBase {

    truncate(input: string, columns: number, position?: 'start' | 'middle' | 'end'): string { return requireModule('cli-truncate')(...arguments);}

    wrap(input: string, columns: number, options?: { hard?: boolean; trim?: boolean; wordWrap?: boolean; }): string { return requireModule('wrap-ansi')(...arguments);}

    slice(inputu: string, beginSlice: number, endSlice?: number): string { return requireModule('slice-ansi')(...arguments);}

    columns(data: ColumnifyData, options?: ColumnifyGlobalOptions): string { return requireModule('columnify')(...arguments); }

    widestLine(input: string): number { return requireModule('widest-line')(input);}

    widest(input: string[]): number {
        let widest = 0;
        for ( const i of input ) {
            let width = this.width(i);
            if ( width => widest ) {
                widest = width;
            }
        }
        return widest;
    }

    width(input: string): number { return requireModule('string-width')(input);}

    strip(input: string) { return requireModule('strip-ansi')(input);}
}

