[@radic/core](../README.md) / CoreServiceProvider

# Class: CoreServiceProvider

## Hierarchy

- `ServiceProvider`

  ↳ **`CoreServiceProvider`**

## Table of contents

### Constructors

- [constructor](CoreServiceProvider.md#constructor)

### Properties

- [app](CoreServiceProvider.md#app)
- [deferred](CoreServiceProvider.md#deferred)
- [providers](CoreServiceProvider.md#providers)

### Methods

- [boot](CoreServiceProvider.md#boot)
- [config](CoreServiceProvider.md#config)
- [register](CoreServiceProvider.md#register)

## Constructors

### constructor

• **new CoreServiceProvider**(`app`)

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

___

### providers

• **providers**: (typeof [`CacheServiceProvider`](CacheServiceProvider.md) \| typeof [`SystemServiceProvider`](SystemServiceProvider.md))[]

#### Defined in

[packages/core/src/CoreServiceProvider.ts:6](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/CoreServiceProvider.ts#L6)

## Methods

### boot

▸ **boot**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/CoreServiceProvider.ts:16](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/CoreServiceProvider.ts#L16)

___

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

### register

▸ **register**(): `any`

#### Returns

`any`

#### Defined in

[packages/core/src/CoreServiceProvider.ts:12](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/CoreServiceProvider.ts#L12)
