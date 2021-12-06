"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arg = void 0;
const shared_1 = require("@radic/shared");
function arg(description, required = false, options = {}) {
    return (Target, propertyKey, parameterIndex) => {
        if (!Reflect.hasMetadata('arguments', Target)) {
            Reflect.defineMetadata('arguments', [], Target);
        }
        let args = Reflect.getMetadata('arguments', Target);
        let paramTypes = Reflect.getMetadata('design:paramtypes', Target, propertyKey);
        let reflect = (0, shared_1.reflectParams)(Target[propertyKey], true);
        const { name, variadic, defaultValue } = reflect[parameterIndex];
        let definition = {
            index: parameterIndex,
            name,
            variadic,
            defaultValue,
            type: paramTypes[parameterIndex].name.toLowerCase(),
            description,
            options,
        };
        if (required === true) {
            definition.required = true;
        }
        args.push(definition);
    };
}
exports.arg = arg;
//# sourceMappingURL=arg.js.map