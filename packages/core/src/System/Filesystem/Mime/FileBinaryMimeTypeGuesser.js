"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInfoMimeTypeGuesser = void 0;
const os_1 = require("os");
const fs_1 = require("fs");
const checkos = () => (0, os_1.version)();
/**
 * Guesses the MIME type with the binary "file" (only available on *nix).
 * @deprecated dont use this
 * @author Bernhard Schussek <bschussek@gmail.com>
 */
class FileInfoMimeTypeGuesser {
    constructor($magicFile = null) {
        this.$magicFile = $magicFile;
    }
    /**
     * {@inheritdoc}
     */
    isGuesserSupported() {
        return true; // \function_exists('finfo_open');
    }
    /**
     * {@inheritdoc}
     * @deprecated dont use this
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
        return null;
    }
}
exports.FileInfoMimeTypeGuesser = FileInfoMimeTypeGuesser;
//     /// remove
//     const returns = execSync(`${this.cmd} ${path.startsWith('-') ? './' : ''}${path}`, {
//         encoding: 'utf8',
//     });
//     let type;
//     if ( returns.length > 0 ) {
//     type = returns.trim();
// }
// let match = returns.match(/#^([a-z0-9-]+[a-z0-9-+.]+)/gmi);
// if ( match.length === 0 ) {
//     return null;
// }
// return match[ 1 ];
//
// if (!$this->isGuesserSupported()) {
//     throw new LogicException(sprintf('The "%s" guesser is not supported.', __CLASS__));
// }
//
// if (false === $finfo = new \finfo(\FILEINFO_MIME_TYPE, $this->magicFile)) {
//     return null;
// }
// $mimeType = $finfo->file($path);
//
// if ($mimeType && 0 === (\strlen($mimeType) % 2)) {
//     $mimeStart = substr($mimeType, 0, \strlen($mimeType) >> 1);
//     $mimeType = $mimeStart.$mimeStart === $mimeType ? $mimeStart : $mimeType;
// }
//
// return $mimeType;
// }
// }
//# sourceMappingURL=FileBinaryMimeTypeGuesser.js.map