"use strict";
exports.__esModule = true;
exports.keysDeep = exports.eachDeep = void 0;
var lodash_1 = require("lodash");
function iterate(obj, path, depth, parent, parentKey, parentPath, callback, options) {
    path = (0, lodash_1.trim)(path, '.');
    parentPath = (0, lodash_1.trim)(parentPath, '.');
    if (options.track) {
        options.parents.values.push(parent);
        options.parents.keys.push(parentKey);
        options.parents.paths.push(parentPath);
    }
    if (!(0, lodash_1.isObject)(obj)) {
        return;
    }
    (0, lodash_1.forOwn)(obj, function (value, key) {
        var okey = key;
        if ((0, lodash_1.isArray)(obj)) {
            key = '[' + key + ']';
        }
        else {
            if ((0, lodash_1.isString)(key) && key.match(/^[a-zA-Z_$]+([\w_$]*)$/)) {
                key = '.' + key;
            }
            else {
                key = '["' + key + '"]';
            }
        }
        var currentPath = (0, lodash_1.trim)(path + key, '.');
        var res = callback(value, okey, currentPath, depth, obj, parentKey, (0, lodash_1.trim)(path, '.'), options.parents);
        if (res !== false && (0, lodash_1.isObject)(value)) {
            iterate(value, path + key, depth + 1, obj, okey, path, callback, options);
        }
    });
    if (options.track) {
        options.parents.values.pop();
        options.parents.keys.pop();
        options.parents.paths.pop();
    }
}
function eachDeep(obj, callback, options) {
    if (callback === undefined)
        callback = lodash_1.identity;
    options = (0, lodash_1.merge)({
        track: false
    }, options || {});
    if (options.track) {
        options.parents = { keys: [], paths: [], values: [] };
    }
    iterate(obj, '', 0, null, '', '', callback, options);
    return obj;
}
exports.eachDeep = eachDeep;
function keysDeep(obj, options) {
    options = (0, lodash_1.merge)({
        checkCircular: false,
        includeCircularPath: true
    }, options || {});
    var eachDeepOptions = {
        track: options.checkCircular
    };
    var res = [];
    eachDeep(obj, function (value, key, path, depth, parent, parentKey, parentPath, parents) {
        var circular = false;
        if (options.checkCircular) {
            circular = (0, lodash_1.indexOf)(parents.values, value) !== -1;
        }
        if (!circular || options.includeCircularPath) {
            res.push(path);
        }
        if (circular) {
            return false;
        }
    }, eachDeepOptions);
    return res;
}
exports.keysDeep = keysDeep;
