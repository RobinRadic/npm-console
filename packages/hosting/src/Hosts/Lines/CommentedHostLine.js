"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentedHostLine = void 0;
const AbstractHostLine_1 = require("./AbstractHostLine");
const HostLine_1 = require("./HostLine");
class CommentedHostLine extends AbstractHostLine_1.AbstractHostLine {
    uncomment() {
        return new HostLine_1.HostLine(this.address, this.hosts, this.comment);
    }
    format(addressWidth = 0, hostsWidth = 0) {
        return `#${this.address.padEnd(addressWidth)} ${this.hosts.join(' ').padEnd(hostsWidth)} ${this.comment || ''}`.trim();
    }
}
exports.CommentedHostLine = CommentedHostLine;
//# sourceMappingURL=CommentedHostLine.js.map