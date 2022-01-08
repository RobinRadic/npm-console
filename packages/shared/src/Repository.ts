import { cloneDeep,merge } from 'lodash';
import { getSetDescendantProp } from './getSetDescendantProp';

export type ProxyRepository<T> = Repository<T>&T

export class Repository<T = any> {
    protected _original: T = null as any;

    getOriginal() {return cloneDeep(this._original);}

    markOriginal() {
        if ( this._original === null ) {
            this._original = cloneDeep(this.items);
        }
        return this;
    }


    constructor(protected items: T = {} as any) {
        this.items = items;
    }

    merge(obj:Partial<T>){
        this.items = merge({},this.items,obj)
        return this;
    }

    public get<T>(key?: string, defaultValue?: any): T {
        if ( key === undefined ) {
            return this.items as any;
        }

        let value = getSetDescendantProp(this.items, key);

        if ( value === undefined ) {
            value = defaultValue;
        }
        return value;
    }

    public set(key: string | T, value?: any): this {

        if ( typeof key === 'object' ) {
            this.items = key;
        } else {
            getSetDescendantProp(this.items, key, value);
        }

        return this;
    }

    public push(key:string, value:any){
        let array = this.get<any[]>(key,[]);
        array.push(value);
        this.set(key, array);
        return this;
    }

    public has(key: string): boolean {
        return getSetDescendantProp(this.items, key) !== undefined;
    }

    public static asProxy<T>(items?: T): Repository<T> & T {
        return makeProxy<T>(new this(items));
    }
}

export const enum ProxyFlags {
    IS_PROXY = '__s_isProxy',
    UNPROXY  = '__s_unproxy'
}


export function makeProxy<T>(repository: Repository<T>): Repository<T> & T {
    return new Proxy(repository, {
        get(target: Repository<T>, p: string | symbol, receiver: any): any {
            if ( Reflect.has(target, p) ) return target[ p ]; //Reflect.get(target, p, receiver);
            if ( p === ProxyFlags.IS_PROXY ) return true;
            if ( p === ProxyFlags.UNPROXY ) return () => target;
            let key = p.toString();
            if ( target.has(key) ) return target.get(key as any);
        },
        set(target: Repository<T>, p: string | symbol, value: any, receiver: any): boolean {
            if ( [ ProxyFlags.IS_PROXY, ProxyFlags.UNPROXY ].includes(p.toString() as any) ) {
                throw Error('Cannot set property: ' + p.toString());
            }
            if ( Reflect.has(target, p) ) {
                return Reflect.set(target, p, value, receiver);
            }
            target.set(p.toString(), value);
            return true;
        },
        has(target: Repository<T>, p: string | symbol): boolean {
            if ( Reflect.has(target, p) ) {
                return true;
            }
            return target.has(p.toString());
        },
    }) as any;
}

//
