import { SemVer } from 'semver';
import { PhpExtensionIni, PhpExtensionName, PhpInfo, PhpIni, PhpParsedInfo } from './types';
import { PHPApi } from './PHPApi';
import { Service } from '@radic/core';
export declare type PhpMajorMinorVersion = string;
export declare class PHP implements PhpInfo {
    protected info: PhpInfo;
    readonly semver: SemVer;
    readonly date: Date;
    readonly api: PHPApi;
    protected fpmService: Service;
    constructor(info: PhpInfo);
    get fpmServiceName(): string;
    getFPMService(): Promise<Service>;
    protected getSemver(version: string): SemVer;
    get extensions(): Record<PhpExtensionName, PhpExtensionIni>;
    get config(): PhpIni;
    get parsed(): PhpParsedInfo;
    get bin(): string;
    get shortVersion(): PhpMajorMinorVersion;
    get version(): string;
    get iniFiles(): string[];
    get isCLI(): boolean;
    get isFPM(): boolean;
    get apiKey(): string;
    isApi(api: PHPApi): boolean;
    hasExtension(name: string): boolean;
    getExtension<T extends PhpExtensionIni = PhpExtensionIni, K extends keyof T | string = keyof T>(name: K): T;
}
