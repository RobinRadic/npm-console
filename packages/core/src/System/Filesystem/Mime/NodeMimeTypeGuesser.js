"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMimeTypeGuesser = void 0;
const mime_types_1 = require("mime-types");
const utils_1 = require("../utils");
class NodeMimeTypeGuesser {
    guessMimeType(path) {
        let errorMessage = 'The "%s" file does not exist or is not readable.'.replace('%s', path);
        if (!(0, utils_1.isReadable)(path)) {
            throw new Error(errorMessage);
        }
        if (!this.isGuesserSupported()) {
            throw new Error(`The "${this.constructor.name}" guesser is not supported.`);
        }
        let result = (0, mime_types_1.lookup)(path);
        return result ? result : null;
    }
    isGuesserSupported() {
        return true;
    }
}
exports.NodeMimeTypeGuesser = NodeMimeTypeGuesser;
//# sourceMappingURL=NodeMimeTypeGuesser.js.map