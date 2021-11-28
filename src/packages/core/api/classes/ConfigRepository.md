[@radic/core](../README.md) / ConfigRepository

# Class: ConfigRepository<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Repository`](Repository.md)<`T`\>

  ↳ **`ConfigRepository`**

## Table of contents

### Constructors

- [constructor](ConfigRepository.md#constructor)

### Properties

- [\_original](ConfigRepository.md#_original)
- [fileName](ConfigRepository.md#filename)
- [items](ConfigRepository.md#items)
- [storage](ConfigRepository.md#storage)

### Methods

- [clearSaved](ConfigRepository.md#clearsaved)
- [get](ConfigRepository.md#get)
- [getChangedItems](ConfigRepository.md#getchangeditems)
- [getFilePath](ConfigRepository.md#getfilepath)
- [getOriginal](ConfigRepository.md#getoriginal)
- [has](ConfigRepository.md#has)
- [load](ConfigRepository.md#load)
- [markOriginal](ConfigRepository.md#markoriginal)
- [push](ConfigRepository.md#push)
- [save](ConfigRepository.md#save)
- [set](ConfigRepository.md#set)
- [setStorage](ConfigRepository.md#setstorage)
- [asProxy](ConfigRepository.md#asproxy)

## Constructors

### constructor

• **new ConfigRepository**<`T`\>(`items?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T` |

#### Inherited from

[Repository](Repository.md).[constructor](Repository.md#constructor)

#### Defined in

[packages/core/src/Config/Repository.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/Repository.ts#L28)

## Properties

### \_original

• `Protected` **\_original**: `T`

#### Inherited from

[Repository](Repository.md).[_original](Repository.md#_original)

#### Defined in

[packages/core/src/Config/Repository.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/Repository.ts#L16)

___

### fileName

• **fileName**: `string` = `'config.json'`

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:40](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L40)

___

### items

• `Protected` **items**: `T`

#### Inherited from

[Repository](Repository.md).[items](Repository.md#items)

___

### storage

• **storage**: [`DirectoryStorage`](DirectoryStorage.md) = `null`

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:39](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L39)

## Methods

### clearSaved

▸ **clearSaved**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:101](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L101)

___

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

#### Overrides

[Repository](Repository.md).[get](Repository.md#get)

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:113](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L113)

___

### getChangedItems

▸ `Protected` **getChangedItems**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | `any`[] |
| `diff` | `Diff` |
| `items` | `Partial`<`T`\> |

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:52](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L52)

___

### getFilePath

▸ **getFilePath**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:42](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L42)

___

### getOriginal

▸ **getOriginal**(): `T`

#### Returns

`T`

#### Inherited from

[Repository](Repository.md).[getOriginal](Repository.md#getoriginal)

#### Defined in

[packages/core/src/Config/Repository.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/Repository.ts#L18)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Overrides

[Repository](Repository.md).[has](Repository.md#has)

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:123](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L123)

___

### load

▸ **load**(`method`): [`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"merge"`` \| ``"set"`` |

#### Returns

[`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:105](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L105)

___

### markOriginal

▸ **markOriginal**(): [`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Returns

[`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Inherited from

[Repository](Repository.md).[markOriginal](Repository.md#markoriginal)

#### Defined in

[packages/core/src/Config/Repository.ts:20](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/Repository.ts#L20)

___

### push

▸ **push**(`key`, `value`): [`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Inherited from

[Repository](Repository.md).[push](Repository.md#push)

#### Defined in

[packages/core/src/Config/Repository.ts:56](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/Repository.ts#L56)

___

### save

▸ **save**(): [`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Returns

[`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:93](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L93)

___

### set

▸ **set**(`key`, `value?`): [`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `T` |
| `value?` | `any` |

#### Returns

[`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Overrides

[Repository](Repository.md).[set](Repository.md#set)

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:117](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L117)

___

### setStorage

▸ **setStorage**(`storage`): [`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`DirectoryStorage`](DirectoryStorage.md) |

#### Returns

[`ConfigRepository`](ConfigRepository.md)<`T`\>

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:46](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L46)

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

#### Overrides

[Repository](Repository.md).[asProxy](Repository.md#asproxy)

#### Defined in

[packages/core/src/Config/ConfigRepository.ts:127](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/ConfigRepository.ts#L127)
