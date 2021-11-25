export const makeLog = (namespace: string) => require('debug')(namespace);


var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

export function getParamNames(func: Function): string[] {
    var fnStr  = func.toString().replace(STRIP_COMMENTS, '');
    var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
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
