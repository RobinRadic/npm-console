import { Repository } from './Repository';
import { DirectoryStorage } from '../Storage/DirectoryStorage';
import { Diff } from '@radic/shared';
export declare class ConfigRepository<T> extends Repository<T> {
    storage: DirectoryStorage;
    fileName: string;
    getFilePath(): string;
    setStorage(storage: DirectoryStorage): this;
    protected getChangedItems(): {
        diff: Diff;
        items: Partial<T>;
        changed: any[];
    };
    save(): this;
    clearSaved(): void;
    load(method: 'merge' | 'set'): this;
    get<T>(key?: string, defaultValue?: any): T;
    set(key: string | T, value?: any): this;
    has(key: string): boolean;
    static asProxy<T>(items?: T): Repository<T> & T;
}
