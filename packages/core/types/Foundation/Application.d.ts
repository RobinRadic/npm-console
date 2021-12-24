import 'reflect-metadata';
import { Container, interfaces } from 'inversify';
import { Dispatcher } from '../Dispatcher';
import { Lookup } from 'inversify/lib/container/lookup';
import { ConfigRepository } from '../Config/ConfigRepository';
import { EnvPaths } from '../Support/envPaths';
import { Constructor, IServiceProvider, IServiceProviderClass, PackageJson, ServiceProvider } from '@radic/shared';
import { ApplicationInitOptions, Configuration } from '../types';
import ServiceIdentifier = interfaces.ServiceIdentifier;
import BindingInWhenOnSyntax = interfaces.BindingInWhenOnSyntax;
import { JSONSchema7 } from 'json-schema';
export declare type GetServiceIdentifier<T> = keyof Bindings | interfaces.ServiceIdentifier<T>;
export interface Hooks {
}
export interface Bindings {
    events: Dispatcher;
    config: ConfigRepository<Configuration> & Configuration;
    pkg: PackageJson;
    paths: Paths;
    [key: string]: any;
}
export interface Application {
    events: Dispatcher;
    config: ConfigRepository<Configuration> & Configuration;
    paths: Paths;
    pkg: PackageJson;
    get<T, C extends GetServiceIdentifier<T> = GetServiceIdentifier<T>>(si: C): C extends keyof Bindings ? Bindings[C] : T;
}
export interface App extends Application {
}
export interface Paths {
    node?: string;
    app?: string;
    pkg?: string;
    root?: string;
    /** resolves from root path */
    path: (...pargs: string[]) => string;
    env: Record<keyof EnvPaths, (...pargs: string[]) => string>;
}
declare module '../Dispatcher/Dispatcher' {
    interface DispatcherEvents {
        'Application:initialize:defaultConfig': [Partial<Configuration>];
        'Application:initialize': [ApplicationInitOptions];
        'Application:initialized': [Application];
        'Application:exit': [Application, ExitCode];
        'Application:error': [string, ExitCode];
        'Application:boot': [Application];
        'Application:bootProvider': [ServiceProvider];
        'Application:bootedProvider': [ServiceProvider];
        'Application:booted': [Application];
        'Application:start': [Application];
        'Application:started': [Application];
        'Application:loadProvider': [Constructor<ServiceProvider>];
        'Application:loadedProvider': [ServiceProvider];
        'Application:registerProviders': [Array<Constructor<ServiceProvider>>];
        'Application:registerProvider': [Constructor<ServiceProvider>];
        'Application:registeredProviders': [ServiceProvider];
    }
}
export declare type StartFn = <T = any>(app: Application, ...args: any[]) => Promise<T>;
export interface ConfigPart<T, K extends string = string> {
    key: K;
    defaults: T;
    schema?: JSONSchema7;
}
export declare enum ExitCode {
    OK = 0,
    ERROR = 1,
    MISUSE_OF_SHELL_BUILTINS = 2,
    COMMAND_INVOKED_CANNOT_EXECUTE = 126,
    COMMAND_NOT_FOUND = 127,
    INVALID_ARGUMENT_TO_EXIT = 128,
    SCRIPT_TERMINATED_BY_CONTROL_C = 130,
    EXIT_STATUS_OUT_OF_RANGE = 255
}
/**
 *
 *
 *
 * Deferred providers will for the first call of this function be prevented to register.
 * The provider will still be passed to the bootProvider function wich will for the first call also prevent booting
 * but bootProvider will set deferred to false. So on the second call of this function, it will be registered and booted
 */
