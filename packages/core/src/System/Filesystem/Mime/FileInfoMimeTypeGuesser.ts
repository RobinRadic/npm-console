import { version } from 'os';
import { accessSync, constants, existsSync } from 'fs';
/**
 * Guesses the MIME type with the binary "file" (only available on *nix).
 *
 * @author Bernhard Schussek <bschussek@gmail.com>
 */
import { MimeTypeGuesserInterface } from './MimeTypeGuesserInterface';
import { execSync } from 'child_process';

const checkos = () => version();

export class FileBinaryMimeTypeGuesser implements MimeTypeGuesserInterface {

    /**
     * The cmd pattern must contain a "%s" string that will be replaced
     * with the file name to guess.
     *
     * The command output must start with the MIME type of the file.
     */
    constructor(private cmd: string = 'file -b --mime -- %s 2>/dev/null') {}

    /**
     * {@inheritdoc}
     */
    public isGuesserSupported(): boolean {
        let platforms: NodeJS.Platform[] = [ 'aix', 'android', 'darwin', 'freebsd', 'haiku', 'linux', 'openbsd', 'sunos', 'win32', 'cygwin', 'netbsd' ];
        let supported: NodeJS.Platform[] = [ 'darwin', 'freebsd', 'linux', 'openbsd', 'cygwin' ];

        return supported.includes(process.platform);
    }

    /**
     * {@inheritdoc}
     */
    public guessMimeType(path: string): string | null {
        let errorMessage = 'The "%s" file does not exist or is not readable.'.replace('%s', path);

        if ( !existsSync(path) ) {
            throw new Error(errorMessage);
        }
        try {
            accessSync(path, constants.R_OK | constants.O_RDONLY);
        } catch (e) {
            throw new Error(errorMessage);
        }

        if ( !this.isGuesserSupported() ) {
            throw new Error(`The "${this.constructor.name}" guesser is not supported.`);
        }
        const returns = execSync(`${this.cmd} ${path.startsWith('-') ? './' : ''}${path}`, {
            encoding: 'utf8',
        });
        let type;
        if ( returns.length > 0 ) {
            type = returns.trim();
        }
        let match = returns.match(/#^([a-z0-9-]+[a-z0-9-+.]+)/gmi);
        if ( match.length === 0 ) {
            return null;
        }
        return match[ 1 ];
    }
}
