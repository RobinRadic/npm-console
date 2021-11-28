[@radic/core](../README.md) / CacheManager

# Class: CacheManager

## Hierarchy

- [`CacheAdapter`](../interfaces/CacheAdapter.md)

  ↳ **`CacheManager`**

## Table of contents

### Constructors

- [constructor](CacheManager.md#constructor)

### Properties

- [adapters](CacheManager.md#adapters)
- [main](CacheManager.md#main)

### Methods

- [adapterNames](CacheManager.md#adapternames)
- [allAdapters](CacheManager.md#alladapters)
- [clear](CacheManager.md#clear)
- [clearAdapters](CacheManager.md#clearadapters)
- [del](CacheManager.md#del)
- [get](CacheManager.md#get)
- [getName](CacheManager.md#getname)
- [getType](CacheManager.md#gettype)
- [has](CacheManager.md#has)
- [hasAdapter](CacheManager.md#hasadapter)
- [keys](CacheManager.md#keys)
- [merge](CacheManager.md#merge)
- [put](CacheManager.md#put)
- [register](CacheManager.md#register)
- [size](CacheManager.md#size)
- [use](CacheManager.md#use)

## Constructors

### constructor

• **new CacheManager**()

#### Inherited from

CacheAdapter.constructor

#### Defined in

[packages/core/src/Cache/CacheManager.ts:15](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L15)

## Properties

### adapters

• `Protected` **adapters**: `Record`<`string`, [`CacheAdapter`](../interfaces/CacheAdapter.md)\> = `{}`

#### Defined in

[packages/core/src/Cache/CacheManager.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L12)

___

### main

• `Protected` **main**: `string`

#### Defined in

[packages/core/src/Cache/CacheManager.ts:13](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L13)

## Methods

### adapterNames

▸ **adapterNames**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/core/src/Cache/CacheManager.ts:50](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L50)

___

### allAdapters

▸ **allAdapters**(): [`CacheAdapter`](../interfaces/CacheAdapter.md)[]

#### Returns

[`CacheAdapter`](../interfaces/CacheAdapter.md)[]

#### Defined in

[packages/core/src/Cache/CacheManager.ts:52](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L52)

___

### clear

▸ **clear**(): [`CacheManager`](CacheManager.md)

#### Returns

[`CacheManager`](CacheManager.md)

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[clear](../interfaces/CacheAdapter.md#clear)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L16)

___

### clearAdapters

▸ **clearAdapters**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/Cache/CacheManager.ts:54](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L54)

___

### del

▸ **del**(`key`): [`CacheManager`](CacheManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`CacheManager`](CacheManager.md)

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[del](../interfaces/CacheAdapter.md#del)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L14)

___

### get

▸ **get**<`T`\>(`key`, `defaultValue?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `any` |

#### Returns

`T`

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[get](../interfaces/CacheAdapter.md#get)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:8](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L8)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[getName](../interfaces/CacheAdapter.md#getname)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:2](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L2)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[getType](../interfaces/CacheAdapter.md#gettype)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:4](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L4)

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

[CacheAdapter](../interfaces/CacheAdapter.md).[has](../interfaces/CacheAdapter.md#has)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:10](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L10)

___

### hasAdapter

▸ **hasAdapter**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Cache/CacheManager.ts:48](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L48)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[keys](../interfaces/CacheAdapter.md#keys)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:20](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L20)

___

### merge

▸ **merge**(`value`): [`CacheManager`](CacheManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`CacheManager`](CacheManager.md)

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[merge](../interfaces/CacheAdapter.md#merge)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L12)

___

### put

▸ **put**(`key`, `value`): [`CacheManager`](CacheManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`CacheManager`](CacheManager.md)

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[put](../interfaces/CacheAdapter.md#put)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:6](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L6)

___

### register

▸ **register**(`adapter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | [`CacheAdapter`](../interfaces/CacheAdapter.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/Cache/CacheManager.ts:36](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L36)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Inherited from

[CacheAdapter](../interfaces/CacheAdapter.md).[size](../interfaces/CacheAdapter.md#size)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L18)

___

### use

▸ **use**<`T`\>(`name`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CacheAdapter`](../interfaces/CacheAdapter.md)<`T`\> = [`CacheAdapter`](../interfaces/CacheAdapter.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`T`

#### Defined in

[packages/core/src/Cache/CacheManager.ts:43](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheManager.ts#L43)
