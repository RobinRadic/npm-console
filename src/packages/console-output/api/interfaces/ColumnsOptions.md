[@radic/console-output](../README.md) / ColumnsOptions

# Interface: ColumnsOptions

## Table of contents

### Properties

- [align](ColumnsOptions.md#align)
- [columnSplitter](ColumnsOptions.md#columnsplitter)
- [columns](ColumnsOptions.md#columns)
- [config](ColumnsOptions.md#config)
- [maxWidth](ColumnsOptions.md#maxwidth)
- [minWidth](ColumnsOptions.md#minwidth)
- [paddingChr](ColumnsOptions.md#paddingchr)
- [preserveNewLines](ColumnsOptions.md#preservenewlines)
- [showHeaders](ColumnsOptions.md#showheaders)
- [truncate](ColumnsOptions.md#truncate)
- [truncateMarker](ColumnsOptions.md#truncatemarker)
- [widths](ColumnsOptions.md#widths)

### Methods

- [dataTransform](ColumnsOptions.md#datatransform)

## Properties

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"``

#### Defined in

[packages/console-output/src/interfaces.ts:65](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L65)

___

### columnSplitter

• `Optional` **columnSplitter**: `string`

#### Defined in

[packages/console-output/src/interfaces.ts:67](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L67)

___

### columns

• `Optional` **columns**: `string`[]

#### Defined in

[packages/console-output/src/interfaces.ts:62](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L62)

___

### config

• `Optional` **config**: `Object`

#### Index signature

▪ [name: `string`]: [`ColumnsOptions`](ColumnsOptions.md)

#### Defined in

[packages/console-output/src/interfaces.ts:74](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L74)

___

### maxWidth

• `Optional` **maxWidth**: `number`

#### Defined in

[packages/console-output/src/interfaces.ts:64](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L64)

___

### minWidth

• `Optional` **minWidth**: `number`

#### Defined in

[packages/console-output/src/interfaces.ts:63](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L63)

___

### paddingChr

• `Optional` **paddingChr**: `string`

#### Defined in

[packages/console-output/src/interfaces.ts:66](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L66)

___

### preserveNewLines

• `Optional` **preserveNewLines**: `boolean`

#### Defined in

[packages/console-output/src/interfaces.ts:68](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L68)

___

### showHeaders

• `Optional` **showHeaders**: `boolean`

#### Defined in

[packages/console-output/src/interfaces.ts:69](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L69)

___

### truncate

• `Optional` **truncate**: `boolean`

#### Defined in

[packages/console-output/src/interfaces.ts:71](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L71)

___

### truncateMarker

• `Optional` **truncateMarker**: `string`

#### Defined in

[packages/console-output/src/interfaces.ts:72](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L72)

___

### widths

• `Optional` **widths**: `Object`

#### Index signature

▪ [name: `string`]: [`ColumnsOptions`](ColumnsOptions.md)

#### Defined in

[packages/console-output/src/interfaces.ts:73](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L73)

## Methods

### dataTransform

▸ `Optional` **dataTransform**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/interfaces.ts:70](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L70)
