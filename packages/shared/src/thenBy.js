"use strict";
//https://github.com/Teun/thenBy.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstBy = void 0;
function identity(v) { return v; }
function ignoreCase(v) { return typeof (v) === "string" ? v.toLowerCase() : v; }
function makeCompareFunction(f, opt) {
    opt = typeof (opt) === "object" ? opt : { direction: opt };
    if (typeof (f) != "function") {
        var prop = f;
        // make unary function
        f = function (v1) { return !!v1[prop] ? v1[prop] : ""; };
    }
    if (f.length === 1) {
        // f is a unary function mapping a single item to its sort score
        var uf = f;
        var preprocess = opt.ignoreCase ? ignoreCase : identity;
        var cmp = opt.cmp || function (v1, v2) { return v1 < v2 ? -1 : v1 > v2 ? 1 : 0; };
        f = function (v1, v2) { return cmp(preprocess(uf(v1)), preprocess(uf(v2))); };
    }
    const descTokens = { "-1": '', desc: '' };
    if (opt.direction in descTokens)
        return function (v1, v2) { return -f(v1, v2); };
    return f;
}
/* adds a secondary compare function to the target function (`this` context)
   which is applied in case the first one returns 0 (equal)
   returns a new compare function, which has a `thenBy` method as well */
function tb(func, opt) {
    /* should get value false for the first call. This can be done by calling the
    exported function, or the firstBy property on it (for es6 module compatibility)
    */
    var x = (typeof (this) == "function" && !this.firstBy) ? this : false;
    var y = makeCompareFunction(func, opt);
    var f = x ? function (a, b) {
        return x(a, b) || y(a, b);
    }
        : y;
    f.thenBy = tb;
    return f;
}
function firstBy(first, direction) {
    return tb(first, direction);
}
exports.firstBy = firstBy;
//# sourceMappingURL=thenBy.js.map