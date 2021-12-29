import { CacheAdapter } from './CacheAdapter';
export interface CacheManager extends CacheAdapter {
}
export declare class CacheManager {
    protected adapters: Record<string, CacheAdapter>;
    protected main: string;
    constructor();
    register(adapter: CacheAdapter): void;
    use<T extends CacheAdapter = CacheAdapter>(name: string): T;
    hasAdapter(name: string): boolean;
    getAdapter<T extends CacheAdapter = CacheAdapter>(name: string): T;
    adapterNames(): string[];
    allAdapters(): CacheAdapter[];
    clearAdapters(): void;
}
