"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCacheAdapter = void 0;
const Storage_1 = require("../Storage");
const Foundation_1 = require("../Foundation");
// noinspection ES6UnusedImports
const lodash_1 = require("lodash");
class FileCacheAdapter {
    constructor(options) {
        this.options = options;
        this.storage = new Storage_1.DirectoryStorage({
            basePath: Foundation_1.app.paths.env.cache(),
            json: {
                compression: options.compression,
            },
        });
        if (!this.storage.exists(this.fileName)) {
            this.setData({});
        }
    }
    get name() { return this.options.name; }
    get fileName() { return this.name + '.json'; }
    getData() { return this.storage.readJson(this.fileName); }
    setData(data) {
        this.storage.writeJson(this.fileName, data);
        return this;
    }
    getType() { return 'file'; }
    getName() { return this.name; }
    createCacheItem(value, ttl) {
        let item = {
            created: Date.now(),
            ttl,
            value
        };
        return item;
    }
    put(key, value, ttl) {
        let data = this.getData();
        data[key] = this.createCacheItem(value, ttl);
        return this.setData(data);
    }
    has(key) { return (0, lodash_1.has)(this.getData(), key); }
    get(key, defaultValue) {
        if (this.has(key)) {
            return this.getCacheItem(key).value;
        }
        return defaultValue;
    }
    getCacheItem(key) {
        if (this.has(key)) {
            let item = (0, lodash_1.get)(this.getData(), key);
            if (item.ttl) {
                if (item.created + item.ttl < Date.now()) {
                    this.del(key);
                    return;
                }
            }
            return item;
        }
    }
    del(key) {
        let data = this.getData();
        (0, lodash_1.unset)(data, key);
        return this.setData(data);
    }
    clear() { return this.setData({}); }
    size() { return this.storage.stat(this.fileName).size; }
    keys() { return Object.keys(this.getData()); }
}
exports.FileCacheAdapter = FileCacheAdapter;
//# sourceMappingURL=FileCacheAdapter.js.map