export declare class Application extends Container {
    /**
     * The application instance.
     */
    protected static _instance: Application;
    /**
     * Configured service providers.
     */
    protected providers: any[];
    /**
     * Loaded service providers.
     */
    protected loaded: {};
    /**
     * The booted flag.
     */
    protected booted: boolean;
    /**
     * The started flag.
     */
    protected started: boolean;
    /**
     * Get/create the instance.
     */
    static get instance(): Application;
    /**
     * Return a singleton
     * instance of Application
     *
     * @return {Application}
     */
    static getInstance(): Application;
    get bindingDictionary(): Lookup<interfaces.Binding<Bindings>>;
    /**
     * Return whether the
     * application has booted.
     *
     * @returns bool
     */
    isBooted(): boolean;
    /**
     * Return whether the
     * application has started.
     *
     * @returns bool
     */
    isStarted(): boolean;
    hooks: Hooks;
    /**
     * Create a new Application instance.
     */
    private constructor();
    registerPaths(cwd?: string): void;
    protected configParts: Array<ConfigPart<any, any>>;
    addConfig<T, K extends string = string>(config: ConfigPart<T, K>): void;
    /**
     * Initialize the application.
     *
     * @param options
     * @returns
     */
    initialize(options: ApplicationInitOptions): Promise<this>;
    protected loadConfig(config: Configuration): Promise<void>;
    /**
     * Load service providers.
     *
     * @param Providers
     * @returns
     */
    protected loadProviders(Providers: IServiceProviderClass[]): Promise<this>;
    /**
     * Load the given provider.
     *
     * @param Provider
     * @returns
     */
    protected loadProvider(Provider: IServiceProviderClass): Promise<IServiceProvider>;
    /**
     * Register all given providers.
     *
     * @param {IServiceProvider[]} providers An array of instantiated providers
     * @returns this
     */
    protected registerProviders(providers: IServiceProvider[]): Promise<this>;
    /**
     * Register a Service Provider, if not instantiated, it will load the providers instance.
     *
     * @see IServiceProvider
     * @see IServiceProviderClass
     * @see loadProvider
     * @param {IServiceProvider|IServiceProviderClass} Provider
     */
    register(Provider: IServiceProvider | IServiceProviderClass): Promise<this>;
    /**
     * Boot the application.
     *
     * @returns
     */
    boot(): Promise<this>;
    protected bootProvider(provider: IServiceProvider): Promise<this>;
    /**
     * Start the application.
     *
     * @param args
     * @returns
     */
    start<T>(...args: any[]): Promise<T>;
    exit(exitCode?: ExitCode): never;
    error(error: string | Error, exit?: boolean | ExitCode): this;
    /**
     * Register a singleton bindng.
     *
     * @param serviceIdentifier
     * @param constructor
     * @returns
     */
    singleton<Type>(serviceIdentifier: ServiceIdentifier<Type>, constructor: new (...args: any[]) => Type): this;
    singleton<Type>(constructor: new (...args: any[]) => Type): this;
    /**
     * Register a binding.
     *
     * @param serviceIdentifier
     * @param func
     * @param singleton
     * @returns
     */
    binding<T>(serviceIdentifier: ServiceIdentifier<T>, func: (app: this) => T, singleton?: boolean): this;
    binding<T>(serviceIdentifier: ServiceIdentifier<T>, constructor: new (...args: any[]) => T, singleton?: boolean): this;
    binder<T>(serviceIdentifier: ServiceIdentifier<T>, func: (app: this) => T, singleton?: boolean): BindingInWhenOnSyntax<T>;
    binder<T>(serviceIdentifier: ServiceIdentifier<T>, constructor: new (...args: any[]) => T, singleton?: boolean): BindingInWhenOnSyntax<T>;
    /**
     * Register an instance binding.
     *
     * @param serviceIdentifier
     * @param value
     * @returns
     */
    instance<Type>(serviceIdentifier: ServiceIdentifier<Type>, value: Type): this;
    /**
     * Add a getter for the binding.
     *
     * @param id
     * @param key
     * @returns
     */
    addBindingGetter(id: string, key?: string): this;
}
