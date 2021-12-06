"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostingServiceProvider = void 0;
const shared_1 = require("@radic/shared");
const Hosts_1 = require("./Hosts");
const Servers_1 = require("./Servers");
const PHP_1 = require("./PHP");
const Database_1 = require("./Servers/Database");
class HostingServiceProvider extends shared_1.ServiceProvider {
    constructor() {
        super(...arguments);
        this.providers = [
            Hosts_1.HostFileServiceProvider,
            PHP_1.PHPServiceProvider,
            Servers_1.ServersServiceProvider,
            Database_1.DatabaseServiceProvider
        ];
    }
}
exports.HostingServiceProvider = HostingServiceProvider;
//# sourceMappingURL=HostingServiceProvider.js.map