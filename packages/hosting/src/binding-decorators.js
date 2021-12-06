"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostfile = exports.php = exports.servers = void 0;
// lazy shorthands
const core_1 = require("@radic/core");
exports.servers = (0, core_1.inject)('servers');
exports.php = (0, core_1.inject)('php');
exports.hostfile = (0, core_1.inject)('hostfile');
//# sourceMappingURL=binding-decorators.js.map