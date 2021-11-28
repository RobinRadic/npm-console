[@radic/shared](../README.md) / [Exports](../modules.md) / Diff

# Namespace: Diff

## Table of contents

### Interfaces

- [Item](../interfaces/Diff.Item.md)

### Type aliases

- [ItemAction](Diff.md#itemaction)
- [ItemType](Diff.md#itemtype)

### Functions

- [isItem](Diff.md#isitem)
- [isItemWithKey](Diff.md#isitemwithkey)
- [isItemWithKeyValue](Diff.md#isitemwithkeyvalue)
- [isItemWithValue](Diff.md#isitemwithvalue)

## Type aliases

### ItemAction

Ƭ **ItemAction**: ``"common"`` \| ``"add"`` \| ``"remove"``

#### Defined in

[Diff.ts:438](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L438)

___

### ItemType

Ƭ **ItemType**: ``"null"`` \| ``"undefined"`` \| ``"scalar"`` \| ``"object"`` \| ``"array"``

#### Defined in

[Diff.ts:432](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L432)

## Functions

### isItem

▸ `Const` **isItem**(`value`): value is Item

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Item

#### Defined in

[Diff.ts:427](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L427)

___

### isItemWithKey

▸ `Const` **isItemWithKey**(`value`): value is Item

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Item

#### Defined in

[Diff.ts:428](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L428)

___

### isItemWithKeyValue

▸ `Const` **isItemWithKeyValue**(`value`): value is Item

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Item

#### Defined in

[Diff.ts:430](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L430)

___

### isItemWithValue

▸ `Const` **isItemWithValue**(`value`): value is Item

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Item

#### Defined in

[Diff.ts:429](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/Diff.ts#L429)
