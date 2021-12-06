"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNginxContext = exports.isDetailedOverrides = exports.isDetailedOverride = exports.isSimpleOverride = exports.nginxContexts = void 0;
exports.nginxContexts = ['events', 'main', 'http', 'mail', 'stream', 'server', 'location', 'any', 'if in location', 'limit_except', 'if', 'upstream'];
const isSimpleOverride = (val) => typeof val === 'string';
exports.isSimpleOverride = isSimpleOverride;
const isDetailedOverride = (val) => typeof val === 'object' && (val.in || val.not || val.replace || val.prepend || val.append);
exports.isDetailedOverride = isDetailedOverride;
const isDetailedOverrides = (val) => Array.isArray(val) && val.filter(o => (0, exports.isDetailedOverride)(o)).length === val.length;
exports.isDetailedOverrides = isDetailedOverrides;
const isNginxContext = (val) => exports.nginxContexts.includes(val);
exports.isNginxContext = isNginxContext;
//# sourceMappingURL=types.js.map