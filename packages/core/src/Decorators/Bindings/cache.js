"use strict";
// lazy shorthands
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.caching = void 0;
const Cache_1 = require("../../Cache");
const Foundation_1 = require("../../Foundation");
const caching = (name, Adapter) => {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: () => {
                let manager = Foundation_1.app.get('cache');
                if (!manager.has(name)) {
                    if (!Adapter) {
                        Adapter = Cache_1.FileCacheAdapter;
                    }
                    manager.register(new Adapter(name));
                }
                return manager.get(name);
            },
            enumerable: true,
            configurable: true,
        });
    };
};
exports.caching = caching;
exports.cache = (0, Foundation_1.inject)('cache');
//# sourceMappingURL=cache.js.map