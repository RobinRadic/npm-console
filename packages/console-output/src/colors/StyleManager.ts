import { IterableManager } from '../utils/IterableManager';
import { macroProxy, MacroProxy } from '../utils';

export interface Styles {
    [ key: string ]: string;
}

export type StyleName =
    keyof Styles
    | string;


export class StyleManager<K extends keyof Styles | string = StyleName> extends IterableManager<K, string> {

    getStyle(name: K) {return this._get(name);}

    setStyle(name: K, style: string) {return this._set(name, style);}

    hasStyle(name: K) {return this._has(name);}

    removeStyle(name: K) {return this._delete(name);}

    allStyles(): Styles {return this.items;}
}
