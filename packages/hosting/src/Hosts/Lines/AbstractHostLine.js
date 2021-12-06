"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractHostLine = void 0;
const ip_1 = __importDefault(require("ip"));
class AbstractHostLine {
    constructor(address, hosts, comment = '') {
        this.address = address;
        this.hosts = hosts;
        this.comment = comment;
    }
    referencesHost(host) {
        host = host.toLowerCase();
        return this.hosts.some(entryHost => entryHost.toLowerCase() === host);
    }
    referencesOnlyHost(host) {
        return this.hosts.length === 1 && this.referencesHost(host);
    }
    matchesAddress(address) {
        return address && ip_1.default.isEqual(address, this.address);
    }
    isLoopback() {
        return ip_1.default.isLoopback(this.address);
    }
    isLocal() {
        return this.isLoopback() || ip_1.default.isEqual(this.address, '::0');
    }
}
exports.AbstractHostLine = AbstractHostLine;
//# sourceMappingURL=AbstractHostLine.js.map