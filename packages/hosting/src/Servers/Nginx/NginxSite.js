"use strict";
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
exports.NginxSite = void 0;
const Sites_1 = require("../Sites");
const nginx_conf_1 = require("nginx-conf");
const parser_1 = require("./parser");
const fs_1 = require("fs");
function searchTree(tree, childrenPropName, propName, value) {
    var i, f = null; // iterator, found node
    if (Array.isArray(tree)) { // if entry object is array objects, check each object
        for (i = 0; i < tree.length; i++) {
            f = searchTree(tree[i], childrenPropName, propName, value);
            if (f) { // if found matching object, return it.
                return f;
            }
        }
    }
    else if (typeof tree === 'object') { // standard tree node (one root)
        if (tree[propName] !== undefined && tree[propName] === value) {
            return tree; // found matching node
        }
    }
    if (tree[childrenPropName] !== undefined && tree[childrenPropName].length > 0) { // if this is not maching node, search nodes, children (if prop exist and it is not empty)
        return searchTree(tree[childrenPropName], childrenPropName, propName, value);
    }
    else {
        return null; // node does not match and it neither have children
    }
}
class NginxSite extends Sites_1.Site {
    constructor(server, configFilePath) {
        super(server, configFilePath);
    }
    getHostNames() {
        return __awaiter(this, void 0, void 0, function* () {
            let found = searchTree(yield this.getConfig(), 'children', 'name', 'server_name');
            if (found && found.value) {
                if (found.value.includes(' ')) {
                    return found.value.split(' ');
                }
                return [found.value];
            }
            return [];
        });
    }
    getConfig(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (this.cachedConfig && !force) {
                    resolve(this.cachedConfig);
                }
                const parser = new nginx_conf_1.NginxParser();
                parser.parseFile(this.configFilePath, 'utf8', (error, tree) => {
                    if (error)
                        return reject(error);
                    // tree              = this.createConfigProxy(tree);
                    this.cachedConfig = tree;
                    resolve(tree);
                });
            });
        });
    }
    saveConfig(config) {
        let file = new parser_1.NginxConfFile(config, { tab: '    ' });
        let content = file.toString();
        (0, fs_1.writeFileSync)(this.configFilePath, content, 'utf-8');
    }
}
exports.NginxSite = NginxSite;
//# sourceMappingURL=NginxSite.js.map