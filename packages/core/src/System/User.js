"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const os_1 = require("os");
let currentUser = (0, os_1.userInfo)({ encoding: 'utf8' });
class User {
    constructor(info) {
        this.isCurrentUser = false;
        Object.assign(this, info);
        this.isCurrentUser = this.uid === currentUser.uid;
    }
}
exports.User = User;
let u = new User(null);
//# sourceMappingURL=User.js.map