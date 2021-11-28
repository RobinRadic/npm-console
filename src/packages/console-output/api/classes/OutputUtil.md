[@radic/console-output](../README.md) / OutputUtil

# Class: OutputUtil

## Table of contents

### Constructors

- [constructor](OutputUtil.md#constructor)

### Properties

- [output](OutputUtil.md#output)

### Methods

- [slice](OutputUtil.md#slice)
- [truncate](OutputUtil.md#truncate)
- [widest](OutputUtil.md#widest)
- [widestLine](OutputUtil.md#widestline)
- [width](OutputUtil.md#width)
- [wrap](OutputUtil.md#wrap)

## Constructors

### constructor

• **new OutputUtil**(`output`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Output`](Output.md) |

#### Defined in

[packages/console-output/src/OutputUtil.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/OutputUtil.ts#L12)

## Properties

### output

• `Protected` **output**: [`Output`](Output.md)

## Methods

### slice

▸ **slice**(`input`, `beginSlice`, `endSlice?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `beginSlice` | `number` |
| `endSlice?` | `number` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/OutputUtil.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/OutputUtil.ts#L18)

___

### truncate

▸ **truncate**(`input`, `columns`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `columns` | `number` |
| `options?` | [`TruncateOptions`](../interfaces/TruncateOptions.md) |

#### Returns

`string`

#### Defined in

[packages/console-output/src/OutputUtil.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/OutputUtil.ts#L14)

___

### widest

▸ **widest**(`input`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string`[] |

#### Returns

`number`

#### Defined in

[packages/console-output/src/OutputUtil.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/OutputUtil.ts#L21)

___

### widestLine

▸ **widestLine**(`input`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`number`

#### Defined in

[packages/console-output/src/OutputUtil.ts:20](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/OutputUtil.ts#L20)

___

### width

▸ **width**(`input`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`number`

#### Defined in

[packages/console-output/src/OutputUtil.ts:32](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/OutputUtil.ts#L32)

___

### wrap

▸ **wrap**(`input`, `columns`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `columns` | `number` |
| `options?` | [`WrapOptions`](../interfaces/WrapOptions.md) |

#### Returns

`string`

#### Defined in

[packages/console-output/src/OutputUtil.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/OutputUtil.ts#L16)
