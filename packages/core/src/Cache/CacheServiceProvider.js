"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheServiceProvider = void 0;
const CacheManager_1 = require("./CacheManager");
const shared_1 = require("@radic/shared");
const FileCacheAdapter_1 = require("./FileCacheAdapter");
class CacheServiceProvider extends shared_1.ServiceProvider {
    load() {
        this.app.addConfig({
            key: 'cache',
            defaults: {
                default: 'main',
                adapters: [
                    new FileCacheAdapter_1.FileCacheAdapter({ name: 'main', compression: true }),
                ],
            },
        });
    }
    register() {
        this.registerCache();
    }
    registerCache() {
        this.app.singleton('cache', CacheManager_1.CacheManager).addBindingGetter('cache');
        this.app.onActivation('cache', (context, manager) => {
            let config = this.app.config.get('cache', {
                default: 'main',
                adapters: [],
            });
            config.adapters.forEach(adapter => manager.register(adapter));
            manager.use(config.default);
            return manager;
        });
    }
}
exports.CacheServiceProvider = CacheServiceProvider;
//# sourceMappingURL=CacheServiceProvider.js.map