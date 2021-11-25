import { makeProxy, Repository } from './Repository';
import { DirectoryStorage } from '../Storage/DirectoryStorage';
// noinspection ES6UnusedImports
import _, { cloneDeep, find, isEqual, matchesProperty, merge } from 'lodash';

import { Diff ,isString, eachDeep } from '@radic/shared';


const searchDeep = function (tree: object, childrenKey: string, objToFindBy: any) {
    let objToReturn = [];

    function innerFunc(tree, childrenKey, objToFindBy) {
        const findKeys  = Object.keys(objToFindBy);
        let findSuccess = false;
        findKeys.forEach((key) => {
            isEqual(tree[ key ], objToFindBy[ key ]) ? findSuccess = true : findSuccess = false;
        });
        if ( findSuccess ) {
            objToReturn.push(tree);
        }
        if ( tree.hasOwnProperty(childrenKey) ) {
            for ( let n of tree[ childrenKey ] ) {
                innerFunc(n, childrenKey, objToFindBy);
            }
        }
    }

    innerFunc(tree, childrenKey, objToFindBy);
    return objToReturn;
};

const isDiffItem = (value: any): value is Diff.Item => value && typeof value === 'object' &&  isString(value.type);
const isDiffItemWithKey = (value: any): value is Diff.Item => isDiffItem(value)  &&  isString(value.key);
const isDiffItemWithValue = (value: any): value is Diff.Item => isDiffItem(value)  &&  isString(value.value);
const isDiffItemWithKeyValue = (value: any): value is Diff.Item => isDiffItemWithKey(value)  &&  isDiffItemWithValue(value);

export class ConfigRepository<T> extends Repository<T> {

    storage: DirectoryStorage = null;
    fileName: string          = 'config.json';

    public getFilePath(){
        return this.storage.path(this.fileName);
    }

    public setStorage(storage: DirectoryStorage) {
        storage.ensureFileWithContent('{}',this.fileName);
        this.storage = storage;
        return this;
    }

    protected getChangedItems(): { diff: Diff, items: Partial<T>, changed: any[] } {
        let original = this.getOriginal();
        let diff     = new Diff(original as any, this.items as any);
        let items    = {};
        let changed  = [];
        eachDeep(diff.diff, (_value, _key, path, depth, parent, parentKey, parentPath, parents) => {
            if ( isDiffItem(_value) ) {
                const { action, type, diff, key, value } = _value;
                if(key === undefined && value === undefined){
                    return;
                }
                if ( action !== 'common' ) {
                    let cparentKey = parents.values.filter(v => isDiffItemWithKey(v)).map(i => i.key).join('.');
                    let ckey       = (cparentKey ? cparentKey + '.' : '') + key;
                    changed.push({ action, type, key, value, _key, parentKey, ckey, cparentKey, depth,parentPath,parents:cloneDeep(parents), oldValue: this.get(ckey), oldParentValue: this.get(cparentKey) });
                    if ( action === 'remove' ) {
                        _.unset(items, ckey);
                        if ( type === 'object' && value === undefined ) {
                            _.set(items, cparentKey, this.get(cparentKey));
                        }
                    }
                    if ( action === 'add' ) {
                        if(this.has(cparentKey) && Array.isArray(this.get(cparentKey))){
                            let parentValue = _.get(items,cparentKey,[]);
                            if(value !== undefined && parents.values[parents.values.length-1].type === 'array') {
                                parentValue.push(value);
                            } else {
                                parentValue.push(_.set({}, key, value));
                            }
                            _.set(items,cparentKey,parentValue);
                        } else {
                            _.set(items, ckey, value);
                        }
                        // _.set(items, ckey, this.get(ckey));
                    }
                }
            }
        }, { track: true });
        return { diff, items, changed };
    }

    public save() {
        if ( this.storage ) {
            const {items} = this.getChangedItems();
            this.storage.writeJson(this.fileName, items, { pretty: this.get('debug', false) });
        }
        return this;
    }

    public clearSaved() {
        this.storage.writeJson(this.fileName, {});
    }

    public load(method: 'merge' | 'set') {
        if ( this.storage ) {
            let data   = this.storage.readJson(this.fileName);
            this.items = method === 'set' ? data as any : merge({}, this.items, data);
        }
        return this;
    }

    public get<T>(key?: string, defaultValue?: any): T {
        return super.get(key, defaultValue);
    }

    public set(key: string | T, value?: any): this {
        super.set(key, value);
        this.save();
        return this;
    }

    public has(key: string): boolean {
        return super.has(key);
    }

    public static asProxy<T>(items?: T): Repository<T> & T {
        return makeProxy<T>(new this(items));
    }
}

