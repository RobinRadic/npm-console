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
exports.PHPServiceProvider = void 0;
const core_1 = require("@radic/core");
const PHPManager_1 = require("./PHPManager");
const shared_1 = require("@radic/shared");
class PHPServiceProvider extends shared_1.ServiceProvider {
    constructor() {
        super(...arguments);
        this.deferred = true;
    }
    load() {
        this.config({
            key: 'php',
            defaults: {
                versions: [],
            },
        });
    }
    register() {
        this.registerPhpManager();
    }
    registerPhpManager() {
        this.app.singleton('php', PHPManager_1.PHPManager).addBindingGetter('php');
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.app.cache.has('php')) {
                this.app.cache.register(new core_1.FileCacheAdapter({
                    name: 'php'
                }));
            }
            yield Promise.all(this.app.config.php.versions.map((v) => __awaiter(this, void 0, void 0, function* () {
                const phpInfo = yield this.app.php.getPhpInfoByPath(v.binPath);
                this.app.php.createAdd(phpInfo);
            })));
        });
    }
}
exports.PHPServiceProvider = PHPServiceProvider;
//# sourceMappingURL=PHPServiceProvider.js.map