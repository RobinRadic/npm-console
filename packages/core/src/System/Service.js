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
exports.Service = exports.ServiceStatus = void 0;
const systeminformation_1 = require("systeminformation");
const child_process_1 = require("child_process");
const Foundation_1 = require("../Foundation");
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus["ERROR"] = "";
    ServiceStatus["ACTIVE"] = "Active: active (running)";
    ServiceStatus["INACTIVE"] = "Active: inactive (dead) ";
})(ServiceStatus = exports.ServiceStatus || (exports.ServiceStatus = {}));
(function (ServiceStatus) {
    ServiceStatus.isActive = (s) => s === ServiceStatus.ACTIVE;
    ServiceStatus.isError = (s) => s === ServiceStatus.ERROR;
    ServiceStatus.isInactive = (s) => s === ServiceStatus.INACTIVE;
})(ServiceStatus = exports.ServiceStatus || (exports.ServiceStatus = {}));
class Service {
    constructor(name) {
        this.name = name;
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            let service = yield (0, systeminformation_1.services)(this.name);
            Object.assign(this, service.shift());
            return this;
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            Foundation_1.app.events.emit(`service:${this.name}:starting`, this);
            yield this.exec('start');
            Foundation_1.app.events.emit(`service:${this.name}:started`, this);
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            Foundation_1.app.events.emit(`service:${this.name}:stoping`, this);
            yield this.exec('stop');
            Foundation_1.app.events.emit(`service:${this.name}:stopped`, this);
        });
    }
    restart() {
        return __awaiter(this, void 0, void 0, function* () {
            Foundation_1.app.events.emit(`service:${this.name}:restart`, this);
            let result = yield this.exec('restart');
            Foundation_1.app.events.emit(`service:${this.name}:restarted`, this);
            return result;
        });
    }
    reload() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec('reload');
        });
    }
    forceReload() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec('force-reload');
        });
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            let status = yield this.exec('status');
            if (status.includes(ServiceStatus.ACTIVE)) {
                return ServiceStatus.ACTIVE;
            }
            if (status.includes(ServiceStatus.INACTIVE)) {
                return ServiceStatus.INACTIVE;
            }
            throw new Error('Unknown service status');
        });
    }
    isActive() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.status()) === ServiceStatus.ACTIVE;
        });
    }
    isInactive() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.status()) === ServiceStatus.ACTIVE;
        });
    }
    exec(command) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, child_process_1.exec)(`sudo service ${this.name} ${command}`, {}, (error, stdout, stderr) => {
                    if (stderr)
                        throw new Error(stderr);
                    resolve(stdout);
                });
            });
        });
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map