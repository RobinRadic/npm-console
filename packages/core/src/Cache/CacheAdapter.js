"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCacheAdapter = void 0;
const isCacheAdapter = (val) => val && typeof val.getName === 'function';
exports.isCacheAdapter = isCacheAdapter;
//# sourceMappingURL=CacheAdapter.js.map