"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApacheServer = void 0;
const ApacheSite_1 = require("./ApacheSite");
const HTTPServer_1 = require("../HTTPServer");
class ApacheServer extends HTTPServer_1.HTTPServer {
    constructor() {
        super(...arguments);
        this.name = 'apache';
        this.serviceName = 'apache2';
        this.SiteClass = ApacheSite_1.ApacheSite;
    }
}
exports.ApacheServer = ApacheServer;
//# sourceMappingURL=ApacheServer.js.map