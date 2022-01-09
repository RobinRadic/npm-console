/// <reference types="collect.js" />
import { Collection } from '../../Support';
import { StatTypeValue, Units } from './types';
export interface FSCollection {
}
export declare class FSCollection extends Collection<StatTypeValue> {
    items: Record<string, StatTypeValue>;
    toObject(): StatTypeValue[];
    directories(): import("collect.js").Collection<StatTypeValue>;
    files(): import("collect.js").Collection<StatTypeValue>;
    searchName(search: string | RegExp): FSCollection;
}
export declare const toUnits: <T extends StatTypeValue = StatTypeValue>(u: T[]) => Units;
export declare const fscollect: <V extends StatTypeValue = StatTypeValue, T extends Units<StatTypeValue> = Units<StatTypeValue>>(u: T | V[]) => FSCollection;
