import { UiBase } from './UiBase';
import {makeDoProxy} from '../utils'

export interface Erasers {

    screen: string
    screenLeft: string
    screenRight: string
    line: string
    lineLeft: string
    lineRight: string
}

const erase: Erasers = {
    screen     : '\x1b[2J',
    screenLeft : '\x1b[1J',
    screenRight: '\x1b[J',
    line       : '\x1b[2K',
    lineLeft   : '\x1b[1K',
    lineRight  : '\x1b[K',
};


export class Erase extends UiBase {
    protected _proxy = makeDoProxy(this.get, this.stdout.write.bind(this.stdout), this);

    get get(): Erasers { return erase; }

    screen      = (): this => this._proxy.screen();
    screenLeft  = (): this => this._proxy.screenLeft();
    screenRight = (): this => this._proxy.screenRight();
    line        = (): this => this._proxy.line();
    lineLeft    = (): this => this._proxy.lineLeft();
    lineRight   = (): this => this._proxy.lineRight();
}
