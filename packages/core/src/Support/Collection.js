"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const collect_js_1 = require("collect.js");
class Collection extends collect_js_1.Collection {
    constructor(collection) {
        super(collection);
        Object.defineProperty(this, 'length', {
            get: () => {
                return this.count();
            },
        });
    }
    static make(items) {
        return new this(items);
    }
}
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map