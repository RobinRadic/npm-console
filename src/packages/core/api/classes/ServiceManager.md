[@radic/core](../README.md) / ServiceManager

# Class: ServiceManager

## Hierarchy

- [`Manager`](Manager.md)<[`Service`](Service.md)\>

  ↳ **`ServiceManager`**

## Table of contents

### Constructors

- [constructor](ServiceManager.md#constructor)

### Properties

- [items](ServiceManager.md#items)

### Methods

- [all](ServiceManager.md#all)
- [each](ServiceManager.md#each)
- [forceReloadAll](ServiceManager.md#forcereloadall)
- [get](ServiceManager.md#get)
- [has](ServiceManager.md#has)
- [keys](ServiceManager.md#keys)
- [names](ServiceManager.md#names)
- [refreshAll](ServiceManager.md#refreshall)
- [register](ServiceManager.md#register)
- [reloadAll](ServiceManager.md#reloadall)
- [restartAll](ServiceManager.md#restartall)
- [set](ServiceManager.md#set)
- [startAll](ServiceManager.md#startall)
- [stopAll](ServiceManager.md#stopall)
- [toArray](ServiceManager.md#toarray)
- [toCollection](ServiceManager.md#tocollection)
- [values](ServiceManager.md#values)

## Constructors

### constructor

• **new ServiceManager**()

#### Inherited from

[Manager](Manager.md).[constructor](Manager.md#constructor)

## Properties

### items

• `Protected` **items**: [`Collection`](Collection.md)<[`Service`](Service.md)\>

#### Inherited from

[Manager](Manager.md).[items](Manager.md#items)

#### Defined in

[packages/core/src/Support/Manager.ts:7](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L7)

## Methods

### all

▸ **all**<`F`\>(): `F`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | [`Service`](Service.md) |

#### Returns

`F`[]

#### Inherited from

[Manager](Manager.md).[all](Manager.md#all)

#### Defined in

[packages/core/src/Support/Manager.ts:24](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L24)

___

### each

▸ **each**(`cb`): `Promise`<[`ServiceManager`](ServiceManager.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`service`: [`Service`](Service.md)) => `any` |

#### Returns

`Promise`<[`ServiceManager`](ServiceManager.md)\>

#### Defined in

[packages/core/src/System/ServiceManager.ts:15](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/ServiceManager.ts#L15)

___

### forceReloadAll

▸ **forceReloadAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/ServiceManager.ts:45](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/ServiceManager.ts#L45)

___

### get

▸ **get**<`F`\>(`key`): `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | [`Service`](Service.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`F`

#### Inherited from

[Manager](Manager.md).[get](Manager.md#get)

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

#### Inherited from

[Manager](Manager.md).[has](Manager.md#has)

#### Defined in

[packages/core/src/Support/Manager.ts:14](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L14)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Manager](Manager.md).[keys](Manager.md#keys)

#### Defined in

[packages/core/src/Support/Manager.ts:18](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L18)

___

### names

▸ **names**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Manager](Manager.md).[names](Manager.md#names)

#### Defined in

[packages/core/src/Support/Manager.ts:20](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L20)

___

### refreshAll

▸ **refreshAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/ServiceManager.ts:25](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/ServiceManager.ts#L25)

___

### register

▸ **register**(`name`): [`ServiceManager`](ServiceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ServiceManager`](ServiceManager.md)

#### Defined in

[packages/core/src/System/ServiceManager.ts:8](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/ServiceManager.ts#L8)

___

### reloadAll

▸ **reloadAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/ServiceManager.ts:41](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/ServiceManager.ts#L41)

___

### restartAll

▸ **restartAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/ServiceManager.ts:37](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/ServiceManager.ts#L37)

___

### set

▸ **set**(`key`, `item`): [`ServiceManager`](ServiceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `item` | [`Service`](Service.md) |

#### Returns

[`ServiceManager`](ServiceManager.md)

#### Inherited from

[Manager](Manager.md).[set](Manager.md#set)

#### Defined in

[packages/core/src/Support/Manager.ts:9](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L9)

___

### startAll

▸ **startAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/ServiceManager.ts:29](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/ServiceManager.ts#L29)

___

### stopAll

▸ **stopAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/ServiceManager.ts:33](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/ServiceManager.ts#L33)

___

### toArray

▸ **toArray**(): [`Service`](Service.md)[]

#### Returns

[`Service`](Service.md)[]

#### Inherited from

[Manager](Manager.md).[toArray](Manager.md#toarray)

#### Defined in

[packages/core/src/Support/Manager.ts:28](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L28)

___

### toCollection

▸ **toCollection**(): [`Collection`](Collection.md)<[`Service`](Service.md)\>

#### Returns

[`Collection`](Collection.md)<[`Service`](Service.md)\>

#### Inherited from

[Manager](Manager.md).[toCollection](Manager.md#tocollection)

#### Defined in

[packages/core/src/Support/Manager.ts:26](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L26)

___

### values

▸ **values**<`F`\>(): `F`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | [`Service`](Service.md) |

#### Returns

`F`[]

#### Inherited from

[Manager](Manager.md).[values](Manager.md#values)

#### Defined in

[packages/core/src/Support/Manager.ts:22](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Support/Manager.ts#L22)
