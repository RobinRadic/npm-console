"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usage = void 0;
function usage(text, append = false) {
    return Target => {
        Reflect.defineMetadata('usage', { text, append }, Target.prototype);
        return Target;
    };
}
exports.usage = usage;
//# sourceMappingURL=usage.js.map