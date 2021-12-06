"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayCollection = void 0;
class ArrayCollection extends Array {
    /**
     * Create a new collection instance.
     *
     * @param items
     */
    constructor(...items) {
        super(...items);
        Object.setPrototypeOf(this, Array.prototype);
    }
}
exports.ArrayCollection = ArrayCollection;
//# sourceMappingURL=ArrayCollection.js.map