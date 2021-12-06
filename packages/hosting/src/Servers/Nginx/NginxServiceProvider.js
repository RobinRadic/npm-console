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
exports.NginxServiceProvider = void 0;
const NginxServer_1 = require("./NginxServer");
const NginxSite_1 = require("./NginxSite");
const types_1 = require("./types");
const shared_1 = require("@radic/shared");
class NginxServiceProvider extends shared_1.ServiceProvider {
    load() {
        this.config({
            key: 'servers.nginx',
            defaults: {
                servers: [],
            },
        });
    }
    register() {
        this.app.binding('nginx.types.fetcher', types_1.Fetcher);
        this.app.binding('nginx.types.collector', types_1.Collector);
        this.app.bind('nginx.types.generator.factory').toFactory(context => (collected) => {
            this.app.bind('nginx.types.collector:collected').toConstantValue(collected)
                .onActivation((context1, injectable) => {
                context1.container.unbind('nginx.types.collector:collected');
                return injectable;
            });
            return context.container.get('nginx.types.generator');
        });
        this.app.binding('nginx.types.generator', types_1.TypeGenerator);
    }
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const config of this.app.config.servers.nginx.servers) {
                const server = new NginxServer_1.NginxServer(config.paths, NginxSite_1.NginxSite);
                this.app.servers.set(server.name, server);
                server.sites.each(site => this.app.sites.set(site.filename, site));
            }
        });
    }
}
exports.NginxServiceProvider = NginxServiceProvider;
//# sourceMappingURL=NginxServiceProvider.js.map