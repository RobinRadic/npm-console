"use strict";
exports.__esModule = true;
exports.isConstructor = exports.isPromise = exports.isNativePromise = exports.isES6Promise = exports.isNumberObject = exports.isStringNumber = exports.isNumericString = exports.isIterable = exports.isArrayable = exports.isNothing = exports.isObject = exports.isError = exports.isDate = exports.isArray = exports.isRegExp = exports.isFunction = exports.isBoolean = exports.isString = exports.isNumber = exports.kindOf = void 0;
var kinds = {};
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
var isNumber = function (v) { return kindOf(v) === 'number'; };
exports.isNumber = isNumber;
var isString = function (v) { return kindOf(v) === 'string'; };
exports.isString = isString;
var isBoolean = function (v) { return kindOf(v) === 'boolean'; };
exports.isBoolean = isBoolean;
var isFunction = function (v) { return kindOf(v) === 'function'; };
exports.isFunction = isFunction;
var isRegExp = function (v) { return kindOf(v) === 'regexp'; };
exports.isRegExp = isRegExp;
var isArray = function (v) { return kindOf(v) === 'array'; };
exports.isArray = isArray;
var isDate = function (v) { return kindOf(v) === 'date'; };
exports.isDate = isDate;
var isError = function (v) { return kindOf(v) === 'error'; };
exports.isError = isError;
var isObject = function (v) { return kindOf(v) === 'object'; };
exports.isObject = isObject;
var isNothing = function (v) { return v === null || typeof v === undefined; };
exports.isNothing = isNothing;
var isArrayable = function (v) { return (0, exports.isArray)(v) || (0, exports.isIterable)(v); };
exports.isArrayable = isArrayable;
var isIterable = function (v) { return kindOf(v[Symbol.iterator]) === 'function'; };
exports.isIterable = isIterable;
var isNumericString = function (v) { return (0, exports.isString)(v) && !isNaN(v); };
exports.isNumericString = isNumericString;
var isStringNumber = function (v) { return (0, exports.isNumber)(v) || (0, exports.isNumericString)(v); };
exports.isStringNumber = isStringNumber;
function isNumberObject(target) {
    if (Array.isArray(target))
        return false;
    if (!(0, exports.isObject)(target))
        return false;
    var keys = Object.keys(target);
    var numberKeys = keys.filter(function (val) { return (0, exports.isNumericString)(val); });
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
        new new Proxy(value, { construct: function () { return {}; } });
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.isConstructor = isConstructor;
