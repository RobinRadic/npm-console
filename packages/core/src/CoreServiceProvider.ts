import { CacheManager, CacheServiceProvider } from './Cache';
import { SystemServiceProvider } from './System';
import { makeLog, ServiceProvider } from '@radic/shared';
import { Debugger } from 'debug';

declare module './Foundation/Application' {
    export interface Application {
        ifDebug: <T>(fn:(log:Debugger) => T) => T
    }

    export interface Bindings {
        ifDebug: <T>(fn:(log:Debugger) => T) => T
    }
}

export class CoreServiceProvider extends ServiceProvider {
    providers = [
        CacheServiceProvider,
        SystemServiceProvider,
    ];


    public register(): any {
        const log = makeLog('debug')
        this.app.instance('ifDebug', (fn:Function) => this.app.config.debug ? fn(log) : null).addBindingGetter('ifDebug')
    }


    async boot() {
    }

}
