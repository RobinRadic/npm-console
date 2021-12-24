/// <reference types="node" />
import { ParsedPath } from 'path';
import { Mode, Stats } from 'fs';
import { Result as FilesizeResult } from 'file-size';
import { FS, StatConstructors, StatTypeMap } from './types';
import { Moment } from 'moment';
import open from 'open';
export declare abstract class Base {
    path: string;
    abstract type: keyof StatTypeMap;
    protected stats: Stats;
    static classes: StatConstructors;
    protected createType<T extends keyof StatTypeMap>(type: T, path: string): StatTypeMap[T];
    get fs(): FS;
    get parsed(): ParsedPath;
    get dirname(): string;
    get basename(): string;
    get size(): FilesizeResult;
    get changedOn(): Moment;
    get modifiedOn(): Moment;
    get accessedOn(): Moment;
    get createdOn(): Moment;
    get mimeType(): string | false;
    get contentType(): string | false;
    open(options?: open.Options): Promise<import("child_process").ChildProcess>;
    constructor(path: string);
    constructed(): void;
    resolve(...parts: string[]): string;
    stat(force?: boolean): Stats;
    delete(): void;
    move(dest: string): void;
    chmod(mode: Mode): this;
    protected toProxy(): Base;
}
