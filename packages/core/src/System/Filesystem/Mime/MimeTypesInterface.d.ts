import { MimeTypeGuesserInterface } from './MimeTypeGuesserInterface';
export interface MimeTypesInterface extends MimeTypeGuesserInterface {
    /**
     * Gets the extensions for the given MIME type in decreasing order of preference.
     *
     * @return string[]
     */
    getExtensions(mimeType: string): string[];
    /**
     * Gets the MIME types for the given extension in decreasing order of preference.
     *
     * @return string[]
     */
    getMimeTypes(ext: string): string[];
}
