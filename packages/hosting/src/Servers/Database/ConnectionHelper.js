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
exports.ConnectionHelper = void 0;
const inversify_1 = require("inversify");
const core_1 = require("@radic/core");
const typeorm_1 = require("typeorm");
let ConnectionHelper = class ConnectionHelper {
    use(name, options) {
        this.name = name;
        this.con = this.manager.get(name);
        if (options) {
            let newopts = Object.assign(Object.assign({}, this.con.options), options);
            this.con = this.manager.create(newopts);
        }
        return this;
    }
    isConnected() { return this.con && this.con.isConnected; }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            let connection = this.manager.get(this.name);
            if (!connection.isConnected) {
                yield connection.connect();
            }
            return connection;
        });
    }
    listDatabases() {
        return __awaiter(this, void 0, void 0, function* () {
            let rows = yield this.con.query('show databases;');
            let names = [];
            for (const row of rows) {
                names.push(row['Database']);
            }
            return names;
        });
    }
    dropDatabase(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.con.query(`drop database \`${name}\``);
        });
    }
    createDatabase(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.con.query(`create schema \`${name}\``);
        });
    }
    hasDatabase(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.listDatabases()).includes(name);
        });
    }
};
__decorate([
    (0, core_1.inject)('db.connections'),
    __metadata("design:type", typeorm_1.ConnectionManager)
], ConnectionHelper.prototype, "manager", void 0);
ConnectionHelper = __decorate([
    (0, inversify_1.injectable)()
], ConnectionHelper);
exports.ConnectionHelper = ConnectionHelper;
//# sourceMappingURL=ConnectionHelper.js.map