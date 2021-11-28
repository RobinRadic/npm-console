[@radic/core](../README.md) / SystemServiceProvider

# Class: SystemServiceProvider

## Hierarchy

- `ServiceProvider`

  ↳ **`SystemServiceProvider`**

## Table of contents

### Constructors

- [constructor](SystemServiceProvider.md#constructor)

### Properties

- [app](SystemServiceProvider.md#app)
- [deferred](SystemServiceProvider.md#deferred)
- [providers](SystemServiceProvider.md#providers)

### Methods

- [boot](SystemServiceProvider.md#boot)
- [bootProcesses](SystemServiceProvider.md#bootprocesses)
- [bootServices](SystemServiceProvider.md#bootservices)
- [config](SystemServiceProvider.md#config)
- [load](SystemServiceProvider.md#load)
- [register](SystemServiceProvider.md#register)
- [registerPATH](SystemServiceProvider.md#registerpath)
- [registerProcesses](SystemServiceProvider.md#registerprocesses)
- [registerServices](SystemServiceProvider.md#registerservices)

## Constructors

### constructor

• **new SystemServiceProvider**(`app`)

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

• **providers**: `any`[] = `[]`

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:33](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L33)

## Methods

### boot

▸ **boot**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:71](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L71)

___

### bootProcesses

▸ **bootProcesses**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:75](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L75)

___

### bootServices

▸ **bootServices**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:84](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L84)

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

### load

▸ **load**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:36](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L36)

___

### register

▸ **register**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:53](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L53)

___

### registerPATH

▸ **registerPATH**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:59](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L59)

___

### registerProcesses

▸ **registerProcesses**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:63](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L63)

___

### registerServices

▸ **registerServices**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:67](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L67)
