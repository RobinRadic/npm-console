import { IterableManager } from '../utils/IterableManager';
export interface Styles {
    [key: string]: string;
    title?: string;
    subtitle?: string;
    success?: string;
    warning?: string;
    error?: string;
}
export declare type StyleName = keyof Styles | string;
export declare class StyleManager<K extends keyof Styles | string = StyleName> extends IterableManager<K, string> {
    getStyle(name: K): string;
    setStyle(name: K, style: string): this;
    hasStyle(name: K): boolean;
    removeStyle(name: K): boolean;
    allStyles(): Styles;
}
