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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collector = void 0;
const path_1 = require("path");
const Fetcher_1 = require("./Fetcher");
const core_1 = require("@radic/core");
let Collector = 
/**
 * Collector class is a dumb class. It fetches HTML pages and extracts information using JSDOM with JQuery. Prone to errors if just used to write typings. Another proper cleaning swipe should be done on all collected stuff
 */
class Collector {
    constructor() {
        this.cacheEnabled = true;
        this.cacheKey = 'collector';
        this.contexts = [];
        this.modules = [];
    }
    enableCache(enable = true) {
        this.cacheEnabled = enable;
        this.fetcher.enableCache(enable);
        return this;
    }
    disableCache() {
        this.fetcher.disableCache();
        return this.enableCache(false);
    }
    collect(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.contexts = [];
            this.modules = [];
            if (this.cacheEnabled && this.cache.has(this.cacheKey) && !force) {
                const { modules, contexts, directives, variables } = this.cache.get(this.cacheKey);
                return this.makeCollected(modules, contexts, directives, variables);
            }
            const uris = yield this.fetcher.fetchModuleDocUris(force);
            let directives = [];
            let variables = [];
            for (const uri of uris) {
                const $ = yield this.fetcher.getModuleDocJquery(uri, force);
                const pageName = $('#content > h2').text();
                variables.push(...yield this.getVariables($, this.fetcher.makeUrl(uri)));
                directives.push(...yield this.getDirectives($, this.fetcher.makeUrl(uri)));
            }
            let collected = { modules: this.modules, contexts: this.contexts, directives, variables };
            if (this.cacheEnabled) {
                this.cache.put(this.cacheKey, collected);
            }
            return this.makeCollected(collected.modules, collected.contexts, directives, variables);
        });
    }
    makeCollected(modules, contexts, directives, variables) {
        return {
            modules: modules,
            contexts: contexts,
            directives: new core_1.Collection(directives),
            variables: new core_1.Collection(variables),
        };
    }
    getVariables($, url) {
        const variables = [];
        const $variables = $('a[name="variables_hash_max_size"]');
        if ($variables.length === 0) {
            return [];
        }
        const moduleName = $('#content > h2').text().replace('Module ', '');
        $('a[name="variables"]').nextAll('dl.compact').children('dt').each((i, el) => {
            let $el = $(el);
            let id = $el.attr('id').toString();
            variables.push({
                name: '$' + id.replace('var_', ''),
                doc: $el.next('dd').text(),
                url: url + '#var' + id,
                module: moduleName,
                hasSuffix: id.endsWith('_'),
            });
            if (!this.modules.includes(moduleName)) {
                this.modules.push(moduleName);
            }
        });
        return variables;
    }
    getDirectives($, url) {
        let strings = ['size', 'path', 'time'];
        let directives = [];
        $('.directive').each((i, el) => {
            let $el = $(el);
            let moduleName = (0, path_1.basename)(url).replace('.html', '');
            if (!this.modules.includes(moduleName)) {
                this.modules.push(moduleName);
            }
            let directive = {
                name: null,
                value: null,
                type: 'any',
                context: null,
                default: null,
                url: null,
                module: moduleName,
                isBlock: false,
            };
            let $tds = $el.find('> table > tbody td');
            // name
            let $code = $tds.first().find('> code').first();
            directive.name = $code.find('> strong').text().trim();
            // value
            let value = $tds.first().text().replace(directive.name, '');
            if (value.includes('|')) {
                value = value.replace('/[\n]/gm', '');
            }
            value = value.trim().replace(/[\n\;]/gm, '');
            if (value.includes('|')) {
                value = value.split('|').map(v => v.trim()).filter(Boolean).map(val => {
                    if (val === 'string') {
                        return 'string';
                    }
                    if (val.endsWith('...')) {
                        return 'string';
                    }
                    return '"' + val + '"';
                }).join(' | ');
                directive.type = 'union';
            }
            if (value.length === 1) {
                value = value.shift();
            }
            // type
            if (strings.includes(value)) {
                directive.type = 'string';
            }
            if (directive.type === 'union') {
                directive.type = value;
            }
            directive.value = value;
            if (directive.value.includes('{')) {
                directive.isBlock = true;
            }
            //context
            directive.context = $tds.eq(2).text().trim().split(',').map(v => v.trim()); //.filter(context => this.contexts.includes(context));
            directive.context.forEach(context => {
                if (!this.contexts.includes(context)) {
                    this.contexts.push(context);
                }
            });
            // documentation url
            directive.url = url + '#' + directive.name;
            let $p = $(el).next('p');
            if ($p) {
                directive.doc = $p.text();
            }
            if ($el.nextUntil('.directive').filter('.example')) {
                directive.example = $el.nextUntil('.directive').filter('.example').text();
            }
            directives.push(directive);
        });
        //console.dir(directives)
        return directives;
    }
};
__decorate([
    (0, core_1.inject)('nginx.types.fetcher'),
    __metadata("design:type", Fetcher_1.Fetcher)
], Collector.prototype, "fetcher", void 0);
__decorate([
    (0, core_1.caching)('nginx.types'),
    __metadata("design:type", Object)
], Collector.prototype, "cache", void 0);
Collector = __decorate([
    (0, core_1.injectable)()
    /**
     * Collector class is a dumb class. It fetches HTML pages and extracts information using JSDOM with JQuery. Prone to errors if just used to write typings. Another proper cleaning swipe should be done on all collected stuff
     */
], Collector);
exports.Collector = Collector;
//# sourceMappingURL=Collector.js.map