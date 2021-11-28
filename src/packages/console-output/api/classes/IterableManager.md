[@radic/console-output](../README.md) / IterableManager

# Class: IterableManager<K, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `V` | `V` |

## Hierarchy

- **`IterableManager`**

  ↳ [`StyleManager`](StyleManager.md)

## Implements

- `Iterable`<`V`\>

## Table of contents

### Constructors

- [constructor](IterableManager.md#constructor)

### Properties

- [items](IterableManager.md#items)

### Accessors

- [\_size](IterableManager.md#_size)

### Methods

- [[iterator]](IterableManager.md#[iterator])
- [\_clear](IterableManager.md#_clear)
- [\_delete](IterableManager.md#_delete)
- [\_forEach](IterableManager.md#_foreach)
- [\_get](IterableManager.md#_get)
- [\_has](IterableManager.md#_has)
- [\_set](IterableManager.md#_set)

## Constructors

### constructor

• **new IterableManager**<`K`, `V`\>(`items?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `Record`<`K`, `V`\> |

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:6](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L6)

## Properties

### items

• `Protected` **items**: `Record`<`K`, `V`\>

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:2](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L2)

## Accessors

### \_size

• `Protected` `get` **_size**(): `number`

#### Returns

`number`

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:4](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L4)

## Methods

### [iterator]

▸ **[iterator]**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `next` | (...`args`: `any`[]) => { `done`: `boolean` ; `value`: `V`  } |

#### Implementation of

Iterable.\_\_@iterator@82

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:37](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L37)

___

### \_clear

▸ `Protected` **_clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:10](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L10)

___

### \_delete

▸ `Protected` **_delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L12)

___

### \_forEach

▸ `Protected` **_forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: [`IterableManager`](IterableManager.md)<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L18)

___

### \_get

▸ `Protected` **_get**(`key`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`V`

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:24](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L24)

___

### \_has

▸ `Protected` **_has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L28)

___

### \_set

▸ `Protected` **_set**(`key`, `value`): [`IterableManager`](IterableManager.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`IterableManager`](IterableManager.md)<`K`, `V`\>

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:32](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L32)
