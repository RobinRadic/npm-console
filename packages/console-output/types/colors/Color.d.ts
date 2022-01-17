import { ColorHelper } from 'csx/lib/color';
import { Trucolor } from 'trucolor';
import { ColorProperty } from 'csstype';
declare module 'csx/lib/color' {
    interface ColorHelper {
        toTruColor(): Trucolor;
        getWrapper(): ColorWrapper;
    }
}
export declare type ColorWrapper = (message: string) => string;
export declare class Color extends ColorHelper {
    toTruColor(): any;
    getWrapper(): (message: string) => string;
    static make(property: ColorProperty): Color;
}
