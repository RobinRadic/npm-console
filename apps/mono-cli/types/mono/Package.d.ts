import { PackageJson, TSconfigJson } from '@radic/shared';
import { PackageBuilder } from './PackageBuilder';
import { SyncHook } from 'tapable';
export declare class Package {
    #private;
    path: string;
    pkg: PackageJson;
    tsconfig: TSconfigJson;
    tsconfigBuild: TSconfigJson;
    basename: string;
    readonly hooks: {
        builder: SyncHook<[PackageBuilder], void, import("tapable").UnsetAdditionalOptions>;
    };
    get packageJsonPath(): string;
    get tsconfigJsonPath(): string;
    get tsconfigBuildJsonPath(): string;
    constructor(path: string);
    get name(): string;
    get builder(): PackageBuilder;
}
