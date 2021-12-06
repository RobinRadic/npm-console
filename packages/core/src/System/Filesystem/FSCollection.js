"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fscollect = exports.toUnits = exports.FSCollection = void 0;
const Support_1 = require("../../Support");
const shared_1 = require("@radic/shared");
class FSCollection extends Support_1.Collection {
    toObject() { return this.all(); }
    directories() { return this.where('type', 'dir'); }
    files() { return this.where('type', 'file'); }
    searchName(search) {
        if (typeof search === 'string') {
            return this.filter((item, name) => name.includes(search));
        }
        if (search instanceof RegExp) {
            return this.filter((item, name) => search.test(name));
        }
    }
}
exports.FSCollection = FSCollection;
const toUnits = (u) => {
    return u.map(u => [u.basename, u]).reduce(shared_1.objectify, {});
};
exports.toUnits = toUnits;
const fscollect = (u) => {
    if (Array.isArray(u)) {
        return new FSCollection((0, exports.toUnits)(u));
    }
    return new FSCollection(u);
};
exports.fscollect = fscollect;
//# sourceMappingURL=FSCollection.js.map