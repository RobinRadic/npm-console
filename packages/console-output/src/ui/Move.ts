import d from 'd';
import { UiBase } from './UiBase';
import {makeDoProxy} from '../utils'
const { abs, floor, max, trunc } = Math;
let up, down, right, left;

const getMove = function (control) {
    return function (num) {
        num = isNaN(num) ? 0 : max(floor(num), 0);
        return num ? '\x1b[' + num + control : '';
    };
};

export interface Movers {
    up?(num?: number): string

    down?(num?: number): string

    right?(num?: number): string

    left?(num?: number): string

    top: string
    bottom: string
    lineBegin: string
    lineEnd: string

    to(x: number, y: number): string

    lines(num: number): string
}
let mover:any;
mover = function(x, y) {
    x = isNaN(x) ? 0 : floor(x);
    y = isNaN(y) ? 0 : floor(y);
    return (x > 0 ? right(x) : left(- x)) + (y > 0 ? down(y) : up(- y));
}
const move: Movers = Object.defineProperties(mover,
    {
        up       : d((up = getMove('A'))),
        down     : d((down = getMove('B'))),
        right    : d((right = getMove('C'))),
        left     : d((left = getMove('D'))),
        top      : d('\x1b[5000F'),
        bottom   : d('\x1b[5000B'),
        lineBegin: d('\x1b[5000D'),
        lineEnd  : d('\x1b[5000C'),
        to       : d(function (x, y) {
            x = isNaN(x) ? 1 : max(floor(x), 0) + 1;
            y = isNaN(y) ? 1 : max(floor(y), 0) + 1;
            return '\x1b[' + y + ';' + x + 'H';
        }),
        lines    : d(function (n) {
            var dir;
            n   = trunc(n) || 0;
            dir = n >= 0 ? 'E' : 'F';
            n   = floor(abs(n));
            return '\x1b[' + n + dir;
        }),
    },
);


export class Move extends UiBase {
    protected _proxy = makeDoProxy(this.get, this.stdout.write.bind(this.stdout), this);

    get get(): Movers { return move; }

    up        = (num?: number): this => this._proxy.up(num);
    down      = (num?: number): this => this._proxy.down(num);
    right     = (num?: number): this => this._proxy.right(num);
    left      = (num?: number): this => this._proxy.left(num);
    top       = (): this => this._proxy.top();
    bottom    = (): this => this._proxy.bottom();
    lineBegin = (): this => this._proxy.lineBegin();
    lineEnd   = (): this => this._proxy.lineEnd();
    to        = (x: number, y: number): this => this._proxy.to(x, y);
    lines     = (num: number): this => this._proxy.lines(num);
}
