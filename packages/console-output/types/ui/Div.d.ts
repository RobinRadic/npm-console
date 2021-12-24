/**
 * @author yargs
 * @link https://github.com/yargs/cliui
 * @licence https://raw.githubusercontent.com/yargs/cliui/master/LICENSE.txt
 */
export interface DivOptions {
    width: number;
    wrap?: boolean;
    rows?: string[];
}
export interface Column {
    text: string;
    width?: number;
    align?: 'right' | 'left' | 'center';
    padding: number[];
    border?: boolean;
}
export interface ColumnArray extends Array<Column> {
    span: boolean;
}
export interface Line {
    hidden?: boolean;
    text: string;
    span?: boolean;
}
export interface Mixin {
    stringWidth: Function;
    stripAnsi: Function;
    wrap: Function;
}
export declare class Div {
    width: number;
    wrap: boolean;
    rows: ColumnArray[];
    constructor(opts: DivOptions);
    span(...args: ColumnArray): void;
    resetOutput(): void;
    div(...args: (Column | string)[]): ColumnArray;
    private shouldApplyLayoutDSL;
    private applyLayoutDSL;
    private colFromString;
    private measurePadding;
    toString(): string;
    rowToString(row: ColumnArray, lines: Line[]): Line[];
    private renderInline;
    private rasterize;
    private negatePadding;
    private columnWidths;
}
export declare function cliui(opts: Partial<DivOptions>, _mixin: Mixin): Div;
