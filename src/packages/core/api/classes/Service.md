[@radic/core](../README.md) / Service

# Class: Service

## Implements

- `ServicesData`

## Table of contents

### Constructors

- [constructor](Service.md#constructor)

### Properties

- [cpu](Service.md#cpu)
- [mem](Service.md#mem)
- [name](Service.md#name)
- [pids](Service.md#pids)
- [running](Service.md#running)
- [startmode](Service.md#startmode)

### Methods

- [exec](Service.md#exec)
- [forceReload](Service.md#forcereload)
- [isActive](Service.md#isactive)
- [isInactive](Service.md#isinactive)
- [refresh](Service.md#refresh)
- [reload](Service.md#reload)
- [restart](Service.md#restart)
- [start](Service.md#start)
- [status](Service.md#status)
- [stop](Service.md#stop)

## Constructors

### constructor

• **new Service**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[packages/core/src/System/Service.ts:24](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L24)

## Properties

### cpu

• **cpu**: `number`

#### Implementation of

Systeminformation.ServicesData.cpu

#### Defined in

[packages/core/src/System/Service.ts:18](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L18)

___

### mem

• **mem**: `number`

#### Implementation of

Systeminformation.ServicesData.mem

#### Defined in

[packages/core/src/System/Service.ts:19](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L19)

___

### name

• **name**: `string`

#### Implementation of

Systeminformation.ServicesData.name

___

### pids

• **pids**: `number`[]

#### Implementation of

Systeminformation.ServicesData.pids

#### Defined in

[packages/core/src/System/Service.ts:20](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L20)

___

### running

• **running**: `boolean`

#### Implementation of

Systeminformation.ServicesData.running

#### Defined in

[packages/core/src/System/Service.ts:21](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L21)

___

### startmode

• **startmode**: `string`

#### Implementation of

Systeminformation.ServicesData.startmode

#### Defined in

[packages/core/src/System/Service.ts:22](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L22)

## Methods

### exec

▸ **exec**(`command`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/core/src/System/Service.ts:78](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L78)

___

### forceReload

▸ **forceReload**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/core/src/System/Service.ts:55](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L55)

___

### isActive

▸ **isActive**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/core/src/System/Service.ts:70](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L70)

___

### isInactive

▸ **isInactive**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/core/src/System/Service.ts:74](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L74)

___

### refresh

▸ **refresh**(): `Promise`<[`Service`](Service.md)\>

#### Returns

`Promise`<[`Service`](Service.md)\>

#### Defined in

[packages/core/src/System/Service.ts:26](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L26)

___

### reload

▸ **reload**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/core/src/System/Service.ts:51](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L51)

___

### restart

▸ **restart**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/core/src/System/Service.ts:44](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L44)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/Service.ts:32](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L32)

___

### status

▸ **status**(): `Promise`<[`ServiceStatus`](../enums/ServiceStatus.md)\>

#### Returns

`Promise`<[`ServiceStatus`](../enums/ServiceStatus.md)\>

#### Defined in

[packages/core/src/System/Service.ts:59](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L59)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/System/Service.ts:38](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/System/Service.ts#L38)
