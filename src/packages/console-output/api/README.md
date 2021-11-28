@radic/console-output

# @radic/console-output

## Table of contents

### Namespaces

- [macros](modules/macros.md)

### Classes

- [Colors](classes/Colors.md)
- [Erase](classes/Erase.md)
- [FiguresParser](classes/FiguresParser.md)
- [GeneratedIcon](classes/GeneratedIcon.md)
- [IconGenerator](classes/IconGenerator.md)
- [IterableManager](classes/IterableManager.md)
- [Move](classes/Move.md)
- [Output](classes/Output.md)
- [OutputUtil](classes/OutputUtil.md)
- [ProgressBar](classes/ProgressBar.md)
- [StyleManager](classes/StyleManager.md)
- [StyleParser](classes/StyleParser.md)
- [Text](classes/Text.md)
- [Ui](classes/Ui.md)
- [UiBase](classes/UiBase.md)

### Interfaces

- [AnsiRgbColors](interfaces/AnsiRgbColors.md)
- [ChalkFunction](interfaces/ChalkFunction.md)
- [ColorsParserParsedTag](interfaces/ColorsParserParsedTag.md)
- [ColumnsOptions](interfaces/ColumnsOptions.md)
- [Erasers](interfaces/Erasers.md)
- [Figures](interfaces/Figures.md)
- [GenerateOptions](interfaces/GenerateOptions.md)
- [IParser](interfaces/IParser.md)
- [IParserConstructor](interfaces/IParserConstructor.md)
- [IconData](interfaces/IconData.md)
- [IconsOptions](interfaces/IconsOptions.md)
- [MacroProxy](interfaces/MacroProxy.md)
- [ManagerMacroProxy](interfaces/ManagerMacroProxy.md)
- [Movers](interfaces/Movers.md)
- [Options](interfaces/Options.md)
- [OutputConfig](interfaces/OutputConfig.md)
- [OutputOptions](interfaces/OutputOptions.md)
- [OutputOptionsTableStyle](interfaces/OutputOptionsTableStyle.md)
- [OutputOptionsTableStyles](interfaces/OutputOptionsTableStyles.md)
- [OutputSpinners](interfaces/OutputSpinners.md)
- [OutputStylesConfig](interfaces/OutputStylesConfig.md)
- [Palette](interfaces/Palette.md)
- [ProgressBarOptions](interfaces/ProgressBarOptions.md)
- [Styles](interfaces/Styles.md)
- [TreeData](interfaces/TreeData.md)
- [TreeOptions](interfaces/TreeOptions.md)
- [Trucolor](interfaces/Trucolor.md)
- [TruncateOptions](interfaces/TruncateOptions.md)
- [WrapOptions](interfaces/WrapOptions.md)

### Type aliases

