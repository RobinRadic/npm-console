[@radic/console-colors](../README.md) / Parser

# Class: Parser

## Table of contents

### Constructors

- [constructor](Parser.md#constructor)

### Properties

- [colors](Parser.md#colors)

### Methods

- [clean](Parser.md#clean)
- [getTagsExp](Parser.md#gettagsexp)
- [getTextTags](Parser.md#gettexttags)
- [parse](Parser.md#parse)
- [parseColor](Parser.md#parsecolor)
- [parseTag](Parser.md#parsetag)

## Constructors

### constructor

• **new Parser**()

## Properties

### colors

• **colors**: [`Colors`](Colors.md)

#### Defined in

[lib/parser.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-colors/src/lib/parser.ts#L11)

## Methods

### clean

▸ **clean**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[lib/parser.ts:22](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-colors/src/lib/parser.ts#L22)

___

### getTagsExp

▸ `Protected` **getTagsExp**(): `RegExp`

#### Returns

`RegExp`

#### Defined in

[lib/parser.ts:27](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-colors/src/lib/parser.ts#L27)

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

[lib/parser.ts:31](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-colors/src/lib/parser.ts#L31)

___

### parse

▸ **parse**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[lib/parser.ts:13](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-colors/src/lib/parser.ts#L13)

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

[lib/parser.ts:48](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-colors/src/lib/parser.ts#L48)

___

### parseTag

▸ `Protected` **parseTag**(`tag`): [`ParserParsedTag`](../interfaces/ParserParsedTag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string`[] |

#### Returns

[`ParserParsedTag`](../interfaces/ParserParsedTag.md)

#### Defined in

[lib/parser.ts:37](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-colors/src/lib/parser.ts#L37)
