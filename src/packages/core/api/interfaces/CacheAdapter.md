[@radic/core](../README.md) / CacheAdapter

# Interface: CacheAdapter

## Hierarchy

- **`CacheAdapter`**

  ↳ [`CacheManager`](../classes/CacheManager.md)

## Implemented by

- [`FileCacheAdapter`](../classes/FileCacheAdapter.md)

## Table of contents

### Methods

- [clear](CacheAdapter.md#clear)
- [del](CacheAdapter.md#del)
- [get](CacheAdapter.md#get)
- [getName](CacheAdapter.md#getname)
- [getType](CacheAdapter.md#gettype)
- [has](CacheAdapter.md#has)
- [keys](CacheAdapter.md#keys)
- [merge](CacheAdapter.md#merge)
- [put](CacheAdapter.md#put)
- [size](CacheAdapter.md#size)

## Methods

### clear

▸ **clear**(): [`CacheAdapter`](CacheAdapter.md)

#### Returns

[`CacheAdapter`](CacheAdapter.md)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:16](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L16)

___

### del

▸ **del**(`key`): [`CacheAdapter`](CacheAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`CacheAdapter`](CacheAdapter.md)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:14](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L14)

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

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:8](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L8)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:2](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L2)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:4](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L4)

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

[packages/core/src/Cache/CacheAdapter.ts:10](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L10)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:20](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L20)

___

### merge

▸ **merge**(`value`): [`CacheAdapter`](CacheAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`CacheAdapter`](CacheAdapter.md)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:12](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L12)

___

### put

▸ **put**(`key`, `value`): [`CacheAdapter`](CacheAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`CacheAdapter`](CacheAdapter.md)

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:6](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L6)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:18](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/CacheAdapter.ts#L18)
