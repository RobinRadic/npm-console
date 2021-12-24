import { MimeTypeGuesserInterface } from './MimeTypeGuesserInterface';
import { MimeTypesInterface } from './MimeTypesInterface';
export declare type MimeTypesMap = Record<string, string[]>;
export declare class MimeTypes implements MimeTypesInterface {
    private extensions;
    private mimeTypes;
    private guessers;
    private static default;
    constructor(map?: MimeTypesMap);
    lookup(path: string): string | false;
    contentType(path: string): string | false;
    static setDefault(def: typeof MimeTypes): void;
    static getDefault(): any;
    /**
     * Registers a MIME type guesser.
     *
     * The last registered guesser has precedence over the other ones.
     */
    registerGuesser(guesser: MimeTypeGuesserInterface): void;
    /**
     * {@inheritdoc}
     */
    getExtensions(mimeType: string): string[];
    /**
     * {@inheritdoc}
     */
    getMimeTypes(ext: string): string[];
    /**
     * {@inheritdoc}
     */
    isGuesserSupported(): boolean;
    /**
     * {@inheritdoc}
     *
     * The file is passed to each registered MIME type guesser in reverse order
     * of their registration (last registered is queried first). Once a guesser
     * returns a value that is not null, this method terminates and returns the
     * value.
     */
    guessMimeType(path: string): string;
    /**
     * A map of MIME types and their default extensions.
     *
     * Updated from upstream on 2021-09-03
     *
     * @see Resources/bin/update_mime_types.php
     */
    static readonly MAP: {
        [key: string]: string;
    };
    static readonly REVERSE_MAP: MimeTypesMap;
}
