"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostLine = void 0;
const CommentedHostLine_1 = require("./CommentedHostLine");
const AbstractHostLine_1 = require("./AbstractHostLine");
class HostLine extends AbstractHostLine_1.AbstractHostLine {
    commentOut() {
        return new CommentedHostLine_1.CommentedHostLine(this.address, this.hosts, this.comment);
    }
    format(addressWidth = 0, hostsWidth = 0) {
        return `${this.address.padEnd(addressWidth + 1)} ${this.hosts.join(' ').padEnd(hostsWidth)} ${this.comment || ''}`.trim();
    }
}
exports.HostLine = HostLine;
;
//# sourceMappingURL=HostLine.js.map