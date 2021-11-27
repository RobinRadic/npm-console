import { Data, Options } from 'columnify';
import { UiBase } from './UiBase';

export class Text extends UiBase {

    truncate(input: string, columns: number, position?: 'start' | 'middle' | 'end'): string { return require('cli-truncate')(...arguments);}

    wrap(input: string, columns: number, options?: { hard?: boolean; trim?: boolean; wordWrap?: boolean; }): string { return require('wrap-ansi')(...arguments);}

    slice(inputu: string, beginSlice: number, endSlice?: number): string { return require('slice-ansi')(...arguments);}

    columns(data: Data, options: Options): string { return require('columnify')(...arguments); }

}
