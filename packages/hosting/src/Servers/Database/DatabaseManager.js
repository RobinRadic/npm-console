"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseManager = void 0;
const core_1 = require("@radic/core");
const typeorm_1 = require("typeorm");
const ConnectionHelper_1 = require("./ConnectionHelper");
let DatabaseManager = class DatabaseManager {
    constructor() {
        this.connections = {};
    }
    get config() { return this._config.db; }
    getConnectionConfigurations() { return Object.values(this.config.connections); }
    getDatabaseHelper() {
        return this.helper;
    }
    getConnectionNames() {
        let names = [];
        Object.values(this.config.connections).forEach(c => c.forEach(c => names.push(c.name)));
        return names;
    }
    getConnectionConfiguration(name) {
        let servers = this.getConnectionConfigurations();
        for (const serverConfig of servers) {
            for (const config of serverConfig) {
                if (config.name === name) {
                    return config;
                }
            }
        }
    }
    updateConnections() {
        let servers = this.getConnectionConfigurations();
        for (const serverConfig of servers) {
            for (const config of serverConfig) {
                if (!this.manager.has(config.name)) {
                    this.createConnection(config);
                }
            }
        }
    }
    createConnection(options) {
        return this.connections[options.name] = this.manager.create(options);
    }
    exist(name) { return this.getConnectionNames().includes(name); }
};
__decorate([
    core_1.config,
    __metadata("design:type", Object)
], DatabaseManager.prototype, "_config", void 0);
__decorate([
    (0, core_1.inject)('db.connections'),
    __metadata("design:type", typeorm_1.ConnectionManager)
], DatabaseManager.prototype, "manager", void 0);
__decorate([
    (0, core_1.inject)('db.helper'),
    __metadata("design:type", ConnectionHelper_1.ConnectionHelper)
], DatabaseManager.prototype, "helper", void 0);
DatabaseManager = __decorate([
    (0, core_1.injectable)(),
    __metadata("design:paramtypes", [])
], DatabaseManager);
exports.DatabaseManager = DatabaseManager;
//# sourceMappingURL=DatabaseManager.js.map