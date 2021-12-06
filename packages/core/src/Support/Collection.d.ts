import { Collection as BaseCollection } from 'collect.js';
export declare class Collection<T> extends BaseCollection<T> {
    length: number;
    [macroFn: string]: any;
    constructor(collection: T[] | Object);
    static make<T>(items: T[] | Object): Collection<T>;
}
