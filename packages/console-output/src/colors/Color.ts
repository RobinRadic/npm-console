import { ColorHelper } from 'csx/lib/color';
import { trucolor, Trucolor } from 'trucolor';
import { inject } from '@radic/core';
import { Output } from '../Output';
import { ColorProperty } from 'csstype';
import { color } from 'csx';

declare module 'csx/lib/color' {
    interface ColorHelper {
        toTruColor(): Trucolor;

        getWrapper(): ColorWrapper;

    }
}
export type ColorWrapper = (message: string) => string


ColorHelper.prototype.toTruColor = function(){
    return trucolor(this.toHexString(), {format:'cli'});
}

ColorHelper.prototype.getWrapper = function(){
    const t = this.toTruColor();
    return (message: string): string => t.in + message + t.out;
}

export class Color extends ColorHelper {
    @inject('output') protected output: Output;

    toTruColor(){
        return trucolor(this.toHexString(), {format:'cli'});
    }

    getWrapper(){
        const t = this.toTruColor();
        return (message: string): string => t.in + message + t.out;
    }

    static make(property: ColorProperty) {
        let c = color(property);
        return new Color('rgb', c.red(), c.green(), c.blue(), c.alpha(), false);
    }
}
