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
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator = void 0;
const core_1 = require("@radic/core");
const shared_1 = require("@radic/shared");
function decorator(type, options, callback) {
    const { aliases, desc, directory, name } = options;
    return (Target) => {
        let command = name;
        if (!Reflect.hasMetadata('arguments', Target.prototype)) {
            Reflect.defineMetadata('arguments', [], Target.prototype);
        }
        let args = Reflect.getMetadata('arguments', Target.prototype);
        if (args) {
            args = args.reverse();
            if (args.length > 0) {
                command = buildCommandString(args);
            }
        }
        let examples = Reflect.getMetadata('examples', Target.prototype);
        let usage = Reflect.getMetadata('usage', Target.prototype);
        let options = Reflect.getMetadata('options', Target.prototype) || {};
        options = core_1.app.hooks.cli.command.options.call(options);
        function buildCommandString(args) {
            let text = name.split(' ')[0] + ' ';
            for (const arg of args) {
                text += arg.required ? '<' : '[';
                text += arg.name;
                if (arg.options.alias) {
                    let alias = Array.isArray(arg.options.alias) ? arg.options.alias : [arg.options.alias];
                    text += '|' + alias;
                }
                if (arg.variadic)
                    text += '...';
                text += arg.required ? '>' : ']';
                text += ' ';
            }
            return text;
        }
        return class Command {
            constructor() {
                this.command = command;
                this.commandName = name.split(' ')[0];
                this.describe = desc;
                this.aliases = aliases;
                this.builder = (yargs) => __awaiter(this, void 0, void 0, function* () {
                    let cli = yargs;
                    this.instance.cli = cli;
                    if (args) {
                        for (const arg of args) {
                            let options = Object.assign({ type: arg.type, description: arg.description, array: arg.variadic }, arg.options);
                            if (arg.required === true) {
                                options.demand = true;
                            }
                            if (arg.defaultValue) {
                                options.default = arg.defaultValue;
                            }
                            cli.positional(arg.name, options);
                        }
                    }
                    Object.entries(options).forEach(([key, value]) => cli.option(key, value));
                    if (type === 'group') {
                        cli.commandos(directory);
                    }
                    if (examples) {
                        for (const example of examples) {
                            if (core_1.app.isBound('output')) {
                                example.example = core_1.app.get('output').parse(example.example);
                                example.description = core_1.app.get('output').parse(example.description);
                            }
                            cli.example(example.example, example.description);
                        }
                    }
                    //
                    // let cliusage;
                    // if ( usage && usage.text && !usage.append ) {
                    //     cliusage = app.isBound('output') ? app.get('output').parse(usage.text) : usage.text;
                    // } else if ( usage && usage.text && usage.append ) {
                    //     cliusage = `{bold}${this.describe}:{/bold}\n{green}$\{/green} ${this.command}`;
                    //     cliusage = app.get('output').parse(cliusage + usage.text);
                    // } else if ( app.isBound('output') ) {
                    //     cliusage = `{bold}${this.describe}:{/bold}\n{green}$\{/green} ${this.command}`;
                    //     cliusage = app.get('output').parse(cliusage);
                    // }
                    // cli.usage(cliusage);
                    core_1.app.hooks.cli.command.builder.call(this, cli);
                    if (typeof this.instance.builder === 'function') {
                        return this.instance.builder(cli);
                    }
                    return yargs;
                });
                this.handler = (args) => __awaiter(this, void 0, void 0, function* () {
                    yield Promise.all(this.instance.providers.map(Provider => core_1.app.register(Provider)));
                    args = this.instance.cli.argv;
                    let params = [];
                    (0, shared_1.reflectParams)(this.instance.handle, true).forEach(param => {
                        if (param.variadic) {
                            if (args[param.name] !== undefined) {
                                params.push(...args[param.name]);
                            }
                        }
                        else if (args[param.name] !== undefined) {
                            params.push(args[param.name]);
                        }
                        else {
                            params.push(undefined);
                        }
                    });
                    let context = this.instance.cli.getContext();
                    let command = this.instance.cli.getCommand();
                    let a = { context, command };
                    const nonOptsArgs = args._;
                    const nodeCommand = args.$0;
                    delete args._;
                    delete args.$0;
                    Object.assign(this.instance, args);
                    core_1.app.hooks.cli.command.handler.call(this, params);
                    return yield this.instance.handle(...params);
                });
                this.instance = core_1.app.resolve(Target);
                Object.entries(options).forEach(([key, value]) => {
                    if (this.instance[key] !== undefined) {
                        value.default = this.instance[key];
                    }
                });
                core_1.app.hooks.cli.command.constructor.call(this);
            }
        };
    };
}
exports.decorator = decorator;
//# sourceMappingURL=decorator.js.map