- [Chain](README.md#chain)
- [Chalk](README.md#chalk)
- [ColorMacroCb](README.md#colormacrocb)
- [ColorStartEnd](README.md#colorstartend)
- [ColorStyle](README.md#colorstyle)
- [ColorStyles](README.md#colorstyles)
- [Figure](README.md#figure)
- [MacroCallback](README.md#macrocallback)
- [ManagerMacroCallback](README.md#managermacrocallback)
- [SliceFunction](README.md#slicefunction)
- [StyleName](README.md#stylename)
- [TruncateFunction](README.md#truncatefunction)
- [TruncatePosition](README.md#truncateposition)
- [WidestFunction](README.md#widestfunction)
- [WrapFunction](README.md#wrapfunction)

### Variables

- [figures](README.md#figures)

### Functions

- [chalkish](README.md#chalkish)
- [fn](README.md#fn)
- [isModuleInstalled](README.md#ismoduleinstalled)
- [macroProxy](README.md#macroproxy)
- [makeDoProxy](README.md#makedoproxy)
- [managerProxy](README.md#managerproxy)
- [objectify](README.md#objectify)
- [palette](README.md#palette)
- [requireModule](README.md#requiremodule)
- [simple](README.md#simple)
- [simplePalette](README.md#simplepalette)
- [trucolor](README.md#trucolor)

## Type aliases

### Chain

Ƭ **Chain**: { [P in keyof Palette]: Chain } & { `get`: (`str`: `string`) => `string` ; `line`: (`str`: `string`) => `void` ; `write`: (`str`: `string`) => `void`  } & { [key: string]: [`Chain`](README.md#chain);  }

#### Defined in

[packages/console-output/src/colors/Colors.ts:27](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L27)

___

### Chalk

Ƭ **Chalk**<`PALETTE`\>: { [P in keyof PALETTE]: Function \| Chalk<PALETTE\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PALETTE` | extends `Object` |

#### Defined in

[packages/console-output/src/colors/globals.d.ts:73](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/globals.d.ts#L73)

___

### ColorMacroCb

Ƭ **ColorMacroCb**: (...`args`: `any`) => [`ColorStartEnd`](README.md#colorstartend)

#### Type declaration

▸ (...`args`): [`ColorStartEnd`](README.md#colorstartend)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

[`ColorStartEnd`](README.md#colorstartend)

#### Defined in

[packages/console-output/src/colors/Colors.ts:23](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L23)

___

### ColorStartEnd

Ƭ **ColorStartEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `in` | `string` |
| `out` | `string` |

#### Defined in

[packages/console-output/src/colors/Colors.ts:22](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/Colors.ts#L22)

___

### ColorStyle

Ƭ **ColorStyle**: `string` \| `string`[]

#### Defined in

[packages/console-output/src/interfaces.ts:192](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L192)

___

### ColorStyles

Ƭ **ColorStyles**: `Record`<`string`, [`ColorStyle`](README.md#colorstyle)\>

#### Defined in

[packages/console-output/src/interfaces.ts:191](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L191)

___

### Figure

Ƭ **Figure**: keyof [`Figures`](interfaces/Figures.md)

#### Defined in

[packages/console-output/src/interfaces.ts:252](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L252)

___

### MacroCallback

Ƭ **MacroCallback**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (...`args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:4](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L4)

___

### ManagerMacroCallback

Ƭ **ManagerMacroCallback**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (...`args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

[packages/console-output/src/utils/managerProxy.ts:4](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/managerProxy.ts#L4)

___

### SliceFunction

Ƭ **SliceFunction**: (`inputu`: `string`, `beginSlice`: `number`, `endSlice?`: `number`) => `string`

#### Type declaration

▸ (`inputu`, `beginSlice`, `endSlice?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `inputu` | `string` |
| `beginSlice` | `number` |
| `endSlice?` | `number` |

##### Returns

`string`

#### Defined in

[packages/console-output/src/interfaces.ts:17](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L17)

___

### StyleName

Ƭ **StyleName**: keyof [`Styles`](interfaces/Styles.md) \| `string`

#### Defined in

[packages/console-output/src/colors/StyleManager.ts:8](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleManager.ts#L8)

___

### TruncateFunction

Ƭ **TruncateFunction**: (`input`: `string`, `columns`: `number`, `options?`: [`TruncateOptions`](interfaces/TruncateOptions.md)) => `string`

#### Type declaration

▸ (`input`, `columns`, `options?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `columns` | `number` |
| `options?` | [`TruncateOptions`](interfaces/TruncateOptions.md) |

##### Returns

`string`

#### Defined in

[packages/console-output/src/interfaces.ts:15](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L15)

___

### TruncatePosition

Ƭ **TruncatePosition**: ``"start"`` \| ``"middle"`` \| ``"end"``

#### Defined in

[packages/console-output/src/interfaces.ts:19](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L19)

___

### WidestFunction

Ƭ **WidestFunction**: (`input`: `string`) => `number`

#### Type declaration

▸ (`input`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

##### Returns

`number`

#### Defined in

[packages/console-output/src/interfaces.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L18)

___

### WrapFunction

Ƭ **WrapFunction**: (`input`: `string`, `columns`: `number`, `options?`: [`WrapOptions`](interfaces/WrapOptions.md)) => `string`

#### Type declaration

▸ (`input`, `columns`, `options?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `columns` | `number` |
| `options?` | [`WrapOptions`](interfaces/WrapOptions.md) |

##### Returns

`string`

#### Defined in

[packages/console-output/src/interfaces.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/interfaces.ts#L16)

## Variables

### figures

• **figures**: [`Figures`](interfaces/Figures.md)

#### Defined in

[packages/console-output/src/figures.ts:130](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/figures.ts#L130)

## Functions

### chalkish

▸ **chalkish**<`PALETTE`\>(`palette?`): [`Chalk`](README.md#chalk)<`PALETTE`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PALETTE` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `palette?` | `PALETTE` |

#### Returns

[`Chalk`](README.md#chalk)<`PALETTE`\>

#### Defined in

[packages/console-output/src/colors/globals.d.ts:82](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/globals.d.ts#L82)

___

### fn

▸ `Const` **fn**(`str`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |

#### Returns

`any`

#### Defined in

[packages/console-output/src/figures.ts:132](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/figures.ts#L132)

___

### isModuleInstalled

▸ `Const` **isModuleInstalled**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/utils/isModuleInstalled.ts:2](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/isModuleInstalled.ts#L2)

___

### macroProxy

▸ **macroProxy**<`T`\>(`obj`): [`MacroProxy`](interfaces/MacroProxy.md)<`T`\> & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

[`MacroProxy`](interfaces/MacroProxy.md)<`T`\> & `T`

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L14)

___

### makeDoProxy

▸ **makeDoProxy**(`target`, `write`, `returnValue`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `write` | `any` |
| `returnValue` | `any` |

#### Returns

`any`

#### Defined in

[packages/console-output/src/utils/makeDoProxy.ts:2](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/makeDoProxy.ts#L2)

___

### managerProxy

▸ **managerProxy**<`T`, `K`, `V`, `M`\>(`obj`, `manager`): [`ManagerMacroProxy`](interfaces/ManagerMacroProxy.md)<`T`\> & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |
| `V` | `V` |
| `M` | extends [`IterableManager`](classes/IterableManager.md)<`K`, `V`, `M`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `manager` | `M` |

#### Returns

[`ManagerMacroProxy`](interfaces/ManagerMacroProxy.md)<`T`\> & `T`

#### Defined in

[packages/console-output/src/utils/managerProxy.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/managerProxy.ts#L14)

___

### objectify

▸ `Const` **objectify**<`T`, `K`\>(`obj`, `__namedParameters`): `T`

**`example`**

params = Object.entries(params).filter(([ key, value ]) => {
    return value.toString().length > 0;
}).reduce(utils.objectify, {});

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `__namedParameters` | [`K`, `T`[`K`]] |

#### Returns

`T`

#### Defined in

[packages/console-output/src/utils/objectify.ts:13](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/objectify.ts#L13)

___

### palette

▸ **palette**(`options?`, `palette?`): [`Palette`](interfaces/Palette.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](interfaces/Options.md) |
| `palette?` | `any` |

#### Returns

[`Palette`](interfaces/Palette.md)

#### Defined in

[packages/console-output/src/colors/globals.d.ts:80](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/globals.d.ts#L80)

___

### requireModule

▸ `Const` **requireModule**(`name`, `context?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `context?` | `string` |

#### Returns

`any`

#### Defined in

[packages/console-output/src/utils/requireModule.ts:3](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/requireModule.ts#L3)

___

### simple

▸ **simple**(`options?`): [`Palette`](interfaces/Palette.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](interfaces/Options.md) |

#### Returns

[`Palette`](interfaces/Palette.md)

#### Defined in

[packages/console-output/src/colors/globals.d.ts:84](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/globals.d.ts#L84)

___

### simplePalette

▸ **simplePalette**(`options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`any`

#### Defined in

[packages/console-output/src/colors/globals.d.ts:86](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/globals.d.ts#L86)

___

### trucolor

▸ **trucolor**(`color?`, `options?`): [`Trucolor`](interfaces/Trucolor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color?` | `string` |
| `options?` | [`Options`](interfaces/Options.md) |

#### Returns

[`Trucolor`](interfaces/Trucolor.md)

#### Defined in

[packages/console-output/src/colors/globals.d.ts:78](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/globals.d.ts#L78)
