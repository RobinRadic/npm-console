"use strict";
exports.__esModule = true;
exports.ServiceProvider = exports.isServiceProviderClass = void 0;
var isServiceProviderClass = function (value) { return !(value instanceof ServiceProvider); };
exports.isServiceProviderClass = isServiceProviderClass;
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(app) {
        this.app = app;
        this.deferred = false;
    }
    ServiceProvider.prototype.config = function (config) {
        this.app.addConfig(config);
    };
    return ServiceProvider;
}());
exports.ServiceProvider = ServiceProvider;
