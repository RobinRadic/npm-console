import { Collection as BaseCollection } from 'collect.js';

export class Collection<T> extends BaseCollection<T> {
    length:number
    [ macroFn: string ]: any;

    constructor(collection: T[] | Object) {
        super(collection);
        Object.defineProperty(this, 'length', {
            get: () => {
                return this.count();
            },
        });
    }

    static make<T>(items: T[] | Object) {
        return new this<T>(items);
    }
}
