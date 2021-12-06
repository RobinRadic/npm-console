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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeProxy = exports.Repository = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const lodash_1 = require("lodash");
// @injectable()
// export class Repository<T> extends Conf<T> {
//     constructor(options: Partial<Options<T>>) {
//         super(options);
//     }
// }
let Repository = class Repository {
    constructor(items = {}) {
        this.items = items;
        this._original = null;
        this.items = items;
    }
    getOriginal() { return (0, lodash_1.cloneDeep)(this._original); }
    markOriginal() {
        if (this._original === null) {
            this._original = (0, lodash_1.cloneDeep)(this.items);
        }
        return this;
    }
    get(key, defaultValue) {
        if (key === undefined) {
            return this.items;
        }
        let value = getSetDescendantProp(this.items, key);
        if (value === undefined) {
            value = defaultValue;
        }
        return value;
    }
    set(key, value) {
        if (typeof key === 'object') {
            this.items = key;
        }
        else {
            getSetDescendantProp(this.items, key, value);
        }
        return this;
    }
    push(key, value) {
        let array = this.get(key, []);
        array.push(value);
        this.set(key, array);
        return this;
    }
    has(key) {
        return getSetDescendantProp(this.items, key) !== undefined;
    }
    static asProxy(items) {
        return makeProxy(new this(items));
    }
};
Repository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [Object])
], Repository);
exports.Repository = Repository;
function makeProxy(repository) {
    return new Proxy(repository, {
        get(target, p, receiver) {
            if (Reflect.has(target, p))
                return target[p]; //Reflect.get(target, p, receiver);
            if (p === "__s_isProxy" /* IS_PROXY */)
                return true;
            if (p === "__s_unproxy" /* UNPROXY */)
                return () => target;
            let key = p.toString();
            if (target.has(key))
                return target.get(key);
        },
        set(target, p, value, receiver) {
            if (["__s_isProxy" /* IS_PROXY */, "__s_unproxy" /* UNPROXY */].includes(p.toString())) {
                throw Error('Cannot set property: ' + p.toString());
            }
            if (Reflect.has(target, p)) {
                return Reflect.set(target, p, value, receiver);
            }
            target.set(p.toString(), value);
            return true;
        },
        has(target, p) {
            if (Reflect.has(target, p)) {
                return true;
            }
            return target.has(p.toString());
        },
    });
}
exports.makeProxy = makeProxy;
//
function getSetDescendantProp(items, key, value) {
    var keys = key ? key.split('.') : [];
    while (keys.length && items) {
        var compare = keys.shift();
        var match = new RegExp('(.+)\\[([0-9]*)\\]').exec(compare);
        // handle arrays
        if ((match !== null) && (match.length == 3)) {
            var arrayData = {
                arrName: match[1],
                arrIndex: match[2],
            };
            if (items[arrayData.arrName] !== undefined) {
                if (typeof value !== 'undefined' && keys.length === 0) {
                    items[arrayData.arrName][arrayData.arrIndex] = value;
                }
                items = items[arrayData.arrName][arrayData.arrIndex];
            }
            else {
                items = undefined;
            }
            continue;
        }
        // handle regular things
        if (typeof value !== 'undefined') {
            if (items[compare] === undefined) {
                items[compare] = {};
            }
            if (keys.length === 0) {
                items[compare] = value;
            }
        }
        items = items[compare];
    }
    return items;
}
//# sourceMappingURL=Repository.js.map