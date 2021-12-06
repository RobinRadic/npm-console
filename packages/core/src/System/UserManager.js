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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const Support_1 = require("../Support");
const User_1 = require("./User");
const parse_passwd_1 = __importDefault(require("parse-passwd"));
const os_1 = require("os");
const shared_1 = require("@radic/shared");
const Foundation_1 = require("../Foundation");
let currentUser = (0, os_1.userInfo)({ encoding: 'utf8' });
let UserManager = class UserManager extends Support_1.Manager {
    postConstructor() {
        this.setItems(getUsers(this.fs.get('/etc/passwd')));
    }
    get currentUser() {
        return this.get(currentUser.uid);
    }
    getUsernames() {
        this.items.pull('username');
    }
};
__decorate([
    (0, Foundation_1.inject)('fs'),
    __metadata("design:type", Object)
], UserManager.prototype, "fs", void 0);
__decorate([
    (0, Foundation_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserManager.prototype, "postConstructor", null);
UserManager = __decorate([
    (0, Foundation_1.injectable)()
], UserManager);
exports.UserManager = UserManager;
const getUsers = (passwd) => {
    return (0, parse_passwd_1.default)(passwd).map(parsed => {
        const { uid, gid } = parsed, userData = __rest(parsed, ["uid", "gid"]);
        const user = Object.assign(Object.assign({}, userData), { uid: parseInt(parsed.uid), gid: parseInt(parsed.gid) });
        return user;
    }).map(user => [user.username, new User_1.User(user)]).reduce(shared_1.objectify, {});
};
//# sourceMappingURL=UserManager.js.map