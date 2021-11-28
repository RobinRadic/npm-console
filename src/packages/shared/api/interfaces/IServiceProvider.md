[@radic/shared](../README.md) / [Exports](../modules.md) / IServiceProvider

# Interface: IServiceProvider

## Implemented by

- [`ServiceProvider`](../classes/ServiceProvider.md)

## Table of contents

### Properties

- [app](IServiceProvider.md#app)
- [bindings](IServiceProvider.md#bindings)
- [deferred](IServiceProvider.md#deferred)
- [providers](IServiceProvider.md#providers)
- [provides](IServiceProvider.md#provides)
- [singletons](IServiceProvider.md#singletons)

### Methods

- [boot](IServiceProvider.md#boot)
- [config](IServiceProvider.md#config)
- [load](IServiceProvider.md#load)
- [register](IServiceProvider.md#register)

## Properties

### app

• **app**: `Application`

#### Defined in

[ServiceProvider.ts:21](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L21)

___

### bindings

• `Optional` **bindings**: `Record`<`string`, [`Constructor`](../modules.md#constructor)<`any`\>\>

#### Defined in

[ServiceProvider.ts:24](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L24)

___

### deferred

• **deferred**: `boolean`

#### Defined in

[ServiceProvider.ts:26](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L26)

___

### providers

• `Optional` **providers**: [`IServiceProviderClass`](../modules.md#iserviceproviderclass)[]

#### Defined in

[ServiceProvider.ts:22](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L22)

___

### provides

• `Optional` **provides**: `string`[] \| () => `string`[]

#### Defined in

[ServiceProvider.ts:25](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L25)

___

### singletons

• `Optional` **singletons**: `Record`<`string`, [`Constructor`](../modules.md#constructor)<`any`\>\>

#### Defined in

[ServiceProvider.ts:23](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L23)

## Methods

### boot

▸ `Optional` **boot**(): `any`

#### Returns

`any`

#### Defined in

[ServiceProvider.ts:34](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L34)

___

### config

▸ **config**<`T`, `K`\>(`config`): `any`

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

`any`

#### Defined in

[ServiceProvider.ts:28](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L28)

___

### load

▸ `Optional` **load**(): `any`

#### Returns

`any`

#### Defined in

[ServiceProvider.ts:30](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L30)

___

### register

▸ `Optional` **register**(): `any`

#### Returns

`any`

#### Defined in

[ServiceProvider.ts:32](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/ServiceProvider.ts#L32)
