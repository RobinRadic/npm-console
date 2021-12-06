"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.option = exports.nargs = exports.implies = exports.demandOption = exports.conflicts = exports.configParser = exports.coerce = exports.choices = exports.alias = exports.demand = exports.description = exports.type = void 0;
const functionals = ['alias', 'choices', 'coerce', 'config', 'configParser', 'conflicts', 'default', 'description', 'nargs', 'group', 'demand', 'demandOption', 'implies', 'type'];
const booleans = ['boolean', 'number', 'string', 'array', 'count', 'config', 'count', 'global', 'hidden', 'normalize', 'required', 'requiresArg', 'skipValidation'];
const optionDecorators = {};
functionals.forEach(name => {
    optionDecorators[name] = (arg = true) => {
        return (Target, propertyKey) => {
            // if ( !Reflect.hasMetadata('options.functions', Target) ) {
            //     Reflect.defineMetadata('options.functions', {}, Target);
            // }
            const options = getOptionMeta(Target, propertyKey);
            options[name] = arg;
            mergeOptionMeta(Target, propertyKey, options);
            // const opts                  = Reflect.getMetadata('options.functions', Target);
            // opts[ propertyKey ]         = opts[ propertyKey ] || {};
            // opts[ propertyKey ][ name ] = arg;
            // Reflect.defineMetadata('options.functions', opts, Target);
        };
    };
});
exports.type = optionDecorators.type, exports.description = optionDecorators.description, exports.demand = optionDecorators.demand, exports.alias = optionDecorators.alias, exports.choices = optionDecorators.choices, exports.coerce = optionDecorators.coerce, exports.configParser = optionDecorators.configParser, exports.conflicts = optionDecorators.conflicts, exports.demandOption = optionDecorators.demandOption, exports.implies = optionDecorators.implies, exports.nargs = optionDecorators.nargs;
const option = (...args) => {
    return (Target, propertyKey) => {
        let len = args.length;
        let shortKey, description, required, defaultValue, type = Reflect.getMetadata('design:type', Target, propertyKey), options = {};
        let last = args[len - 1];
        if (typeof last === 'object' && last !== null && last !== undefined) {
            options = last;
        }
        const isType = (index, type) => args[index] !== undefined && args[index] !== null && (type !== undefined ? typeof args[index] === type : true);
        isType(0, 'string') ? shortKey = args[0] : undefined;
        isType(1, 'string') ? description = args[1] : undefined;
        isType(2, 'boolean') ? required = args[2] : false;
        isType(3) ? defaultValue = args[3] : undefined;
        isType(4, 'string') ? type = args[4] : Reflect.getMetadata('design:type', Target, propertyKey);
        options = Object.assign({ description, required, default: defaultValue, type }, options);
        if (shortKey) {
            options.alias = options.alias || [];
            options.alias.push(shortKey);
        }
        if (typeof options.type === 'function') {
            options.type = options.type.name.toString().toLocaleLowerCase();
        }
        mergeOptionMeta(Target, propertyKey, options);
    };
};
exports.option = option;
Object.keys(optionDecorators).forEach(key => exports.option[key] = optionDecorators[key]);
const getOptionsMeta = (Target) => {
    if (!Reflect.hasMetadata('options', Target)) {
        Reflect.defineMetadata('options', {}, Target);
    }
    const opts = Reflect.getMetadata('options', Target);
    return opts;
};
const getOptionMeta = (Target, propertyKey) => {
    const opts = getOptionsMeta(Target);
    return opts[propertyKey] || {};
};
const mergeOptionMeta = (Target, propertyKey, options) => {
    const opts = getOptionsMeta(Target);
    opts[propertyKey] = Object.assign(Object.assign({}, getOptionMeta(Target, propertyKey)), options);
    Reflect.defineMetadata('options', opts, Target);
};
//# sourceMappingURL=option.js.map