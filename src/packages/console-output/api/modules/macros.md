[@radic/console-output](../README.md) / macros

# Namespace: macros

## Table of contents

### Interfaces

- [MacroDefinition](../interfaces/macros.MacroDefinition.md)

### Type aliases

- [BeeperCallback](macros.md#beepercallback)
- [HighlightCallback](macros.md#highlightcallback)
- [NotifyCallback](macros.md#notifycallback)
- [SparklyCallback](macros.md#sparklycallback)
- [SpinnerCallback](macros.md#spinnercallback)

### Variables

- [beep](macros.md#beep)
- [highlight](macros.md#highlight)
- [notify](macros.md#notify)
- [sparkly](macros.md#sparkly)
- [spinner](macros.md#spinner)

## Type aliases

### BeeperCallback

Ƭ **BeeperCallback**: (`val?`: `number` \| `string`, `cb?`: `Function`) => `Promise`<`any`\>

#### Type declaration

▸ (`val?`, `cb?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | `number` \| `string` |
| `cb?` | `Function` |

##### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-output/src/macros.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L28)

___

### HighlightCallback

Ƭ **HighlightCallback**: (`code`: `string`, `options?`: `HighlightOptions`, `ret?`: `boolean`) => `string` \| `void`

#### Type declaration

▸ (`code`, `options?`, `ret?`): `string` \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `options?` | `HighlightOptions` |
| `ret?` | `boolean` |

##### Returns

`string` \| `void`

#### Defined in

[packages/console-output/src/macros.ts:51](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L51)

___

### NotifyCallback

Ƭ **NotifyCallback**: (`options`: `Notification`, `cb?`: `NotificationCallback`) => `NodeNotifier`

#### Type declaration

▸ (`options`, `cb?`): `NodeNotifier`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Notification` |
| `cb?` | `NotificationCallback` |

##### Returns

`NodeNotifier`

#### Defined in

[packages/console-output/src/macros.ts:34](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L34)

___

### SparklyCallback

Ƭ **SparklyCallback**: (`numbers`: (`number` \| ``""``)[], `options?`: `SparklyOptions`, `ret?`: `boolean`) => `string` \| `void`

#### Type declaration

▸ (`numbers`, `options?`, `ret?`): `string` \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `numbers` | (`number` \| ``""``)[] |
| `options?` | `SparklyOptions` |
| `ret?` | `boolean` |

##### Returns

`string` \| `void`

#### Defined in

[packages/console-output/src/macros.ts:41](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L41)

___

### SpinnerCallback

Ƭ **SpinnerCallback**: (`text?`: `string`, `options?`: `OraOptions`) => `Ora`

#### Type declaration

▸ (`text?`, `options?`): `Ora`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text?` | `string` |
| `options?` | `OraOptions` |

##### Returns

`Ora`

#### Defined in

[packages/console-output/src/macros.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L18)

## Variables

### beep

• **beep**: [`MacroDefinition`](../interfaces/macros.MacroDefinition.md)<[`SpinnerCallback`](macros.md#spinnercallback)\>

#### Defined in

[packages/console-output/src/macros.ts:29](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L29)

___

### highlight

• **highlight**: [`MacroDefinition`](../interfaces/macros.MacroDefinition.md)<[`HighlightCallback`](macros.md#highlightcallback)\>

#### Defined in

[packages/console-output/src/macros.ts:52](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L52)

___

### notify

• **notify**: [`MacroDefinition`](../interfaces/macros.MacroDefinition.md)<[`NotifyCallback`](macros.md#notifycallback)\>

#### Defined in

[packages/console-output/src/macros.ts:35](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L35)

___

### sparkly

• **sparkly**: [`MacroDefinition`](../interfaces/macros.MacroDefinition.md)<[`SparklyCallback`](macros.md#sparklycallback)\>

#### Defined in

[packages/console-output/src/macros.ts:42](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L42)

___

### spinner

• **spinner**: [`MacroDefinition`](../interfaces/macros.MacroDefinition.md)<[`SpinnerCallback`](macros.md#spinnercallback)\>

#### Defined in

[packages/console-output/src/macros.ts:19](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/macros.ts#L19)
