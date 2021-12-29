import { MacroProxy, macroProxy } from './utils';
import { Chain, Colors, FiguresParser, StyleManager, StyleName, StyleParser } from './colors';
import { Figures, IParser, OutputOptions } from './interfaces';
import { inspect } from 'util';
import { figures } from './figures';
import { Ui } from './ui';
import { merge } from 'lodash';
import { IconGenerator } from './utils/IconGenerator';

export interface Output extends MacroProxy<Output> {

}

export class Output {
    public stdin: NodeJS.ReadableStream = process.stdin;
    public stdout: NodeJS.WritableStream = process.stdout;
    public stderr: NodeJS.WritableStream = process.stderr;

    public readonly parsers: Map<string, IParser> = new Map();
    public styles: StyleManager                   = new StyleManager();
    public colors: Colors                         = new Colors(this.styles);
    public figures: Figures                       = figures;
    public readonly ui: Ui;
    public icons: IconGenerator;

    static defaultOptions: OutputOptions = {
        silent        : false,
        colors        : true,
        resetOnNewline: true,
        inspect       : { showHidden: true, depth: 10 },
        styles        : {
            title   : 'yellow bold',
            subtitle: 'yellow',
            success : 'green lighten 20 bold',
            warning : 'orange lighten 20 bold',
            error   : 'red lighten 20 bold',
        },
    };

    constructor(public readonly options: OutputOptions = {}) {
        this.options = merge({}, new.target.defaultOptions, options);
        this.addDefaultParsers();
        this.ui   = new Ui(this);
        Object.entries(this.options.styles).forEach(([ k, v ]) => this.styles.setStyle(k, v));
        return macroProxy(this);
    }

    configure(options: Partial<OutputOptions>) {
        merge(this.options, options);
        return this;
    }


    addDefaultParsers() {
        this.parsers
            .set('colors', new StyleParser(this))
            .set('figures', new FiguresParser(this));
    }


    get nl(): this { return this.write('\n'); }

    get chain(): Chain {return this.colors.chain(this);}

    styled(name:StyleName, text:string, returns:true)
    styled(name:StyleName, text:string)
    styled(...args)
    {
        const name:StyleName = args[0]
        const text:string = args[1]
        const returns:boolean = args[2] || false;

        const {in:start,out} = this.colors.color(name as string);
        const result = `${start}${text}${out}`;
        if(returns) return result;
        this.line(result);
        return this;
    }

    parse(text: string, force?: boolean): string {
        this.parsers.forEach(parser => text = parser.parse(text));
        return text;
    }

    clean(text: string): string {
        this.parsers.forEach(parser => text = parser.clean(text));
        return text;
    }

    write(text: string): this {
        if ( this.options.silent ) {
            return;
        }
        text = this.parse(text);
        this.stdout.write(text);
        return this;
    }

    writeln(text: string = ''): this {
        this.write(text);
        if ( this.options.resetOnNewline ) {
            this.write('{reset}');
        }
        this.write('\n');
        return this;
    }

    line(text: string = ''): this { return this.writeln(text);}

    dump(...args: any[]): this {
        args.forEach(arg => this.line(inspect(arg, { ...this.options.inspect, colors: this.options.colors })));
        return this;
    }

    // @formatter:off
    get colorsEnabled(): boolean {return this.options?.colors === true; }
    get isSilent(): boolean {return this.options?.silent === true; }
    enableColors(){this.options.colors=true;return this}
    disableColors(){this.options.colors=false;return this}
    silence(){this.options.silent=true;return this}
    unsilence(){this.options.silent=false;return this}
    // @formatter:on
}
