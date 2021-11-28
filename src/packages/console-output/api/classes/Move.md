[@radic/console-output](../README.md) / Move

# Class: Move

## Hierarchy

- [`UiBase`](UiBase.md)

  ↳ **`Move`**

## Table of contents

### Constructors

- [constructor](Move.md#constructor)

### Properties

- [\_proxy](Move.md#_proxy)
- [ui](Move.md#ui)

### Accessors

- [erase](Move.md#erase)
- [get](Move.md#get)
- [move](Move.md#move)
- [stdout](Move.md#stdout)
- [text](Move.md#text)

### Methods

- [bottom](Move.md#bottom)
- [down](Move.md#down)
- [left](Move.md#left)
- [lineBegin](Move.md#linebegin)
- [lineEnd](Move.md#lineend)
- [lines](Move.md#lines)
- [right](Move.md#right)
- [to](Move.md#to)
- [top](Move.md#top)
- [up](Move.md#up)

## Constructors

### constructor

• **new Move**(`ui`)

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

[packages/console-output/src/ui/Move.ts:65](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L65)

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

• `get` **get**(): [`Movers`](../interfaces/Movers.md)

#### Returns

[`Movers`](../interfaces/Movers.md)

#### Defined in

[packages/console-output/src/ui/Move.ts:67](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L67)

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

### bottom

▸ **bottom**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:74](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L74)

___

### down

▸ **down**(`num?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | `number` |

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:70](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L70)

___

### left

▸ **left**(`num?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | `number` |

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:72](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L72)

___

### lineBegin

▸ **lineBegin**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:75](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L75)

___

### lineEnd

▸ **lineEnd**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:76](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L76)

___

### lines

▸ **lines**(`num`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:78](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L78)

___

### right

▸ **right**(`num?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | `number` |

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:71](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L71)

___

### to

▸ **to**(`x`, `y`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:77](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L77)

___

### top

▸ **top**(): `this`

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:73](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L73)

___

### up

▸ **up**(`num?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | `number` |

#### Returns

`this`

#### Defined in

[packages/console-output/src/ui/Move.ts:69](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/ui/Move.ts#L69)
