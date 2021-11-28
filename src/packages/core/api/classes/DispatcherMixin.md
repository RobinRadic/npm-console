[@radic/core](../README.md) / DispatcherMixin

# Class: DispatcherMixin

## Table of contents

### Constructors

- [constructor](DispatcherMixin.md#constructor)

### Properties

- [events](DispatcherMixin.md#events)

### Methods

- [emit](DispatcherMixin.md#emit)
- [emitAsync](DispatcherMixin.md#emitasync)
- [off](DispatcherMixin.md#off)
- [offAny](DispatcherMixin.md#offany)
- [on](DispatcherMixin.md#on)
- [onAny](DispatcherMixin.md#onany)
- [once](DispatcherMixin.md#once)

## Constructors

### constructor

• **new DispatcherMixin**()

## Properties

### events

• `Protected` **events**: `EventEmitter2`

#### Defined in

[packages/core/src/Dispatcher/DispatcherMixin.ts:6](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/DispatcherMixin.ts#L6)

## Methods

### emit

▸ **emit**(`event`, ...`values`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `...values` | `any`[] |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Dispatcher/DispatcherMixin.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/DispatcherMixin.ts#L11)

___

### emitAsync

▸ **emitAsync**(`event`, ...`values`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `...values` | `any`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[packages/core/src/Dispatcher/DispatcherMixin.ts:13](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/DispatcherMixin.ts#L13)

___

### off

▸ **off**(`event`, `listener`): [`DispatcherMixin`](DispatcherMixin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |

#### Returns

[`DispatcherMixin`](DispatcherMixin.md)

#### Defined in

[packages/core/src/Dispatcher/DispatcherMixin.ts:35](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/DispatcherMixin.ts#L35)

___

### offAny

▸ **offAny**(`listener`): [`DispatcherMixin`](DispatcherMixin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `ListenerFn` |

#### Returns

[`DispatcherMixin`](DispatcherMixin.md)

#### Defined in

[packages/core/src/Dispatcher/DispatcherMixin.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/DispatcherMixin.ts#L30)

___

### on

▸ **on**(`event`, `listener`, `options?`): [`DispatcherMixin`](DispatcherMixin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`DispatcherMixin`](DispatcherMixin.md)

#### Defined in

[packages/core/src/Dispatcher/DispatcherMixin.ts:15](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/DispatcherMixin.ts#L15)

___

### onAny

▸ **onAny**(`listener`): [`DispatcherMixin`](DispatcherMixin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `EventAndListener` |

#### Returns

[`DispatcherMixin`](DispatcherMixin.md)

#### Defined in

[packages/core/src/Dispatcher/DispatcherMixin.ts:25](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/DispatcherMixin.ts#L25)

___

### once

▸ **once**(`event`, `listener`, `options?`): [`DispatcherMixin`](DispatcherMixin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |
| `options?` | ``true`` \| `OnOptions` |

#### Returns

[`DispatcherMixin`](DispatcherMixin.md)

#### Defined in

[packages/core/src/Dispatcher/DispatcherMixin.ts:20](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/DispatcherMixin.ts#L20)
