import { interfaces as inversifyInterfaces } from 'inversify/lib/interfaces/interfaces';
import { Application, Bindings } from './Application';
export { Application, Bindings, ExitCode, ConfigPart, GetServiceIdentifier, Hooks, Paths, StartFn } from './Application';
export declare const app: Application;
export declare const inject: (serviceIdentifier: keyof Bindings | string) => (proto: any, key: string) => void;
export { injectable, id, decorate, named, optional, unmanaged, targetName, tagged, postConstruct } from 'inversify';
export declare const singleton: <T>(identifier: any, onActivation?: (context: inversifyInterfaces.Context, injectable: T) => T) => (target: any) => any;
export declare const binding: <T>(serviceIdentifier: inversifyInterfaces.ServiceIdentifier) => (target: any) => any;
