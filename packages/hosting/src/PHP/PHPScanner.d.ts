import { PATH } from '@radic/core';
import { PhpInfo } from './types';
export declare class PHPScanner {
    protected static get path(): PATH;
    static searchForPhpBins(): Promise<string[]>;
    static searchForPhpServices(): Promise<string[]>;
    static isValidPhpBinPath(path: string): Promise<boolean>;
    static extractPhpInfoFromBin(path: string): Promise<string>;
    static parsePhpInfo(path: string, info: string): PhpInfo;
}
