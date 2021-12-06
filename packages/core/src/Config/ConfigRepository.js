"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigRepository = void 0;
const Repository_1 = require("./Repository");
// noinspection ES6UnusedImports
const lodash_1 = __importStar(require("lodash"));
const shared_1 = require("@radic/shared");
const searchDeep = function (tree, childrenKey, objToFindBy) {
    let objToReturn = [];
    function innerFunc(tree, childrenKey, objToFindBy) {
        const findKeys = Object.keys(objToFindBy);
        let findSuccess = false;
        findKeys.forEach((key) => {
            (0, lodash_1.isEqual)(tree[key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
        });
        if (findSuccess) {
            objToReturn.push(tree);
        }
        if (tree.hasOwnProperty(childrenKey)) {
            for (let n of tree[childrenKey]) {
                innerFunc(n, childrenKey, objToFindBy);
            }
        }
    }
    innerFunc(tree, childrenKey, objToFindBy);
    return objToReturn;
};
const isDiffItem = (value) => value && typeof value === 'object' && (0, shared_1.isString)(value.type);
const isDiffItemWithKey = (value) => isDiffItem(value) && (0, shared_1.isString)(value.key);
const isDiffItemWithValue = (value) => isDiffItem(value) && (0, shared_1.isString)(value.value);
const isDiffItemWithKeyValue = (value) => isDiffItemWithKey(value) && isDiffItemWithValue(value);
class ConfigRepository extends Repository_1.Repository {
    constructor() {
        super(...arguments);
        this.storage = null;
        this.fileName = 'config.json';
    }
    getFilePath() {
        return this.storage.path(this.fileName);
    }
    setStorage(storage) {
        storage.ensureFileWithContent('{}', this.fileName);
        this.storage = storage;
        return this;
    }
    getChangedItems() {
        let original = this.getOriginal();
        let diff = new shared_1.Diff(original, this.items);
        let items = {};
        let changed = [];
        (0, shared_1.eachDeep)(diff.diff, (_value, _key, path, depth, parent, parentKey, parentPath, parents) => {
            if (isDiffItem(_value)) {
                const { action, type, diff, key, value } = _value;
                if (key === undefined && value === undefined) {
                    return;
                }
                if (action !== 'common') {
                    let cparentKey = parents.values.filter(v => isDiffItemWithKey(v)).map(i => i.key).join('.');
                    let ckey = (cparentKey ? cparentKey + '.' : '') + key;
                    changed.push({ action, type, key, value, _key, parentKey, ckey, cparentKey, depth, parentPath, parents: (0, lodash_1.cloneDeep)(parents), oldValue: this.get(ckey), oldParentValue: this.get(cparentKey) });
                    if (action === 'remove') {
                        lodash_1.default.unset(items, ckey);
                        if (type === 'object' && value === undefined) {
                            lodash_1.default.set(items, cparentKey, this.get(cparentKey));
                        }
                    }
                    if (action === 'add') {
                        if (this.has(cparentKey) && Array.isArray(this.get(cparentKey))) {
                            let parentValue = lodash_1.default.get(items, cparentKey, []);
                            if (value !== undefined && parents.values[parents.values.length - 1].type === 'array') {
                                parentValue.push(value);
                            }
                            else {
                                parentValue.push(lodash_1.default.set({}, key, value));
                            }
                            lodash_1.default.set(items, cparentKey, parentValue);
                        }
                        else {
                            lodash_1.default.set(items, ckey, value);
                        }
                        // _.set(items, ckey, this.get(ckey));
                    }
                }
            }
        }, { track: true });
        return { diff, items, changed };
    }
    save() {
        if (this.storage) {
            const { items } = this.getChangedItems();
            this.storage.writeJson(this.fileName, items, { pretty: this.get('debug', false) });
        }
        return this;
    }
    clearSaved() {
        this.storage.writeJson(this.fileName, {});
    }
    load(method) {
        if (this.storage) {
            let data = this.storage.readJson(this.fileName);
            this.items = method === 'set' ? data : (0, lodash_1.merge)({}, this.items, data);
        }
        return this;
    }
    get(key, defaultValue) {
        return super.get(key, defaultValue);
    }
    set(key, value) {
        super.set(key, value);
        this.save();
        return this;
    }
    has(key) {
        return super.has(key);
    }
    static asProxy(items) {
        return (0, Repository_1.makeProxy)(new this(items));
    }
}
exports.ConfigRepository = ConfigRepository;
//# sourceMappingURL=ConfigRepository.js.map