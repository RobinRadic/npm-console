import { MimeTypeGuesserInterface } from './MimeTypeGuesserInterface';
import { lookup } from 'mime-types';
import { isReadable } from '../utils';

export class NodeMimeTypeGuesser implements MimeTypeGuesserInterface {
    public guessMimeType(path: string): string | null {
        let errorMessage = 'The "%s" file does not exist or is not readable.'.replace('%s', path);

        if ( !isReadable(path) ) {
            throw new Error(errorMessage);
        }

        if ( !this.isGuesserSupported() ) {
            throw new Error(`The "${this.constructor.name}" guesser is not supported.`);
        }

        let result = lookup(path);
        return result ? result : null;
    }

    public isGuesserSupported(): boolean {
        return true;
    }

}
