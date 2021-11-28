[@radic/shared](../README.md) / [Exports](../modules.md) / Diff

# Class: Diff

## Table of contents

### Constructors

- [constructor](Diff.md#constructor)

### Properties

- [diff](Diff.md#diff)
- [o](Diff.md#o)
- [o2](Diff.md#o2)

### Methods

- [getDiff](Diff.md#getdiff)
- [printDiff](Diff.md#printdiff)
- [getChangedItems](Diff.md#getchangeditems)
- [make](Diff.md#make)

## Constructors

### constructor

• **new Diff**(`o`, `o2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |
| `o2` | `object` |

#### Defined in

[Diff.ts:367](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L367)

## Properties

### diff

• **diff**: [`Item`](../interfaces/Diff.Item.md)[]

#### Defined in

[Diff.ts:365](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L365)

___

### o

• `Protected` **o**: `object`

___

### o2

• `Protected` **o2**: `object`

## Methods

### getDiff

▸ **getDiff**(): [`Item`](../interfaces/Diff.Item.md)[]

#### Returns

[`Item`](../interfaces/Diff.Item.md)[]

#### Defined in

[Diff.ts:375](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L375)

___

### printDiff

▸ **printDiff**(): `void`

#### Returns

`void`

#### Defined in

[Diff.ts:379](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L379)

___

### getChangedItems

▸ `Static` **getChangedItems**<`O1`, `O2`\>(`o`, `o2`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O1` | extends `object` |
| `O2` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `O1` |
| `o2` | `O2` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | `any`[] |
| `diff` | [`Diff`](Diff.md) |
| `items` | `Partial`<`O1` & `O2`\> |

#### Defined in

[Diff.ts:384](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L384)

___

### make

▸ `Static` **make**(`a`, `b`): [`Diff`](Diff.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `object` |
| `b` | `object` |

#### Returns

[`Diff`](Diff.md)

#### Defined in

[Diff.ts:371](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L371)
