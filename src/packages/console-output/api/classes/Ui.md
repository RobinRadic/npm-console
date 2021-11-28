[@radic/console-output](../README.md) / Ui

# Class: Ui

## Hierarchy

- [`MacroProxy`](../interfaces/MacroProxy.md)<[`Ui`](Ui.md)\>

  ↳ **`Ui`**

## Table of contents

### Constructors

- [constructor](Ui.md#constructor)

### Properties

- [erase](Ui.md#erase)
- [move](Ui.md#move)
- [output](Ui.md#output)
- [progress](Ui.md#progress)
- [text](Ui.md#text)

### Accessors

- [Table](Ui.md#table)
- [height](Ui.md#height)
- [width](Ui.md#width)

### Methods

- [addComponent](Ui.md#addcomponent)
- [addMacros](Ui.md#addmacros)
- [hasMacro](Ui.md#hasmacro)
- [macro](Ui.md#macro)
- [runMacro](Ui.md#runmacro)
- [table](Ui.md#table)

## Constructors

### constructor

• **new Ui**(`output`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Output`](Output.md) |

#### Inherited from

MacroProxy<Ui\>.constructor

#### Defined in

[packages/console-output/src/ui/Ui.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L21)

## Properties

### erase

• `Readonly` **erase**: [`Erase`](Erase.md)

#### Defined in

[packages/console-output/src/ui/Ui.ts:27](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L27)

___

### move

• `Readonly` **move**: [`Move`](Move.md)

#### Defined in

[packages/console-output/src/ui/Ui.ts:26](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L26)

___

### output

• `Readonly` **output**: [`Output`](Output.md)

___

### progress

• `Readonly` **progress**: [`ProgressBar`](ProgressBar.md)

#### Defined in

[packages/console-output/src/ui/Ui.ts:25](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L25)

___

### text

• `Readonly` **text**: [`Text`](Text.md)

#### Defined in

[packages/console-output/src/ui/Ui.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L28)

## Accessors

### Table

• `get` **Table**(): `CliTable3`

#### Returns

`CliTable3`

#### Defined in

[packages/console-output/src/ui/Ui.ts:50](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L50)

___

### height

• `get` **height**(): `any`

#### Returns

`any`

#### Defined in

[packages/console-output/src/ui/Ui.ts:46](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L46)

___

### width

• `get` **width**(): `any`

#### Returns

`any`

#### Defined in

[packages/console-output/src/ui/Ui.ts:48](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L48)

## Methods

### addComponent

▸ **addComponent**(`name`, `Component`): [`Ui`](Ui.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `Component` | `Constructor`<[`UiBase`](UiBase.md)\> |

#### Returns

[`Ui`](Ui.md)

#### Defined in

[packages/console-output/src/ui/Ui.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L30)

___

### addMacros

▸ **addMacros**(`macro`): [`Ui`](Ui.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `macro` | [`MacroDefinition`](../interfaces/macros.MacroDefinition.md)<`any`\> \| [`MacroDefinition`](../interfaces/macros.MacroDefinition.md)<`any`\>[] |

#### Returns

[`Ui`](Ui.md)

#### Defined in

[packages/console-output/src/ui/Ui.ts:38](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L38)

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

▸ **macro**(`name`, `macro`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `macro` | [`MacroCallback`](../README.md#macrocallback)<`any`\> |

#### Returns

`any`

#### Inherited from

[MacroProxy](../interfaces/MacroProxy.md).[macro](../interfaces/MacroProxy.md#macro)

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L7)

___

### runMacro

▸ **runMacro**(`name`, ...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...args` | `any`[] |

#### Returns

`any`

#### Inherited from

[MacroProxy](../interfaces/MacroProxy.md).[runMacro](../interfaces/MacroProxy.md#runmacro)

#### Defined in

[packages/console-output/src/utils/macroProxy.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/macroProxy.ts#L11)

___

### table

▸ **table**(`opts?`, `borderStyle?`): `Table`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `opts?` | `TableConstructorOptions` | `undefined` |
| `borderStyle` | ``"default"`` \| ``"borderless"`` | `'default'` |

#### Returns

`Table`

#### Defined in

[packages/console-output/src/ui/Ui.ts:52](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Ui.ts#L52)
