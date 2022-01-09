import { MacroProxy } from './utils';
import { Chain, Color, Colors, StyleManager, StyleName } from './colors';
import { Figures, IParser, OutputOptions } from './interfaces';
import { Ui } from './ui';
import { IconGenerator } from './utils/IconGenerator';
import { ColorProperty } from 'csstype';
export interface Output extends MacroProxy<Output> {
}
export declare class Output {
    readonly options: OutputOptions;
    stdin: NodeJS.ReadableStream | any;
    stdout: NodeJS.WritableStream | any;
    stderr: NodeJS.WritableStream | any;
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
    styled(name: StyleName, text: string, returns: true): any;
    styled(name: StyleName, text: string): any;
    parse(text: string, force?: boolean): string;
    clean(text: string): string;
    write(text: string): this;
    writeln(text?: string): this;
    line(text?: string): this;
    dump(...args: any[]): this;
    color(property: ColorProperty): Color;
    get colorsEnabled(): boolean;
    get isSilent(): boolean;
    enableColors(): this;
    disableColors(): this;
    silence(): this;
    unsilence(): this;
}
