"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
const CacheAdapter_1 = require("./CacheAdapter");
const Foundation_1 = require("../Foundation");
// @ts-ignore
let CacheManager = class CacheManager {
    constructor() {
        this.adapters = {};
        const self = this;
        return new Proxy(this, {
            get(target, p, receiver) {
                if (Reflect.has(target, p)) {
                    return Reflect.get(target, p, receiver);
                }
                if (self.main && self.adapters[self.main]) {
                    let adapter = self.adapters[self.main];
                    if (Reflect.has(adapter, p)) {
                        let result = Reflect.get(adapter, p);
                        if ((0, CacheAdapter_1.isCacheAdapter)(result)) {
                            return self;
                        }
                        return result;
                    }
                }
            },
        });
    }
    register(adapter) {
        this.adapters[adapter.getName()] = adapter;
        if (!this.main) {
            this.main = adapter.getName();
        }
    }
    use(name) {
        this.main = name;
        return this;
    }
    hasAdapter(name) { return this.adapters[name] !== undefined; }
    getAdapter(name) { return this.adapters[name]; }
    adapterNames() { return Object.keys(this.adapters); }
    allAdapters() { return Object.values(this.adapters); }
    clearAdapters() { this.allAdapters().forEach(adapter => adapter.clear()); }
};
CacheManager = __decorate([
    (0, Foundation_1.injectable)(),
    __metadata("design:paramtypes", [])
], CacheManager);
exports.CacheManager = CacheManager;
//# sourceMappingURL=CacheManager.js.map