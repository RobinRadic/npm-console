"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NginxServer = void 0;
const NginxSite_1 = require("./NginxSite");
const HTTPServer_1 = require("../HTTPServer");
class NginxServer extends HTTPServer_1.HTTPServer {
    constructor() {
        super(...arguments);
        this.name = 'nginx';
        this.serviceName = 'nginx';
        this.SiteClass = NginxSite_1.NginxSite;
    }
}
exports.NginxServer = NginxServer;
//# sourceMappingURL=NginxServer.js.map