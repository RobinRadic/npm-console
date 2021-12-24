import { Options as OraOptions, Ora } from 'ora';
import { NodeNotifier, Notification, NotificationCallback } from 'node-notifier';
import { Options as SparklyOptions } from 'sparkly';
import { HighlightOptions } from 'cli-highlight';
import { TreeData, TreeOptions } from './interfaces';
import { Output } from './Output';
export declare namespace macros {
    interface MacroDefinition<T> {
        name: string;
        callback: T;
    }
    type SpinnerCallback = (text?: string, options?: OraOptions) => Ora;
    const spinner: MacroDefinition<SpinnerCallback>;
    type BeeperCallback = (val?: number | string, cb?: Function) => Promise<any>;
    const beep: MacroDefinition<SpinnerCallback>;
    type NotifyCallback = (options: Notification, cb?: NotificationCallback) => NodeNotifier;
    const notify: MacroDefinition<NotifyCallback>;
    type SparklyCallback = (numbers: Array<number | ''>, options?: SparklyOptions, ret?: boolean) => string | Output;
    const sparkly: MacroDefinition<SparklyCallback>;
    type HighlightCallback = (code: string, options?: HighlightOptions, ret?: boolean) => string | Output;
    const highlight: MacroDefinition<HighlightCallback>;
    type TreeCallback = (obj: TreeData, opts?: TreeOptions, returnValue?: boolean) => string | Output;
    const tree: MacroDefinition<TreeCallback>;
}
