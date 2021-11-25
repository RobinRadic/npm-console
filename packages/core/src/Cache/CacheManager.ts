import { CacheAdapter, isCacheAdapter } from './CacheAdapter';
import { injectable } from '../Foundation';

export interface CacheManager extends CacheAdapter {

}


// @ts-ignore
@injectable()
export class CacheManager {
    protected adapters: Record<string, CacheAdapter> = {};
    protected main: string;

    constructor() {
        const self=this;
        return new Proxy(this, {
            get(target: CacheManager, p: PropertyKey, receiver: any): any {
                if(Reflect.has(target, p)){
                    return Reflect.get(target,p,receiver)
                }
                if(self.main && self.adapters[self.main]){
                    let adapter = self.adapters[self.main]
                    if(Reflect.has(adapter, p)){
                        let result = Reflect.get(adapter, p);
                        if(isCacheAdapter(result)){
                            return self;
                        }
                        return result;
                    }
                }
            },
        })
    }

    register(adapter: CacheAdapter) {
        this.adapters[ adapter.getName() ] = adapter;
        if ( !this.main ) {
            this.main = adapter.getName();
        }
    }

    use<T extends CacheAdapter = CacheAdapter>(name: string): T {
        this.main = name;
        return this.adapters[ name ] as T;
    }

    hasAdapter(name: string): boolean {return this.adapters[ name ] !== undefined;}

    adapterNames() {return Object.keys(this.adapters); }

    allAdapters() { return Object.values(this.adapters); }

    clearAdapters() {this.allAdapters().forEach(adapter => adapter.clear()); }
}
