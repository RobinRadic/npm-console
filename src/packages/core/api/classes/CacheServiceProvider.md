[@radic/core](../README.md) / CacheServiceProvider

# Class: CacheServiceProvider

## Hierarchy

- `ServiceProvider`

  ↳ **`CacheServiceProvider`**

## Table of contents

### Constructors

- [constructor](CacheServiceProvider.md#constructor)

### Properties

- [app](CacheServiceProvider.md#app)
- [deferred](CacheServiceProvider.md#deferred)

### Methods

- [config](CacheServiceProvider.md#config)
- [load](CacheServiceProvider.md#load)
- [register](CacheServiceProvider.md#register)
- [registerCache](CacheServiceProvider.md#registercache)

## Constructors

### constructor

• **new CacheServiceProvider**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Application` |

#### Inherited from

ServiceProvider.constructor

#### Defined in

packages/shared/lib/ServiceProvider.d.ts:7

## Properties

### app

• **app**: `Application`

#### Inherited from

ServiceProvider.app

#### Defined in

packages/shared/lib/ServiceProvider.d.ts:4

___

### deferred

• **deferred**: `boolean`

#### Inherited from

ServiceProvider.deferred

#### Defined in

packages/shared/lib/ServiceProvider.d.ts:5

## Methods

### config

▸ **config**<`T`, `K`\>(`config`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ConfigPart`<`T`, `K`\> |

#### Returns

`void`

#### Inherited from

ServiceProvider.config

#### Defined in

packages/shared/lib/ServiceProvider.d.ts:6

___

### load

▸ **load**(): `any`

#### Returns

`any`

#### Defined in

[packages/core/src/Cache/CacheServiceProvider.ts:29](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheServiceProvider.ts#L29)

___

### register

▸ **register**(): `any`

#### Returns

`any`

#### Defined in

[packages/core/src/Cache/CacheServiceProvider.ts:41](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheServiceProvider.ts#L41)

___

### registerCache

▸ `Protected` **registerCache**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/Cache/CacheServiceProvider.ts:45](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheServiceProvider.ts#L45)
