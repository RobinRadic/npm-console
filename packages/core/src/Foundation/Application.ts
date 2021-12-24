import 'reflect-metadata';
import { AsyncContainerModule, Container, interfaces } from 'inversify';
import { Dispatcher } from '../Dispatcher';
import { camelCase, merge } from 'lodash';
import { Lookup } from 'inversify/lib/container/lookup';
import { ConfigRepository } from '../Config/ConfigRepository';
import { buildProviderModule } from 'inversify-binding-decorators';
import { dirname, resolve } from 'path';
import envPaths, { EnvPaths } from '../Support/envPaths';
import { DirectoryStorage } from '../Storage';
import findupSync from 'findup-sync';
import { readFileSync } from 'fs';
import { Constructor, isConstructor, IServiceProvider, IServiceProviderClass, isServiceProviderClass, makeLog, PackageJson, ServiceProvider } from '@radic/shared';
import { ApplicationInitOptions, Configuration } from '../types';
import { defaultConfiguration } from '../consts';
import ServiceIdentifier = interfaces.ServiceIdentifier;
import BindingInWhenOnSyntax = interfaces.BindingInWhenOnSyntax;
import {JSONSchema7} from 'json-schema'
export type GetServiceIdentifier<T> =
    keyof Bindings
    | interfaces.ServiceIdentifier<T>

const log = makeLog('Application');

export interface Hooks {

}

export interface Bindings {
    events: Dispatcher;
    config: ConfigRepository<Configuration> & Configuration;

    pkg: PackageJson;
    paths: Paths;

    [ key: string ]: any;
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
    // [ key: string ]: string | ((...pargs: string[]) => string) | Record<string, string | ((...pargs: string[]) => string)>;
}

// Augment the DispatcherEvents interface with the events and payload types emitted in the application
declare module '../Dispatcher/Dispatcher' {
    export interface DispatcherEvents {
        'Application:initialize:defaultConfig': [ Partial<Configuration> ];
        'Application:initialize': [ ApplicationInitOptions ];
        'Application:initialized': [ Application ];
        'Application:exit': [ Application, ExitCode ];
        'Application:error': [ string, ExitCode ]; // reason, exit
        'Application:boot': [ Application ];
        'Application:bootProvider': [ ServiceProvider ];
        'Application:bootedProvider': [ ServiceProvider ];
        'Application:booted': [ Application ];
        'Application:start': [ Application ];
        'Application:started': [ Application ];
        'Application:loadProvider': [ Constructor<ServiceProvider> ];
        'Application:loadedProvider': [ ServiceProvider ];
        'Application:registerProviders': [ Array<Constructor<ServiceProvider>> ];
        'Application:registerProvider': [ Constructor<ServiceProvider> ];
        'Application:registeredProviders': [ ServiceProvider ];
    }
}


export type StartFn = <T = any>(app: Application, ...args: any[]) => Promise<T>

export interface ConfigPart<T, K extends string = string> {
    key: K,
    defaults: T,
    schema?: JSONSchema7
}

export enum ExitCode {
    OK                             = 0,
    ERROR                          = 1,
    MISUSE_OF_SHELL_BUILTINS       = 2,
    COMMAND_INVOKED_CANNOT_EXECUTE = 126,
    COMMAND_NOT_FOUND              = 127,
    INVALID_ARGUMENT_TO_EXIT       = 128,
    SCRIPT_TERMINATED_BY_CONTROL_C = 130,
    EXIT_STATUS_OUT_OF_RANGE       = 255
}

/**
 *
 *
 *
 * Deferred providers will for the first call of this function be prevented to register.
 * The provider will still be passed to the bootProvider function wich will for the first call also prevent booting
 * but bootProvider will set deferred to false. So on the second call of this function, it will be registered and booted
 */
export class Application extends Container{

    /**
     * The application instance.
     */
    protected static _instance: Application;

    /**
     * Configured service providers.
     */
    protected providers = [];

    /**
     * Loaded service providers.
     */
    protected loaded = {};

