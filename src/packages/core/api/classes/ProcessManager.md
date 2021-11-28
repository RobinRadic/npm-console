[@radic/core](../README.md) / ProcessManager

# Class: ProcessManager

## Hierarchy

- [`Manager`](Manager.md)<[`Process`](Process.md)\>

  ↳ **`ProcessManager`**

## Table of contents

### Constructors

- [constructor](ProcessManager.md#constructor)

### Properties

- [info](ProcessManager.md#info)
- [items](ProcessManager.md#items)
- [processes](ProcessManager.md#processes)

### Methods

- [all](ProcessManager.md#all)
- [get](ProcessManager.md#get)
- [has](ProcessManager.md#has)
- [keys](ProcessManager.md#keys)
- [loadData](ProcessManager.md#loaddata)
- [names](ProcessManager.md#names)
- [register](ProcessManager.md#register)
- [set](ProcessManager.md#set)
- [toArray](ProcessManager.md#toarray)
- [toCollection](ProcessManager.md#tocollection)
- [values](ProcessManager.md#values)

## Constructors

### constructor

• **new ProcessManager**()

#### Inherited from

[Manager](Manager.md).[constructor](Manager.md#constructor)

## Properties

### info

• **info**: [`ProcessManagerData`](../interfaces/ProcessManagerData.md)

#### Defined in

[packages/core/src/System/ProcessManager.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/ProcessManager.ts#L12)

___

### items

• `Protected` **items**: [`Collection`](Collection.md)<[`Process`](Process.md)\>

#### Inherited from

[Manager](Manager.md).[items](Manager.md#items)

#### Defined in

[packages/core/src/Support/Manager.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L7)

___

### processes

• **processes**: `Collection`<`ProcessesProcessData`\>

#### Defined in

[packages/core/src/System/ProcessManager.ts:13](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/ProcessManager.ts#L13)

## Methods

### all

▸ **all**<`F`\>(): `F`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | [`Process`](Process.md) |

#### Returns

`F`[]

#### Inherited from

[Manager](Manager.md).[all](Manager.md#all)

#### Defined in

[packages/core/src/Support/Manager.ts:24](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L24)

___

### get

▸ **get**<`F`\>(`key`): `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | [`Process`](Process.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`F`

#### Inherited from

[Manager](Manager.md).[get](Manager.md#get)

#### Defined in

[packages/core/src/Support/Manager.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L16)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

[Manager](Manager.md).[has](Manager.md#has)

#### Defined in

[packages/core/src/Support/Manager.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L14)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Manager](Manager.md).[keys](Manager.md#keys)

#### Defined in

[packages/core/src/Support/Manager.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L18)

___

### loadData

▸ **loadData**(): `Promise`<[`ProcessManager`](ProcessManager.md)\>

#### Returns

`Promise`<[`ProcessManager`](ProcessManager.md)\>

#### Defined in

[packages/core/src/System/ProcessManager.ts:15](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/ProcessManager.ts#L15)

___

### names

▸ **names**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Manager](Manager.md).[names](Manager.md#names)

#### Defined in

[packages/core/src/Support/Manager.ts:20](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L20)

___

### register

▸ **register**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[packages/core/src/System/ProcessManager.ts:31](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/ProcessManager.ts#L31)

___

### set

▸ **set**(`key`, `item`): [`ProcessManager`](ProcessManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `item` | [`Process`](Process.md) |

#### Returns

[`ProcessManager`](ProcessManager.md)

#### Inherited from

[Manager](Manager.md).[set](Manager.md#set)

#### Defined in

[packages/core/src/Support/Manager.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L9)

___

### toArray

▸ **toArray**(): [`Process`](Process.md)[]

#### Returns

[`Process`](Process.md)[]

#### Inherited from

[Manager](Manager.md).[toArray](Manager.md#toarray)

#### Defined in

[packages/core/src/Support/Manager.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L28)

___

### toCollection

▸ **toCollection**(): [`Collection`](Collection.md)<[`Process`](Process.md)\>

#### Returns

[`Collection`](Collection.md)<[`Process`](Process.md)\>

#### Inherited from

[Manager](Manager.md).[toCollection](Manager.md#tocollection)

#### Defined in

[packages/core/src/Support/Manager.ts:26](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L26)

___

### values

▸ **values**<`F`\>(): `F`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | [`Process`](Process.md) |

#### Returns

`F`[]

#### Inherited from

[Manager](Manager.md).[values](Manager.md#values)

#### Defined in

[packages/core/src/Support/Manager.ts:22](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/Manager.ts#L22)
