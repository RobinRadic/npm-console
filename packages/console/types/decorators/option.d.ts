import { OptionDecorator } from '../types';
export declare const type: (v?: "array" | "count" | import("yargs").PositionalOptionsType) => PropertyDecorator, description: (v?: string) => PropertyDecorator, demand: (v?: string | boolean) => PropertyDecorator, alias: (v?: string | readonly string[]) => PropertyDecorator, choices: (v?: import("yargs").Choices) => PropertyDecorator, coerce: (v?: (arg: any) => any) => PropertyDecorator, configParser: (v?: (configPath: string) => object) => PropertyDecorator, conflicts: (v?: string | readonly string[] | {
    [key: string]: string | readonly string[];
}) => PropertyDecorator, demandOption: (v?: string | boolean) => PropertyDecorator, implies: (v?: string | readonly string[] | {
    [key: string]: string | readonly string[];
}) => PropertyDecorator, nargs: (v?: number) => PropertyDecorator;
export declare const option: OptionDecorator;
