[@radic/core](../README.md) / Repository

# Class: Repository<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- **`Repository`**

  ↳ [`ConfigRepository`](ConfigRepository.md)

## Table of contents

### Constructors

- [constructor](Repository.md#constructor)

### Properties

- [\_original](Repository.md#_original)
- [items](Repository.md#items)

### Methods

- [get](Repository.md#get)
- [getOriginal](Repository.md#getoriginal)
- [has](Repository.md#has)
- [markOriginal](Repository.md#markoriginal)
- [push](Repository.md#push)
- [set](Repository.md#set)
- [asProxy](Repository.md#asproxy)

## Constructors

### constructor

• **new Repository**<`T`\>(`items?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T` |

#### Defined in

[packages/core/src/Config/Repository.ts:28](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L28)

## Properties

### \_original

• `Protected` **\_original**: `T`

#### Defined in

[packages/core/src/Config/Repository.ts:16](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L16)

___

### items

• `Protected` **items**: `T`

## Methods

### get

▸ **get**<`T`\>(`key?`, `defaultValue?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |
| `defaultValue?` | `any` |

#### Returns

`T`

#### Defined in

[packages/core/src/Config/Repository.ts:32](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L32)

___

### getOriginal

▸ **getOriginal**(): `T`

#### Returns

`T`

#### Defined in

[packages/core/src/Config/Repository.ts:18](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L18)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Config/Repository.ts:63](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L63)

___

### markOriginal

▸ **markOriginal**(): [`Repository`](Repository.md)<`T`\>

#### Returns

[`Repository`](Repository.md)<`T`\>

#### Defined in

[packages/core/src/Config/Repository.ts:20](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L20)

___

### push

▸ **push**(`key`, `value`): [`Repository`](Repository.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Repository`](Repository.md)<`T`\>

#### Defined in

[packages/core/src/Config/Repository.ts:56](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L56)

___

### set

▸ **set**(`key`, `value?`): [`Repository`](Repository.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `T` |
| `value?` | `any` |

#### Returns

[`Repository`](Repository.md)<`T`\>

#### Defined in

[packages/core/src/Config/Repository.ts:45](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L45)

___

### asProxy

▸ `Static` **asProxy**<`T`\>(`items?`): [`Repository`](Repository.md)<`T`\> & `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items?` | `T` |

#### Returns

[`Repository`](Repository.md)<`T`\> & `T`

#### Defined in

[packages/core/src/Config/Repository.ts:67](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Config/Repository.ts#L67)
