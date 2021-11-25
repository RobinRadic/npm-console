export type BlockType =
    'namespace'
    | 'interface'
    | 'class'
    | string

export class TypeDefinitionBuilder {
    protected lines: string[]                   = [];
    protected children: TypeDefinitionBuilder[] = [];
    protected _required: boolean                = false;

    constructor(protected _parent?: TypeDefinitionBuilder, protected depth: number = 0, protected modifier: (value: string) => string = (v) => v) {}

    build() {return this.lines.join('\n'); }


    get export() {return new TypeDefinitionBuilder(this, this.depth, v => `export ${v}`);}

    get declare() {return new TypeDefinitionBuilder(this, this.depth, v => `declare ${v}`);}

    protected line(value: string, useModifier: boolean = true) {
        if ( useModifier ) {
            value = this.modifier(value);
        }
        this.root().lines.push(this.indent + value);
        return this;
    }

    protected child(modifier: (value: string) => string = (v) => v) {
        let g = new TypeDefinitionBuilder(this, this.depth + 1, modifier);
        this.children.push(g);
        return g;
    }

    protected get indent(): string {
        return ' '.repeat(this.depth * 4);
    }

    required(required: boolean = true) {
        this._required = required;
        return this;
    }

    open(type: BlockType, name: string) {
        this.line(`${type} ${name} {`);
        return this.child();
    }

    add(obj: object, required?: boolean): this
    add(name: string, type: string, required?: boolean): this
    add(...args: any[]): this {
        if ( typeof args[ 0 ] === 'string' ) {
            this.addOne.apply(this, args);
        } else {
            this.addObject.apply(this, args);
        }
        return this;
    }

    docblock(_comments:string|string[]):this{
        let comments = Array.isArray(_comments) ? _comments : _comments.split("\n")
        comments=comments.map(c => ` * ${c}`)
        comments.unshift('/**')
        comments.push(' */')
        comments.forEach(c => this.line(c));
        return this;
    }

    protected addObject(obj: object, required: boolean = this._required) {
        Object.entries(obj).forEach(([ key, value ]) => this.addOne(key, value, required));
        return this;
    }

    protected addOne(name: string, type: string, required: boolean = this._required) {
        let assign = required ? ':' : '?:';
        this.line(`${name}${assign} ${type}`);
        return this;
    }


    type(name: string, value: string) {
        this.line(`type ${name} = ${value}`);
        return this;
    }

    get parent() {
        let parent: TypeDefinitionBuilder = this._parent;
        while ( true ) {
            if ( parent._parent ) {
                parent = parent._parent;
                if ( parent.depth !== this.depth ) {
                    break;
                }
            } else {
                break;
            }
        }
        return parent;
    }

    close(): TypeDefinitionBuilder {
        this.parent.line('}', false);
        return this.parent;
    }

    root(): TypeDefinitionBuilder {
        let parent: TypeDefinitionBuilder = this;
        while ( parent ) {
            if ( parent._parent ) {
                parent = parent._parent;
            } else {
                break;
            }
        }
        return parent;
    }


}
