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
exports.CliServiceProvider = void 0;
const shared_1 = require("@radic/shared");
const tapable_1 = require("tapable");
const Cli_1 = __importDefault(require("./Cli"));
function getLocaleStrings(locale, out) {
    function transform(obj) {
        return Object.entries(obj).map(([key, value]) => {
            if ((0, shared_1.isString)(value)) {
                return [key, out.parse(value)];
            }
            return [key, transform(value)];
        }).reduce(shared_1.objectify, {});
    }
    return transform(locale);
}
class CliServiceProvider extends shared_1.ServiceProvider {
    constructor() {
        super(...arguments);
        this.providers = [];
    }
    load() {
        this.config({
            key: 'cli',
            defaults: {
                maxWidth: 150,
            },
            schema: {
                type: 'object',
                properties: {
                    commandDir: {
                        type: 'string',
                    },
                },
                required: ['commandDir'],
            },
        });
    }
    register() {
        this.registerHooks();
        this.registerCli();
        this.setupCli();
        this.registerStartCli();
    }
    registerHooks() {
        this.app.hooks.cli = {
            setup: new tapable_1.AsyncSeriesHook(['cli']),
            argv: new tapable_1.SyncWaterfallHook(['argv']),
            args: new tapable_1.AsyncSeriesWaterfallHook(['args']),
            command: {
                command: new tapable_1.AsyncSeriesWaterfallHook(['command']),
                constructor: new tapable_1.SyncHook(),
                options: new tapable_1.SyncWaterfallHook(['options']),
                builder: new tapable_1.SyncHook(['command', 'cli']),
                decorator: new tapable_1.SyncHook(),
                handler: new tapable_1.SyncHook(['command', 'params']),
            },
        };
    }
    registerCli() {
        this.app.instance('cli', Cli_1.default)
            .addBindingGetter('cli');
    }
    setupCli() {
        this.app.bind('cli.setup').toFactory(ctx => {
            return (cli) => __awaiter(this, void 0, void 0, function* () {
                let { maxWidth } = this.app.config.cli;
                cli
                    .version(false)
                    .commandDir(this.app.config.cli.commandDir, {
                    extensions: ['ts', 'js', 'tsx'],
                    visit: (commandObject, pathToFile, filename) => {
                        return new commandObject.default();
                    },
                })
                    .demandCommand()
                    .parserConfiguration({
                    'dot-notation': false,
                });
                // .help('h', 'Show Help').alias('h', 'help')
                // .group('h', this.app.out.parse('{bold}Global Options:{/bold}'))
                // .option('V', { type: 'boolean', alias: 'version', global: false });
                // .showHelpOnFail(true)
                if (this.app.isBound('output')) {
                    const locale = require('../../yargs/locale.json');
                    cli.updateStrings(getLocaleStrings(locale, this.app.get('output')));
                }
                if (maxWidth !== false && cli.terminalWidth() > maxWidth) {
                    cli.wrap(maxWidth);
                    this.app.instance('cli.wrap', maxWidth);
                }
                else {
                    this.app.instance('cli.wrap', cli.terminalWidth());
                }
                try {
                    yield this.app.hooks.cli.setup.promise(cli);
                }
                catch (e) {
                    throw e;
                }
                return cli;
            });
        });
    }
    registerStartCli() {
        this.app.bind('cli.start').toFactory((ctx) => {
            return () => __awaiter(this, void 0, void 0, function* () {
                const cli = ctx.container.get('cli');
                const setup = ctx.container.get('cli.setup');
                yield setup(cli);
                try {
                    let args = yield cli.parse();
                    args = yield this.app.hooks.cli.args.promise(args);
                    return args;
                }
                catch (e) {
                    throw e;
                }
            });
        });
        this.app.addBindingGetter('cli.start');
    }
}
exports.CliServiceProvider = CliServiceProvider;
//# sourceMappingURL=CliServiceProvider.js.map