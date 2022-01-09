import { DirectoryStorage } from '@radic/core';
import { PackageJson } from '@radic/shared';
import { SimpleGit } from 'simple-git';
import { SyncHook } from 'tapable';
export declare class MonoRepoCreator {
    name?: string;
    path?: string;
    private app;
    readonly hooks: {
        create: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        init: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        createReadme: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        createPackageJson: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        createMonoJson: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        createEditorConfig: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        createGitIgnore: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        runGitInit: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        runGitAdd: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        runYarn: SyncHook<unknown, void, import("tapable").UnsetAdditionalOptions>;
        runYarnDataOut: SyncHook<[string], void, import("tapable").UnsetAdditionalOptions>;
        runYarnDataErr: SyncHook<[string], void, import("tapable").UnsetAdditionalOptions>;
    };
    gitignore: string[];
    editorconfig: any;
    packageJson: Partial<PackageJson>;
    protected files: string[];
    protected get dir(): DirectoryStorage;
    protected get git(): SimpleGit;
    constructor(name?: string, path?: string);
    validForCreate(): boolean;
    validForInit(): boolean;
    create(): Promise<void>;
    init(): Promise<void>;
    protected createReadme(): void;
    protected createEditorConfig(): void;
    protected createPackageJson(): void;
    protected createMonoJson(): void;
    protected createGitIgnore(): void;
    protected runGitInit(): Promise<import("simple-git").InitResult>;
    protected runGitAdd(): Promise<void>;
    protected runYarn(): Promise<unknown>;
    /**
     * Accepts relative path from the @radic/mono-cli resources path and returns the absolute path
     * @param parts
     */
    protected resourcesPath(...parts: string[]): string;
}
