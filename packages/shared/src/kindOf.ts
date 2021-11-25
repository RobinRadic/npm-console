export type KindsOf =
    'number'
    | 'string'
    | 'boolean'
    | 'function'
    | 'regexp'
    | 'array'
    | 'date'
    | 'error'
    | 'object'
let kinds = {};
'Number String Boolean Function RegExp Array Date Error'.split(' ').forEach(function (k) {
    kinds[ '[object ' + k + ']' ] = k.toLowerCase();
});

export function kindOf(v: any): KindsOf {
    // Null or undefined.
    if ( v == null ) {
        return String(v) as any;
    }
    // Everything else.
    return kinds[ kinds.toString.call(v) ] || 'object';
}


export const isNumber    = (v: any): v is number => kindOf(v) === 'number';
export const isString    = (v: any): v is string => kindOf(v) === 'string';
export const isBoolean   = (v: any): v is boolean => kindOf(v) === 'boolean';
export const isFunction  = (v: any): v is Function => kindOf(v) === 'function';
export const isRegExp    = (v: any): v is RegExp => kindOf(v) === 'regexp';
export const isArray     = (v: any): v is Array<any> => kindOf(v) === 'array';
export const isDate      = (v: any): v is Date => kindOf(v) === 'date';
export const isError     = (v: any): v is Error => kindOf(v) === 'error';
export const isObject    = (v: any): v is object => kindOf(v) === 'object';

export const isNothing   = (v: any): v is undefined | null => v === null || typeof v === undefined;
export const isArrayable = <T>(v: any): v is Iterable<T> => isArray(v) || isIterable(v);
export const isIterable  = (v: any): v is Array<any> => kindOf(v[ Symbol.iterator ]) === 'function';
export const isNumericString = (v: any): boolean => isString(v) && !isNaN(v as any);
export const isStringNumber  = (v: any): v is string | number => isNumber(v) || isNumericString(v);

export function isNumberObject(target): boolean {
    if ( Array.isArray(target) ) return false;
    if ( !isObject(target) ) return false;
    let keys       = Object.keys(target);
    let numberKeys = keys.filter(val => isNumericString(val));
    return keys.length === numberKeys.length;
}

/** @see https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise */
export function isES6Promise(p) {
    return p && Object.prototype.toString.call(p) === '[object Promise]';
}

export function isNativePromise(p) {
    return p && typeof p.constructor === 'function'
        && Function.prototype.toString.call(p.constructor).replace(/\(.*\)/, '()')
        === Function.prototype.toString.call(/*native object*/Function)
                    .replace('Function', 'Promise') // replacing Identifier
                    .replace(/\(.*\)/, '()'); // removing possible FormalParameterList
}

export function isPromise<T = any>(p): p is PromiseLike<T> {
    return isES6Promise(p) || isNativePromise(p);
}
export function isConstructor(value) {
    try {
        new new Proxy(value, {construct() { return {}; }});
        return true;
    } catch (err) {
        return false;
    }
}
