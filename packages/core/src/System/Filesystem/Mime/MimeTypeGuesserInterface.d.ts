export interface MimeTypeGuesserInterface {
    /**
     * Returns true if this guesser is supported.
     */
    isGuesserSupported(): boolean;
    /**
     * Guesses the MIME type of the file with the given path.
     *
     * @return string|null
     */
    guessMimeType(path: string): string | null;
}
