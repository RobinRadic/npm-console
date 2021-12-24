import CliTable3, { Table, TableConstructorOptions } from 'cli-table3';
import { Output } from '../Output';
import { Move } from './Move';
import { Erase } from './Erase';
import { Text } from './Text';
import { UiBase } from './UiBase';
import { MacroProxy } from '../utils';
import { ProgressBar } from './ProgressBar';
import { Constructor } from '@radic/shared';
import { macros } from '../macros';
import { Div } from './Div';
export interface Ui extends MacroProxy<Ui> {
}
export declare class Ui {
    readonly output: Output;
    private cliui;
    constructor(output: Output);
    readonly progress: ProgressBar;
    readonly move: Move;
    readonly erase: Erase;
    readonly text: Text;
    get divBuilder(): Div;
    addComponent(name: string, Component: Constructor<UiBase>): this;
    addMacros(macro: macros.MacroDefinition<any> | macros.MacroDefinition<any>[]): this;
    get height(): any;
    get width(): any;
    get Table(): CliTable3;
    table(opts?: TableConstructorOptions, borderStyle?: 'default' | 'borderless'): Table;
}
