import { TypeGenerator } from './TypeGenerator';
import { Collection } from '@radic/core';
export declare type NginxContext = 'any' | 'main' | 'http' | 'server' | 'location' | 'events' | 'stream' | 'mail' | 'upstream' | 'if in location' | 'limit_except' | 'if' | string;
export declare type TypeGeneratorFactory = (collected: Collected) => TypeGenerator;
export declare type TypeOverrides = Record<string, Override>;
export declare type SimpleOverride = string;
export declare type Override = SimpleOverride | DetailedOverride | DetailedOverride[];
export interface DetailedOverride {
    in?: NginxContext[];
    not?: NginxContext[];
    replace?: string;
    prepend?: string;
    append?: string;
}
export declare const nginxContexts: NginxContext[];
export declare const isSimpleOverride: (val: any) => val is string;
export declare const isDetailedOverride: (val: any) => val is DetailedOverride;
export declare const isDetailedOverrides: (val: any) => val is DetailedOverride[];
export declare const isNginxContext: (val: any) => val is string;
export interface ScrapedDirective {
    name?: string;
    value?: string;
    type?: string;
    context?: NginxContext[];
    default?: string;
    url?: string;
    doc?: string;
    example?: string;
    module?: string;
    isBlock?: boolean;
}
export interface Variable {
    name: string;
    doc: string;
    url: string;
    module: string;
    hasSuffix: boolean;
}
export interface Collected {
    contexts: string[];
    modules: string[];
    directives: Collection<ScrapedDirective>;
    variables: Collection<Variable>;
}
