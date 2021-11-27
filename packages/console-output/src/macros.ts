import { Options as OraOptions, Ora } from 'ora';
import beeper from 'beeper';

export namespace macros {

    const isModuleInstalled = (name: string) => {
        try {
            let path = require.resolve(name);
            return !!path;
        } catch (e) {
            return false;
        }
    };
    const requireModule     = (name: string, context?: string) => {
        if ( !isModuleInstalled(name) ) {
            throw new Error(`Package "${name}" is not installed but needed for this function. ${context}`);
        }
        return require(name);
    };

    export interface MacroDefinition<T> {
        name: string,
        callback: T
    }

    export type SpinnerCallback = (text?: string, options?: OraOptions) => Ora
    export const spinner: MacroDefinition<SpinnerCallback> = {
        name    : 'spinner',
        callback: (text: string = '', options: OraOptions = {}) => {
            const spinner = requireModule('ora', 'spinner')(options);
            spinner.text  = text;
            return spinner;
        },
    };

    export type BeeperCallback = (val?: number | string, cb?: Function) => Promise<any>
    export const beep: MacroDefinition<SpinnerCallback> = {
        name    : 'beep',
        callback: (time, cb) => requireModule('beeper', 'beep')(time),
    };

}
