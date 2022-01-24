import { PackageJson, TSconfigJson } from '@radic/shared';
import { PackageBuilder } from './PackageBuilder';
import { SyncHook } from 'tapable';
import { ColorWrapper } from '@radic/console-output';
import { ReleaseType, SemVer } from 'semver';
import { Application } from '@radic/core';
export declare class Package {
    #private;
    path: string;
    app: Application;
    pkg: PackageJson;
    tsconfig: TSconfigJson;
    tsconfigBuild: TSconfigJson;
    basename: string;
    colorize: ColorWrapper;
    get coloredName(): string;
    readonly hooks: {
        builder: SyncHook<[PackageBuilder], void, import("tapable").UnsetAdditionalOptions>;
    };
    get packageJsonPath(): string;
    get tsconfigJsonPath(): string;
    get tsconfigBuildJsonPath(): string;
    constructor(path: string);
    get name(): string;
    get slug(): string;
    get builder(): PackageBuilder;
    get semver(): SemVer;
    get version(): string;
    bump(type: ReleaseType): string;
    getBumpedVersion(type: ReleaseType): string;
}
