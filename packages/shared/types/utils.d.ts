export declare const makeLog: (namespace: string) => any;
export interface Param {
    name: string;
    variadic?: boolean;
    defaultValue?: any;
    defaultType?: any;
}
export declare type ParameterReflection = string[] | Param[];
export declare const isSimpleParamResult: (val: any) => val is string[];
export declare const isDetailedParamResult: (val: any) => val is Param[];
export declare function reflectParams(func: Function, detailed?: boolean): Param[];
/**
 *
 * @param obj
 * @param k
 * @param v
 * @example
 *
 * params = Object.entries(params).filter(([ key, value ]) => {
 *     return value.toString().length > 0;
 * }).reduce(utils.objectify, {});
 *
 */
export declare const objectify: (obj: any, [k, v]: [any, any]) => any;
