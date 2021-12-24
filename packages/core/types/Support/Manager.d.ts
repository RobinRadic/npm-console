import { Collection } from './Collection';
export declare abstract class Manager<T> {
    protected items: Collection<T>;
    get collection(): Collection<T>;
    setItems(items: T[] | Object): this;
    set(key: string, item: T): this;
    has(key: string): boolean;
    get<F = T>(key: string | number): F;
    keys(): string[];
    names(): string[];
    values<F = T>(): F[];
    all<F = T>(): F[];
    toCollection(): Collection<T>;
    toArray(): T[];
}
