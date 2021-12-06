"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDefinitionBuilder = void 0;
class TypeDefinitionBuilder {
    constructor(_parent, depth = 0, modifier = (v) => v) {
        this._parent = _parent;
        this.depth = depth;
        this.modifier = modifier;
        this.lines = [];
        this.children = [];
        this._required = false;
    }
    build() { return this.lines.join('\n'); }
    get export() { return new TypeDefinitionBuilder(this, this.depth, v => `export ${v}`); }
    get declare() { return new TypeDefinitionBuilder(this, this.depth, v => `declare ${v}`); }
    line(value, useModifier = true) {
        if (useModifier) {
            value = this.modifier(value);
        }
        this.root().lines.push(this.indent + value);
        return this;
    }
    child(modifier = (v) => v) {
        let g = new TypeDefinitionBuilder(this, this.depth + 1, modifier);
        this.children.push(g);
        return g;
    }
    get indent() {
        return ' '.repeat(this.depth * 4);
    }
    required(required = true) {
        this._required = required;
        return this;
    }
    open(type, name) {
        this.line(`${type} ${name} {`);
        return this.child();
    }
    add(...args) {
        if (typeof args[0] === 'string') {
            this.addOne.apply(this, args);
        }
        else {
            this.addObject.apply(this, args);
        }
        return this;
    }
    docblock(_comments) {
        let comments = Array.isArray(_comments) ? _comments : _comments.split("\n");
        comments = comments.map(c => ` * ${c}`);
        comments.unshift('/**');
        comments.push(' */');
        comments.forEach(c => this.line(c));
        return this;
    }
    addObject(obj, required = this._required) {
        Object.entries(obj).forEach(([key, value]) => this.addOne(key, value, required));
        return this;
    }
    addOne(name, type, required = this._required) {
        let assign = required ? ':' : '?:';
        this.line(`${name}${assign} ${type}`);
        return this;
    }
    type(name, value) {
        this.line(`type ${name} = ${value}`);
        return this;
    }
    get parent() {
        let parent = this._parent;
        while (true) {
            if (parent._parent) {
                parent = parent._parent;
                if (parent.depth !== this.depth) {
                    break;
                }
            }
            else {
                break;
            }
        }
        return parent;
    }
    close() {
        this.parent.line('}', false);
        return this.parent;
    }
    root() {
        let parent = this;
        while (parent) {
            if (parent._parent) {
                parent = parent._parent;
            }
            else {
                break;
            }
        }
        return parent;
    }
}
exports.TypeDefinitionBuilder = TypeDefinitionBuilder;
//# sourceMappingURL=TypeDefinitionBuilder.js.map