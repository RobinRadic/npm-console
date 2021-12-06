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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApacheSite = void 0;
const Sites_1 = require("../Sites");
const apacheconf_1 = __importDefault(require("apacheconf"));
class ApacheSite extends Sites_1.Site {
    constructor(server, configFilePath) {
        super(server, configFilePath);
    }
    getHostNames() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.getConfig();
            if (config.VirtualHost) {
                return config.VirtualHost.map(vhost => vhost.ServerName).filter(Boolean);
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
                (0, apacheconf_1.default)(this.configFilePath, (error, config, parser) => {
                    if (error)
                        return reject(error);
                    this.cachedConfig = config;
                    resolve(config);
                });
            });
        });
    }
}
exports.ApacheSite = ApacheSite;
//# sourceMappingURL=ApacheSite.js.map