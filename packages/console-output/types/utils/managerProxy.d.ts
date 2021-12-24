import { IterableManager } from './IterableManager';
export declare type ManagerMacroCallback<T = any> = (...args: any[]) => T;
export interface ManagerMacroProxy<T> {
    macro(name: string, macro: ManagerMacroCallback<T>): T;
    hasMacro(name: string): boolean;
    runMacro(name: string, ...args: any[]): any;
}
export declare function managerProxy<T extends object, K extends keyof any, V, M extends IterableManager<K, V>>(obj: T, manager: M): ManagerMacroProxy<T> & T;
