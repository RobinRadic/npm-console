"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliInstance = void 0;
const yargs_1 = require("../yargs");
class CliInstance extends yargs_1.YargsInstance {
    commandos(path) {
        return this.commandDir(path, {
            extensions: ['ts', 'js', 'tsx'],
            visit: (commandObject, pathToFile, filename) => {
                return new commandObject.default();
            },
        });
    }
}
exports.CliInstance = CliInstance;
//# sourceMappingURL=CliInstance.js.map