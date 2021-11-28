import { Options as OraOptions, Ora } from 'ora';
import beeper from 'beeper';
import { NodeNotifier, Notification, NotificationCallback } from 'node-notifier';
import { Options as SparklyOptions } from 'sparkly';
import { requireModule } from './utils';
import { HighlightOptions } from 'cli-highlight';
import { Ui } from './ui';


export namespace macros {


    export interface MacroDefinition<T> {
        name: string,
        callback: T
    }

    export type SpinnerCallback = (text?: string, options?: OraOptions) => Ora
    export const spinner: MacroDefinition<SpinnerCallback> = {
        name    : 'spinner',
        callback: (text: string = '', options: OraOptions = {}) => {
            const spinner = requireModule('ora', 'spinner macro')(options);
            spinner.text  = text;
            return spinner;
        },
    };

    export type BeeperCallback = (val?: number | string, cb?: Function) => Promise<any>
    export const beep: MacroDefinition<SpinnerCallback> = {
        name    : 'beep',
        callback: (time, cb) => requireModule('beeper', 'beep macro')(time),
    };

    export type NotifyCallback = (options: Notification, cb?: NotificationCallback) => NodeNotifier
    export const notify: MacroDefinition<NotifyCallback> = {
        name    : 'notify',
        callback: (options: Notification, cb?: NotificationCallback) => requireModule('node-notifier', 'notify macro').notify(options, cb),

    };

    export type SparklyCallback = (numbers: Array<number | ''>, options?: SparklyOptions, ret?: boolean) => string | void
    export const sparkly: MacroDefinition<SparklyCallback> = {
        name: 'sparkly',
        callback(this: Ui, numbers: Array<number | ''>, options?: SparklyOptions, ret: boolean = false): string | void {
            let s = requireModule('sparkly', 'sparkly macro')(numbers, options);
            return ret ? s : this.output.writeln(s);
        },
    };


    export type HighlightCallback = (code: string, options?: HighlightOptions, ret?: boolean) => string | void
    export const highlight: MacroDefinition<HighlightCallback> = {
        name: 'highlight',
        callback(this: Ui, code: string, options?: HighlightOptions, ret: boolean = false) {
            let h = requireModule('cli-highlight', 'highlight macro')(code, options);
            return ret ? h : this.output.writeln(h);
        },
    };


}
