[@radic/console-output](../README.md) / GenerateOptions

# Interface: GenerateOptions

## Hierarchy

- `Partial`<`Omit`<`Create`, ``"channels"`` \| ``"background"``\>\>

  ↳ **`GenerateOptions`**

## Table of contents

### Properties

- [background](GenerateOptions.md#background)
- [composite](GenerateOptions.md#composite)
- [composites](GenerateOptions.md#composites)
- [fill](GenerateOptions.md#fill)
- [format](GenerateOptions.md#format)
- [gif](GenerateOptions.md#gif)
- [height](GenerateOptions.md#height)
- [jpeg](GenerateOptions.md#jpeg)
- [png](GenerateOptions.md#png)
- [sharp](GenerateOptions.md#sharp)
- [stroke](GenerateOptions.md#stroke)
- [width](GenerateOptions.md#width)

### Methods

- [modifier](GenerateOptions.md#modifier)

## Properties

### background

• `Optional` **background**: `Color`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:24](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L24)

___

### composite

• `Optional` **composite**: `OverlayOptions`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:29](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L29)

___

### composites

• `Optional` **composites**: `OverlayOptions`[]

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L30)

___

### fill

• `Optional` **fill**: `string`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:23](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L23)

___

### format

• **format**: ``"png"`` \| ``"gif"`` \| ``"jpeg"``

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L21)

___

### gif

• `Optional` **gif**: `PngOptions`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:26](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L26)

___

### height

• `Optional` **height**: `number`

Number of pixels high.

#### Inherited from

Partial.height

#### Defined in

node_modules/@types/sharp/index.d.ts:780

___

### jpeg

• `Optional` **jpeg**: `PngOptions`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:27](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L27)

___

### png

• `Optional` **png**: `PngOptions`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:25](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L25)

___

### sharp

• `Optional` **sharp**: `SharpOptions`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:31](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L31)

___

### stroke

• `Optional` **stroke**: `string`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:22](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L22)

___

### width

• `Optional` **width**: `number`

Number of pixels wide.

#### Inherited from

Partial.width

#### Defined in

node_modules/@types/sharp/index.d.ts:778

## Methods

### modifier

▸ `Optional` **modifier**(`icon`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `Sharp` |

#### Returns

`any`

#### Defined in

[packages/console-output/src/utils/IconGenerator.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IconGenerator.ts#L28)
