import { YargsInstance } from '../yargs';
import { Application } from '@radic/core';
export declare class CliInstance extends YargsInstance {
    app: Application;
    getGlobalOptionsGroup(): string;
    globalHelp(opt?: string, msg?: string): this;
    useVerbosity(times: number): this;
    commandos(dir: any): this;
    commandos4(dir: string): this;
    commandos2(dir: string): this;
    showTree(dir: string): any;
}
