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
exports.CoreServiceProvider = void 0;
const Cache_1 = require("./Cache");
const System_1 = require("./System");
const shared_1 = require("@radic/shared");
class CoreServiceProvider extends shared_1.ServiceProvider {
    constructor() {
        super(...arguments);
        this.providers = [
            Cache_1.CacheServiceProvider,
            System_1.SystemServiceProvider,
        ];
    }
    register() {
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.CoreServiceProvider = CoreServiceProvider;
//# sourceMappingURL=CoreServiceProvider.js.map