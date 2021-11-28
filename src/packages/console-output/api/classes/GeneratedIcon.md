[@radic/console-output](../README.md) / GeneratedIcon

# Class: GeneratedIcon

## Implements

- `OutputInfo`

## Table of contents

### Constructors

- [constructor](GeneratedIcon.md#constructor)

### Properties

- [channels](GeneratedIcon.md#channels)
- [cropOffsetLeft](GeneratedIcon.md#cropoffsetleft)
- [cropOffsetTop](GeneratedIcon.md#cropoffsettop)
- [format](GeneratedIcon.md#format)
- [height](GeneratedIcon.md#height)
- [image](GeneratedIcon.md#image)
- [info](GeneratedIcon.md#info)
- [path](GeneratedIcon.md#path)
- [premultiplied](GeneratedIcon.md#premultiplied)
- [size](GeneratedIcon.md#size)
- [trimOffsetLeft](GeneratedIcon.md#trimoffsetleft)
- [trimOffsetTop](GeneratedIcon.md#trimoffsettop)
- [width](GeneratedIcon.md#width)

### Methods

- [copyTo](GeneratedIcon.md#copyto)
- [delete](GeneratedIcon.md#delete)
- [moveTo](GeneratedIcon.md#moveto)

## Constructors

### constructor

• **new GeneratedIcon**(`path`, `image`, `info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `image` | `Sharp` |
| `info` | `OutputInfo` |

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:148](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L148)

## Properties

### channels

• **channels**: ``1`` \| ``2`` \| ``3`` \| ``4``

#### Implementation of

OutputInfo.channels

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:136](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L136)

___

### cropOffsetLeft

• **cropOffsetLeft**: `number`

#### Implementation of

OutputInfo.cropOffsetLeft

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:137](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L137)

___

### cropOffsetTop

• **cropOffsetTop**: `number`

#### Implementation of

OutputInfo.cropOffsetTop

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:138](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L138)

___

### format

• **format**: `string`

#### Implementation of

OutputInfo.format

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:139](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L139)

___

### height

• **height**: `number`

#### Implementation of

OutputInfo.height

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:140](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L140)

___

### image

• **image**: `Sharp`

___

### info

• `Protected` **info**: `OutputInfo`

___

### path

• **path**: `string`

___

### premultiplied

• **premultiplied**: `boolean`

#### Implementation of

OutputInfo.premultiplied

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:141](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L141)

___

### size

• **size**: `number`

#### Implementation of

OutputInfo.size

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:142](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L142)

___

### trimOffsetLeft

• **trimOffsetLeft**: `number`

#### Implementation of

OutputInfo.trimOffsetLeft

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:143](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L143)

___

### trimOffsetTop

• **trimOffsetTop**: `number`

#### Implementation of

OutputInfo.trimOffsetTop

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:144](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L144)

___

### width

• **width**: `number`

#### Implementation of

OutputInfo.width

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:145](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L145)

## Methods

### copyTo

▸ **copyTo**(`filePath`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`any`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:162](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L162)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:152](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L152)

___

### moveTo

▸ **moveTo**(`filePath`): [`GeneratedIcon`](GeneratedIcon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

[`GeneratedIcon`](GeneratedIcon.md)

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:156](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L156)
