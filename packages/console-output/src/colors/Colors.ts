///<reference path="./globals.d.ts"/>
// import * as supports               from 'supports-color';
// import { supportsColor }           from 'supports-color';
import * as convert from 'color-convert';
//import {startsWith } from 'lodash'
import { Chalk, chalkish, Options, Palette, simple, trucolor, Trucolor } from 'trucolor';
import { macroProxy, MacroProxy } from '../utils';
import { StyleManager } from './StyleManager';
import { ColorStyle } from '../interfaces';

// import * as _ from "lodash";
// _.isNumber()
// let ansi256    = require('ansi-256-colors')
// let ansiColors = Object.keys(ansiStyles);

export interface AnsiRgbColors {
    fg: Array<number>;
    bg: Array<number>;
}

export type ColorStartEnd = { in: string, out: string }
export type ColorMacroCb = (...args) => ColorStartEnd

export interface Colors extends MacroProxy<Colors, ColorMacroCb, ColorStartEnd> {}

export class Colors {
    constructor(public styles: StyleManager) {
        return macroProxy(this);
    }

    get convert(): typeof convert { return require('color-convert'); }

    getChalkish(): Chalk<Palette> {
        return chalkish(simple({
            format: 'cli',
        }));
    }

    trucolorOptions: Options = { format: 'cli' };

    chain(): any {
        let stack: Trucolor[] = [];
        let self= this;
        const get  = (name) => {
            if(name.startsWith('bg')){
                name = name.slice(2)
                let first = name[0].toLocaleLowerCase()
                name = 'background ' + first + name.slice(1)
                stack.push(self.getTrucolor(name, self.trucolorOptions))
            } else {
                stack.push(self.getTrucolor(name, self.trucolorOptions));
            }
        }
        const color = (str:string) => {
            let open  = stack.map(s => s.in).join('');
            let close = stack.map(s => s.out).join('');
            return open + str + close;
        }
        const createProxy = () => {
            let proxy = new Proxy({}, {
                get(target: {}, p: string | symbol, receiver: any): any {
                    let name = p.toString();
                    if(name === 'get'){
                        return (str:string) => color(str);
                    }
                    get(name);
                    return proxy
                },
            });
            return proxy;
        }
        return createProxy();
    }

    getTrucolor(color: string, options: Options = {}): Trucolor {
        options = { ...this.trucolorOptions, ...options };
        return trucolor(color, options);
    }

    getColorFromStyle(style: ColorStyle): { in: string, out: string } {
        let _color = { in: '', out: '' };
        if ( Array.isArray(style) ) {
            style.map(s => this.getTrucolor(s)).forEach(color => {
                _color.in  = color.in + _color.in;
                _color.out = _color.out + color.out;
            });
        } else {
            _color = this.getTrucolor(style);
        }
        return _color;
    }

    getStyledColor(name: string): { in: string, out: string } {
        let style = this.styles.getStyle(name);
        return this.getColorFromStyle(style);
    }

    getColor(color: string, isClose: boolean = false): string {
        if ( this.styles.hasStyle(color) ) {
            return this.getStyledColor(color)[ isClose ? 'out' : 'in' ];
        }
        if ( this.hasMacro(color) ) {
            return this.runMacro(color)[ isClose ? 'out' : 'in' ];
        }
        return this.getTrucolor(color)[ isClose ? 'out' : 'in' ];
    }

}
