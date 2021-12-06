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
exports.ApacheServiceProvider = void 0;
const ApacheServer_1 = require("./ApacheServer");
const ApacheSite_1 = require("./ApacheSite");
const shared_1 = require("@radic/shared");
class ApacheServiceProvider extends shared_1.ServiceProvider {
    load() {
        this.config({
            key: 'servers.apache',
            defaults: {
                servers: [],
            },
        });
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            let a = 'a';
            for (const config of this.app.config.servers.apache.servers) {
                const server = new ApacheServer_1.ApacheServer(config.paths, ApacheSite_1.ApacheSite);
                this.app.servers.set(server.name, server);
                server.sites.each(site => this.app.sites.set(site.filename, site));
            }
        });
    }
}
exports.ApacheServiceProvider = ApacheServiceProvider;
//# sourceMappingURL=ApacheServiceProvider.js.map