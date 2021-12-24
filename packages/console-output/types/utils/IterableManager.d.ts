export declare class IterableManager<K extends keyof any, V> implements Iterable<V> {
    protected items: Record<K, V>;
    protected get _size(): number;
    constructor(items?: Record<K, V>);
    protected _clear(): void;
    protected _delete(key: K): boolean;
    protected _forEach(callbackfn: (value: V, key: K, map: IterableManager<K, V>) => void, thisArg?: any): void;
    protected _get(key: K): V | undefined;
    protected _has(key: K): boolean;
    protected _set(key: K, value: V): this;
    [Symbol.iterator](): {
        next: (...args: any[]) => {
            done: boolean;
            value: V;
        };
    };
}
