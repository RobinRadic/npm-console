/**
 * Guesses the MIME type with the binary "file" (only available on *nix).
 *
 * @author Bernhard Schussek <bschussek@gmail.com>
 */
import { MimeTypeGuesserInterface } from './MimeTypeGuesserInterface';
export declare class FileBinaryMimeTypeGuesser implements MimeTypeGuesserInterface {
    private cmd;
    /**
     * The cmd pattern must contain a "%s" string that will be replaced
     * with the file name to guess.
     *
     * The command output must start with the MIME type of the file.
     */
    constructor(cmd?: string);
    /**
     * {@inheritdoc}
     */
    isGuesserSupported(): boolean;
    /**
     * {@inheritdoc}
     */
    guessMimeType(path: string): string | null;
}
