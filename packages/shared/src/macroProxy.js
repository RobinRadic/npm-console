"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.macroProxy = void 0;
function macroProxy(obj) {
    const macros = {};
    const hasMacro = (name) => macros[name] !== undefined;
    const macro = (name, macro) => {
        macros[name] = macro;
        return this;
    };
    const runMacro = function (name, ...args) {
        const result = macros[name].apply(this, args);
        return result === undefined ? this : result;
    };
    const proxy = new Proxy(obj, {
        get(target, p, receiver) {
            if (Reflect.has(target, p)) {
                return Reflect.get(target, p, receiver);
            }
            let n = p.toString();
            if (n === 'macro')
                return macro.bind(proxy);
            if (n === 'runMacro')
                return runMacro.bind(proxy);
            if (n === 'hasMacro')
                return hasMacro.bind(proxy);
            if (hasMacro(n)) {
                return macros[n].bind(proxy);
            }
        },
    });
    return proxy;
}
exports.macroProxy = macroProxy;
//# sourceMappingURL=macroProxy.js.map