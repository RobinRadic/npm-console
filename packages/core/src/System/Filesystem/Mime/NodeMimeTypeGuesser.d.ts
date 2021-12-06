import { MimeTypeGuesserInterface } from './MimeTypeGuesserInterface';
export declare class NodeMimeTypeGuesser implements MimeTypeGuesserInterface {
    guessMimeType(path: string): string | null;
    isGuesserSupported(): boolean;
}
