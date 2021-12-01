"use strict";
exports.__esModule = true;
exports.Diff = void 0;
var util = require("util");
var lodash_1 = require("lodash");
var eachDeep_1 = require("./eachDeep");
var kindOf_1 = require("./kindOf");
var log = console.log;
var exit = process.exit;
var ins = util.inspect;
function getKeysSorted(obj) {
    var keys = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            keys.push(k);
        }
    }
    return keys.sort(function (a, b) { return a > b ? 1 : a < b ? -1 : 0; });
}
function twoDee(m, n) {
    var c = [];
    for (var i = 0; i < m; i++) {
        c[i] = [];
        for (var j = 0; j < n; j++)
            c[i][j] = 0;
    }
    return c;
}
function deepEqual(a, b) {
    if (whatis(a) !== whatis(b)) {
        return false;
    }
    if (whatis(a) === 'object') {
        for (var k in a) {
            if (a.hasOwnProperty(k)) {
                if (!deepEqual(a[k], b[k])) {
                    return false;
                }
            }
        }
        for (var k in b) {
            if (b.hasOwnProperty(k)) {
                if (!deepEqual(a[k], b[k])) {
                    return false;
                }
            }
        }
        return true;
    }
    if (whatis(a) === 'array') {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++)
            if (!deepEqual(a[i], b[i])) {
                return false;
            }
        return true;
    }
    return (a === b);
}
function makeLCSArray2(x, y) {
    var c = twoDee(x.length + 1, y.length + 1);
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < y.length; j++) {
            if (deepEqual(x[i], y[j])) {
                c[i + 1][j + 1] = c[i][j] + 1;
            }
            else {
                var m = Math.max(c[i + 1][j], c[i][j + 1]);
                c[i + 1][j + 1] = m;
            }
        }
    }
    return c;
}
function makeLCSArray(x, y) {
    var c = twoDee(x.length + 1, y.length + 1);
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < y.length; j++) {
            if (x[i] === y[j]) {
                c[i + 1][j + 1] = c[i][j] + 1;
            }
            else {
                var m = Math.max(c[i + 1][j], c[i][j + 1]);
                c[i + 1][j + 1] = m;
            }
        }
    }
    return c;
}
function whatis(x) {
    if (x === null) {
        return 'null';
    }
    if (x === undefined) {
        return 'undefined';
    }
    var tof = typeof (x);
    if (tof === 'number' || tof === 'string' || tof === 'boolean') {
        return 'scalar';
    }
    if (tof === 'object') {
        if (x.constructor === Array) {
            return 'array';
        }
        else {
            return 'object';
        }
    }
    return 'unknown';
}
function makeArrayKeys(a) {
    var k = [];
    for (var i = 0; i < a.length; i++)
        k.push(i);
    return k;
}
function arrayDiff(a, b) {
    var typeA = whatis(a);
    var typeB = whatis(b);
    var list = [];
    if (typeA !== 'array' || typeB !== 'array') {
        log('ERROR: top level types should be array');
        return null;
    }
    var cc = makeLCSArray2(a, b);
    function diffInternal(c, x, y, i, j) {
        if (i > 0 && j > 0 && deepEqual(x[i - 1], y[j - 1])) {
            diffInternal(c, x, y, i - 1, j - 1);
            var va = x[i - 1];
            var o = {
                action: 'common',
                type: whatis(va)
            };
            if (o.type === 'object') {
                o.diff = objectDiff(va, va);
            }
            else if (o.type === 'array') {
                o.diff = arrayDiff(va, va);
            }
            else {
                o.value = va;
            }
            list.push(o);
        }
        else {
            if (j > 0 && (i === 0 || c[i][j - 1] >= c[i - 1][j])) {
                diffInternal(c, x, y, i, j - 1);
                var vb = y[j - 1];
                var o = {
                    action: 'add',
                    type: whatis(vb)
                };
                if (o.type === 'object') {
                    o.diff = objectDiff({}, vb);
                }
                else if (o.type === 'array') {
                    o.diff = arrayDiff([], vb);
                }
                else {
                    o.value = vb;
                }
                list.push(o);
            }
            else if (i > 0 && (j === 0 || c[i][j - 1] < c[i - 1][j])) {
                diffInternal(c, x, y, i - 1, j);
                var va = x[i - 1];
                var o = {
                    action: 'remove',
                    type: whatis(va)
                };
                if (o.type === 'object') {
                    o.diff = objectDiff(va, {});
                }
                else if (o.type === 'array') {
                    o.diff = arrayDiff(va, []);
                }
                else {
                    o.value = va;
                }
                list.push(o);
            }
        }
    }
    diffInternal(cc, a, b, cc.length - 1, cc[0].length - 1);
    return list;
}
function objectDiff(a, b) {
    var keysA, keysB;
    var typeA = whatis(a);
    var typeB = whatis(b);
    var list = [];
    if (typeA !== typeB) {
        log('ERROR: top level types should be the same: had ' + typeA +
            ' and ' + typeB);
        return null;
    }
    if (typeA === 'array') {
        return arrayDiff(a, b);
    }
    keysA = getKeysSorted(a);
    keysB = getKeysSorted(b);
    var cc = makeLCSArray(keysA, keysB);
    function diffInternal(c, x, y, i, j) {
        if (i > 0 && j > 0 && x[i - 1] === y[j - 1]) {
            diffInternal(c, x, y, i - 1, j - 1);
            var key = x[i - 1];
            var va = a[key];
            var vb = b[key];
            var wva = whatis(va);
            var wvb = whatis(vb);
            if (wva === wvb && (wva === 'object' || wva === 'array')) {
                list.push({
                    key: key,
                    type: wva,
                    action: 'common',
                    diff: objectDiff(va, vb)
                });
            }
            else if (va === vb) {
                list.push({
                    action: 'common',
                    key: key,
                    type: wva,
                    value: va
                });
            }
            else {
                var orem = {
                    action: 'remove',
                    key: key,
                    type: wva,
                    value: va
                };
                if (orem.type === 'object') {
                    orem.diff = objectDiff(orem.value, {});
                }
                else if (orem.type === 'array') {
                    orem.diff = objectDiff(orem.value, []);
                }
                list.push(orem);
                var oadd = {
                    action: 'add',
                    key: key,
                    type: wvb,
                    value: vb
                };
                if (oadd.type === 'object') {
                    oadd.diff = objectDiff({}, oadd.value);
                }
                else if (oadd.type === 'array') {
                    oadd.diff = objectDiff([], oadd.value);
                }
                list.push(oadd);
            }
        }
        else {
            if (j > 0 && (i === 0 || c[i][j - 1] >= c[i - 1][j])) {
                diffInternal(c, x, y, i, j - 1);
                var key = y[j - 1];
                var o = {
                    action: 'add',
                    key: key,
                    type: whatis(b[key])
                };
                if (o.type === 'object') {
                    o.diff = objectDiff({}, b[key]);
                }
                else if (o.type === 'array') {
                    o.diff = objectDiff([], b[key]);
                }
                else {
                    o.value = b[key];
                }
                list.push(o);
            }
            else if (i > 0 && (j === 0 || c[i][j - 1] < c[i - 1][j])) {
                diffInternal(c, x, y, i - 1, j);
                var key = x[i - 1];
                var o = {
                    action: 'remove',
                    key: key,
                    type: whatis(a[key])
                };
                if (o.type === 'object') {
                    o.diff = objectDiff(a[key], {});
                }
                else if (o.type === 'array') {
                    o.diff = objectDiff(a[key], []);
                }
                else {
                    o.value = a[key];
                }
                list.push(o);
            }
        }
    }
    diffInternal(cc, keysA, keysB, cc.length - 1, cc[0].length - 1);
    return list;
}
function printDiff(a, topType) {
    var ind = 1;
    function indent() {
        var s = '';
        while (s.length < ind * 2)
            s += ' ';
        return s;
    }
    function recurs(a, k) {
        var _loop_1 = function (i) {
            var comma = function () { return ((i + 1 < a.length) ? ',' : ''); };
            var o = a[i];
            var ch = o.action === 'add' ? '+' :
                o.action === 'remove' ? '-' : ' ';
            if (o.type === 'object' || o.type === 'array') {
                var del = o.type === 'object' ? ['{', '}'] : ['[', ']'];
                log(ch + indent() + (k ? o.key + ': ' : '') + del[0]);
                ind++;
                recurs(o.diff, o.type === 'object');
                ind--;
                log(ch + indent() + del[1] + comma());
            }
            else {
                log(ch + indent() + (k ? o.key + ': ' : '') +
                    JSON.stringify(o.value) + comma());
            }
        };
        for (var i = 0; i < a.length; i++) {
            _loop_1(i);
        }
    }
    log(topType === 'object' ? '{' : '[');
    recurs(a, topType === 'object');
    log(topType === 'object' ? '}' : ']');
}
var searchDeep = function (tree, childrenKey, objToFindBy) {
    var objToReturn = [];
    function innerFunc(tree, childrenKey, objToFindBy) {
        var findKeys = Object.keys(objToFindBy);
        var findSuccess = false;
        findKeys.forEach(function (key) {
            (0, lodash_1.isEqual)(tree[key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
        });
        if (findSuccess) {
            objToReturn.push(tree);
        }
        if (tree.hasOwnProperty(childrenKey)) {
            for (var _i = 0, _a = tree[childrenKey]; _i < _a.length; _i++) {
                var n = _a[_i];
                innerFunc(n, childrenKey, objToFindBy);
            }
        }
    }
    innerFunc(tree, childrenKey, objToFindBy);
    return objToReturn;
};
var Diff = /** @class */ (function () {
    function Diff(o, o2) {
        this.o = o;
        this.o2 = o2;
        this.diff = objectDiff(o, o2);
    }
    Diff.make = function (a, b) {
        return new this(a, b);
    };
    Diff.prototype.getDiff = function () {
        return this.diff;
    };
    Diff.prototype.printDiff = function () {
        printDiff(this.diff, whatis(this.o));
    };
    Diff.getChangedItems = function (o, o2) {
        var diff = new Diff(o, o2);
        var items = {};
        var changed = [];
        (0, eachDeep_1.eachDeep)(diff.diff, function (_value, _key, path, depth, parent, parentKey, parentPath, parents) {
            if (Diff.isItem(_value)) {
                var action = _value.action, type = _value.type, diff_1 = _value.diff, key = _value.key, value = _value.value;
                if (key === undefined && value === undefined) {
                    return;
                }
                if (action !== 'common') {
                    var cparentKey = parents.values.filter(function (v) { return Diff.isItemWithKey(v); }).map(function (i) { return i.key; }).join('.');
                    var ckey = (cparentKey ? cparentKey + '.' : '') + key;
                    changed.push({ action: action, type: type, key: key, value: value, _key: _key, parentKey: parentKey, ckey: ckey, cparentKey: cparentKey, depth: depth, parentPath: parentPath, parents: (0, lodash_1.cloneDeep)(parents), oldValue: (0, lodash_1.get)(o2, ckey), oldParentValue: (0, lodash_1.get)(o2, cparentKey) });
                    if (action === 'remove') {
                        (0, lodash_1.unset)(items, ckey);
                        if (type === 'object' && value === undefined) {
                            (0, lodash_1.set)(items, cparentKey, (0, lodash_1.get)(o2, cparentKey));
                        }
                    }
                    if (action === 'add') {
                        if ((0, lodash_1.has)(o2, cparentKey) && Array.isArray((0, lodash_1.get)(o2, cparentKey))) {
                            var parentValue = (0, lodash_1.get)(items, cparentKey, []);
                            if (value !== undefined && parents.values[parents.values.length - 1].type === 'array') {
                                parentValue.push(value);
                            }
                            else {
                                parentValue.push((0, lodash_1.set)({}, key, value));
                            }
                            (0, lodash_1.set)(items, cparentKey, parentValue);
                        }
                        else {
                            (0, lodash_1.set)(items, ckey, value);
                        }
                        // _.set(items, ckey, this.get(ckey));
                    }
                }
            }
        }, { track: true });
        return { diff: diff, items: items, changed: changed };
    };
    return Diff;
}());
exports.Diff = Diff;
(function (Diff) {
    Diff.isItem = function (value) { return value && typeof value === 'object' && (0, kindOf_1.isString)(value.type); };
    Diff.isItemWithKey = function (value) { return Diff.isItem(value) && (0, kindOf_1.isString)(value.key); };
    Diff.isItemWithValue = function (value) { return Diff.isItem(value) && (0, kindOf_1.isString)(value.value); };
    Diff.isItemWithKeyValue = function (value) { return Diff.isItemWithKey(value) && Diff.isItemWithValue(value); };
})(Diff = exports.Diff || (exports.Diff = {}));
exports.Diff = Diff;
