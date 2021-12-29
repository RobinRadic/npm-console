import { Debugger } from 'debug';

export const makeLog = (namespace: string):Debugger=> require('debug')(namespace);


var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

export interface Param {
    name: string;
    variadic?: boolean;
    defaultValue?: any;
    defaultType?: any;
}

export type ParameterReflection =
    string[]
    | Param[]

export const isSimpleParamResult   = (val: any): val is string[] => val && Array.isArray(val) && val.filter(v => typeof v !== 'string').length > 0;
export const isDetailedParamResult = (val: any): val is Param[] => val && Array.isArray(val) && val.length > 0 && val[ 0 ].name !== undefined;

export function reflectParams(func: Function, detailed: boolean = false): Param[] {
    var fnStr  = func.toString().replace(STRIP_COMMENTS, '');
    var sliced = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));

    let result = sliced.split(',').map(n => n.trim()).map(name => {
        let param: Param = {name} as any;
        if ( name.includes('=') ) {
            let segments     = name.split('=').map(seg => seg.trim());
            let varName      = segments.shift();
            let defaultValue = segments.shift();
            let json         = `{"${varName}": ${defaultValue}}`;
            try {
                let parsed = JSON.parse(json);
                param.name         = varName;
                param.defaultValue = parsed[ varName ];
                param.defaultType  = typeof param.defaultValue;
            } catch (e) {
                param.name = varName;
            }
        }
        if ( name.startsWith('...') ) {
            param.variadic = true;
            param.name     = name.replace('...', '');
        }
        return param;
    });
    if ( result === null ) {
        result = [];
    }
    return result;
}

/**
 *
 * @param obj
 * @param k
 * @param v
 * @example
 *
 * params = Object.entries(params).filter(([ key, value ]) => {
 *     return value.toString().length > 0;
 * }).reduce(utils.objectify, {});
 *
 */
export const objectify = (obj, [ k, v ]) => ({ ...obj, [ k ]: v });
