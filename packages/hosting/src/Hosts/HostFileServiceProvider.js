"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostFileServiceProvider = void 0;
const shared_1 = require("@radic/shared");
const HostFile_1 = require("./HostFile");
class HostFileServiceProvider extends shared_1.ServiceProvider {
    register() {
        this.app.singleton('hostfile', HostFile_1.HostFile).addBindingGetter('hostfile');
    }
}
exports.HostFileServiceProvider = HostFileServiceProvider;
//# sourceMappingURL=HostFileServiceProvider.js.map