[@radic/console-output](../README.md) / Erase

# Class: Erase

## Hierarchy

- [`UiBase`](UiBase.md)

  ↳ **`Erase`**

## Table of contents

### Constructors

- [constructor](Erase.md#constructor)

### Properties

- [\_proxy](Erase.md#_proxy)
- [ui](Erase.md#ui)

### Accessors

- [erase](Erase.md#erase)
- [get](Erase.md#get)
- [move](Erase.md#move)
- [stdout](Erase.md#stdout)
- [text](Erase.md#text)

### Methods

- [line](Erase.md#line)
- [lineLeft](Erase.md#lineleft)
- [lineRight](Erase.md#lineright)
- [screen](Erase.md#screen)
- [screenLeft](Erase.md#screenleft)
- [screenRight](Erase.md#screenright)

## Constructors

### constructor

• **new Erase**(`ui`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`Ui`](Ui.md) |

#### Inherited from

[UiBase](UiBase.md).[constructor](UiBase.md#constructor)

#### Defined in

[packages/console-output/src/ui/UiBase.ts:8](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/UiBase.ts#L8)

## Properties

### \_proxy

• `Protected` **\_proxy**: `any`

#### Defined in

[packages/console-output/src/ui/Erase.ts:25](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Erase.ts#L25)

___

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

### get

• `get` **get**(): [`Erasers`](../interfaces/Erasers.md)

#### Returns

[`Erasers`](../interfaces/Erasers.md)

#### Defined in

[packages/console-output/src/ui/Erase.ts:27](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Erase.ts#L27)

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

### line

▸ **line**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Erase.ts:32](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Erase.ts#L32)

___

### lineLeft

▸ **lineLeft**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Erase.ts:33](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Erase.ts#L33)

___

### lineRight

▸ **lineRight**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Erase.ts:34](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Erase.ts#L34)

___

### screen

▸ **screen**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Erase.ts:29](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Erase.ts#L29)

___

### screenLeft

▸ **screenLeft**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Erase.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Erase.ts#L30)

___

### screenRight

▸ **screenRight**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Erase.ts:31](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Erase.ts#L31)
