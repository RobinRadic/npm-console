[@radic/core](../README.md) / FileCacheAdapter

# Class: FileCacheAdapter

## Implements

- [`CacheAdapter`](../interfaces/CacheAdapter.md)

## Table of contents

### Constructors

- [constructor](FileCacheAdapter.md#constructor)

### Properties

- [options](FileCacheAdapter.md#options)
- [storage](FileCacheAdapter.md#storage)

### Accessors

- [fileName](FileCacheAdapter.md#filename)
- [name](FileCacheAdapter.md#name)

### Methods

- [clear](FileCacheAdapter.md#clear)
- [del](FileCacheAdapter.md#del)
- [get](FileCacheAdapter.md#get)
- [getData](FileCacheAdapter.md#getdata)
- [getName](FileCacheAdapter.md#getname)
- [getType](FileCacheAdapter.md#gettype)
- [has](FileCacheAdapter.md#has)
- [keys](FileCacheAdapter.md#keys)
- [merge](FileCacheAdapter.md#merge)
- [put](FileCacheAdapter.md#put)
- [setData](FileCacheAdapter.md#setdata)
- [size](FileCacheAdapter.md#size)

## Constructors

### constructor

• **new FileCacheAdapter**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FileCacheAdapterOptions`](../interfaces/FileCacheAdapterOptions.md) |

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:17](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L17)

## Properties

### options

• `Protected` **options**: [`FileCacheAdapterOptions`](../interfaces/FileCacheAdapterOptions.md)

___

### storage

• **storage**: [`DirectoryStorage`](DirectoryStorage.md)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:13](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L13)

## Accessors

### fileName

• `Protected` `get` **fileName**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:29](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L29)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:15](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L15)

## Methods

### clear

▸ **clear**(): [`FileCacheAdapter`](FileCacheAdapter.md)

#### Returns

[`FileCacheAdapter`](FileCacheAdapter.md)

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[clear](../interfaces/CacheAdapter.md#clear)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:64](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L64)

___

### del

▸ **del**(`key`): [`FileCacheAdapter`](FileCacheAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`FileCacheAdapter`](FileCacheAdapter.md)

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[del](../interfaces/CacheAdapter.md#del)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:58](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L58)

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

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[get](../interfaces/CacheAdapter.md#get)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:56](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L56)

___

### getData

▸ `Protected` **getData**(): `any`

#### Returns

`any`

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:31](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L31)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[getName](../interfaces/CacheAdapter.md#getname)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:40](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L40)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[getType](../interfaces/CacheAdapter.md#gettype)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:38](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L38)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[has](../interfaces/CacheAdapter.md#has)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:52](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L52)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[keys](../interfaces/CacheAdapter.md#keys)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:68](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L68)

___

### merge

▸ **merge**(`value`): [`FileCacheAdapter`](FileCacheAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`FileCacheAdapter`](FileCacheAdapter.md)

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[merge](../interfaces/CacheAdapter.md#merge)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:54](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L54)

___

### put

▸ **put**(`key`, `value`, `dotNotation?`): [`FileCacheAdapter`](FileCacheAdapter.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `any` | `undefined` |
| `dotNotation` | `boolean` | `true` |

#### Returns

[`FileCacheAdapter`](FileCacheAdapter.md)

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[put](../interfaces/CacheAdapter.md#put)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:43](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L43)

___

### setData

▸ `Protected` **setData**(`data`): [`FileCacheAdapter`](FileCacheAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FileCacheAdapter`](FileCacheAdapter.md)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:33](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L33)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[CacheAdapter](../interfaces/CacheAdapter.md).[size](../interfaces/CacheAdapter.md#size)

#### Defined in

[packages/core/src/Cache/FileCacheAdapter.ts:66](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Cache/FileCacheAdapter.ts#L66)
