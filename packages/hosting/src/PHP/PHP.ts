import { SemVer } from 'semver';
import { PhpExtensionDetails, PhpExtensionIni, PhpExtensionInis, PhpExtensionName, PhpInfo, PhpIni, PhpParsedInfo } from './types';
import { PHPApi } from './PHPApi';
import { basename } from 'path';
import { Service } from '@radic/core';
import { phpdismod, phpenmod } from '../binaries';
import { objectify } from '@radic/shared';

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

    get extensions(): Record<PhpExtensionName, PhpExtensionIni> {return this.enabledExtensions;}

    get enabledExtensions(): Record<PhpExtensionName, PhpExtensionIni> {return this.info.enabledExtensions;}

    get availableExtensions(): Record<PhpExtensionName, PhpExtensionDetails> {return this.info.availableExtensions;}

    get disabledExtensions(): Record<PhpExtensionName, PhpExtensionDetails> {
        let enabled = Object.keys(this.enabledExtensions);
        return Object.keys(this.availableExtensions).filter(name => enabled.includes(name) === false).map(name => [ name, this.availableExtensions[ name ] ]).reduce(objectify, {});
    }

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

    hasExtension(name: string) {return this.hasEnabledExtension(name) || this.hasAvailableExtension(name);}

    hasEnabledExtension(name: string) {return this.enabledExtensions[ name ] !== undefined; }

    hasAvailableExtension(name: string) {return this.availableExtensions[ name ] !== undefined; }

    getEnabledExtension<T extends PhpExtensionName>(name: T): PhpExtensionInis[T] {return this.enabledExtensions[ name as any ] as any;}

    isExtensionEnabled(name) {
        return this.hasEnabledExtension(name);
    }

    enableExtension(name: PhpExtensionName|PhpExtensionName[], api: PHPApi.Key | 'all'|string = this.apiKey) {
        return phpenmod(Array.isArray(name) ? name : [name], {
            v: this.shortVersion,
            s: api.toLowerCase(),
        });
    }

    disableExtension(name:PhpExtensionName|PhpExtensionName[], api: PHPApi.Key | 'all'|string = this.apiKey) {
        return phpdismod(Array.isArray(name) ? name : [name], {
            v: this.shortVersion,
            s: api.toLowerCase(),
        });
    }
}
