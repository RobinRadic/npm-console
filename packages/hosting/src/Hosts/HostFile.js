"use strict";
// noinspection ES6UnusedImports
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostFile = void 0;
const Lines_1 = require("./Lines");
const ip_1 = __importDefault(require("ip"));
const os_1 = __importDefault(require("os"));
const path_1 = require("path");
const fs_1 = require("fs");
const core_1 = require("@radic/core");
const lineRegex = /^(.*?)(#.*)?$/;
const whitespaceRegex = /^\s*$/;
let HostFile = class HostFile {
    constructor(path) {
        this.path = path;
        this.lines = [];
        if (!path) {
            this.path = os_1.default.type() === 'Windows_NT' ? (0, path_1.join)(process.env.SystemRoot, 'System32', 'drivers', 'etc', 'hosts') : '/etc/hosts';
        }
    }
    load(force = false) {
        if (!this.isLoaded() || force) {
            this.content = (0, fs_1.readFileSync)(this.path, 'utf8');
        }
        this.parse();
        return this;
    }
    save() {
        this.content = this.formatLines(this.lines).join('');
        (0, fs_1.writeFileSync)(this.path, this.content, 'utf8');
        return this;
    }
    isLoaded() { return this.content && this.content.length > 0; }
    all() { return this.lines; }
    hosts() { return this.lines.filter(line => line instanceof Lines_1.AbstractHostLine); }
    add(address, hosts, comment = '') {
        const line = new Lines_1.HostLine(address, hosts, comment);
        this.lines.push(line);
        return line;
    }
    remove(lines) {
        this.lines = this.lines.filter(l => {
            for (const line of lines) {
                if (line === l) {
                    return false;
                }
            }
        });
        return this;
    }
    getAllByName(name) {
        let matcher = this.getHostMatcher(name);
        return this.hosts().filter(host => host.hosts.filter(name => matcher.test(name)).length > 0);
    }
    getAllByAddress(address) {
        let matcher = this.getHostMatcher(address);
        return this.hosts().filter(host => matcher.test(host.address));
    }
    parse() {
        if (this.isLoaded()) {
            this.lines = this.content.split('\n').map(line => this.parseHostFileLine(line));
        }
        return this;
    }
    getHostMatcher(pattern) {
        if (!pattern.includes('*')) {
            const lowered = pattern.toLowerCase();
            return { test: value => value.toLowerCase() === lowered };
        }
        pattern = pattern
            .replace(/\./g, '\\.')
            .replace(/\*/g, '.*');
        return new RegExp(`^${pattern}$`, 'i');
    }
    parseHostFileLine(text) {
        const [, content = '', comment = ''] = lineRegex.exec(text);
        const hasContent = !whitespaceRegex.test(content);
        const hasComment = !whitespaceRegex.test(comment);
        if (hasContent) {
            const [address, ...hosts] = content.split(/\s+/).filter(Boolean);
            if (address && hosts && hosts.length && (ip_1.default.isV4Format(address) || ip_1.default.isV6Format(address))) {
                return new Lines_1.HostLine(address, hosts, comment);
            }
            return new Lines_1.InvalidLine(text);
        }
        if (hasComment) {
            const commentedOutContent = comment.replace(/^#+/, '');
            const parsedContent = this.parseHostFileLine(commentedOutContent);
            if (parsedContent instanceof Lines_1.HostLine) {
                return new Lines_1.CommentedHostLine(parsedContent.address, parsedContent.hosts, parsedContent.comment);
            }
            return new Lines_1.CommentLine(text);
        }
        return new Lines_1.BlankLine(text);
    }
    formatLines(lines) {
        let addressWidth = 0;
        let hostWidth = 0;
        lines.filter(line => line instanceof Lines_1.AbstractHostLine).forEach((line) => {
            addressWidth = Math.max(addressWidth, line.address.length);
            hostWidth = Math.max(hostWidth, line.hosts.join(' ').length);
        });
        return lines.map((line, i) => line.format(addressWidth, hostWidth) + (i < lines.length - 1 ? os_1.default.EOL : ''));
    }
};
HostFile = __decorate([
    (0, core_1.injectable)(),
    __param(0, (0, core_1.unmanaged)()),
    __metadata("design:paramtypes", [String])
], HostFile);
exports.HostFile = HostFile;
//# sourceMappingURL=HostFile.js.map