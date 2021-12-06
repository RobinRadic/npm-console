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
exports.SystemServiceProvider = void 0;
const shared_1 = require("@radic/shared");
const ServiceManager_1 = require("./ServiceManager");
const ProcessManager_1 = require("./ProcessManager");
const PATH_1 = require("./PATH");
const System_1 = require("./System");
const UserManager_1 = require("./UserManager");
const FilesystemServiceProvider_1 = require("./Filesystem/FilesystemServiceProvider");
class SystemServiceProvider extends shared_1.ServiceProvider {
    constructor() {
        super(...arguments);
        this.providers = [
            FilesystemServiceProvider_1.FilesystemServiceProvider,
        ];
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.config({
                key: 'system',
                defaults: {
                    processes: [],
                    services: [],
                },
            });
            this.config({
                key: 'servers',
                defaults: {
                    processes: [],
                    services: [],
                },
            });
        });
    }
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerUsers();
            this.registerPATH();
            this.registerProcesses();
            this.registerServices();
            this.registerSystem();
        });
    }
    registerUsers() {
        this.app.singleton('users', UserManager_1.UserManager).addBindingGetter('users');
    }
    registerPATH() {
        this.app.instance('path', new PATH_1.PATH()).addBindingGetter('path');
    }
    registerProcesses() {
        this.app.singleton('processes', ProcessManager_1.ProcessManager).addBindingGetter('processes');
    }
    registerServices() {
        this.app.singleton('services', ServiceManager_1.ServiceManager).addBindingGetter('services');
    }
    registerSystem() {
        this.app.singleton('system', System_1.System).addBindingGetter('system');
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([this.bootProcesses(), this.bootServices()]);
        });
    }
    bootProcesses() {
        return __awaiter(this, void 0, void 0, function* () {
            const processes = this.app.get('processes');
            yield processes.loadData();
            for (const name of this.app.config.system.processes) {
                processes.register(name);
            }
            yield Promise.all(processes.all().map(p => p.refresh()));
        });
    }
    bootServices() {
        return __awaiter(this, void 0, void 0, function* () {
            const services = this.app.get('services');
            for (const name of this.app.config.system.services) {
                services.register(name);
            }
            yield Promise.all(services.all().map(s => s.refresh()));
        });
    }
}
exports.SystemServiceProvider = SystemServiceProvider;
//# sourceMappingURL=SystemServiceProvider.js.map