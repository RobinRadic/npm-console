[@radic/shared](../README.md) / [Exports](../modules.md) / ServiceProvider

# Class: ServiceProvider

## Implements

- [`IServiceProvider`](../interfaces/IServiceProvider.md)

## Table of contents

### Constructors

- [constructor](ServiceProvider.md#constructor)

### Properties

- [app](ServiceProvider.md#app)
- [deferred](ServiceProvider.md#deferred)

### Methods

- [config](ServiceProvider.md#config)

## Constructors

### constructor

• **new ServiceProvider**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Application` |

#### Defined in

[ServiceProvider.ts:11](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L11)

## Properties

### app

• **app**: `Application`

#### Implementation of

[IServiceProvider](../interfaces/IServiceProvider.md).[app](../interfaces/IServiceProvider.md#app)

___

### deferred

• **deferred**: `boolean` = `false`

#### Implementation of

[IServiceProvider](../interfaces/IServiceProvider.md).[deferred](../interfaces/IServiceProvider.md#deferred)

#### Defined in

[ServiceProvider.ts:6](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L6)

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

#### Implementation of

[IServiceProvider](../interfaces/IServiceProvider.md).[config](../interfaces/IServiceProvider.md#config)

#### Defined in

[ServiceProvider.ts:7](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L7)
