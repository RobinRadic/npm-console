import * as convert from 'color-convert';
import { Chalk, Options, Palette, Trucolor } from 'trucolor';
import { MacroProxy } from '../utils';
import { StyleManager } from './StyleManager';
import { ColorStyle } from '../interfaces';
import { Output } from '../Output';
export interface AnsiRgbColors {
    fg: Array<number>;
    bg: Array<number>;
}
export declare type ColorStartEnd = {
    in: string;
    out: string;
};
export declare type ColorMacroCb = (...args: any[]) => ColorStartEnd;
export interface Colors extends MacroProxy<Colors, ColorMacroCb, ColorStartEnd> {
}
export declare type Chain = {
    [P in keyof Palette]: Chain;
} & {
    get(str: string): string;
    write(str: string): void;
    line(str: string): void;
} & {
    [key: string]: Chain;
};
export declare class Colors {
    styles: StyleManager;
    constructor(styles: StyleManager);
    get convert(): typeof convert;
    getChalkish(): Chalk<Palette>;
    trucolorOptions: Options;
    chain(out?: Output): Chain;
    getTrucolor(color: string, options?: Options): Trucolor;
    getColorFromStyle(style: ColorStyle): {
        in: string;
        out: string;
    };
    getStyledColor(name: string): {
        in: string;
        out: string;
    };
    color(color: string, options?: Options): Trucolor;
    getColor(color: string, isClose?: boolean): string;
}
