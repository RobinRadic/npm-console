"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.binding = exports.singleton = exports.postConstruct = exports.tagged = exports.targetName = exports.unmanaged = exports.optional = exports.named = exports.decorate = exports.id = exports.injectable = exports.inject = exports.app = exports.ExitCode = exports.Application = void 0;
const inversify_inject_decorators_1 = __importDefault(require("inversify-inject-decorators"));
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const Application_1 = require("./Application");
var Application_2 = require("./Application");
Object.defineProperty(exports, "Application", { enumerable: true, get: function () { return Application_2.Application; } });
Object.defineProperty(exports, "ExitCode", { enumerable: true, get: function () { return Application_2.ExitCode; } });
exports.app = Application_1.Application.instance;
const { lazyInject } = (0, inversify_inject_decorators_1.default)(exports.app);
exports.inject = lazyInject;
var inversify_1 = require("inversify");
Object.defineProperty(exports, "injectable", { enumerable: true, get: function () { return inversify_1.injectable; } });
Object.defineProperty(exports, "id", { enumerable: true, get: function () { return inversify_1.id; } });
Object.defineProperty(exports, "decorate", { enumerable: true, get: function () { return inversify_1.decorate; } });
Object.defineProperty(exports, "named", { enumerable: true, get: function () { return inversify_1.named; } });
Object.defineProperty(exports, "optional", { enumerable: true, get: function () { return inversify_1.optional; } });
Object.defineProperty(exports, "unmanaged", { enumerable: true, get: function () { return inversify_1.unmanaged; } });
Object.defineProperty(exports, "targetName", { enumerable: true, get: function () { return inversify_1.targetName; } });
Object.defineProperty(exports, "tagged", { enumerable: true, get: function () { return inversify_1.tagged; } });
Object.defineProperty(exports, "postConstruct", { enumerable: true, get: function () { return inversify_1.postConstruct; } });
const singleton = (identifier, onActivation) => {
    let provider = (0, inversify_binding_decorators_1.fluentProvide)(identifier).inSingletonScope();
    if (onActivation) {
        provider.onActivation(onActivation);
    }
    return provider.done(true);
};
exports.singleton = singleton;
const binding = (serviceIdentifier) => {
    return (0, inversify_binding_decorators_1.provide)(serviceIdentifier, true);
};
exports.binding = binding;
//# sourceMappingURL=index.js.map