"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const decorator_1 = require("./decorator");
function command(name, desc, aliases) {
    return (0, decorator_1.decorator)('command', { name, desc, aliases });
}
exports.command = command;
//# sourceMappingURL=command.js.map