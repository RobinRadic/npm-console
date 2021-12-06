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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetcher = void 0;
// @ts-ignore
const jquery_1 = __importDefault(require("jquery"));
const path_1 = require("path");
const jsdom_1 = require("jsdom");
const axios_1 = __importDefault(require("axios"));
const core_1 = require("@radic/core");
let Fetcher = 
/**
 * 1. Fetches all the NGINX documentation pages
 * 2. Caches them if enabled
 * 3. Wraps the fetched HTML into JSDOM
 * 4. And returns a {@type JQueryStatic} for each documentation page
 *
 */
class Fetcher {
    constructor() {
        this.baseUrl = 'https://nginx.org/en/docs';
        this.docPageULPositions = [9, 10, 11, 12, 13];
        this.cacheEnabled = true;
        this.cachePrefix = 'fetcher:';
    }
    enableCache(enable = true) {
        this.cacheEnabled = enable;
        return this;
    }
    disableCache() { return this.enableCache(false); }
    fetchDomJqueryFromUri(uri, force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.makeUrl(uri);
            let cacheKey = this.getCacheKey(uri);
            let html;
            if (this.cacheEnabled === true && this.cache.has(cacheKey)) {
                html = this.cache.get(cacheKey);
            }
            else {
                let response = yield axios_1.default.get(url);
                html = response.data;
            }
            if (this.cacheEnabled === true && ((force && this.cache.has(cacheKey)) || !this.cache.has(cacheKey))) {
                this.cache.put(cacheKey, html);
                html = this.cache.get(cacheKey);
            }
            const dom = new jsdom_1.JSDOM(html);
            const $ = (0, jquery_1.default)(dom.window);
            return $;
        });
    }
    getCacheKey(uri) {
        let key = (0, path_1.join)(this.cachePrefix, this.makeUrl(uri)).replace(/\//g, '.');
        return key;
    }
    makeUrl(uri) { return uri ? `${this.baseUrl}/${uri}` : this.baseUrl; }
    fetchModuleDocUris(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const uris = [];
            const $ = yield this.fetchDomJqueryFromUri(undefined, force);
            for (const elementPosition of this.docPageULPositions) {
                const anchors = $('ul.compact').eq(elementPosition).find('> li > a');
                anchors.each(function () {
                    let $anchor = $(this);
                    uris.push($anchor.attr('href'));
                });
            }
            return uris;
        });
    }
    getModuleDocJquery(uri, force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.fetchDomJqueryFromUri(uri, force);
            return $;
        });
    }
};
__decorate([
    (0, core_1.caching)('nginx.types'),
    __metadata("design:type", Object)
], Fetcher.prototype, "cache", void 0);
Fetcher = __decorate([
    (0, core_1.injectable)()
    /**
     * 1. Fetches all the NGINX documentation pages
     * 2. Caches them if enabled
     * 3. Wraps the fetched HTML into JSDOM
     * 4. And returns a {@type JQueryStatic} for each documentation page
     *
     */
], Fetcher);
exports.Fetcher = Fetcher;
//# sourceMappingURL=Fetcher.js.map