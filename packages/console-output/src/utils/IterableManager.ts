export class IterableManager<K extends keyof any, V> implements Iterable<V> {
    protected items: Record<K, V> = {} as any;

    protected get _size(): number { return Object.keys(this.items).length;}

    constructor(items: Record<K, V> = {} as any) {
        this.items = items;
    }

    protected _clear(): void {this.items = {} as any; }

    protected _delete(key: K) {
        if ( this.items[ key ] === undefined ) return false;
        delete this.items[ key ];
        return true;
    };

    protected _forEach(callbackfn: (value: V, key: K, map: IterableManager<K, V>) => void, thisArg?: any): void {
        Object.keys(this.items).forEach((key) => {
            callbackfn.call(thisArg || this, this.items[ key ], key);
        });
    }

    protected _get(key: K): V | undefined {
        return this.items[ key ];
    }

    protected _has(key: K): boolean {
        return this.items[ key ] !== undefined;
    }

    protected _set(key: K, value: V): this {
        this.items[ key ] = value;
        return this;
    }

    [ Symbol.iterator ]() {
        let keys    = Object.keys(this.items);
        let counter = 0;
        return {
            next: (...args: any[]) => {
                return {
                    done : counter === keys.length,
                    value: this.items[ keys[ counter ] ] as V,
                };
            },
        };
    }
}
