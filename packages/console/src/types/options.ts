import  { Options as YargsOptions, PositionalOptionsType } from 'yargs';

export type OptionsType =
    'array'
    | 'count'
    | PositionalOptionsType
export type DuplicateOption =
    'deprecate'
    | 'desc'
    | 'describe';
export type FunctionalOption =
    'alias'
    | 'choices'
    | 'coerce'
    | 'config'
    | 'configParser'
    | 'conflicts'
    | 'default'
    | 'description'
    | 'nargs'
    | 'group'
    | 'demand'
    | 'demandOption'
    | 'implies'
    | 'type';
export type BooleanOption =
    'config'
    | 'count'
    | 'global'
    | 'hidden'
    | 'normalize'
    | 'required'
    | 'requiresArg'
    | 'skipValidation';

export interface OptionsFluent extends Pick<YargsOptions, BooleanOption | OptionsType> {}

export interface OptionsFunctions extends Pick<YargsOptions, FunctionalOption> {}


export type FluentOptions = {
    [P in keyof OptionsFluent]: OptionsChain
}
export type FunctionOptions = {
    [P in keyof OptionsFunctions]: (arg: OptionsFunctions[P]) => OptionsChain;
}
export type OptionsChain =
    FluentOptions
    & FunctionOptions


export type OptionDefinitionType =
    'string'
    | 'number'
    | 'boolean'
    | ((input: string) => any)
    | string
export type OptionDefinitionDefault =
    any
    | ((...args) => any)


export type OptionDecorators = {
    [P in keyof OptionsFunctions]: (v?: YargsOptions[P]) => PropertyDecorator
}
type FluentOptionDecorator = {
    [P in keyof OptionsFluent]: FluentOptionDecorator & (() => PropertyDecorator)
}
export type ShortKey = string | null | undefined
export interface OptionDecorator extends OptionDecorators {
    (options?: YargsOptions): PropertyDecorator;

    (shortKey?: string, options?: YargsOptions): PropertyDecorator;

    (shortKey?: string, description?: string, options?: YargsOptions): PropertyDecorator;

    (shortKey?: string, description?: string, required?: boolean, options?: YargsOptions): PropertyDecorator;

    (shortKey?: string, description?: string, required?: boolean, defaultValue?: any, options?: YargsOptions): PropertyDecorator;

    (shortKey?: string, description?: string, required?: boolean, defaultValue?: any, type?: string, options?: YargsOptions): PropertyDecorator;
}

