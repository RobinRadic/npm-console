"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.group = void 0;
const decorator_1 = require("./decorator");
function group(name, desc, directory) {
    if (!directory.endsWith('cmds')) {
        directory += `/${name}_cmds`;
    }
    name += ' <command>';
    return (0, decorator_1.decorator)('group', { name, desc, directory });
}
exports.group = group;
//# sourceMappingURL=group.js.map