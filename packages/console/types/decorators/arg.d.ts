import { PositionalDefinition } from '../yargs';
export interface ArgumentDefinition {
    index: number;
    name: string;
    variadic: boolean;
    required: boolean;
    type: string;
    description: string;
    defaultValue: any;
    options: PositionalDefinition;
}
export declare type ArgumentDefinitions = Array<ArgumentDefinition>;
export declare function arg(description: string, required?: boolean, options?: PositionalDefinition): ParameterDecorator;
