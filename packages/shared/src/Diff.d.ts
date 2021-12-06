export declare type WhatIs = 'null' | 'undefined' | 'scalar' | 'object' | 'array';
export declare class Diff {
    protected o: object;
    protected o2: object;
    diff: Diff.Item[];
    constructor(o: object, o2: object);
    static make(a: object, b: object): Diff;
    getDiff(): Diff.Item[];
    printDiff(): void;
    static getChangedItems<O1 extends object, O2 extends object>(o: O1, o2: O2): {
        diff: Diff;
        items: Partial<O1 & O2>;
        changed: any[];
    };
}
export declare namespace Diff {
    const isItem: (value: any) => value is Item;
    const isItemWithKey: (value: any) => value is Item;
    const isItemWithValue: (value: any) => value is Item;
    const isItemWithKeyValue: (value: any) => value is Item;
    type ItemType = 'null' | 'undefined' | 'scalar' | 'object' | 'array';
    type ItemAction = 'common' | 'add' | 'remove';
    interface Item {
        key: string;
        action: ItemAction;
        type: ItemType;
        diff?: Item[];
        value?: any;
    }
}
