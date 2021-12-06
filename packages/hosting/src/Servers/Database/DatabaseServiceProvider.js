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
exports.DatabaseServiceProvider = void 0;
const shared_1 = require("@radic/shared");
const DatabaseManager_1 = require("./DatabaseManager");
const core_1 = require("@radic/core");
const typeorm_1 = require("typeorm");
const ConnectionHelper_1 = require("./ConnectionHelper");
(0, core_1.decorate)((0, core_1.injectable)(), typeorm_1.ConnectionManager);
class DatabaseServiceProvider extends shared_1.ServiceProvider {
    load() {
        this.config({
            key: 'db',
            defaults: {
                connectOnBoot: [],
                main: null,
                connections: {
                    bettersqlite3: [],
                    mongo: [],
                    mysql: [],
                    postgres: [],
                    sql: [],
                    sqlite: [],
                },
            },
        });
    }
    register() {
        this.app.singleton('db', DatabaseManager_1.DatabaseManager).addBindingGetter('db');
        this.app.singleton('db.connections', typeorm_1.ConnectionManager);
        this.app.singleton('db.helper', ConnectionHelper_1.ConnectionHelper);
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.db.updateConnections();
            yield Promise.all(this.app.config.db.connectOnBoot.map(name => this.app.db.connect(name)));
        });
    }
}
exports.DatabaseServiceProvider = DatabaseServiceProvider;
//# sourceMappingURL=DatabaseServiceProvider.js.map