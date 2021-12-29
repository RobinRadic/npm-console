import { CacheServiceProvider } from './Cache';
import { SystemServiceProvider } from './System';
import { ServiceProvider } from '@radic/shared';
import { Debugger } from 'debug';
declare module './Foundation/Application' {
    interface Application {
        ifDebug: <T>(fn: (log: Debugger) => T) => T;
    }
    interface Bindings {
        ifDebug: <T>(fn: (log: Debugger) => T) => T;
    }
}
export declare class CoreServiceProvider extends ServiceProvider {
    providers: (typeof CacheServiceProvider | typeof SystemServiceProvider)[];
    register(): any;
    boot(): Promise<void>;
}
