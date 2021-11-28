[@radic/console-output](../README.md) / StyleManager

# Class: StyleManager<K\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Styles`](../interfaces/Styles.md) \| `string` = [`StyleName`](../README.md#stylename) |

## Hierarchy

- [`IterableManager`](IterableManager.md)<`K`, `string`\>

  ↳ **`StyleManager`**

## Table of contents

### Constructors

- [constructor](StyleManager.md#constructor)

### Properties

- [items](StyleManager.md#items)

### Accessors

- [\_size](StyleManager.md#_size)

### Methods

- [[iterator]](StyleManager.md#[iterator])
- [\_clear](StyleManager.md#_clear)
- [\_delete](StyleManager.md#_delete)
- [\_forEach](StyleManager.md#_foreach)
- [\_get](StyleManager.md#_get)
- [\_has](StyleManager.md#_has)
- [\_set](StyleManager.md#_set)
- [allStyles](StyleManager.md#allstyles)
- [getStyle](StyleManager.md#getstyle)
- [hasStyle](StyleManager.md#hasstyle)
- [removeStyle](StyleManager.md#removestyle)
- [setStyle](StyleManager.md#setstyle)

## Constructors

### constructor

• **new StyleManager**<`K`\>(`items?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` = [`StyleName`](../README.md#stylename) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `Record`<`K`, `string`\> |

#### Inherited from

[IterableManager](IterableManager.md).[constructor](IterableManager.md#constructor)

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:6](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L6)

## Properties

### items

• `Protected` **items**: `Record`<`K`, `string`\>

#### Inherited from

[IterableManager](IterableManager.md).[items](IterableManager.md#items)

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:2](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L2)

## Accessors

### \_size

• `Protected` `get` **_size**(): `number`

#### Returns

`number`

#### Inherited from

IterableManager.\_size

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:4](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L4)

## Methods

### [iterator]

▸ **[iterator]**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `next` | (...`args`: `any`[]) => { `done`: `boolean` ; `value`: `string`  } |

#### Inherited from

[IterableManager](IterableManager.md).[[iterator]](IterableManager.md#[iterator])

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:37](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L37)

___

### \_clear

▸ `Protected` **_clear**(): `void`

#### Returns

`void`

#### Inherited from

[IterableManager](IterableManager.md).[_clear](IterableManager.md#_clear)

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

#### Inherited from

[IterableManager](IterableManager.md).[_delete](IterableManager.md#_delete)

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L12)

___

### \_forEach

▸ `Protected` **_forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `K`, `map`: [`IterableManager`](IterableManager.md)<`K`, `string`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[IterableManager](IterableManager.md).[_forEach](IterableManager.md#_foreach)

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:18](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L18)

___

### \_get

▸ `Protected` **_get**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`string`

#### Inherited from

[IterableManager](IterableManager.md).[_get](IterableManager.md#_get)

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

#### Inherited from

[IterableManager](IterableManager.md).[_has](IterableManager.md#_has)

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L28)

___

### \_set

▸ `Protected` **_set**(`key`, `value`): [`StyleManager`](StyleManager.md)<`K`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `string` |

#### Returns

[`StyleManager`](StyleManager.md)<`K`\>

#### Inherited from

[IterableManager](IterableManager.md).[_set](IterableManager.md#_set)

#### Defined in

[packages/console-output/src/utils/IterableManager.ts:32](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/utils/IterableManager.ts#L32)

___

### allStyles

▸ **allStyles**(): [`Styles`](../interfaces/Styles.md)

#### Returns

[`Styles`](../interfaces/Styles.md)

#### Defined in

[packages/console-output/src/colors/StyleManager.ts:23](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleManager.ts#L23)

___

### getStyle

▸ **getStyle**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `K` |

#### Returns

`string`

#### Defined in

[packages/console-output/src/colors/StyleManager.ts:15](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleManager.ts#L15)

___

### hasStyle

▸ **hasStyle**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `K` |

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/colors/StyleManager.ts:19](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleManager.ts#L19)

___

### removeStyle

▸ **removeStyle**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `K` |

#### Returns

`boolean`

#### Defined in

[packages/console-output/src/colors/StyleManager.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleManager.ts#L21)

___

### setStyle

▸ **setStyle**(`name`, `style`): [`StyleManager`](StyleManager.md)<`K`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `K` |
| `style` | `string` |

#### Returns

[`StyleManager`](StyleManager.md)<`K`\>

#### Defined in

[packages/console-output/src/colors/StyleManager.ts:17](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-output/src/colors/StyleManager.ts#L17)
