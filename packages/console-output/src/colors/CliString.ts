import { Palette, simplePalette, Trucolor, trucolor } from 'trucolor';

type ToProperties<O, T extends Palette> = {
    [P in keyof T]: O
}

export interface CliString {
    (): string;
}

export type CliStringSpecials =
    'dim'
    | 'bold'
    | 'italic'
    | 'invert'
const palette=simplePalette({ format: 'cli' });
export class CliString {
    private colors: Trucolor[] = [];
    private value: string;
    private proxy: this;

    constructor(value: string) {
        this.value   = value;
        const self = this;
        const proxy  = new Proxy(function(){}, {
            get(target: CliString, p: string | symbol, receiver: any): any {
                if ( Reflect.has(self, p) ) {
                    return Reflect.get(self, p, receiver);
                }
                return proxy;
            },
            apply(target: CliString, thisArg: any, argArray: any[]): any {
                return self.toString();
            },
        });
        this.proxy   = proxy as any;
        return proxy as any;
    }

    f(value:string) {
        this.colors.push(trucolor(value));
        return this;
    }

    b(value:string) {
        this.colors.push(trucolor('background ' + (value as any)));
        return this;
    }

    get dim() {
        this.colors.push(palette.dim);
        return this;
    }

    get bold() {
        this.colors.push(palette.bold);
        return this;
    }

    get italic() {
        this.colors.push(palette.italic);
        return this;
    }

    get invert() {
        this.colors.push(palette.invert);
        return this;
    }

    toString() {
        let value = this.value;
        for ( const color of this.colors ) {
            value = color.in + value + color.out;
        }
        return value;
    }
}