    /**
     * The booted flag.
     */
    protected booted = false;

    /**
     * The started flag.
     */
    protected started = false;

    /**
     * Get/create the instance.
     */
    public static get instance() {

        if ( !this._instance ) {
            this._instance = new this();
            this._instance.load(buildProviderModule());
        }

        return this._instance;
    }

    /**
     * Return a singleton
     * instance of Application
     *
     * @return {Application}
     */
    public static getInstance() {
        return this.instance;
    }

    get bindingDictionary(): Lookup<interfaces.Binding<Bindings>> {
        return this[ '_bindingDictionary' ];
    }

    /**
     * Return whether the
     * application has booted.
     *
     * @returns bool
     */
    public isBooted() { return this.booted; }

    /**
     * Return whether the
     * application has started.
     *
     * @returns bool
     */
    public isStarted() { return this.started; }

    public hooks: Hooks = {} as any;

    /**
     * Create a new Application instance.
     */
    private constructor() {

        super({
            defaultScope       : 'Transient',
            autoBindInjectable : true,
            skipBaseClassChecks: true,
        });

        this.singleton('events', Dispatcher).addBindingGetter('events');

        this.events.any(
            (eventName: string, ...args: any[]) => log(eventName, ' arguments: ', args),
        );

    }

    public registerPaths(cwd?: string) {
        const packageJsonPath  = findupSync('package.json', { cwd: cwd || __dirname });
        const root             = dirname(packageJsonPath);
        const path             = (...parts) => resolve(root, ...parts);
        const pkg: PackageJson = JSON.parse(readFileSync(path('package.json'), 'utf-8'));
        this.instance('pkg', pkg).addBindingGetter('pkg');
        let env            = envPaths(pkg.name, { suffix: '' });
        const paths: Paths = {
            node: process.argv[ 0 ],
            app : process.argv[ 1 ],
            pkg : path('package.json'),
            root,
            path,
            env : {
                data  : (...parts) => resolve(env.data, ...parts),
                config: (...parts) => resolve(env.config, ...parts),
                cache : (...parts) => resolve(env.cache, ...parts),
                log   : (...parts) => resolve(env.log, ...parts),
                temp  : (...parts) => resolve(env.temp, ...parts),
            },
        };
        this.instance('paths', paths).addBindingGetter('paths');
    }

    protected configParts: Array<ConfigPart<any, any>> = [];

    public addConfig<T, K extends string = string>(config: ConfigPart<T, K>) {
        if ( this.isBound('config') ) {
            this.config.set(config.key, merge({}, config.defaults, this.config.get(config.key)));
        } else {
            this.configParts.push(config);
        }
    }

    /**
     * Initialize the application.
     *
     * @param options
     * @returns
     */
    public async initialize(options: ApplicationInitOptions) {
        this.registerPaths(options.dirname);
        this.events.emit('Application:initialize:defaultConfig', defaultConfiguration);
        options.config = merge({}, defaultConfiguration, options.config);
        this.events.emit('Application:initialize', options);
        await this.loadProviders(options.providers);
        await this.loadConfig(options.config);
        await this.registerProviders(this.providers);
        this.events.emit('Application:initialized', this);
        return this;
    }

    protected async loadConfig(config: Configuration) {
        if ( this.isBound('config') ) {
            throw new Error('Cannot loadConfig, config already loaded');
        }
        this.configParts.forEach(part => {
            if ( config[ part.key ] === undefined ) {
                config[ part.key ] = {};
            }
            config[ part.key ] = merge({}, part.defaults, config[ part.key ]);
        });
        this.instance('config', ConfigRepository.asProxy<Configuration>(config)).addBindingGetter('config');

        this.config.markOriginal()
            .setStorage(DirectoryStorage.env('config', this.pkg.name))
            .load('merge');
    }

    /**
     * Load service providers.
     *
     * @param Providers
     * @returns
     */
    protected async loadProviders(Providers: IServiceProviderClass[]): Promise<this> {
        await Promise.all(
            Providers.map(async Provider => this.loadProvider(Provider)),
        );
        return this;
    }

