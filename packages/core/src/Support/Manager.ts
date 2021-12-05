import { Collection } from './Collection';
import { injectable } from 'inversify';

// @ts-ignore
@injectable()
export abstract class Manager<T> {
    protected items: Collection<T> = new Collection<T>({});

    get collection():Collection<T>{return this.items}

    setItems(items:T[]|Object){
        this.items = new Collection<T>(items)
        return this
    }

    set(key: string, item: T) {
        this.items.put(key, item);
        return this;
    }

    has(key: string) { return this.items.has(key); }

    get<F=T>(key: string|number):F {return this.items.get(key) as any }

    keys(): string[] { return this.items.keys().toArray(); }

    names(): string[] { return this.items.keys().toArray(); }

    values<F=T>(): F[] { return this.items.values<F>().toArray<F>(); }

    all<F=T>(): F[] { return this.items.values().toArray(); }

    toCollection(): Collection<T> { return this.items; }

    toArray() { return this.items.toArray<T>(); }
}
