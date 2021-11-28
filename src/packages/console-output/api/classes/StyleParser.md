[@radic/console-output](../README.md) / StyleParser

# Class: StyleParser

## Implements

- [`IParser`](../interfaces/IParser.md)

## Table of contents

### Constructors

- [constructor](StyleParser.md#constructor)

### Properties

- [bstack](StyleParser.md#bstack)
- [fstack](StyleParser.md#fstack)
- [output](StyleParser.md#output)

### Accessors

- [colors](StyleParser.md#colors)

### Methods

- [clean](StyleParser.md#clean)
- [getTagsExp](StyleParser.md#gettagsexp)
- [getTextTags](StyleParser.md#gettexttags)
- [parse](StyleParser.md#parse)
- [parseColor](StyleParser.md#parsecolor)
- [parseTag](StyleParser.md#parsetag)

## Constructors

### constructor

• **new StyleParser**(`output`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Output`](Output.md) |

#### Defined in

[packages/console-output/src/colors/StyleParser.ts:15](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L15)

## Properties

### bstack

• `Protected` **bstack**: `any`[] = `[]`

#### Defined in

[packages/console-output/src/colors/StyleParser.ts:57](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L57)

___

### fstack

• `Protected` **fstack**: `any`[] = `[]`

#### Defined in

[packages/console-output/src/colors/StyleParser.ts:56](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L56)

___

### output

• `Protected` **output**: [`Output`](Output.md)

## Accessors

### colors

• `get` **colors**(): [`Colors`](Colors.md)

#### Returns

[`Colors`](Colors.md)

#### Defined in

[packages/console-output/src/colors/StyleParser.ts:13](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L13)

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

[packages/console-output/src/colors/StyleParser.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L30)

___

### getTagsExp

▸ `Protected` **getTagsExp**(): `RegExp`

#### Returns

`RegExp`

#### Defined in

[packages/console-output/src/colors/StyleParser.ts:35](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L35)

___

### getTextTags

▸ `Protected` **getTextTags**(`text`, `tagExp`): `string`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `tagExp` | `RegExp` |

#### Returns

`string`[][]

#### Defined in

[packages/console-output/src/colors/StyleParser.ts:39](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L39)

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

[packages/console-output/src/colors/StyleParser.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L21)

___

### parseColor

▸ `Protected` **parseColor**(`color`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/colors/StyleParser.ts:59](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L59)

___

### parseTag

▸ `Protected` **parseTag**(`tag`): [`ColorsParserParsedTag`](../interfaces/ColorsParserParsedTag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string`[] |

#### Returns

[`ColorsParserParsedTag`](../interfaces/ColorsParserParsedTag.md)

#### Defined in

[packages/console-output/src/colors/StyleParser.ts:45](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleParser.ts#L45)