    /**
     * Load the given provider.
     *
     * @param Provider
     * @returns
     */
    protected async loadProvider(Provider: IServiceProviderClass): Promise<IServiceProvider> {

        /**
         * Check if the provider has already been loaded.
         */
        const name = Provider.name ?? Provider.constructor.name;

        if ( name in this.loaded ) {
            return this.loaded[ name ];
        }

        /**
         * Instantiate the provider.
         */
        let provider = new Provider(this as any);

        /**
         * Check if the provider has
         * other providers to load
         * and load those first.
         */
        if ( 'providers' in provider && Reflect.getMetadata('providers', provider) !== true ) {

            Reflect.defineMetadata('providers', true, provider);

            await this.loadProviders(provider.providers);
        }

        if ( 'load' in provider && Reflect.getMetadata('load', provider) !== true ) {
            Reflect.defineMetadata('load', true, provider);
            await this.loadAsync(new AsyncContainerModule(() => provider.load()));
        }

        /**
         * Now load the provider itself.
         */
        this.events.emit('Application:loadProvider', Provider);

        this.loaded[ name ] = provider;
        this.providers.push(provider);

        this.events.emit('Application:loadedProvider', provider);

        return provider;
    }

    /**
     * Register all given providers.
     *
     * @param {IServiceProvider[]} providers An array of instantiated providers
     * @returns this
     */
    protected async registerProviders(providers: IServiceProvider[]): Promise<this> {

        this.events.emit('Application:registerProviders', providers);

        await Promise.all(providers.map(async Provider => this.register(Provider)));

        this.events.emit('Application:registeredProviders', providers);

        return this;
    }

    /**
     * Register a Service Provider, if not instantiated, it will load the providers instance.
     *
     * @see IServiceProvider
     * @see IServiceProviderClass
     * @see loadProvider
     * @param {IServiceProvider|IServiceProviderClass} Provider
     */
    public async register(Provider: IServiceProvider | IServiceProviderClass): Promise<this> {
        let provider: IServiceProvider;

        if ( isServiceProviderClass(Provider) ) {
            provider = await this.loadProvider(Provider);
        } else {
            provider = Provider;
        }

        // deferred providers will for the first call of this function be prevented to register.
        // The provider will still be passed to the bootProvider function wich will for the first call also prevent booting
        // but bootProvider will set deferred to false. So on the second call of this function, it will be registered and booted
        if ( provider.deferred ) {
            return this;
        }

        this.events.emit('Application:registerProvider', Provider);

        if ( 'register' in provider && Reflect.getMetadata('register', provider) !== true ) {
            Reflect.defineMetadata('register', true, provider);
            await this.loadAsync(new AsyncContainerModule(() => provider.register()));
        }

        this.events.emit('Application:registeredProviders', provider);

        if ( this.booted ) {
            await this.bootProvider(provider);
        }

        return this;
    };

    /**
     * Boot the application.
     *
     * @returns
     */
    public async boot(): Promise<this> {

        /**
         * Don't boot more than once!
         */
        if ( this.booted ) {
            return this;
        }

        this.events.emit('Application:boot', this);

        await Promise.all(this.providers.map(provider => this.bootProvider(provider)));

        // Booted baby!
        this.booted = true;

        this.events.emit('Application:booted', this);

        return this;
    };

    protected async bootProvider(provider: IServiceProvider) {
        if ( provider.deferred ) {
            provider.deferred = false;
            return this;
        }
        this.events.emit('Application:bootProvider', provider);

        if ( 'boot' in provider && Reflect.getMetadata('boot', provider) !== true ) {
            Reflect.defineMetadata('boot', true, provider);
            await this.loadAsync(new AsyncContainerModule(() => provider.boot()));
        }

        this.events.emit('Application:bootedProvider', provider);
        return this;
    }

