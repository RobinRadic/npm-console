"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.ExitCode = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const Dispatcher_1 = require("../Dispatcher");
const lodash_1 = require("lodash");
const ConfigRepository_1 = require("../Config/ConfigRepository");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const path_1 = require("path");
const envPaths_1 = __importDefault(require("../Support/envPaths"));
const Storage_1 = require("../Storage");
const findup_sync_1 = __importDefault(require("findup-sync"));
const fs_1 = require("fs");
const shared_1 = require("@radic/shared");
const consts_1 = require("../consts");
const log = (0, shared_1.makeLog)('Application');
var ExitCode;
(function (ExitCode) {
    ExitCode[ExitCode["OK"] = 0] = "OK";
    ExitCode[ExitCode["ERROR"] = 1] = "ERROR";
    ExitCode[ExitCode["MISUSE_OF_SHELL_BUILTINS"] = 2] = "MISUSE_OF_SHELL_BUILTINS";
    ExitCode[ExitCode["COMMAND_INVOKED_CANNOT_EXECUTE"] = 126] = "COMMAND_INVOKED_CANNOT_EXECUTE";
    ExitCode[ExitCode["COMMAND_NOT_FOUND"] = 127] = "COMMAND_NOT_FOUND";
    ExitCode[ExitCode["INVALID_ARGUMENT_TO_EXIT"] = 128] = "INVALID_ARGUMENT_TO_EXIT";
    ExitCode[ExitCode["SCRIPT_TERMINATED_BY_CONTROL_C"] = 130] = "SCRIPT_TERMINATED_BY_CONTROL_C";
    ExitCode[ExitCode["EXIT_STATUS_OUT_OF_RANGE"] = 255] = "EXIT_STATUS_OUT_OF_RANGE";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
/**
 *
 *
 *
 * Deferred providers will for the first call of this function be prevented to register.
 * The provider will still be passed to the bootProvider function wich will for the first call also prevent booting
 * but bootProvider will set deferred to false. So on the second call of this function, it will be registered and booted
 */
class Application extends inversify_1.Container {
    /**
     * Create a new Application instance.
     */
    constructor() {
        super({
            defaultScope: 'Transient',
            autoBindInjectable: true,
            skipBaseClassChecks: true,
        });
        /**
         * Configured service providers.
         */
        this.providers = [];
        /**
         * Loaded service providers.
         */
        this.loaded = {};
        /**
         * The booted flag.
         */
        this.booted = false;
        /**
         * The started flag.
         */
        this.started = false;
        this.hooks = {};
        this.configParts = [];
        this.singleton('events', Dispatcher_1.Dispatcher).addBindingGetter('events');
        this.events.any((eventName, ...args) => log(eventName, ' arguments: ', args));
    }
    /**
     * Get/create the instance.
     */
    static get instance() {
        if (!this._instance) {
            this._instance = new this();
            this._instance.load((0, inversify_binding_decorators_1.buildProviderModule)());
        }
        return this._instance;
    }
    /**
     * Return a singleton
     * instance of Application
     *
     * @return {Application}
     */
    static getInstance() {
        return this.instance;
    }
    get bindingDictionary() {
        return this['_bindingDictionary'];
    }
    /**
     * Return whether the
     * application has booted.
     *
     * @returns bool
     */
    isBooted() { return this.booted; }
    /**
     * Return whether the
     * application has started.
     *
     * @returns bool
     */
    isStarted() { return this.started; }
    registerPaths(cwd) {
        const packageJsonPath = (0, findup_sync_1.default)('package.json', { cwd: cwd || __dirname });
        const root = (0, path_1.dirname)(packageJsonPath);
        const path = (...parts) => (0, path_1.resolve)(root, ...parts);
        const pkg = JSON.parse((0, fs_1.readFileSync)(path('package.json'), 'utf-8'));
        this.instance('pkg', pkg).addBindingGetter('pkg');
        let env = (0, envPaths_1.default)(pkg.name, { suffix: '' });
        const paths = {
            node: process.argv[0],
            app: process.argv[1],
            pkg: path('package.json'),
            root,
            path,
            env: {
                data: (...parts) => (0, path_1.resolve)(env.data, ...parts),
                config: (...parts) => (0, path_1.resolve)(env.config, ...parts),
                cache: (...parts) => (0, path_1.resolve)(env.cache, ...parts),
                log: (...parts) => (0, path_1.resolve)(env.log, ...parts),
                temp: (...parts) => (0, path_1.resolve)(env.temp, ...parts),
            },
        };
        this.instance('paths', paths).addBindingGetter('paths');
    }
    addConfig(config) {
        if (this.isBound('config')) {
            this.config.set(config.key, (0, lodash_1.merge)({}, config.defaults, this.config.get(config.key)));
        }
        else {
            this.configParts.push(config);
        }
    }
    /**
     * Initialize the application.
     *
     * @param options
     * @returns
     */
    initialize(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerPaths(options.dirname);
            this.events.emit('Application:initialize:defaultConfig', consts_1.defaultConfiguration);
            options.config = (0, lodash_1.merge)({}, consts_1.defaultConfiguration, options.config);
            this.events.emit('Application:initialize', options);
            yield this.loadProviders(options.providers);
            yield this.loadConfig(options.config);
            yield this.registerProviders(this.providers);
            this.events.emit('Application:initialized', this);
            return this;
        });
    }
    loadConfig(config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isBound('config')) {
                throw new Error('Cannot loadConfig, config already loaded');
            }
            this.configParts.forEach(part => {
                if (config[part.key] === undefined) {
                    config[part.key] = {};
                }
                config[part.key] = (0, lodash_1.merge)({}, part.defaults, config[part.key]);
            });
            this.instance('config', ConfigRepository_1.ConfigRepository.asProxy(config)).addBindingGetter('config');
            this.config.markOriginal()
                .setStorage(Storage_1.DirectoryStorage.env('config', this.pkg.name))
                .load('merge');
        });
    }
    /**
     * Load service providers.
     *
     * @param Providers
     * @returns
     */
    loadProviders(Providers) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(Providers.map((Provider) => __awaiter(this, void 0, void 0, function* () { return this.loadProvider(Provider); })));
            return this;
        });
    }
    /**
     * Load the given provider.
     *
     * @param Provider
     * @returns
     */
    loadProvider(Provider) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Check if the provider has already been loaded.
             */
            const name = (_a = Provider.name) !== null && _a !== void 0 ? _a : Provider.constructor.name;
            if (name in this.loaded) {
                return this.loaded[name];
            }
            /**
             * Instantiate the provider.
             */
            let provider = new Provider(this);
            /**
             * Check if the provider has
             * other providers to load
             * and load those first.
             */
            if ('providers' in provider && Reflect.getMetadata('providers', provider) !== true) {
                Reflect.defineMetadata('providers', true, provider);
                yield this.loadProviders(provider.providers);
            }
            if ('load' in provider && Reflect.getMetadata('load', provider) !== true) {
                Reflect.defineMetadata('load', true, provider);
                yield this.loadAsync(new inversify_1.AsyncContainerModule(() => provider.load()));
            }
            /**
             * Now load the provider itself.
             */
            this.events.emit('Application:loadProvider', Provider);
            this.loaded[name] = provider;
            this.providers.push(provider);
            this.events.emit('Application:loadedProvider', provider);
            return provider;
        });
    }
    /**
     * Register all given providers.
     *
     * @param {IServiceProvider[]} providers An array of instantiated providers
     * @returns this
     */
    registerProviders(providers) {
        return __awaiter(this, void 0, void 0, function* () {
            this.events.emit('Application:registerProviders', providers);
            yield Promise.all(providers.map((Provider) => __awaiter(this, void 0, void 0, function* () { return this.register(Provider); })));
            this.events.emit('Application:registeredProviders', providers);
            return this;
        });
    }
    /**
     * Register a Service Provider, if not instantiated, it will load the providers instance.
     *
     * @see IServiceProvider
     * @see IServiceProviderClass
     * @see loadProvider
     * @param {IServiceProvider|IServiceProviderClass} Provider
     */
    register(Provider) {
        return __awaiter(this, void 0, void 0, function* () {
            let provider;
            if ((0, shared_1.isServiceProviderClass)(Provider)) {
                provider = yield this.loadProvider(Provider);
            }
            else {
                provider = Provider;
            }
            // deferred providers will for the first call of this function be prevented to register.
            // The provider will still be passed to the bootProvider function wich will for the first call also prevent booting
            // but bootProvider will set deferred to false. So on the second call of this function, it will be registered and booted
            if (provider.deferred) {
                return this;
            }
            this.events.emit('Application:registerProvider', Provider);
            if ('register' in provider && Reflect.getMetadata('register', provider) !== true) {
                Reflect.defineMetadata('register', true, provider);
                yield this.loadAsync(new inversify_1.AsyncContainerModule(() => provider.register()));
            }
            this.events.emit('Application:registeredProviders', provider);
            if (this.booted) {
                yield this.bootProvider(provider);
            }
            return this;
        });
    }
    ;
    /**
     * Boot the application.
     *
     * @returns
     */
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Don't boot more than once!
             */
            if (this.booted) {
                return this;
            }
            this.events.emit('Application:boot', this);
            yield Promise.all(this.providers.map(provider => this.bootProvider(provider)));
            // Booted baby!
            this.booted = true;
            this.events.emit('Application:booted', this);
            return this;
        });
    }
    ;
    bootProvider(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider.deferred) {
                provider.deferred = false;
                return this;
            }
            this.events.emit('Application:bootProvider', provider);
            if ('boot' in provider && Reflect.getMetadata('boot', provider) !== true) {
                Reflect.defineMetadata('boot', true, provider);
                yield this.loadAsync(new inversify_1.AsyncContainerModule(() => provider.boot()));
            }
            this.events.emit('Application:bootedProvider', provider);
            return this;
        });
    }
    /**
     * Start the application.
     *
     * @param args
     * @returns
     */
    start(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            this.events.emit('Application:start', this);
            let result;
            let startFn = () => __awaiter(this, void 0, void 0, function* () { return null; });
            if (this.isBound('start')) {
                startFn = this.get('start');
            }
            else if (this.config.has('startFn')) {
                startFn = this.config.startFn;
            }
            result = yield startFn(this, ...args);
            this.events.emit('Application:started', this);
            return result;
        });
    }
    ;
    exit(exitCode = ExitCode.OK) {
        this.events.emit('Application:exit', this, exitCode);
        return process.exit(exitCode);
    }
    error(error, exit) {
        let message = error.toString();
        if (error instanceof Error) {
            message = `${error.name} - ${error.message}`;
            // if ( this.config.debug ) {
            //     console.log(error.stack);
            // }
        }
        exit = exit === true ? ExitCode.ERROR : exit;
        this.events.emit('Application:error', error, exit);
        if (exit) {
            this.exit(exit);
        }
        return this;
    }
    singleton(...args) {
        let serviceIdentifier = args[0];
        let constructor = args[args.length - 1];
        this.bind(serviceIdentifier).to(constructor).inSingletonScope();
        return this;
    }
    binding(serviceIdentifier, toBind, singleton = false) {
        let binding;
        if ((0, shared_1.isConstructor)(toBind)) {
            binding = this.bind(serviceIdentifier).to(toBind);
        }
        else {
            binding = this.bind(serviceIdentifier).toDynamicValue(ctx => toBind(this));
        }
        singleton ? binding.inSingletonScope() : binding.inTransientScope();
        return this;
    }
    binder(serviceIdentifier, toBind, singleton = false) {
        let binding;
        if ((0, shared_1.isConstructor)(toBind)) {
            binding = this.bind(serviceIdentifier).to(toBind);
        }
        else {
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
    instance(serviceIdentifier, value) {
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
    addBindingGetter(id, key = null) {
        key = key || id;
        key = (0, lodash_1.camelCase)(key);
        const self = this;
        Object.defineProperty(self, key, {
            get() {
                return self.get(id);
            },
            configurable: true,
            enumerable: true,
        });
        return this;
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map