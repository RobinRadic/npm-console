/// <reference types="node" />
import { FSWatcher, Stats, WatchEventType } from 'fs';
import { ParsedPath } from 'path';
import { WatchOptions as WOptions } from 'fs-extra';
import { ExecSyncOptionsWithStringEncoding } from 'child_process';
import { macro, PackageJson, TSconfigJson } from '@radic/shared';
import EventEmitter from 'events';
import { SyncHook, SyncWaterfallHook } from 'tapable';
import { Package } from './Package';
export declare type DirectoryTree = Record<string, DirectoryTreeItem>;
export interface DirectoryTreeItem {
    name: string;
    path: string;
    dir: string;
    parentPath: string;
    getParent(): DirectoryTreeItem;
    stat?: FStat;
    children?: DirectoryTree;
}
export interface WatchOptions {
    directories: string[];
    watchOptions: WOptions;
}
export declare type FStatType = 'file' | 'dir' | 'block' | 'character' | 'link' | 'fifo' | 'socket';
export interface FStat extends Stats, ParsedPath {
    path: string;
    type: FStatType;
}
export interface JsonConfigs {
    pkg: PackageJson;
    tsconfig: TSconfigJson;
    tsconfigBuild: TSconfigJson;
}
export interface PackageBuilder extends macro.Proxy<PackageBuilder> {
}
export declare class PackageBuilder extends EventEmitter {
    readonly pkg: Package;
    readonly hooks: {
        preWatch: SyncWaterfallHook<[WatchOptions], import("tapable").UnsetAdditionalOptions>;
        watch: SyncHook<[string, WatchEventType, string], void, import("tapable").UnsetAdditionalOptions>;
        watchClose: SyncHook<string, void, import("tapable").UnsetAdditionalOptions>;
        watchError: SyncHook<[string, Error], void, import("tapable").UnsetAdditionalOptions>;
        watching: SyncHook<[string, FSWatcher], void, import("tapable").UnsetAdditionalOptions>;
        preBuild: SyncWaterfallHook<[string[]], import("tapable").UnsetAdditionalOptions>;
        postBuild: SyncHook<[string[]], void, import("tapable").UnsetAdditionalOptions>;
        build: SyncHook<[string, string], void, import("tapable").UnsetAdditionalOptions>;
        preClean: SyncWaterfallHook<[string[]], import("tapable").UnsetAdditionalOptions>;
        cleaned: SyncHook<[string[]], void, import("tapable").UnsetAdditionalOptions>;
        clean: SyncHook<[string, string], void, import("tapable").UnsetAdditionalOptions>;
        exec: SyncWaterfallHook<[ExecSyncOptionsWithStringEncoding], import("tapable").UnsetAdditionalOptions>;
    };
    protected log: (...args: any[]) => any;
    constructor(pkg: Package);
    watcher: FSWatcher;
    protected getDeepestUniqueDirectories(): string[];
    watchers: Record<string, FSWatcher>;
    watch(): this;
    build(): this;
    clean(): this;
    protected exec(command: string): string;
}
