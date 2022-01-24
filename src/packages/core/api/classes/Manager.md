[@radic/core](../README.md) / Manager

# Class: Manager<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Manager`**

  ↳ [`ProcessManager`](ProcessManager.md)

  ↳ [`ServiceManager`](ServiceManager.md)

## Table of contents

### Constructors

- [constructor](Manager.md#constructor)

### Properties

- [items](Manager.md#items)

### Methods

- [all](Manager.md#all)
- [get](Manager.md#get)
- [has](Manager.md#has)
- [keys](Manager.md#keys)
- [names](Manager.md#names)
- [set](Manager.md#set)
- [toArray](Manager.md#toarray)
- [toCollection](Manager.md#tocollection)
- [values](Manager.md#values)

## Constructors

### constructor

• **new Manager**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Properties

### items

• `Protected` **items**: [`Collection`](Collection.md)<`T`\>

#### Defined in

[packages/core/src/Support/Manager.ts:7](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L7)

## Methods

### all

▸ **all**<`F`\>(): `F`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | `T` |

#### Returns

`F`[]

#### Defined in

[packages/core/src/Support/Manager.ts:24](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L24)

___

### get

▸ **get**<`F`\>(`key`): `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`F`

#### Defined in

[packages/core/src/Support/Manager.ts:16](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L16)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Support/Manager.ts:14](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L14)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/core/src/Support/Manager.ts:18](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L18)

___

### names

▸ **names**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/core/src/Support/Manager.ts:20](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L20)

___

### set

▸ **set**(`key`, `item`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `item` | `T` |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/core/src/Support/Manager.ts:9](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L9)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[packages/core/src/Support/Manager.ts:28](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L28)

___

### toCollection

▸ **toCollection**(): [`Collection`](Collection.md)<`T`\>

#### Returns

[`Collection`](Collection.md)<`T`\>

#### Defined in

[packages/core/src/Support/Manager.ts:26](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L26)

___

### values

▸ **values**<`F`\>(): `F`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | `T` |

#### Returns

`F`[]

#### Defined in

[packages/core/src/Support/Manager.ts:22](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L22)
