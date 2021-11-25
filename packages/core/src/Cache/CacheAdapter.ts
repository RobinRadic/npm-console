export interface CacheAdapter {
    getName(): string

    getType(): string

    put(key: string, value: any): this

    get<T>(key: string, defaultValue?: any): T

    has(key: string): boolean

    merge(value: any): this

    del(key: string): this

    clear(): this

    size(): number

    keys(): string[]

}

export const isCacheAdapter = (val:any):val is CacheAdapter => val && typeof val.getName === 'function'
