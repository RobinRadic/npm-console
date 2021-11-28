[@radic/console-output](../README.md) / FiguresParser

# Class: FiguresParser

## Implements

- [`IParser`](../interfaces/IParser.md)

## Table of contents

### Constructors

- [constructor](FiguresParser.md#constructor)

### Properties

- [output](FiguresParser.md#output)

### Accessors

- [figures](FiguresParser.md#figures)

### Methods

- [clean](FiguresParser.md#clean)
- [getFiguresExp](FiguresParser.md#getfiguresexp)
- [hasFigures](FiguresParser.md#hasfigures)
- [parse](FiguresParser.md#parse)

## Constructors

### constructor

• **new FiguresParser**(`output`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Output`](Output.md) |

#### Defined in

[packages/console-output/src/colors/FiguresParser.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/FiguresParser.ts#L7)

## Properties

### output

• `Protected` **output**: [`Output`](Output.md)

## Accessors

### figures

• `Protected` `get` **figures**(): [`Figures`](../interfaces/Figures.md)

#### Returns

[`Figures`](../interfaces/Figures.md)

#### Defined in

[packages/console-output/src/colors/FiguresParser.ts:6](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/FiguresParser.ts#L6)

## Methods

### clean

▸ **clean**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Implementation of

[IParser](../interfaces/IParser.md).[clean](../interfaces/IParser.md#clean)

#### Defined in

[packages/console-output/src/colors/FiguresParser.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/FiguresParser.ts#L14)

___

### getFiguresExp

▸ **getFiguresExp**(): `RegExp`

#### Returns

`RegExp`

#### Defined in

[packages/console-output/src/colors/FiguresParser.ts:10](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/FiguresParser.ts#L10)

___

### hasFigures

▸ **hasFigures**(`text`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/colors/FiguresParser.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/FiguresParser.ts#L12)

___

### parse

▸ **parse**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Implementation of

[IParser](../interfaces/IParser.md).[parse](../interfaces/IParser.md#parse)

#### Defined in

[packages/console-output/src/colors/FiguresParser.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/FiguresParser.ts#L21)
