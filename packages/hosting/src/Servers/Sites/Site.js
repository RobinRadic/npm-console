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
exports.Site = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const core_1 = require("@radic/core");
class Site {
    constructor(server, configFilePath) {
        this.server = server;
        this.configFilePath = configFilePath;
        this.app = core_1.Application.instance;
    }
    getHostFileEntries() {
        return __awaiter(this, void 0, void 0, function* () {
            let hf = this.app.hostfile.load();
            let names = yield this.getHostNames();
            return (0, lodash_1.flatten)(names.map(name => hf.getAllByName(name)));
        });
    }
    hasHostFileEntry() {
        return __awaiter(this, void 0, void 0, function* () { return (yield this.getHostFileEntries()).length > 0; });
    }
    get filename() { return (0, path_1.basename)(this.configFilePath); }
    isEnabled() {
        let enabledPaths = this.server.getEnabledSitePaths().map(path => (0, path_1.basename)(path));
        return enabledPaths.includes(this.filename);
    }
    setEnabled(value) {
        let originalPath = (0, path_1.join)(this.server.paths.sitesAvailable, this.filename);
        let symlinkPath = (0, path_1.join)(this.server.paths.sitesEnabled, this.filename);
        if (value) {
            (0, fs_1.symlinkSync)(originalPath, symlinkPath);
            // linkSync(originalPath, symlinkPath);
        }
        else {
            if ((0, fs_1.existsSync)(symlinkPath)) {
                (0, fs_1.unlinkSync)(symlinkPath);
            }
        }
    }
}
exports.Site = Site;
//# sourceMappingURL=Site.js.map