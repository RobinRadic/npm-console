import { OptionDecorator, OptionDecorators, OptionsFluent, OptionsFunctions } from '../types';
import { Options as YargsOptions } from 'yargs';


const functionals: Array<keyof OptionsFunctions> = [ 'alias', 'choices', 'coerce', 'config', 'configParser', 'conflicts', 'default', 'description', 'nargs', 'group', 'demand', 'demandOption', 'implies', 'type' ];
const booleans: Array<keyof OptionsFluent>       = [ 'boolean', 'number', 'string', 'array', 'count', 'config', 'count', 'global', 'hidden', 'normalize', 'required', 'requiresArg', 'skipValidation' ];

const optionDecorators: OptionDecorators = {};
functionals.forEach(name => {
    optionDecorators[ name ] = (arg:any=true): PropertyDecorator => {
        return (Target, propertyKey) => {
            // if ( !Reflect.hasMetadata('options.functions', Target) ) {
            //     Reflect.defineMetadata('options.functions', {}, Target);
            // }
            const options = getOptionMeta(Target, propertyKey)
            options[ name as any ] = arg;
            mergeOptionMeta(Target,propertyKey,options)
            // const opts                  = Reflect.getMetadata('options.functions', Target);
            // opts[ propertyKey ]         = opts[ propertyKey ] || {};
            // opts[ propertyKey ][ name ] = arg;
            // Reflect.defineMetadata('options.functions', opts, Target);
        };
    };
});


export const { type, description, /*group,*/ demand, alias, choices, coerce, /*config,*/ configParser, conflicts, demandOption, implies, nargs } = optionDecorators;

export const option: OptionDecorator = (...args): PropertyDecorator => {
    return (Target, propertyKey) => {
        let len                   = args.length;
        let shortKey,
            description,
            required,
            defaultValue,
            type                  = Reflect.getMetadata('design:type', Target, propertyKey),
            options: YargsOptions = {};
        let last                  = args[ len - 1 ];
        if ( typeof last === 'object' && last !== null && last !== undefined ) {
            options = last;
        }
        const isType = (index: number, type?: string) => args[ index ] !== undefined && args[ index ] !== null && (type !== undefined ? typeof args[ index ] === type : true);
        isType(0, 'string') ? shortKey = args[ 0 ] : undefined;
        isType(1, 'string') ? description = args[ 1 ] : undefined;
        isType(2, 'boolean') ? required = args[ 2 ] : false;
        isType(3) ? defaultValue = args[ 3 ] : undefined;
        isType(4, 'string') ? type = args[ 4 ] : Reflect.getMetadata('design:type', Target, propertyKey);
        options = { description, required, default: defaultValue, type, ...options };
        if ( shortKey ) {
            (options.alias as string[]) = (options.alias as string[]) || [] as any;
            (options.alias as string[]).push(shortKey);
        }
        if ( typeof options.type === 'function' ) {
            options.type = (options.type as Function).name.toString().toLocaleLowerCase() as YargsOptions['type'];
        }
        mergeOptionMeta(Target,propertyKey,options)
    };
};
Object.keys(optionDecorators).forEach(key => option[ key ] = optionDecorators[ key ]);


const getOptionsMeta = (Target: Object): Record<string, YargsOptions> => {
    if ( !Reflect.hasMetadata('options', Target) ) {
        Reflect.defineMetadata('options', {}, Target);
    }
    const opts = Reflect.getMetadata('options', Target);
    return opts;
};

const getOptionMeta = (Target, propertyKey): YargsOptions => {
    const opts = getOptionsMeta(Target);
    return opts[ propertyKey ] || {};
};

const mergeOptionMeta = (Target, propertyKey, options: Partial<YargsOptions>) => {
    const opts          = getOptionsMeta(Target);
    opts[ propertyKey ] = {
        ...getOptionMeta(Target, propertyKey),
        ...options,
    };
    Reflect.defineMetadata('options', opts, Target);
};
