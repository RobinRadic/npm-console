"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examples = exports.example = void 0;
function example(example, description) {
    return (Target) => {
        if (!Reflect.hasMetadata('examples', Target.prototype)) {
            Reflect.defineMetadata('examples', [], Target.prototype);
        }
        const examples = Reflect.getMetadata('examples', Target.prototype);
        examples.push({ example, description });
        Reflect.defineMetadata('examples', examples, Target.prototype);
        return Target;
    };
}
exports.example = example;
function examples(examples) {
    return Target => {
        if (!Reflect.hasMetadata('examples', Target.prototype)) {
            Reflect.defineMetadata('examples', [], Target.prototype);
        }
        const _examples = Reflect.getMetadata('examples', Target.prototype);
        Object.entries(examples).forEach(([example, description]) => {
            _examples.push({ example, description });
        });
        Reflect.defineMetadata('examples', _examples, Target.prototype);
        return Target;
    };
}
exports.examples = examples;
//# sourceMappingURL=example.js.map