import { SemVer } from 'semver';
import { PhpExtensionIni, PhpExtensionName, PhpInfo, PhpIni, PhpParsedInfo } from './types';
import { PHPApi } from './PHPApi';
import { basename } from 'path';
import { Service } from '@radic/core';

export type PhpMajorMinorVersion = string; // number.number : 7.3

export class PHP implements PhpInfo {
    public readonly semver: SemVer;
    public readonly date: Date;
    public readonly api: PHPApi;
    protected fpmService: Service;

    constructor(protected info: PhpInfo) {
        this.semver = this.getSemver(this.info[ 'parsed' ][ 'PHP Version' ]);
        this.date   = new Date(this.info.parsed[ 'Build Date' ]);
        this.api    = PHPApi.toApi(this.info.parsed[ 'Server API' ]);
        if ( this.isFPM ) {
            this.fpmService = new Service(this.fpmServiceName);
        }
    }

    get fpmServiceName(): string { return basename(this.bin); }

    async getFPMService(): Promise<Service> {return this.fpmService.refresh(); }

    protected getSemver(version: string) {
        return new SemVer(version.split('+').slice(0, 2).join('+'));
    }

    get extensions(): Record<PhpExtensionName, PhpExtensionIni> {return this.info.extensions;}

    get config(): PhpIni {return this.info.config;}

    get parsed(): PhpParsedInfo {return this.info.parsed;}

    get bin() {return this.info.bin; }

    get shortVersion(): PhpMajorMinorVersion {return this.semver.major + '.' + this.semver.minor;}

    get version() { return this.semver.version; }

    get iniFiles() { return this.info.iniFiles; }

    get isCLI(): boolean {return PHPApi.isCLI(this.api);}

    get isFPM(): boolean {return PHPApi.isFPM(this.api);}

    get apiKey(): string {return PHPApi.toKey(this.api);}

    isApi(api: PHPApi): boolean {return PHPApi.is(this, api);}

    hasExtension(name: string) {return this.extensions[ name ] !== undefined; }

    getExtension<T extends PhpExtensionIni = PhpExtensionIni, K extends keyof T | string = keyof T>(name: K): T {return this.extensions[ name as any ] as any;}


}
