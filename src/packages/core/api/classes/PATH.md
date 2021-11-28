[@radic/core](../README.md) / PATH

# Class: PATH

## Table of contents

### Constructors

- [constructor](PATH.md#constructor)

### Methods

- [match](PATH.md#match)
- [paths](PATH.md#paths)
- [read](PATH.md#read)
- [search](PATH.md#search)

## Constructors

### constructor

• **new PATH**()

## Methods

### match

▸ **match**(`paths`, `args`, `matcher`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paths` | `string`[] |
| `args` | `string` |
| `matcher` | (`output`: `string`) => `boolean` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/core/src/System/PATH.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/PATH.ts#L30)

___

### paths

▸ **paths**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/core/src/System/PATH.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/PATH.ts#L16)

___

### read

▸ **read**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/System/PATH.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/PATH.ts#L12)

___

### search

▸ **search**(`name`, `options?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | [`PathSearchOptions`](../interfaces/PathSearchOptions.md) |

#### Returns

`string`[]

#### Defined in

[packages/core/src/System/PATH.ts:20](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/PATH.ts#L20)
