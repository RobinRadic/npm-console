export declare type MacroCallback<T = any> = (...args: any[]) => T;
export interface MacroProxy<T, CB = MacroCallback, R = any | void> {
    macro(name: string, macro: MacroCallback<R>): R;
    hasMacro(name: string): boolean;
    runMacro(name: string, ...args: any[]): R;
}
export declare function macroProxy<T extends object>(obj: T): MacroProxy<T> & T;
export declare namespace macro {
    function proxy<T extends object>(obj: T): Proxy<T> & T;
    type Callback<T> = MacroCallback<T>;
    interface Proxy<T, CB = MacroCallback, R = any | void> extends MacroProxy<T, CB, R> {
        macro(name: string, macro: Callback<R>): R;
    }
}
