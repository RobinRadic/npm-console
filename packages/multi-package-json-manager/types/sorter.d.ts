export declare type ArrayKeyOrder<T> = Array<keyof T>;
export declare type DeepObjectArrayKeyOrder<T> = {
    $self?: Array<keyof T>;
} | {
    [P in keyof T]?: Array<keyof T[P]>;
};
export declare type KeyOrder<T> = ArrayKeyOrder<T> | DeepObjectArrayKeyOrder<T>;
export declare const isArrayKeyOrder: <T>(val: any) => val is ArrayKeyOrder<T>;
export declare const isDeepObjectArrayKeyOrder: <T>(val: any) => val is DeepObjectArrayKeyOrder<T>;
export declare function order<T>(obj: T, keyOrder: KeyOrder<T>): T;
