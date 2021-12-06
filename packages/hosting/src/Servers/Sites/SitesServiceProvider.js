"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesServiceProvider = void 0;
const shared_1 = require("@radic/shared");
const SiteManager_1 = require("./SiteManager");
class SitesServiceProvider extends shared_1.ServiceProvider {
    register() {
        this.registerSites();
    }
    registerSites() {
        this.app.singleton('sites', SiteManager_1.SiteManager).addBindingGetter('sites');
    }
}
exports.SitesServiceProvider = SitesServiceProvider;
//# sourceMappingURL=SitesServiceProvider.js.map