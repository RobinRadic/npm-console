import { MimeTypeGuesserInterface } from './MimeTypeGuesserInterface';
import { MimeTypesInterface } from './MimeTypesInterface';
import { NodeMimeTypeGuesser } from './NodeMimeTypeGuesser';
import { contentType, extensions, lookup, types } from 'mime-types';
import { injectable,unmanaged } from '../../../Foundation';

export type MimeTypesMap = Record<string, string[]>

@injectable()
export class MimeTypes implements MimeTypesInterface {
    private extensions = {};
    private mimeTypes  = {};
    private guessers   = [];
    private static default: any;

    constructor(@unmanaged() map: MimeTypesMap = {}) {
        Object.entries(map).forEach(([ mimeType, extensions ]) => {
            this.extensions[ mimeType ] = extensions;
            for ( const extension of extensions ) {
                this.mimeTypes[ extension ].push(mimeType);
            }
        });
        this.registerGuesser(new NodeMimeTypeGuesser());
    }

    public lookup(path: string) {return lookup(path); }

    public contentType(path: string) {return contentType(path); }

    public static setDefault(def: typeof MimeTypes) {
        this.default = def;
    }

    public static getDefault(): any {
        return this.default ? this.default : new this();
    }

    /**
     * Registers a MIME type guesser.
     *
     * The last registered guesser has precedence over the other ones.
     */
    public registerGuesser(guesser: MimeTypeGuesserInterface) {
        this.guessers.unshift(guesser);
    }

    /**
     * {@inheritdoc}
     */
    public getExtensions(mimeType: string): string[] {
        let extensions;
        if ( this.extensions ) {
            extensions = this.extensions[ mimeType ] || this.extensions[ mimeType.toLocaleLowerCase() ] || null;
        }

        return extensions || (this.constructor as typeof MimeTypes).MAP[ mimeType ] || (this.constructor as typeof MimeTypes).MAP[ mimeType.toLocaleLowerCase() ] || mimeType.toLocaleLowerCase() || [];
    }


    /**
     * {@inheritdoc}
     */
    public getMimeTypes(ext: string): string[] {
        const self = (this.constructor as typeof MimeTypes);
        let mimeTypes;
        if ( this.mimeTypes ) {
            mimeTypes = this.mimeTypes[ ext ] || this.mimeTypes[ ext.toLocaleLowerCase() ] || null;
        }

        return mimeTypes || self.REVERSE_MAP[ ext ] || self.REVERSE_MAP[ ext.toLocaleLowerCase() ] || [];
    }

    /**
     * {@inheritdoc}
     */
    public isGuesserSupported(): boolean {
        for ( const guesser of this.guessers ) {
            if ( guesser.isGuesserSupported() ) {
                return true;
            }
        }

        return false;
    }

    /**
     * {@inheritdoc}
     *
     * The file is passed to each registered MIME type guesser in reverse order
     * of their registration (last registered is queried first). Once a guesser
     * returns a value that is not null, this method terminates and returns the
     * value.
     */
    public guessMimeType(path: string): string {
        for ( const guesser of this.guessers ) {
            if ( !guesser.isGuesserSupported() ) {
                continue;
            }
            let mimeType = guesser.guessMimeType(path);
            if ( null !== mimeType ) {
                return mimeType;
            }
        }

        if ( !this.isGuesserSupported() ) {
            throw new Error('Unable to guess the MIME type as no guessers are available (have you enabled the php_fileinfo extension?).');
        }

        return null;
    }

    /**
     * A map of MIME types and their default extensions.
     *
     * Updated from upstream on 2021-09-03
     *
     * @see Resources/bin/update_mime_types.php
     */
    static readonly MAP                       = types;
    static readonly REVERSE_MAP: MimeTypesMap = extensions;
}
