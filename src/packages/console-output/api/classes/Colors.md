[@radic/console-output](../README.md) / Colors

# Class: Colors

## Hierarchy

- [`MacroProxy`](../interfaces/MacroProxy.md)<[`Colors`](Colors.md), [`ColorMacroCb`](../README.md#colormacrocb), [`ColorStartEnd`](../README.md#colorstartend)\>

  ↳ **`Colors`**

## Table of contents

### Constructors

- [constructor](Colors.md#constructor)

### Properties

- [styles](Colors.md#styles)
- [trucolorOptions](Colors.md#trucoloroptions)

### Accessors

- [convert](Colors.md#convert)

### Methods

- [chain](Colors.md#chain)
- [color](Colors.md#color)
- [getChalkish](Colors.md#getchalkish)
- [getColor](Colors.md#getcolor)
- [getColorFromStyle](Colors.md#getcolorfromstyle)
- [getStyledColor](Colors.md#getstyledcolor)
- [getTrucolor](Colors.md#gettrucolor)
- [hasMacro](Colors.md#hasmacro)
- [macro](Colors.md#macro)
- [runMacro](Colors.md#runmacro)

## Constructors

### constructor

• **new Colors**(`styles`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `styles` | [`StyleManager`](StyleManager.md)<[`StyleName`](../README.md#stylename)\> |

#### Inherited from

MacroProxy<Colors, ColorMacroCb, ColorStartEnd\>.constructor

#### Defined in

[packages/console-output/src/colors/Colors.ts:38](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L38)

## Properties

### styles

• **styles**: [`StyleManager`](StyleManager.md)<[`StyleName`](../README.md#stylename)\>

___

### trucolorOptions

• **trucolorOptions**: [`Options`](../interfaces/Options.md)

#### Defined in

[packages/console-output/src/colors/Colors.ts:50](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L50)

## Accessors

### convert

• `get` **convert**(): `__module`

#### Returns

`__module`

#### Defined in

[packages/console-output/src/colors/Colors.ts:42](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L42)

## Methods

### chain

▸ **chain**(`out?`): [`Chain`](../README.md#chain)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out?` | [`Output`](Output.md) |

#### Returns

[`Chain`](../README.md#chain)

#### Defined in

[packages/console-output/src/colors/Colors.ts:52](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L52)

___

### color

▸ **color**(`color`, `options?`): [`Trucolor`](../interfaces/Trucolor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `options` | [`Options`](../interfaces/Options.md) |

#### Returns

[`Trucolor`](../interfaces/Trucolor.md)

#### Defined in

[packages/console-output/src/colors/Colors.ts:115](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L115)

___

### getChalkish

▸ **getChalkish**(): [`Chalk`](../README.md#chalk)<[`Palette`](../interfaces/Palette.md)\>

#### Returns

[`Chalk`](../README.md#chalk)<[`Palette`](../interfaces/Palette.md)\>

#### Defined in

[packages/console-output/src/colors/Colors.ts:44](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L44)

___

### getColor

▸ **getColor**(`color`, `isClose?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | `string` | `undefined` |
| `isClose` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/colors/Colors.ts:122](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L122)

___

### getColorFromStyle

▸ **getColorFromStyle**(`style`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`ColorStyle`](../README.md#colorstyle) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `in` | `string` |
| `out` | `string` |

#### Defined in

[packages/console-output/src/colors/Colors.ts:97](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L97)

___

### getStyledColor

▸ **getStyledColor**(`name`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `in` | `string` |
| `out` | `string` |

#### Defined in

[packages/console-output/src/colors/Colors.ts:110](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L110)

___

### getTrucolor

▸ **getTrucolor**(`color`, `options?`): [`Trucolor`](../interfaces/Trucolor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `options` | [`Options`](../interfaces/Options.md) |

#### Returns

[`Trucolor`](../interfaces/Trucolor.md)

#### Defined in

[packages/console-output/src/colors/Colors.ts:92](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L92)

___

### hasMacro

▸ **hasMacro**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[MacroProxy](../interfaces/MacroProxy.md).[hasMacro](../interfaces/MacroProxy.md#hasmacro)

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L9)

___

### macro

▸ **macro**(`name`, `macro`): [`ColorStartEnd`](../README.md#colorstartend)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `macro` | [`MacroCallback`](../README.md#macrocallback)<[`ColorStartEnd`](../README.md#colorstartend)\> |

#### Returns

[`ColorStartEnd`](../README.md#colorstartend)

#### Inherited from

[MacroProxy](../interfaces/MacroProxy.md).[macro](../interfaces/MacroProxy.md#macro)

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L7)

___

### runMacro

▸ **runMacro**(`name`, ...`args`): [`ColorStartEnd`](../README.md#colorstartend)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...args` | `any`[] |

#### Returns

[`ColorStartEnd`](../README.md#colorstartend)

#### Inherited from

[MacroProxy](../interfaces/MacroProxy.md).[runMacro](../interfaces/MacroProxy.md#runmacro)

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L11)
