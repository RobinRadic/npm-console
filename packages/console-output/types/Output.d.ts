/// <reference types="node" />
import { MacroProxy } from './utils';
import { Chain, Colors, StyleManager, StyleName } from './colors';
import { Figures, IParser, OutputOptions } from './interfaces';
import { Ui } from './ui';
import { IconGenerator } from './utils/IconGenerator';
export interface Output extends MacroProxy<Output> {
}
export declare class Output {
    readonly options: OutputOptions;
    stdin: NodeJS.ReadableStream;
    stdout: NodeJS.WritableStream;
    stderr: NodeJS.WritableStream;
    readonly parsers: Map<string, IParser>;
    styles: StyleManager;
    colors: Colors;
    figures: Figures;
    readonly ui: Ui;
    icons: IconGenerator;
    static defaultOptions: OutputOptions;
    constructor(options?: OutputOptions);
    configure(options: Partial<OutputOptions>): this;
    addDefaultParsers(): void;
    get nl(): this;
    get chain(): Chain;
    styled(name: StyleName, text: string): this;
    parse(text: string, force?: boolean): string;
    clean(text: string): string;
    write(text: string): this;
    writeln(text?: string): this;
    line(text?: string): this;
    dump(...args: any[]): this;
    get colorsEnabled(): boolean;
    get isSilent(): boolean;
    enableColors(): this;
    disableColors(): this;
    silence(): this;
    unsilence(): this;
}
