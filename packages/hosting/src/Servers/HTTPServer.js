"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPServer = void 0;
const Server_1 = require("./Server");
const glob_1 = require("glob");
const path_1 = require("path");
const shared_1 = require("@radic/shared");
const core_1 = require("@radic/core");
class HTTPServer extends Server_1.Server {
    constructor(paths, SiteClass) {
        super();
        this.paths = paths;
        this.SiteClass = SiteClass;
        this.paths = this.resolvePaths();
        const sites = this.getAvailableSitePaths().map(path => {
            let site = new this.SiteClass(this, path);
            return [site.filename, site];
        }).reduce(shared_1.objectify, {});
        this.sites = new core_1.Collection(sites);
    }
    get sitesFileExtensionsGlob() {
        return this.paths.sitesFileExtensions.length === 1 ? this.paths.sitesFileExtensions[0] : `{${this.paths.sitesFileExtensions.join(',')}}`;
    }
    getAvailableSitePaths() { return glob_1.glob.sync((0, path_1.join)(this.paths.sitesAvailable, `*.${this.sitesFileExtensionsGlob}`)); }
    getEnabledSitePaths() { return glob_1.glob.sync((0, path_1.join)(this.paths.sitesEnabled, `*.${this.sitesFileExtensionsGlob}`)); }
    resolvePaths() {
        let e = Object.entries(this.paths);
        let paths = {};
        for (const [key, value] of e) {
            if (Array.isArray(value)) {
                paths[key] = value.map(p => this.resolvePath(p));
            }
            else if (typeof value === 'string') {
                paths[key] = this.resolvePath(value);
            }
        }
        return paths;
    }
    resolvePath(path) {
        if (path.includes('{')) {
            let keys = path.match(/{(.*?)}/gm).map(key => key.replace('{', '').replace('}', ''));
            for (const key of keys) {
                let value = this.paths[key];
                if (value === undefined || typeof value !== 'string')
                    continue;
                value = this.resolvePath(value);
                path = path.replace(`{${key}}`, value);
            }
        }
        return path;
    }
}
exports.HTTPServer = HTTPServer;
//# sourceMappingURL=HTTPServer.js.map