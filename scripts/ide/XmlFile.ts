import { Builder, BuilderOptions, ParserOptions } from 'xml2js';
import { readFileSync, writeFileSync } from 'fs';
import { Iml, iml } from './ImlDocument';
import { Parser } from './Parser';

export class XmlFile {
    protected parserOptions: ParserOptions   = {};
    protected builderOptions: BuilderOptions = {};

    protected xml: string;
    protected json: any;

    constructor(protected filePath: string) {
        this.load();
    }

    public getJson(): Iml {
        return this.load().json;
    }

    public setJson(json: Iml): this {
        return this.build(JSON.stringify(json)).save();
    }

    public getXML(): string {return this.xml; }

    protected save() {
        this.build();
        this.write();
        return this;
    }

    protected load() {
        this.read();
        this.json = this.getParser().parseStringSync(this.xml);
        return this;
    }

    protected read() {
        this.xml = readFileSync(this.filePath, 'utf-8');
        return this;
    }

    protected build(json?: string) {
        json     = json || this.json;
        this.xml = this.getBuilder().buildObject(json);
        return this;
    }

    protected write(path?: string) {
        writeFileSync(path || this.filePath, this.xml, 'utf-8');
        return this;
    }


    protected getParser() {return new Parser(this.parserOptions); }

    protected getBuilder() {return new Builder(this.builderOptions);}

    public setParserOption<T extends keyof ParserOptions>(key: T, value: ParserOptions[T]) {
        this.parserOptions[ key ] = value;
        return this;
    }

    public setParserOptions(parserOptions: ParserOptions = {}) {
        this.parserOptions = parserOptions;
        return this;
    }

    public getParserOptions() {return this.parserOptions; }

    public setBuilderOption<T extends keyof BuilderOptions>(key: T, value: BuilderOptions[T]) {
        this.builderOptions[ key ] = value;
        return this;
    }

    public setBuilderOptions(builderOptions: BuilderOptions = {}) {
        this.builderOptions = builderOptions;
        return this;
    }

    public getBuilderOptions() {return this.builderOptions; }

}
