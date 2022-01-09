import { DirectoryStorage } from '@radic/core';
import { ProxyRepository } from '@radic/shared';
import { MonoRepo } from './MonoRepo';
import { SyncWaterfallHook } from 'tapable';
declare class TemplateStorage extends DirectoryStorage {
    to: PackageStorage;
    creator: PackageCreator;
    copy(templatePath: string, packagePath: string, templated?: boolean, variables?: any): this;
    build(builderPath: string, opts?: {
        to?: string;
        params?: any;
    }): this;
    compile(str: string, variables?: any): string;
}
declare class PackageStorage extends DirectoryStorage {
    generate(path: string): any;
}
export declare const isITemplateCopyObject: (val: any) => val is ITemplateCopyObject;
export interface ITemplateCopyObject {
    from: string;
    to: string;
    templated?: boolean;
    set?: any;
}
export declare type ITemplateCopyString = string;
export declare type ITemplateCopy = ITemplateCopyObject | ITemplateCopyString;
export interface ITemplateBuilder {
    builder: string;
    to?: string;
    params?: any;
}
export interface ITemplate {
    variables?: any;
    copy?: Array<string | ITemplateCopy>;
    build?: ITemplateBuilder[];
    generate?: string[];
}
export declare class PackageCreator {
    readonly mono: MonoRepo;
    readonly hooks: {
        copy: SyncWaterfallHook<[ITemplateCopyObject], import("tapable").UnsetAdditionalOptions>;
        build: SyncWaterfallHook<[ITemplateBuilder], import("tapable").UnsetAdditionalOptions>;
        generate: SyncWaterfallHook<[string], import("tapable").UnsetAdditionalOptions>;
    };
    fs: TemplateStorage;
    vars: ProxyRepository<{
        [key: string]: any;
    }>;
    opts: ProxyRepository<ITemplate>;
    constructor(mono: MonoRepo);
    setTemplateDirectory(templateDirPath: string): this;
    setPackageDirectory(packageDirPath: string): this;
    run(variables?: any): void;
    getVars(...objs: any[]): any;
}
export {};
