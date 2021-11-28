// noinspection ES6UnusedImports

import { OutputConfig } from '../interfaces';

import CliTable3, { Table, TableConstructorOptions } from 'cli-table3';
import { Output } from '../Output';
import { Move } from './Move';
import { Erase } from './Erase';
import { Text } from './Text';
import { UiBase } from './UiBase';
import { macroProxy, MacroProxy } from '../utils';
import { ProgressBar } from './ProgressBar';
import { Constructor } from '@radic/shared';
import { macros } from '../macros';

export interface Ui extends MacroProxy<Ui> {

}

export class Ui {
    constructor(readonly output: Output) {
        return macroProxy(this);
    }

    public readonly progress: ProgressBar = new ProgressBar(this);
    public readonly move: Move            = new Move(this);
    public readonly erase: Erase          = new Erase(this);
    public readonly text: Text            = new Text(this);

    addComponent(name: string, Component: Constructor<UiBase>) {
        Object.defineProperty(this, name, {
            value: new Component(this),
            writable: false
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

    public get height() { return require('term-size')().rows || 0; }

    public get width() { return require('term-size')().columns || 0; }

    public get Table(): CliTable3 { return require('cli-table3'); }

    public table(opts?: TableConstructorOptions, borderStyle: 'default' | 'borderless' = 'default'): Table {
        if ( borderStyle === 'borderless' ) {
            opts.chars = { 'top': '', 'top-mid': '', 'top-left': '', 'top-right': '', 'bottom': '', 'bottom-mid': '', 'bottom-left': '', 'bottom-right': '', 'left': '', 'left-mid': '', 'mid': '', 'mid-mid': '', 'right': '', 'right-mid': '', 'middle': ' ' };
        }
        return new this.Table(opts);
    }

}
