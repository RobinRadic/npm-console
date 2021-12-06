"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeGenerator = void 0;
const shared_1 = require("@radic/shared");
const core_1 = require("@radic/core");
const inversify_1 = require("inversify");
const lodash_1 = require("lodash");
const types_1 = require("./types");
let TypeGenerator = class TypeGenerator {
    constructor(collected) {
        this.prefix = '';
        this.overrides = {
            include: { in: ['any'], replace: 'string[]' },
            charset: { in: ['any'], replace: 'string | "off"' },
            aio: '"on" | "off" | string',
            listen: 'string',
            resolver: 'any',
            disable_symlinks: 'any',
            server: [
                { in: [], not: ['upstream'], replace: this.getContextInterfaceName('server') + '[]' },
                { in: ['upstream'], not: [], replace: 'string' },
            ],
            allow: { append: ' | string[]' },
            deny: { append: ' | string[]' },
            mail: this.getContextInterfaceName('mail'),
            stream: this.getContextInterfaceName('stream'),
            events: this.getContextInterfaceName('events'),
            http: this.getContextInterfaceName('http'),
            location: this.getContextInterfaceName('location') + ' | string',
        };
        this.collected = this.fixCollected(collected);
        this.generateMaps();
    }
    get directives() { return this.collected.directives; }
    get variables() { return this.collected.variables; }
    get contexts() { return this.collected.contexts; }
    get modules() { return this.collected.modules; }
    generateMaps() {
        this.mainContextDirectives = this.directives.filter(d => d.context.includes('main')).toArray();
        this.contextContextMap = this.mainContextDirectives
            .map(dir => [dir.name, this.directives.filter(d => d.context.includes(dir.name) && d.isBlock).toArray()])
            .filter(([k, v]) => v.length > 0)
            .map(([k, v]) => ([k, v.map(v => v.name)]))
            .reduce(shared_1.objectify, {});
        this.contextDirectiveMaps = this.mainContextDirectives
            .map(dir => [dir.name, this.directives.filter(d => d.context.includes(dir.name) && d.isBlock).toArray()])
            .map(([context, dirs]) => ([context, this.directives.filter(d => d.context.includes(context))]))
            .reduce(shared_1.objectify, {});
        Object.keys(this.contextDirectiveMaps).forEach(k => {
            if ((0, shared_1.isArrayable)(this.contextDirectiveMaps[k]) && this.contextDirectiveMaps[k].length === 0) {
                delete this.contextDirectiveMaps[k];
            }
        });
    }
    getContextInterfaceName(context) {
        return this.prefix + (0, lodash_1.upperFirst)((0, lodash_1.camelCase)(context + 'Directives')); //context[ 0 ].toUpperCase() + context.slice(1) + 'Directives';
    }
    getContextTypeName(context) {
        return this.prefix + (0, lodash_1.upperFirst)((0, lodash_1.camelCase)(context + 'Directivee'));
    }
    getDirectiveType(directive) {
        let override = this.overrides[directive.name];
        const isNotIn = (o, is, contexts) => {
            if (o[is] && (0, shared_1.isArray)(o[is]) && o[is].length) {
                return contexts.filter(context => o[is].includes(context) === (is === 'in')).length = 0;
            }
            // return (o[ is ] && Array.isArray(o[ is ]) && o[ is ].length) && (o[ is ].includes(context) === (is === 'in'))
        };
        const modifyType = (d, o) => {
            if (o.prepend) {
                return o.prepend + d.type;
            }
            if (o.append) {
                return d.type + o.append;
            }
            if (o.replace) {
                return o.replace;
            }
            return d.type;
        };
        const overrideType = (d, o) => {
            if (isNotIn(o, 'not', d.context)) {
                return modifyType(d, o);
            }
            if (isNotIn(o, 'in', d.context)) {
                return modifyType(d, o);
            }
            return modifyType(d, o);
        };
        if (override === undefined) {
            return directive.type;
        }
        if ((0, types_1.isSimpleOverride)(override)) {
            return override;
        }
        if ((0, types_1.isDetailedOverride)(override)) {
            return overrideType(directive, override);
        }
        if ((0, types_1.isDetailedOverrides)(override)) {
            for (const o of override) {
                return overrideType(directive, o);
            }
        }
    }
    pushToModule(module, directive) {
        const segments = module.replace('ngx_', '').replace('_module', '').split('_');
        const path = segments.join('.');
        const directives = (0, lodash_1.get)(this.modules, path, []);
        directives.push(directive);
        (0, lodash_1.set)(this.modules, path, directives);
    }
    fixCollected(collected) {
        // @ts-ignore
        collected.directives = collected.directives.map(d => {
            d.type = this.getDirectiveType(d);
            if (d.isBlock) {
                d.type += '[]';
            }
            return d;
        });
        return collected;
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            let b = new core_1.TypeDefinitionBuilder();
            let bns = b.export.open('namespace', 'types');
            bns.export.type('Context', '"' + this.contexts.join('" | "') + '"');
            this.addDirectivesToBlock(bns, 'interface', 'MainDirectives', this.mainContextDirectives);
            let interfaces = ['MainDirectives'];
            let contexts = Object.keys(this.contextDirectiveMaps);
            for (const context of contexts) {
                let ifcs = this.getContextInterfaceName(context);
                interfaces.push(ifcs);
                this.addDirectivesToBlock(bns, 'interface', ifcs, this.contextDirectiveMaps[context]);
            }
            let ds = bns.export.open('interface', 'Directives');
            for (const context of contexts) {
                ds.add(context, this.getContextInterfaceName(context));
            }
            ds.close();
            bns.export.type('Directive', interfaces.join(' | '));
            bns.close();
            return b.build();
        });
    }
    addDirectivesToBlock(block, type, name, directives) {
        const innerBlock = block.export.open(type, name);
        for (const directive of this.mainContextDirectives) {
            this.addDirectiveToBlock(directive, innerBlock);
        }
        innerBlock.close();
        return name;
    }
    addDirectiveToBlock(directive, block) {
        if (directive.doc) {
            let doc = directive.doc.replace('*/', '* /').split('\n').filter(Boolean);
            doc.push(`\n`);
            doc.push(`module: ${directive.module}`);
            if (directive.example) {
                doc.push('@example');
                doc.push('```nginx');
                doc = doc.concat(directive.example.replace('*/', '* /').split('\n').filter(Boolean));
                doc.push('```');
            }
            block.docblock(doc);
        }
        block.add(directive.name, directive.type);
    }
};
TypeGenerator = __decorate([
    (0, core_1.injectable)(),
    __param(0, (0, inversify_1.inject)('nginx.types.collector:collected')),
    __metadata("design:paramtypes", [Object])
], TypeGenerator);
exports.TypeGenerator = TypeGenerator;
//# sourceMappingURL=TypeGenerator.js.map