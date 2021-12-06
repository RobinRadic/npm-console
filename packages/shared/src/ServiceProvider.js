"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = exports.isServiceProviderClass = void 0;
const isServiceProviderClass = (value) => !(value instanceof ServiceProvider);
exports.isServiceProviderClass = isServiceProviderClass;
class ServiceProvider {
    constructor(app) {
        this.app = app;
        this.deferred = false;
    }
    config(config) {
        this.app.addConfig(config);
    }
}
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=ServiceProvider.js.map