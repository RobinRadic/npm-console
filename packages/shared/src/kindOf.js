"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConstructor = exports.isPromise = exports.isNativePromise = exports.isES6Promise = exports.isNumberObject = exports.isStringNumber = exports.isNumericString = exports.isIterable = exports.isArrayable = exports.isNothing = exports.isObject = exports.isError = exports.isDate = exports.isArray = exports.isRegExp = exports.isFunction = exports.isBoolean = exports.isString = exports.isNumber = exports.kindOf = void 0;
let kinds = {};
'Number String Boolean Function RegExp Array Date Error'.split(' ').forEach(function (k) {
    kinds['[object ' + k + ']'] = k.toLowerCase();
});
function kindOf(v) {
    // Null or undefined.
    if (v == null) {
        return String(v);
    }
    // Everything else.
    return kinds[kinds.toString.call(v)] || 'object';
}
exports.kindOf = kindOf;
const isNumber = (v) => kindOf(v) === 'number';
exports.isNumber = isNumber;
const isString = (v) => kindOf(v) === 'string';
exports.isString = isString;
const isBoolean = (v) => kindOf(v) === 'boolean';
exports.isBoolean = isBoolean;
const isFunction = (v) => kindOf(v) === 'function';
exports.isFunction = isFunction;
const isRegExp = (v) => kindOf(v) === 'regexp';
exports.isRegExp = isRegExp;
const isArray = (v) => kindOf(v) === 'array';
exports.isArray = isArray;
const isDate = (v) => kindOf(v) === 'date';
exports.isDate = isDate;
const isError = (v) => kindOf(v) === 'error';
exports.isError = isError;
const isObject = (v) => kindOf(v) === 'object';
exports.isObject = isObject;
const isNothing = (v) => v === null || typeof v === undefined;
exports.isNothing = isNothing;
const isArrayable = (v) => (0, exports.isArray)(v) || (0, exports.isIterable)(v);
exports.isArrayable = isArrayable;
const isIterable = (v) => kindOf(v[Symbol.iterator]) === 'function';
exports.isIterable = isIterable;
const isNumericString = (v) => (0, exports.isString)(v) && !isNaN(v);
exports.isNumericString = isNumericString;
const isStringNumber = (v) => (0, exports.isNumber)(v) || (0, exports.isNumericString)(v);
exports.isStringNumber = isStringNumber;
function isNumberObject(target) {
    if (Array.isArray(target))
        return false;
    if (!(0, exports.isObject)(target))
        return false;
    let keys = Object.keys(target);
    let numberKeys = keys.filter(val => (0, exports.isNumericString)(val));
    return keys.length === numberKeys.length;
}
exports.isNumberObject = isNumberObject;
/** @see https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise */
function isES6Promise(p) {
    return p && Object.prototype.toString.call(p) === '[object Promise]';
}
exports.isES6Promise = isES6Promise;
function isNativePromise(p) {
    return p && typeof p.constructor === 'function'
        && Function.prototype.toString.call(p.constructor).replace(/\(.*\)/, '()')
            === Function.prototype.toString.call(/*native object*/ Function)
                .replace('Function', 'Promise') // replacing Identifier
                .replace(/\(.*\)/, '()'); // removing possible FormalParameterList
}
exports.isNativePromise = isNativePromise;
function isPromise(p) {
    return isES6Promise(p) || isNativePromise(p);
}
exports.isPromise = isPromise;
function isConstructor(value) {
    try {
        new new Proxy(value, { construct() { return {}; } });
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.isConstructor = isConstructor;
//# sourceMappingURL=kindOf.js.map