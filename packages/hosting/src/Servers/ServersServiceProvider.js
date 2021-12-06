"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServersServiceProvider = void 0;
const shared_1 = require("@radic/shared");
const ServerManager_1 = require("./ServerManager");
const Sites_1 = require("./Sites");
const Apache_1 = require("./Apache");
const Nginx_1 = require("./Nginx");
class ServersServiceProvider extends shared_1.ServiceProvider {
    constructor() {
        super(...arguments);
        this.providers = [
            Apache_1.ApacheServiceProvider,
            Nginx_1.NginxServiceProvider,
            Sites_1.SitesServiceProvider
        ];
    }
    load() {
        this.config({
            key: 'servers',
            defaults: {}
        });
    }
    register() {
        this.app.singleton('servers', ServerManager_1.ServerManager).addBindingGetter('servers');
    }
}
exports.ServersServiceProvider = ServersServiceProvider;
//# sourceMappingURL=ServersServiceProvider.js.map