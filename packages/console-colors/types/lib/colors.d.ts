import { Trucolor, Palette } from 'trucolor';
export interface AnsiRgbColors {
    fg: Array<number>;
    bg: Array<number>;
}
declare let isAnyLength: (value: any, ...lengths: any[]) => boolean;
declare let isAllLength: (value: any, ...lengths: any[]) => boolean;
export declare class Colors {
    palette: Palette;
    get(color: string, close?: boolean): string;
    getTrucolorColor(color: string): Trucolor;
    getStyles(): Palette;
    styles(styles: Object): this;
    reset(): this;
}
export { isAnyLength, isAllLength, isAnyLength as isLength };
