export declare type BlockType = 'namespace' | 'interface' | 'class' | string;
export declare class TypeDefinitionBuilder {
    protected _parent?: TypeDefinitionBuilder;
    protected depth: number;
    protected modifier: (value: string) => string;
    protected lines: string[];
    protected children: TypeDefinitionBuilder[];
    protected _required: boolean;
    constructor(_parent?: TypeDefinitionBuilder, depth?: number, modifier?: (value: string) => string);
    build(): string;
    get export(): TypeDefinitionBuilder;
    get declare(): TypeDefinitionBuilder;
    protected line(value: string, useModifier?: boolean): this;
    protected child(modifier?: (value: string) => string): TypeDefinitionBuilder;
    protected get indent(): string;
    required(required?: boolean): this;
    open(type: BlockType, name: string): TypeDefinitionBuilder;
    add(obj: object, required?: boolean): this;
    add(name: string, type: string, required?: boolean): this;
    docblock(_comments: string | string[]): this;
    protected addObject(obj: object, required?: boolean): this;
    protected addOne(name: string, type: string, required?: boolean): this;
    type(name: string, value: string): this;
    get parent(): TypeDefinitionBuilder;
    close(): TypeDefinitionBuilder;
    root(): TypeDefinitionBuilder;
}
