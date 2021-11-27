import { IterableManager } from './IterableManager';


export type ManagerMacroCallback<T = any> = (...args: any[]) => T

 export interface ManagerMacroProxy<T> {
    macro(name: string, macro: ManagerMacroCallback<T>): T;

    hasMacro(name: string): boolean;

    runMacro(name: string, ...args: any[]);
}

export function managerProxy<T extends object,K extends keyof any,V, M extends IterableManager<K, V>>(obj: T, manager:M): ManagerMacroProxy<T> & T {
    const macros: Record<string, ManagerMacroCallback<T>> = {} as any;
    const hasMacro                                        = (name: string) => macros[ name ] !== undefined;
    const macro                                           = (name: string, macro: ManagerMacroCallback) => {
        macros[ name ] = macro;
        return this;
    };
    const runMacro                                        = (name: string, ...args: any[]) => {
        const result = macros[ name ](...args);
        return result === undefined ? this : result;
    };
    const proxy                                    = new Proxy(obj, {
        get(target: T, p: string | symbol, receiver: any): any {
            if ( Reflect.has(target, p) ) {
                return Reflect.get(target, p, receiver);
            }
            let n = p.toString();
            if ( n === 'macro' ) return macro.bind(proxy);
            if ( n === 'runMacro' ) return runMacro.bind(proxy);
            if ( n === 'hasMacro' ) return hasMacro.bind(proxy);
            if ( hasMacro(n) ) {
                return macros[ n ].bind(proxy);
            }
        },
    });
    return proxy as any;
}
