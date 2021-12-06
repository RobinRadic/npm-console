"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectify = exports.reflectParams = exports.isDetailedParamResult = exports.isSimpleParamResult = exports.makeLog = void 0;
const makeLog = (namespace) => require('debug')(namespace);
exports.makeLog = makeLog;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
const isSimpleParamResult = (val) => val && Array.isArray(val) && val.filter(v => typeof v !== 'string').length > 0;
exports.isSimpleParamResult = isSimpleParamResult;
const isDetailedParamResult = (val) => val && Array.isArray(val) && val.length > 0 && val[0].name !== undefined;
exports.isDetailedParamResult = isDetailedParamResult;
function reflectParams(func, detailed = false) {
    var fnStr = func.toString().replace(STRIP_COMMENTS, '');
    var sliced = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));
    let result = sliced.split(',').map(n => n.trim()).map(name => {
        let param = { name };
        if (name.includes('=')) {
            let segments = name.split('=').map(seg => seg.trim());
            let varName = segments.shift();
            let defaultValue = segments.shift();
            let json = `{"${varName}": ${defaultValue}}`;
            try {
                let parsed = JSON.parse(json);
                param.name = varName;
                param.defaultValue = parsed[varName];
                param.defaultType = typeof param.defaultValue;
            }
            catch (e) {
                param.name = varName;
            }
        }
        if (name.startsWith('...')) {
            param.variadic = true;
            param.name = name.replace('...', '');
        }
        return param;
    });
    if (result === null) {
        result = [];
    }
    return result;
}
exports.reflectParams = reflectParams;
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
const objectify = (obj, [k, v]) => (Object.assign(Object.assign({}, obj), { [k]: v }));
exports.objectify = objectify;
//# sourceMappingURL=utils.js.map