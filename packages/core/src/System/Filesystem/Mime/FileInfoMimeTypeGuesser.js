"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileBinaryMimeTypeGuesser = void 0;
const os_1 = require("os");
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const checkos = () => (0, os_1.version)();
class FileBinaryMimeTypeGuesser {
    /**
     * The cmd pattern must contain a "%s" string that will be replaced
     * with the file name to guess.
     *
     * The command output must start with the MIME type of the file.
     */
    constructor(cmd = 'file -b --mime -- %s 2>/dev/null') {
        this.cmd = cmd;
    }
    /**
     * {@inheritdoc}
     */
    isGuesserSupported() {
        let platforms = ['aix', 'android', 'darwin', 'freebsd', 'haiku', 'linux', 'openbsd', 'sunos', 'win32', 'cygwin', 'netbsd'];
        let supported = ['darwin', 'freebsd', 'linux', 'openbsd', 'cygwin'];
        return supported.includes(process.platform);
    }
    /**
     * {@inheritdoc}
     */
    guessMimeType(path) {
        let errorMessage = 'The "%s" file does not exist or is not readable.'.replace('%s', path);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(errorMessage);
        }
        try {
            (0, fs_1.accessSync)(path, fs_1.constants.R_OK | fs_1.constants.O_RDONLY);
        }
        catch (e) {
            throw new Error(errorMessage);
        }
        if (!this.isGuesserSupported()) {
            throw new Error(`The "${this.constructor.name}" guesser is not supported.`);
        }
        const returns = (0, child_process_1.execSync)(`${this.cmd} ${path.startsWith('-') ? './' : ''}${path}`, {
            encoding: 'utf8',
        });
        let type;
        if (returns.length > 0) {
            type = returns.trim();
        }
        let match = returns.match(/#^([a-z0-9-]+[a-z0-9-+.]+)/gmi);
        if (match.length === 0) {
            return null;
        }
        return match[1];
    }
}
exports.FileBinaryMimeTypeGuesser = FileBinaryMimeTypeGuesser;
//# sourceMappingURL=FileInfoMimeTypeGuesser.js.map