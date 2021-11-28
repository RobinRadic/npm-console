[@radic/core](../README.md) / Collection

# Class: Collection<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `BaseCollection`<`T`\>

  ↳ **`Collection`**

## Indexable

▪ [macroFn: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Properties

- [[iterator]](Collection.md#[iterator])
- [length](Collection.md#length)

### Methods

- [all](Collection.md#all)
- [average](Collection.md#average)
- [avg](Collection.md#avg)
- [chunk](Collection.md#chunk)
- [collapse](Collection.md#collapse)
- [combine](Collection.md#combine)
- [concat](Collection.md#concat)
- [contains](Collection.md#contains)
- [count](Collection.md#count)
- [crossJoin](Collection.md#crossjoin)
- [dd](Collection.md#dd)
- [diff](Collection.md#diff)
- [diffAssoc](Collection.md#diffassoc)
- [diffKeys](Collection.md#diffkeys)
- [dump](Collection.md#dump)
- [each](Collection.md#each)
- [every](Collection.md#every)
- [except](Collection.md#except)
- [filter](Collection.md#filter)
- [first](Collection.md#first)
- [flatMap](Collection.md#flatmap)
- [flatten](Collection.md#flatten)
- [flip](Collection.md#flip)
- [forPage](Collection.md#forpage)
- [forget](Collection.md#forget)
- [get](Collection.md#get)
- [groupBy](Collection.md#groupby)
- [has](Collection.md#has)
- [implode](Collection.md#implode)
- [intersect](Collection.md#intersect)
- [intersectByKeys](Collection.md#intersectbykeys)
- [isEmpty](Collection.md#isempty)
- [isNotEmpty](Collection.md#isnotempty)
- [keyBy](Collection.md#keyby)
- [keys](Collection.md#keys)
- [last](Collection.md#last)
- [macro](Collection.md#macro)
- [map](Collection.md#map)
- [mapInto](Collection.md#mapinto)
- [mapToGroups](Collection.md#maptogroups)
- [mapWithKeys](Collection.md#mapwithkeys)
- [max](Collection.md#max)
- [median](Collection.md#median)
- [merge](Collection.md#merge)
- [min](Collection.md#min)
- [mode](Collection.md#mode)
- [nth](Collection.md#nth)
- [only](Collection.md#only)
- [partition](Collection.md#partition)
- [pipe](Collection.md#pipe)
- [pluck](Collection.md#pluck)
- [pop](Collection.md#pop)
- [prepend](Collection.md#prepend)
- [pull](Collection.md#pull)
- [push](Collection.md#push)
- [put](Collection.md#put)
- [random](Collection.md#random)
- [reduce](Collection.md#reduce)
- [reject](Collection.md#reject)
- [reverse](Collection.md#reverse)
- [search](Collection.md#search)
- [shift](Collection.md#shift)
- [shuffle](Collection.md#shuffle)
- [slice](Collection.md#slice)
- [sort](Collection.md#sort)
- [sortBy](Collection.md#sortby)
- [sortByDesc](Collection.md#sortbydesc)
- [splice](Collection.md#splice)
- [split](Collection.md#split)
- [sum](Collection.md#sum)
- [take](Collection.md#take)
- [tap](Collection.md#tap)
- [times](Collection.md#times)
- [toArray](Collection.md#toarray)
- [toJson](Collection.md#tojson)
- [transform](Collection.md#transform)
- [union](Collection.md#union)
- [unique](Collection.md#unique)
- [unless](Collection.md#unless)
- [unwrap](Collection.md#unwrap)
- [values](Collection.md#values)
- [when](Collection.md#when)
- [where](Collection.md#where)
- [whereIn](Collection.md#wherein)
- [whereNotIn](Collection.md#wherenotin)
- [wrap](Collection.md#wrap)
- [zip](Collection.md#zip)
- [make](Collection.md#make)

## Constructors

### constructor

• **new Collection**<`T`\>(`collection`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Object` \| `T`[] |

#### Overrides

BaseCollection&lt;T\&gt;.constructor

#### Defined in

[packages/core/src/Support/Collection.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Collection.ts#L7)

## Properties

### [iterator]

• **[iterator]**: () => `Iterator`<`T`, `any`, `undefined`\>

#### Type declaration

▸ (): `Iterator`<`T`, `any`, `undefined`\>

##### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Inherited from

BaseCollection.\_\_@iterator@82

#### Defined in

node_modules/collect.js/index.d.ts:403

___

### length

• **length**: `number`

#### Defined in

[packages/core/src/Support/Collection.ts:4](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Collection.ts#L4)

## Methods

### all

▸ **all**(): `T`[]

The all method returns the underlying array represented by the collection.

#### Returns

`T`[]

#### Inherited from

BaseCollection.all

#### Defined in

node_modules/collect.js/index.d.ts:12

___

### average

▸ **average**<`K`\>(`key?`): `number`

Alias for the avg() method.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `K` \| keyof `T` |

#### Returns

`number`

#### Inherited from

BaseCollection.average

#### Defined in

node_modules/collect.js/index.d.ts:17

___

### avg

▸ **avg**<`K`\>(`key?`): `number`

The avg method returns the average of all items in the collection.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | keyof `T` \| `K` |

#### Returns

`number`

#### Inherited from

BaseCollection.avg

#### Defined in

node_modules/collect.js/index.d.ts:22

___

### chunk

▸ **chunk**(`size`): `Collection`<`T`[]\>

The chunk method breaks the collection into multiple, smaller collections of a given size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Collection`<`T`[]\>

#### Inherited from

BaseCollection.chunk

#### Defined in

node_modules/collect.js/index.d.ts:27

___

### collapse

▸ **collapse**(): `Collection`<`T`\>

The collapse method collapses a collection of arrays into a single, flat collection.

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.collapse

#### Defined in

node_modules/collect.js/index.d.ts:32

___

### combine

▸ **combine**<`T`, `U`\>(`array`): `Collection`<`T`\>

The combine method combines the keys of the collection with the values of another array or collection.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `U`[] |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.combine

#### Defined in

node_modules/collect.js/index.d.ts:37

___

### concat

▸ **concat**<`T`\>(`collectionOrArrayOrObject`): `any`

The concat method is used to merge two or more collections/arrays/objects.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionOrArrayOrObject` | `object` \| `Collection`<`T`\> \| `T`[] |

#### Returns

`any`

#### Inherited from

BaseCollection.concat

#### Defined in

node_modules/collect.js/index.d.ts:42

___

### contains

▸ **contains**<`K`, `V`\>(`key`, `value?`): `boolean`

The contains method determines whether the collection contains a given item.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Function` \| keyof `T` \| `K` |
| `value?` | `V` |

#### Returns

`boolean`

#### Inherited from

BaseCollection.contains

#### Defined in

node_modules/collect.js/index.d.ts:47

___

### count

▸ **count**(): `number`

The count method returns the total number of items in the collection.

#### Returns

`number`

#### Inherited from

BaseCollection.count

#### Defined in

node_modules/collect.js/index.d.ts:52

___

### crossJoin

▸ **crossJoin**<`T`\>(`values`): `Collection`<[`T`, `T`]\>

The crossJoin method cross joins the collection with the given array or collection, returning all possible permutations.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T`[] |

#### Returns

`Collection`<[`T`, `T`]\>

#### Inherited from

BaseCollection.crossJoin

#### Defined in

node_modules/collect.js/index.d.ts:57

___

### dd

▸ **dd**(): `void`

The dd method will console.log the collection and exit the current process.

#### Returns

`void`

#### Inherited from

BaseCollection.dd

#### Defined in

node_modules/collect.js/index.d.ts:62

___

### diff

▸ **diff**<`T`\>(`values`): `Collection`<`T`\>

The diff method compares the collection against another collection or a plain array based on its values.
This method will return the values in the original collection that are not present in the given collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Collection`<`T`\> \| `T`[] |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.diff

#### Defined in

node_modules/collect.js/index.d.ts:68

___

### diffAssoc

▸ **diffAssoc**<`T`\>(`values`): `Collection`<`T`\>

The diffAssoc method compares the collection against another collection or a plain object based on its keys
and values. This method will return the key / value pairs in the original collection that are not present in
the given collection:

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T`[] \| `Collection`<`T`\> |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.diffAssoc

#### Defined in

node_modules/collect.js/index.d.ts:75

___

### diffKeys

▸ **diffKeys**<`K`\>(`object`): `Collection`<`K`\>

The diffKeys method compares the collection against another collection or a plain object based on its keys.
This method will return the key / value pairs in the original collection that are not present in the given collection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `object` |

#### Returns

`Collection`<`K`\>

#### Inherited from

BaseCollection.diffKeys

#### Defined in

node_modules/collect.js/index.d.ts:81

___

### dump

▸ **dump**(): [`Collection`](Collection.md)<`T`\>

The dump method outputs the results at that moment and then continues processing.

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Inherited from

BaseCollection.dump

#### Defined in

node_modules/collect.js/index.d.ts:86

___

### each

▸ **each**(`fn`, `index?`, `items?`): [`Collection`](Collection.md)<`T`\>

The each method iterates over the items in the collection and passes each item to a callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`) => `void` |
| `index?` | `number` |
| `items?` | `T`[] |

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Inherited from

BaseCollection.each

#### Defined in

node_modules/collect.js/index.d.ts:91

___

### every

▸ **every**(`fn`): `boolean`

The every method may be used to verify that all elements of a collection pass a given truth test.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`) => `boolean` |

#### Returns

`boolean`

#### Inherited from

BaseCollection.every

#### Defined in

node_modules/collect.js/index.d.ts:96

___

### except

▸ **except**<`K`\>(`properties`): `Collection`<`T`\>

The except method returns all items in the collection except for those with the specified keys.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | `K`[] |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.except

#### Defined in

node_modules/collect.js/index.d.ts:101

___

### filter

▸ **filter**(`fn`): `Collection`<`T`\>

The filter method filters the collection using the given callback,
keeping only those items that pass a given truth test.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`) => `boolean` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.filter

#### Defined in

node_modules/collect.js/index.d.ts:107

▸ **filter**(`fn`): `Collection`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`, `key?`: `any`) => `boolean` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.filter

#### Defined in

node_modules/collect.js/index.d.ts:108

___

### first

▸ **first**<`V`\>(`fn?`, `defaultValue?`): `T`

The first method returns the first element in the collection that passes a given truth test.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn?` | (`item`: `T`) => `boolean` |
| `defaultValue?` | (...`any`: `any`[]) => `T` \| `V` |

#### Returns

`T`

#### Inherited from

BaseCollection.first

#### Defined in

node_modules/collect.js/index.d.ts:113

___

### flatMap

▸ **flatMap**<`T`\>(`fn`): `Collection`<`T`\>

The flatMap method iterates through the collection and passes each value to the given callback.
The callback is free to modify the item and return it, thus forming a new collection of modified items.
Then, the array is flattened by a level.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`, `key`: `any`) => `T` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.flatMap

#### Defined in

node_modules/collect.js/index.d.ts:120

___

### flatten

▸ **flatten**(`depth?`): `Collection`<`T`\>

The flatten method flattens a multi-dimensional collection into a single dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.flatten

#### Defined in

node_modules/collect.js/index.d.ts:125

___

### flip

▸ **flip**(): `Collection`<`T`\>

The flip method swaps the collection's keys with their corresponding values.

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.flip

#### Defined in

node_modules/collect.js/index.d.ts:130

___

### forPage

▸ **forPage**(`page`, `chunk`): `Collection`<`T`\>

The forPage method returns a new collection containing the items that would be present on a given page number.
The method accepts the page number as its first argument
and the number of items to show per page as its second argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | `number` |
| `chunk` | `number` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.forPage

#### Defined in

node_modules/collect.js/index.d.ts:142

___

### forget

▸ **forget**<`K`\>(`key`): [`Collection`](Collection.md)<`T`\>

The forget method removes an item from the collection by its key.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` |

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Inherited from

BaseCollection.forget

#### Defined in

node_modules/collect.js/index.d.ts:135

___

### get

▸ **get**<`K`, `V`\>(`key`, `defaultValue?`): `T`

The get method returns the item at a given key. If the key does not exist, null is returned.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` |
| `defaultValue?` | (...`any`: `any`[]) => `T` \| `V` |

#### Returns

`T`

#### Inherited from

BaseCollection.get

#### Defined in

node_modules/collect.js/index.d.ts:147

___

### groupBy

▸ **groupBy**<`T`, `K`\>(`key`): `Collection`<`T`\>

The groupBy method groups the collection's items by a given key.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` \| (`item`: `T`, `index?`: `number`) => `K` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.groupBy

#### Defined in

node_modules/collect.js/index.d.ts:153

___

### has

▸ **has**<`K`\>(`key`): `boolean`

The has method determines if one or more keys exists in the collection.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` \| keyof `T`[] |

#### Returns

`boolean`

#### Inherited from

BaseCollection.has

#### Defined in

node_modules/collect.js/index.d.ts:158

___

### implode

▸ **implode**<`K`\>(`key`, `glue?`): `string`

The implode method joins the items in a collection.
Its arguments depend on the type of items in the collection.

If the collection contains arrays or objects,
you should pass the key of the attributes you wish to join,
and the "glue" string you wish to place between the values.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` |
| `glue?` | `string` |

#### Returns

`string`

#### Inherited from

BaseCollection.implode

#### Defined in

node_modules/collect.js/index.d.ts:168

___

### intersect

▸ **intersect**(`values`): `Collection`<`T`\>

The intersect method removes any values from the original collection
that are not present in the given array or collection.
The resulting collection will preserve the original collection's keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T`[] \| `Collection`<`T`\> |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.intersect

#### Defined in

node_modules/collect.js/index.d.ts:175

___

### intersectByKeys

▸ **intersectByKeys**<`K`\>(`values`): `Collection`<`K`\>

The intersectByKeys method removes any keys from the original collection
that are not present in the given array or collection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T` \| `Collection`<`T`\> |

#### Returns

`Collection`<`K`\>

#### Inherited from

BaseCollection.intersectByKeys

#### Defined in

node_modules/collect.js/index.d.ts:181

___

### isEmpty

▸ **isEmpty**(): `boolean`

The isEmpty method returns true if the collection is empty; otherwise, false is returned.

#### Returns

`boolean`

#### Inherited from

BaseCollection.isEmpty

#### Defined in

node_modules/collect.js/index.d.ts:186

___

### isNotEmpty

▸ **isNotEmpty**(): `boolean`

The isNotEmpty method returns true if the collection is not empty; otherwise, false is returned.

#### Returns

`boolean`

#### Inherited from

BaseCollection.isNotEmpty

#### Defined in

node_modules/collect.js/index.d.ts:191

___

### keyBy

▸ **keyBy**<`T`, `K`\>(`key`): `Collection`<`T`\>

The keyBy method keys the collection by the given key.
If multiple items have the same key, only the last one will appear in the new collection.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Function` \| keyof `T` \| `K` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.keyBy

#### Defined in

node_modules/collect.js/index.d.ts:197

___

### keys

▸ **keys**(): `Collection`<`string`\>

The keys method returns all of the collection's keys.

#### Returns

`Collection`<`string`\>

#### Inherited from

BaseCollection.keys

#### Defined in

node_modules/collect.js/index.d.ts:202

___

### last

▸ **last**(`fn?`): `T`

The last method returns the last element in the collection that passes a given truth test.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn?` | (`item`: `T`) => `boolean` |

#### Returns

`T`

#### Inherited from

BaseCollection.last

#### Defined in

node_modules/collect.js/index.d.ts:207

___

### macro

▸ **macro**(`name`, `fn`): `void`

The macro method lets you register custom methods.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | `Function` |

#### Returns

`void`

#### Inherited from

BaseCollection.macro

#### Defined in

node_modules/collect.js/index.d.ts:212

___

### map

▸ **map**<`T`\>(`fn`): `Collection`<`T`\>

The map method iterates through the collection and passes each value to the given callback.
The callback is free to modify the item and return it, thus forming a new collection of modified items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`, `index`: `any`) => `T` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.map

#### Defined in

node_modules/collect.js/index.d.ts:218

___

### mapInto

▸ **mapInto**<`T`\>(`ClassName`): `Collection`<`T`\>

The mapInto method iterates through the collection and instantiates the given class with each element as a constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ClassName` | `T` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.mapInto

#### Defined in

node_modules/collect.js/index.d.ts:223

___

### mapToGroups

▸ **mapToGroups**(`fn`): `Collection`<`any`\>

The mapToGroups method iterates through the collection and passes each value to the given callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`Collection`<`any`\>

#### Inherited from

BaseCollection.mapToGroups

#### Defined in

node_modules/collect.js/index.d.ts:228

___

### mapWithKeys

▸ **mapWithKeys**<`T`\>(`fn`): `Collection`<`T`\>

The mapWithKeys method iterates through the collection and passes each value to the given callback.
The callback should return an array where the first element represents the key
and the second element represents the value pair.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.mapWithKeys

#### Defined in

node_modules/collect.js/index.d.ts:235

___

### max

▸ **max**(`key?`): `number`

The max method returns the maximum value of a given key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` \| keyof `T` |

#### Returns

`number`

#### Inherited from

BaseCollection.max

#### Defined in

node_modules/collect.js/index.d.ts:240

___

### median

▸ **median**<`K`\>(`key?`): `T`

The median method returns the median value of a given key.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | keyof `T` \| `K` |

#### Returns

`T`

#### Inherited from

BaseCollection.median

#### Defined in

node_modules/collect.js/index.d.ts:245

___

### merge

▸ **merge**<`T`\>(`objectOrArray`): `Collection`<`T`\>

The merge method merges the given object into the original collection.
If a key in the given object matches a key in the original collection,
the given objects value will overwrite the value in the original collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectOrArray` | `object` \| `T`[] |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.merge

#### Defined in

node_modules/collect.js/index.d.ts:252

___

### min

▸ **min**<`K`\>(`key?`): `number`

The min method returns the minimum value of a given key.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | keyof `T` \| `K` |

#### Returns

`number`

#### Inherited from

BaseCollection.min

#### Defined in

node_modules/collect.js/index.d.ts:257

___

### mode

▸ **mode**<`K`\>(`key?`): `Collection`<`T`\>

The mode method returns the mode value of a given key.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | keyof `T` \| `K` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.mode

#### Defined in

node_modules/collect.js/index.d.ts:262

___

### nth

▸ **nth**(`n`, `offset?`): `Collection`<`T`\>

The nth method creates a new collection consisting of every n-th element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `offset?` | `number` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.nth

#### Defined in

node_modules/collect.js/index.d.ts:267

___

### only

▸ **only**<`K`\>(`properties`): `Collection`<`T`\>

The only method returns the items in the collection with the specified keys.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | `K`[] |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.only

#### Defined in

node_modules/collect.js/index.d.ts:272

___

### partition

▸ **partition**(`fn`): [`T`[], `T`[]]

The partition method may be combined with destructuring to separate elements
that pass a given truth test from those that do not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`) => `boolean` |

#### Returns

[`T`[], `T`[]]

#### Inherited from

BaseCollection.partition

#### Defined in

node_modules/collect.js/index.d.ts:278

___

### pipe

▸ **pipe**<`U`\>(`fn`): `U`

The pipe method passes the collection to the given callback and returns the result.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`any`: `any`[]) => `U` |

#### Returns

`U`

#### Inherited from

BaseCollection.pipe

#### Defined in

node_modules/collect.js/index.d.ts:283

___

### pluck

▸ **pluck**<`T`, `K`, `V`\>(`value`, `key?`): `Collection`<`T`\>

The pluck method retrieves all of the values for a given key.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | keyof `T` \| `V` |
| `key?` | keyof `T` \| `K` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.pluck

#### Defined in

node_modules/collect.js/index.d.ts:288

___

### pop

▸ **pop**(): `T`

The pop method removes and returns the last item from the collection.

#### Returns

`T`

#### Inherited from

BaseCollection.pop

#### Defined in

node_modules/collect.js/index.d.ts:293

___

### prepend

▸ **prepend**<`K`, `V`\>(`value`, `key?`): [`Collection`](Collection.md)<`T`\>

The prepend method adds an item to the beginning of the collection.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |
| `key?` | `K` |

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Inherited from

BaseCollection.prepend

#### Defined in

node_modules/collect.js/index.d.ts:298

___

### pull

▸ **pull**<`K`\>(`key`): `T`

The pull method removes and returns an item from the collection by its key.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` |

#### Returns

`T`

#### Inherited from

BaseCollection.pull

#### Defined in

node_modules/collect.js/index.d.ts:303

___

### push

▸ **push**(`item`): [`Collection`](Collection.md)<`T`\>

The push method appends an item to the end of the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Inherited from

BaseCollection.push

#### Defined in

node_modules/collect.js/index.d.ts:308

___

### put

▸ **put**<`K`, `V`\>(`key`, `value`): [`Collection`](Collection.md)<`T`\>

The put method sets the given key and value in the collection.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Inherited from

BaseCollection.put

#### Defined in

node_modules/collect.js/index.d.ts:313

___

### random

▸ **random**(`length?`): [`Collection`](Collection.md)<`T`\> \| `T`

The random method returns a random item from the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `length?` | `number` |

#### Returns

[`Collection`](Collection.md)<`T`\> \| `T`

#### Inherited from

BaseCollection.random

#### Defined in

node_modules/collect.js/index.d.ts:318

___

### reduce

▸ **reduce**<`T`\>(`fn`, `carry?`): `any`

The reduce method reduces the collection to a single value,
passing the result of each iteration into the subsequent iteration.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`_carry`: `T`, `item`: `T`) => `T` |
| `carry?` | `T` |

#### Returns

`any`

#### Inherited from

BaseCollection.reduce

#### Defined in

node_modules/collect.js/index.d.ts:324

___

### reject

▸ **reject**(`fn`): `Collection`<`T`\>

The reject method filters the collection using the given callback.
The callback should return true if the item should be removed from the resulting collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`) => `boolean` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.reject

#### Defined in

node_modules/collect.js/index.d.ts:330

___

### reverse

▸ **reverse**(): `Collection`<`T`\>

The reverse method reverses the order of the collection's items.

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.reverse

#### Defined in

node_modules/collect.js/index.d.ts:335

___

### search

▸ **search**(`valueOrFunction`, `strict?`): `any`

The search method searches the collection for the given value and returns its key if found.
If the item is not found, false is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueOrFunction` | `T` \| (`value`: `T`, `key`: `number`) => `boolean` |
| `strict?` | `boolean` |

#### Returns

`any`

#### Inherited from

BaseCollection.search

#### Defined in

node_modules/collect.js/index.d.ts:341

___

### shift

▸ **shift**(): `T`

The shift method removes and returns the first item from the collection.

#### Returns

`T`

#### Inherited from

BaseCollection.shift

#### Defined in

node_modules/collect.js/index.d.ts:346

___

### shuffle

▸ **shuffle**(): [`Collection`](Collection.md)<`T`\>

The shuffle method randomly shuffles the items in the collection.

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Inherited from

BaseCollection.shuffle

#### Defined in

node_modules/collect.js/index.d.ts:351

___

### slice

▸ **slice**(`remove`, `limit?`): `Collection`<`T`\>

The slice method returns a slice of the collection starting at the given index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `remove` | `number` |
| `limit?` | `number` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.slice

#### Defined in

node_modules/collect.js/index.d.ts:356

___

### sort

▸ **sort**(`fn?`): `Collection`<`T`\>

The sort method sorts the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn?` | (`a`: `T`, `b`: `T`) => `number` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.sort

#### Defined in

node_modules/collect.js/index.d.ts:361

___

### sortBy

▸ **sortBy**<`V`\>(`value`): `Collection`<`T`\>

The sortBy method sorts the collection by the given key.
The sorted collection keeps the original array keys.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.sortBy

#### Defined in

node_modules/collect.js/index.d.ts:367

▸ **sortBy**(`fn`): `Collection`<`T`\>

The sortBy method sorts the collection by the given callback.
The sorted collection keeps the original array keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`) => `number` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.sortBy

#### Defined in

node_modules/collect.js/index.d.ts:373

___

### sortByDesc

▸ **sortByDesc**<`V`\>(`value`): `Collection`<`T`\>

This method has the same signature as the sortBy method,
but will sort the collection in the opposite order.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.sortByDesc

#### Defined in

node_modules/collect.js/index.d.ts:379

▸ **sortByDesc**(`fn`): `Collection`<`T`\>

This method has the same signature as the sortBy method,
but will sort the collection in the opposite order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`) => `number` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.sortByDesc

#### Defined in

node_modules/collect.js/index.d.ts:385

___

### splice

▸ **splice**(`index`, `limit`, `replace?`): `Collection`<`T`\>

The splice method removes and returns a slice of items starting at the specified index.
You may pass a second argument to limit the size of the resulting chunk.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `limit` | `number` |
| `replace?` | `T`[] |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.splice

#### Defined in

node_modules/collect.js/index.d.ts:391

___

### split

▸ **split**(`numberOfGroups`): `T`[]

The split method breaks a collection into the given number of groups.

#### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfGroups` | `number` |

#### Returns

`T`[]

#### Inherited from

BaseCollection.split

#### Defined in

node_modules/collect.js/index.d.ts:396

___

### sum

▸ **sum**<`K`\>(`key?`): `string` \| `number`

The sum method returns the sum of all items in the collection.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | keyof `T` \| `K` \| (`item`: `T`) => `string` \| `number` |

#### Returns

`string` \| `number`

#### Inherited from

BaseCollection.sum

#### Defined in

node_modules/collect.js/index.d.ts:401

___

### take

▸ **take**(`length`): `Collection`<`T`\>

The take method returns a new collection with the specified number of items:
You may also pass a negative integer to take the specified amount of items from the end of the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.take

#### Defined in

node_modules/collect.js/index.d.ts:409

___

### tap

▸ **tap**(`fn`): [`Collection`](Collection.md)<`T`\>

The tap method passes the collection to the given callback,
allowing you to "tap" into the collection at a specific point
and do something with the items while not affecting the collection itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`collection`: `Collection`<`T`\>) => `void` |

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Inherited from

BaseCollection.tap

#### Defined in

node_modules/collect.js/index.d.ts:416

___

### times

▸ **times**<`T`\>(`times`, `fn`): `T`[]

The times method creates a new collection by invoking the callback a given amount of times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `times` | `number` |
| `fn` | (`time`: `number`) => `T` |

#### Returns

`T`[]

#### Inherited from

BaseCollection.times

#### Defined in

node_modules/collect.js/index.d.ts:421

___

### toArray

▸ **toArray**<`T`\>(): `T`[]

The toArray method converts the collection into a plain array.
If the collection is an object, an array containing the values will be returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`T`[]

#### Inherited from

BaseCollection.toArray

#### Defined in

node_modules/collect.js/index.d.ts:427

___

### toJson

▸ **toJson**(): `string`

The toJson method converts the collection into JSON string.

#### Returns

`string`

#### Inherited from

BaseCollection.toJson

#### Defined in

node_modules/collect.js/index.d.ts:432

___

### transform

▸ **transform**<`T`\>(`fn`): `Collection`<`T`\>

The transform method iterates over the collection and calls the given callback with each item in the collection.
The items in the collection will be replaced by the values returned by the callback.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`item`: `T`) => `T` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.transform

#### Defined in

node_modules/collect.js/index.d.ts:438

___

### union

▸ **union**<`T`\>(`object`): `Collection`<`T`\>

The union method adds the given array to the collection.
If the given array contains keys that are already in the original collection,
the original collection's values will be preferred.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.union

#### Defined in

node_modules/collect.js/index.d.ts:445

___

### unique

▸ **unique**<`K`\>(`key?`): `Collection`<`T`\>

The unique method returns all of the unique items in the collection.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `Function` \| keyof `T` \| `K` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.unique

#### Defined in

node_modules/collect.js/index.d.ts:450

___

### unless

▸ **unless**(`value`, `fn`, `defaultFn`): `void`

The unless method will execute the given callback when the first argument given to the method evaluates to false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |
| `fn` | () => `any` |
| `defaultFn` | () => `any` |

#### Returns

`void`

#### Inherited from

BaseCollection.unless

#### Defined in

node_modules/collect.js/index.d.ts:455

___

### unwrap

▸ **unwrap**<`T`\>(`value`): `T`[]

The unwrap method will unwrap the given collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] \| `Collection`<`T`\> |

#### Returns

`T`[]

#### Inherited from

BaseCollection.unwrap

#### Defined in

node_modules/collect.js/index.d.ts:460

___

### values

▸ **values**<`T`\>(): `Collection`<`T`\>

The values method returns a new collection with the keys reset to consecutive integers.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.values

#### Defined in

node_modules/collect.js/index.d.ts:465

___

### when

▸ **when**(`condition`, `fn`, `defaultFn`): `void`

The when method will execute the given callback when the first argument given to the method evaluates to true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `fn` | () => `any` |
| `defaultFn` | () => `any` |

#### Returns

`void`

#### Inherited from

BaseCollection.when

#### Defined in

node_modules/collect.js/index.d.ts:470

___

### where

▸ **where**<`K`, `V`\>(`key`, `value`): `Collection`<`T`\>

The where method filters the collection by a given key / value pair.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` |
| `value` | `V` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.where

#### Defined in

node_modules/collect.js/index.d.ts:475

▸ **where**<`K`, `V`\>(`key`, `operator`, `value`): `Collection`<`T`\>

The where method filters the collection by a given key / value pair.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` |
| `operator` | `Operator` |
| `value` | `V` |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.where

#### Defined in

node_modules/collect.js/index.d.ts:480

___

### whereIn

▸ **whereIn**<`K`, `V`\>(`key`, `values`): `Collection`<`T`\>

The whereIn method filters the collection by a given key / value contained within the given array.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` |
| `values` | `V`[] |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.whereIn

#### Defined in

node_modules/collect.js/index.d.ts:485

___

### whereNotIn

▸ **whereNotIn**<`K`, `V`\>(`key`, `values`): `Collection`<`T`\>

The whereNotIn method filters the collection by a given key / value not contained within the given array.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| `K` |
| `values` | `V`[] |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.whereNotIn

#### Defined in

node_modules/collect.js/index.d.ts:490

___

### wrap

▸ **wrap**<`T`\>(`value`): `Collection`<`T`\>

The wrap method will wrap the given value in a collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` \| `T`[] \| `Collection`<`T`\> |

#### Returns

`Collection`<`T`\>

#### Inherited from

BaseCollection.wrap

#### Defined in

node_modules/collect.js/index.d.ts:495

___

### zip

▸ **zip**<`T`\>(`array`): `Collection`<[`T`, `T`]\>

The zip method merges together the values of the given array with the values
of the original collection at the corresponding index.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

#### Returns

`Collection`<[`T`, `T`]\>

#### Inherited from

BaseCollection.zip

#### Defined in

node_modules/collect.js/index.d.ts:501

___

### make

▸ `Static` **make**<`T`\>(`items`): [`Collection`](Collection.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `Object` \| `T`[] |

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Defined in

[packages/core/src/Support/Collection.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Collection.ts#L16)
