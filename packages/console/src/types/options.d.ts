import { Options as YargsOptions, PositionalOptionsType } from 'yargs';
export declare type OptionsType = 'array' | 'count' | PositionalOptionsType;
export declare type DuplicateOption = 'deprecate' | 'desc' | 'describe';
export declare type FunctionalOption = 'alias' | 'choices' | 'coerce' | 'config' | 'configParser' | 'conflicts' | 'default' | 'description' | 'nargs' | 'group' | 'demand' | 'demandOption' | 'implies' | 'type';
export declare type BooleanOption = 'config' | 'count' | 'global' | 'hidden' | 'normalize' | 'required' | 'requiresArg' | 'skipValidation';
export interface OptionsFluent extends Pick<YargsOptions, BooleanOption | OptionsType> {
}
export interface OptionsFunctions extends Pick<YargsOptions, FunctionalOption> {
}
export declare type FluentOptions = {
    [P in keyof OptionsFluent]: OptionsChain;
};
export declare type FunctionOptions = {
    [P in keyof OptionsFunctions]: (arg: OptionsFunctions[P]) => OptionsChain;
};
export declare type OptionsChain = FluentOptions & FunctionOptions;
export declare type OptionDefinitionType = 'string' | 'number' | 'boolean' | ((input: string) => any) | string;
export declare type OptionDefinitionDefault = any | ((...args: any[]) => any);
export declare type OptionDecorators = {
    [P in keyof OptionsFunctions]: (v?: YargsOptions[P]) => PropertyDecorator;
};
export declare type ShortKey = string | null | undefined;
export interface OptionDecorator extends OptionDecorators {
    (options?: YargsOptions): PropertyDecorator;
    (shortKey?: string, options?: YargsOptions): PropertyDecorator;
    (shortKey?: string, description?: string, options?: YargsOptions): PropertyDecorator;
    (shortKey?: string, description?: string, required?: boolean, options?: YargsOptions): PropertyDecorator;
    (shortKey?: string, description?: string, required?: boolean, defaultValue?: any, options?: YargsOptions): PropertyDecorator;
    (shortKey?: string, description?: string, required?: boolean, defaultValue?: any, type?: string, options?: YargsOptions): PropertyDecorator;
}
