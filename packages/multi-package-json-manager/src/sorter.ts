// noinspection ES6UnusedImports

import { TSconfigJson } from './types';
import { format } from 'prettier-package-json';
import sortObject from 'sort-object-keys';
import { objectify } from '@radic/shared';

export type ArrayKeyOrder<T> = Array<keyof T>
export type DeepObjectArrayKeyOrder<T> =
    {
        $self?: Array<keyof T>
    }
    | {
        [P in keyof T]?: Array<keyof T[P]>
    }
export type KeyOrder<T> =
    ArrayKeyOrder<T>
    | DeepObjectArrayKeyOrder<T>

export const isArrayKeyOrder           = <T>(val: any): val is ArrayKeyOrder<T> => Array.isArray(val);
export const isDeepObjectArrayKeyOrder = <T>(val: any): val is DeepObjectArrayKeyOrder<T> => val && isArrayKeyOrder(val) === false && typeof val === 'object';

export function order<T>(obj: T, keyOrder: KeyOrder<T>) {
    if ( isArrayKeyOrder(keyOrder) ) {
        obj= sortObject<T>(obj, keyOrder);
    } else if ( isDeepObjectArrayKeyOrder(keyOrder) ) {
        Object.entries(keyOrder).forEach(([ k1, v1 ]) => {
            if ( isDeepObjectArrayKeyOrder(v1) ) {
                Object.entries(v1).forEach(([ k2, v2 ]) => {
                    if ( isDeepObjectArrayKeyOrder(v2) ) {
                        Object.entries(v2).forEach(([ k3, v3 ]) => {
                            if ( isArrayKeyOrder(v3) ) {
                                if ( k3 === '$self' ) {
                                    obj[ k1 ][k2] = sortObject(obj[ k1 ][k2], v3);
                                } else {
                                    obj[ k1 ][ k2 ][k3] = sortObject(obj[ k1 ][ k2 ][k3], v3);
                                }
                            }
                        })
                    } else if ( isArrayKeyOrder(v2) ) {
                        if ( k2 === '$self' ) {
                            obj[ k1 ] = sortObject(obj[ k1 ], v2);
                        } else {
                            obj[ k1 ][ k2 ] = sortObject(obj[ k1 ][ k2 ], v2);
                        }
                    }
                })
            } else if ( isArrayKeyOrder(v1) ) {
                if ( k1 === '$self' ) {
                    obj = sortObject(obj, v1);
                } else {
                    obj[ k1 ] = sortObject(obj[ k1 ], v1);
                }
            }
        })
    }
    return obj;
}
