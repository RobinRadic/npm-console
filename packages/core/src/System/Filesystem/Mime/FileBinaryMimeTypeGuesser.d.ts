import { MimeTypeGuesserInterface } from './MimeTypeGuesserInterface';
/**
 * Guesses the MIME type with the binary "file" (only available on *nix).
 * @deprecated dont use this
 * @author Bernhard Schussek <bschussek@gmail.com>
 */
export declare class FileInfoMimeTypeGuesser implements MimeTypeGuesserInterface {
    private $magicFile;
    constructor($magicFile?: string);
    /**
     * {@inheritdoc}
     */
    isGuesserSupported(): boolean;
    /**
     * {@inheritdoc}
     * @deprecated dont use this
     */
    guessMimeType(path: string): string | null;
}
