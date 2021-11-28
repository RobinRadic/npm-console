[@radic/console-output](../README.md) / MacroProxy

# Interface: MacroProxy<T, CB, R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `CB` | [`MacroCallback`](../README.md#macrocallback) |
| `R` | `any` \| `void` |

## Hierarchy

- **`MacroProxy`**

  ↳ [`Colors`](../classes/Colors.md)

  ↳ [`Ui`](../classes/Ui.md)

  ↳ [`Output`](../classes/Output.md)

## Table of contents

### Methods

- [hasMacro](MacroProxy.md#hasmacro)
- [macro](MacroProxy.md#macro)
- [runMacro](MacroProxy.md#runmacro)

## Methods

### hasMacro

▸ **hasMacro**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L9)

___

### macro

▸ **macro**(`name`, `macro`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `macro` | [`MacroCallback`](../README.md#macrocallback)<`R`\> |

#### Returns

`R`

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L7)

___

### runMacro

▸ **runMacro**(`name`, ...`args`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...args` | `any`[] |

#### Returns

`R`

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L11)
