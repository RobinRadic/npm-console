import { Application, ConfigPart } from '@radic/core';
export declare const isServiceProviderClass: (value: any) => value is IServiceProviderClass;
export declare class ServiceProvider implements IServiceProvider {
    app: Application;
    deferred: boolean;
    config<T, K extends string = string>(config: ConfigPart<T, K>): void;
    constructor(app: Application);
}
export declare type Constructor<Type = any> = new (...args: any[]) => Type;
export declare type IServiceProviderClass = {
    new (app: Application): IServiceProvider;
};
export interface IServiceProvider {
    app: Application;
    providers?: IServiceProviderClass[];
    singletons?: Record<string, Constructor>;
    bindings?: Record<string, Constructor>;
    provides?: string[] | (() => string[]);
    deferred: boolean;
    config<T, K extends string = string>(config: ConfigPart<T, K>): any;
    load?(): any | Promise<any>;
    register?(): any | Promise<any>;
    boot?(): any | Promise<any>;
}
