import getDecorators from 'inversify-inject-decorators';
import { interfaces as inversifyInterfaces } from 'inversify/lib/interfaces/interfaces';
import { fluentProvide, provide } from 'inversify-binding-decorators';
import { Application, Bindings } from './Application';

export { Application, Bindings, ExitCode, ConfigPart, GetServiceIdentifier, Hooks, Paths, StartFn } from './Application';


export const app = Application.instance;

const { lazyInject }                                                                                   = getDecorators(app);
export const inject: (serviceIdentifier: keyof Bindings | string) => (proto: any, key: string) => void = lazyInject as any;
export { injectable, id, decorate, named, optional, unmanaged, targetName, tagged, postConstruct } from 'inversify';
export const singleton = <T>(identifier: any, onActivation?: (context: inversifyInterfaces.Context, injectable: T) => T) => {
    let provider = fluentProvide(identifier).inSingletonScope();
    if ( onActivation ) {
        provider.onActivation(onActivation);
    }
    return provider.done(true);
};
export const binding   = <T>(serviceIdentifier: inversifyInterfaces.ServiceIdentifier) => {
    return provide(serviceIdentifier, true);
};
