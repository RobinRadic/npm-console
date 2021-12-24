import { Application, ConfigPart } from '@radic/core';

export const isServiceProviderClass = (value: any): value is IServiceProviderClass => !(value instanceof ServiceProvider);

export class ServiceProvider implements IServiceProvider {
    deferred:boolean=false
    config<T, K extends string = string>(config:ConfigPart<T, K>){
        this.app.addConfig(config)
    }

    constructor(public app: Application) {}
}

export type Constructor<Type = any> = new (...args: any[]) => Type

export type IServiceProviderClass = {
    new(app: Application): IServiceProvider
}


export interface IServiceProvider {
    app: Application;
    providers?: IServiceProviderClass[];
    singletons?: Record<string, Constructor>;
    bindings?: Record<string, Constructor>;
    provides?:string[]|(() => string[])
    deferred:boolean

    config<T, K extends string = string>(config:ConfigPart<T, K>)

    load?(): any | Promise<any>;

    register?(): any | Promise<any>;

    boot?(): any | Promise<any>;
}
