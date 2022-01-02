import * as convert from 'color-convert';
import { Chalk, chalkish, Options, Palette, simple, trucolor, Trucolor } from 'trucolor';
import { macroProxy, MacroProxy } from '../utils';
import { StyleManager } from './StyleManager';
import { ColorStyle } from '../interfaces';
import { Output } from '../Output';
import { ColorProperty } from 'csstype';
import { ColorHelper } from 'csx/lib/color';
import { Color } from './Color';

export interface AnsiRgbColors {
    fg: Array<number>;
    bg: Array<number>;
}

export type ColorStartEnd = { in: string, out: string }
export type ColorMacroCb = (...args) => ColorStartEnd

export interface Colors extends MacroProxy<Colors, ColorMacroCb, ColorStartEnd> {}

export type Chain =
    {
        [P in keyof Palette]: Chain
    }
    & {
        get(str: string): string
        write(str: string): void
        line(str: string): void
    }
    & {
        [ key: string ]: Chain
    }

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

    chain(out?: Output): Chain {
        let stack: Trucolor[] = [];
        let self              = this;
        const get             = (name) => {
            if ( name.startsWith('bg') ) {
                name      = name.slice(2);
                let first = name[ 0 ].toLocaleLowerCase();
                name      = 'background ' + first + name.slice(1);

            }
            const color = self.color(name);
            stack.push(color);
        };
        const color           = (str: string) => {
            let open  = stack.map(s => s.in).join('');
            let close = stack.map(s => s.out).join('');
            return open + str + close;
        };
        const createProxy     = () => {
            let proxy = new Proxy({}, {
                get(target: {}, p: string | symbol, receiver: any): any {
                    let name = p.toString();
                    if ( name === 'get' ) {
                        return (str: string) => color(str);
                    }
                    if ( name === 'write' ) {
                        return (str: string) => out.write(color(str));
                    }
                    if ( name === 'line' ) {
                        return (str: string) => out.line(color(str));
                    }
                    get(name);
                    return proxy;
                },
            });
            return proxy;
        };
        return createProxy() as Chain;
    }

    getTrucolor(color: string, options: Options = {}): Trucolor & {wrapper(msg:string):string} {
        options = { ...this.trucolorOptions, ...options };
        let result = trucolor(color, options);
        result.wrapper = (msg:string) => result.in +msg +result.out;
        return result;
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

    color(color: string, options: Options = {}): Trucolor {
        if ( this.styles.hasStyle(color) ) {
            return this.getTrucolor(this.styles.getStyle(color), options);
        }
        return this.getTrucolor(color, options);
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

    getRandomHexColor(): string {
        var letters = '0123456789ABCDEF'.split('');
        var color   = '#';
        for ( var i = 0; i < 6; i ++ ) {
            color += letters[ Math.round(Math.random() * 15) ];
        }
        return color;
    }

    getColorHelper(clr: ColorProperty): Color {
        return Color.make(clr);
    }

    getRandomColor(): Color {
        return this.getColorHelper(this.getRandomHexColor());
    }
}

