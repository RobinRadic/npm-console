export declare type ProxyRepository<T> = Repository<T> & T;
export declare class Repository<T = any> {
    protected items: T;
    protected _original: T;
    getOriginal(): T;
    markOriginal(): this;
    constructor(items?: T);
    merge(obj: Partial<T>): this;
    get<T>(key?: string, defaultValue?: any): T;
    set(key: string | T, value?: any): this;
    push(key: string, value: any): this;
    has(key: string): boolean;
    static asProxy<T>(items?: T): Repository<T> & T;
}
export declare const enum ProxyFlags {
    IS_PROXY = "__s_isProxy",
    UNPROXY = "__s_unproxy"
}
export declare function makeProxy<T>(repository: Repository<T>): Repository<T> & T;
