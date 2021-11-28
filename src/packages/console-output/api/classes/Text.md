[@radic/console-output](../README.md) / Text

# Class: Text

## Hierarchy

- [`UiBase`](UiBase.md)

  ↳ **`Text`**

## Table of contents

### Constructors

- [constructor](Text.md#constructor)

### Properties

- [ui](Text.md#ui)

### Accessors

- [erase](Text.md#erase)
- [move](Text.md#move)
- [stdout](Text.md#stdout)
- [text](Text.md#text)

### Methods

- [columns](Text.md#columns)
- [slice](Text.md#slice)
- [truncate](Text.md#truncate)
- [wrap](Text.md#wrap)

## Constructors

### constructor

• **new Text**(`ui`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`Ui`](Ui.md) |

#### Inherited from

[UiBase](UiBase.md).[constructor](UiBase.md#constructor)

#### Defined in

[packages/console-output/src/ui/UiBase.ts:8](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L8)

## Properties

### ui

• `Protected` **ui**: [`Ui`](Ui.md)

#### Inherited from

[UiBase](UiBase.md).[ui](UiBase.md#ui)

#### Defined in

[packages/console-output/src/ui/UiBase.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L7)

## Accessors

### erase

• `Protected` `get` **erase**(): [`Erase`](Erase.md)

#### Returns

[`Erase`](Erase.md)

#### Inherited from

UiBase.erase

#### Defined in

[packages/console-output/src/ui/UiBase.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L16)

___

### move

• `Protected` `get` **move**(): [`Move`](Move.md)

#### Returns

[`Move`](Move.md)

#### Inherited from

UiBase.move

#### Defined in

[packages/console-output/src/ui/UiBase.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L14)

___

### stdout

• `Protected` `get` **stdout**(): `WritableStream`

#### Returns

`WritableStream`

#### Inherited from

UiBase.stdout

#### Defined in

[packages/console-output/src/ui/UiBase.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L12)

___

### text

• `Protected` `get` **text**(): [`Text`](Text.md)

#### Returns

[`Text`](Text.md)

#### Inherited from

UiBase.text

#### Defined in

[packages/console-output/src/ui/UiBase.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L18)

## Methods

### columns

▸ **columns**(`data`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data` |
| `options` | `Options` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/ui/Text.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Text.ts#L12)

___

### slice

▸ **slice**(`inputu`, `beginSlice`, `endSlice?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputu` | `string` |
| `beginSlice` | `number` |
| `endSlice?` | `number` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/ui/Text.ts:10](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Text.ts#L10)

___

### truncate

▸ **truncate**(`input`, `columns`, `position?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `columns` | `number` |
| `position?` | ``"start"`` \| ``"middle"`` \| ``"end"`` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/ui/Text.ts:6](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Text.ts#L6)

___

### wrap

▸ **wrap**(`input`, `columns`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `columns` | `number` |
| `options?` | `Object` |
| `options.hard?` | `boolean` |
| `options.trim?` | `boolean` |
| `options.wordWrap?` | `boolean` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/ui/Text.ts:8](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Text.ts#L8)
