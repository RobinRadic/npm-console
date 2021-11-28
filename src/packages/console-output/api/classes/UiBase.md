[@radic/console-output](../README.md) / UiBase

# Class: UiBase

## Hierarchy

- **`UiBase`**

  ↳ [`Erase`](Erase.md)

  ↳ [`Move`](Move.md)

  ↳ [`Text`](Text.md)

## Table of contents

### Constructors

- [constructor](UiBase.md#constructor)

### Properties

- [ui](UiBase.md#ui)

### Accessors

- [erase](UiBase.md#erase)
- [move](UiBase.md#move)
- [stdout](UiBase.md#stdout)
- [text](UiBase.md#text)

## Constructors

### constructor

• **new UiBase**(`ui`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`Ui`](Ui.md) |

#### Defined in

[packages/console-output/src/ui/UiBase.ts:8](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L8)

## Properties

### ui

• `Protected` **ui**: [`Ui`](Ui.md)

#### Defined in

[packages/console-output/src/ui/UiBase.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L7)

## Accessors

### erase

• `Protected` `get` **erase**(): [`Erase`](Erase.md)

#### Returns

[`Erase`](Erase.md)

#### Defined in

[packages/console-output/src/ui/UiBase.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L16)

___

### move

• `Protected` `get` **move**(): [`Move`](Move.md)

#### Returns

[`Move`](Move.md)

#### Defined in

[packages/console-output/src/ui/UiBase.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L14)

___

### stdout

• `Protected` `get` **stdout**(): `WritableStream`

#### Returns

`WritableStream`

#### Defined in

[packages/console-output/src/ui/UiBase.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L12)

___

### text

• `Protected` `get` **text**(): [`Text`](Text.md)

#### Returns

[`Text`](Text.md)

#### Defined in

[packages/console-output/src/ui/UiBase.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L18)
