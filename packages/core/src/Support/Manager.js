"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Collection_1 = require("./Collection");
const inversify_1 = require("inversify");
// @ts-ignore
let Manager = class Manager {
    constructor() {
        this.items = new Collection_1.Collection({});
    }
    get collection() { return this.items; }
    setItems(items) {
        this.items = new Collection_1.Collection(items);
        return this;
    }
    set(key, item) {
        this.items.put(key, item);
        return this;
    }
    has(key) { return this.items.has(key); }
    get(key) { return this.items.get(key); }
    keys() { return this.items.keys().toArray(); }
    names() { return this.items.keys().toArray(); }
    values() { return this.items.values().toArray(); }
    all() { return this.items.values().toArray(); }
    toCollection() { return this.items; }
    toArray() { return this.items.toArray(); }
};
Manager = __decorate([
    (0, inversify_1.injectable)()
], Manager);
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map