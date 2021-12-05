import { Collection } from '../../Support';
import { objectify } from '@radic/shared';
import { StatTypeValue, Units } from './types';

export interface FSCollection {

}

export class FSCollection extends Collection<StatTypeValue> {

    items: Record<string, StatTypeValue>;

    toObject() {return this.all();}

    directories() {return this.where('type', 'dir'); }

    files() {return this.where('type', 'file'); }

    searchName(search: string | RegExp): FSCollection {
        if ( typeof search === 'string' ) {
            return this.filter((item, name: string) => name.includes(search)) as any;
        }
        if ( search instanceof RegExp ) {
            return this.filter((item, name: string) => search.test(name)) as any;
        }
    }
}

export const toUnits   = <T extends StatTypeValue = StatTypeValue>(u: T[]): Units => {
    return u.map(u => [ u.basename, u ]).reduce(objectify, {});
};
export const fscollect = <V extends StatTypeValue = StatTypeValue, T extends Units = Units>(u: T | V[]) => {
    if ( Array.isArray(u) ) {
        return new FSCollection(toUnits(u));
    }
    return new FSCollection(u);
};
