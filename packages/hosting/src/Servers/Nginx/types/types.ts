import { TypeGenerator } from './TypeGenerator';
import { Collection } from '@radic/core';

export   type NginxContext =
    'any'
    | 'main'
    | 'http'
    | 'server'
    | 'location'
    | 'events'
    | 'stream'
    | 'mail'
    | 'upstream'
    | 'if in location'
    | 'limit_except'
    | 'if'
    | string

export type TypeGeneratorFactory = (collected: Collected) => TypeGenerator

export type TypeOverrides = Record<string, Override>
export type SimpleOverride = string
export type Override =
    SimpleOverride
    | DetailedOverride
    | DetailedOverride[]

export interface DetailedOverride {
    in?: NginxContext[];
    not?: NginxContext[];
    replace?: string;
    prepend?: string;
    append?: string;
}


export const nginxContexts: NginxContext[] = [ 'events', 'main', 'http', 'mail', 'stream', 'server', 'location', 'any', 'if in location', 'limit_except', 'if', 'upstream' ];

export const isSimpleOverride    = (val: any): val is SimpleOverride => typeof val === 'string';
export const isDetailedOverride  = (val: any): val is DetailedOverride => typeof val === 'object' && (val.in || val.not || val.replace || val.prepend || val.append);
export const isDetailedOverrides = (val: any): val is DetailedOverride[] => Array.isArray(val) && val.filter(o => isDetailedOverride(o)).length === val.length;
export const isNginxContext      = (val: any): val is NginxContext => nginxContexts.includes(val);

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
    name: string,
    doc: string
    url: string
    module: string
    hasSuffix: boolean
}

export interface Collected {
    contexts: string[];
    modules: string[];
    directives: Collection<ScrapedDirective>;
    variables: Collection<Variable>;
}

