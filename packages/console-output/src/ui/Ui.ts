// noinspection ES6UnusedImports

import { OutputConfig } from '../interfaces';

import CliTable3, { Table, TableConstructorOptions } from 'cli-table3';
import { Output } from '../Output';
import { Move } from './Move';
import { Erase } from './Erase';
import { Text } from './Text';
import { UiBase } from './UiBase';
import { macroProxy, MacroProxy, requireModule } from '../utils';
import { ProgressBar } from './ProgressBar';
import { Constructor } from '@radic/shared';
import { macros } from '../macros';

import { cliui, Column, ColumnArray, Div } from './Div';

export interface Ui extends MacroProxy<Ui> {

}

export class Ui {
    private cliui: Div;

    constructor(readonly output: Output) {
        this.cliui = cliui({
            rows : this.output.options.rows,
            width: this.output.options.width,
            wrap : this.output.options.wrap,
        }, {
            stringWidth: this.text.width,
            stripAnsi  : this.text.strip,
            wrap       : this.text.wrap,
        });

        return macroProxy(this);
    }

    public readonly progress: ProgressBar = new ProgressBar(this);
    public readonly move: Move            = new Move(this);
    public readonly erase: Erase          = new Erase(this);
    public readonly text: Text            = new Text(this);

    public get divBuilder(): Div {return this.cliui;}

    addComponent(name: string, Component: Constructor<UiBase>) {
        Object.defineProperty(this, name, {
            value   : new Component(this),
            writable: false,
        });
        return this;
    }

    addMacros(macro: macros.MacroDefinition<any> | macros.MacroDefinition<any>[]) {
        if ( !Array.isArray(macro) ) {
            macro = [ macro ];
        }
        Array.from(macro).forEach(macro => this.macro(macro.name, macro.callback));
        return this;
    }

    public get height() { return requireModule('term-size')().rows || 0; }

    public get width() { return requireModule('term-size')().columns || 0; }

    public get Table(): CliTable3 { return requireModule('cli-table3'); }

    public table(opts?: TableConstructorOptions, borderStyle: 'default' | 'borderless' = 'default'): Table {
        if ( borderStyle === 'borderless' ) {
            opts.chars = { 'top': '', 'top-mid': '', 'top-left': '', 'top-right': '', 'bottom': '', 'bottom-mid': '', 'bottom-left': '', 'bottom-right': '', 'left': '', 'left-mid': '', 'mid': '', 'mid-mid': '', 'right': '', 'right-mid': '', 'middle': ' ' };
        }
        return new this.Table(opts);
    }

}