    /**
     * Start the application.
     *
     * @param args
     * @returns
     */
    public async start<T>(...args: any[]): Promise<T> {
        this.events.emit('Application:start', this);
        let result;
        let startFn: StartFn = async () => null;
        if ( this.isBound('start') ) {
            startFn = this.get<StartFn>('start');
        } else if ( this.config.has('startFn') ) {
            startFn = this.config.startFn;
        }
        result = await startFn(this, ...args);
        this.events.emit('Application:started', this);
        return result;
    };

    public exit(exitCode: ExitCode = ExitCode.OK) {
        this.events.emit('Application:exit', this, exitCode);
        return process.exit(exitCode);
    }

    public error(error: string | Error, exit?: boolean | ExitCode) {
        let message: string = error.toString();
        if ( error instanceof Error ) {
            message = `${error.name} - ${error.message}`;
            // if ( this.config.debug ) {
            //     console.log(error.stack);
            // }
        }
        exit = exit === true ? ExitCode.ERROR : exit;
        this.events.emit('Application:error', error, exit);

        if ( exit ) {
            this.exit(exit);
        }
        return this;
    }

    /**
     * Register a singleton bindng.
     *
     * @param serviceIdentifier
     * @param constructor
     * @returns
     */
    public singleton<Type>(serviceIdentifier: ServiceIdentifier<Type>, constructor: new (...args: any[]) => Type): this
    public singleton<Type>(constructor: new (...args: any[]) => Type): this
    public singleton<Type>(...args): this {
        let serviceIdentifier = args[ 0 ];
        let constructor       = args[ args.length - 1 ];

        this.bind(serviceIdentifier).to(constructor).inSingletonScope();

        return this;
    }

    /**
     * Register a binding.
     *
     * @param serviceIdentifier
     * @param func
     * @param singleton
     * @returns
     */
    public binding<T>(serviceIdentifier: ServiceIdentifier<T>, func: (app: this) => T, singleton?: boolean): this
    public binding<T>(serviceIdentifier: ServiceIdentifier<T>, constructor: new (...args: any[]) => T, singleton?: boolean): this
    public binding<T>(serviceIdentifier: ServiceIdentifier<T>, toBind, singleton: boolean = false): this {
        let binding: BindingInWhenOnSyntax<T>;
        if ( isConstructor(toBind) ) {
            binding = this.bind(serviceIdentifier).to(toBind);
        } else {
            binding = this.bind(serviceIdentifier).toDynamicValue(ctx => toBind(this));
        }
        singleton ? binding.inSingletonScope() : binding.inTransientScope();

        return this;
    }

    public binder<T>(serviceIdentifier: ServiceIdentifier<T>, func: (app: this) => T, singleton?: boolean): BindingInWhenOnSyntax<T>
    public binder<T>(serviceIdentifier: ServiceIdentifier<T>, constructor: new (...args: any[]) => T, singleton?: boolean): BindingInWhenOnSyntax<T>
    public binder<T>(serviceIdentifier: ServiceIdentifier<T>, toBind, singleton: boolean = false): BindingInWhenOnSyntax<T> {
        let binding: BindingInWhenOnSyntax<T>;
        if ( isConstructor(toBind) ) {
            binding = this.bind(serviceIdentifier).to(toBind);
        } else {
            binding = this.bind(serviceIdentifier).toDynamicValue(ctx => toBind(this));
        }
        singleton ? binding.inSingletonScope() : binding.inTransientScope();

        return binding;
    }

    /**
     * Register an instance binding.
     *
     * @param serviceIdentifier
     * @param value
     * @returns
     */
    public instance<Type>(
        serviceIdentifier: ServiceIdentifier<Type>,
        value: Type,
    ): this {

        this.bind(serviceIdentifier).toConstantValue(value);

        return this;
    }

    /**
     * Add a getter for the binding.
     *
     * @param id
     * @param key
     * @returns
     */
    public addBindingGetter(id: string, key: string = null): this {

        key = key || id;

        key = camelCase(key);

        const self = this;

        Object.defineProperty(self, key, {
            get() {
                return self.get(id);
            },
            configurable: true,
            enumerable  : true,
        });

        return this;
    }
}
