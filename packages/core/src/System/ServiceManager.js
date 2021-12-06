"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceManager = void 0;
const Manager_1 = require("../Support/Manager");
const Service_1 = require("./Service");
const shared_1 = require("@radic/shared");
class ServiceManager extends Manager_1.Manager {
    register(name) {
        if (!this.has(name)) {
            this.set(name, new Service_1.Service(name));
        }
        return this;
    }
    each(cb) {
        return __awaiter(this, void 0, void 0, function* () {
            let services = this.all();
            if ((0, shared_1.isPromise)(cb)) {
                yield Promise.all(services.map(s => cb(s)));
                return this;
            }
            services.forEach(s => cb(s));
            return this;
        });
    }
    refreshAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.each((s) => __awaiter(this, void 0, void 0, function* () { return s.refresh(); }));
        });
    }
    startAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.each((s) => __awaiter(this, void 0, void 0, function* () { return s.start(); }));
        });
    }
    stopAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.each((s) => __awaiter(this, void 0, void 0, function* () { return s.stop(); }));
        });
    }
    restartAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.each((s) => __awaiter(this, void 0, void 0, function* () { return s.restart(); }));
        });
    }
    reloadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.each((s) => __awaiter(this, void 0, void 0, function* () { return s.reload(); }));
        });
    }
    forceReloadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.each((s) => __awaiter(this, void 0, void 0, function* () { return s.forceReload(); }));
        });
    }
}
exports.ServiceManager = ServiceManager;
//# sourceMappingURL=ServiceManager.js.map