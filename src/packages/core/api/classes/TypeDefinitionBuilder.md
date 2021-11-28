[@radic/core](../README.md) / TypeDefinitionBuilder

# Class: TypeDefinitionBuilder

## Table of contents

### Constructors

- [constructor](TypeDefinitionBuilder.md#constructor)

### Properties

- [\_parent](TypeDefinitionBuilder.md#_parent)
- [\_required](TypeDefinitionBuilder.md#_required)
- [children](TypeDefinitionBuilder.md#children)
- [depth](TypeDefinitionBuilder.md#depth)
- [lines](TypeDefinitionBuilder.md#lines)
- [modifier](TypeDefinitionBuilder.md#modifier)

### Accessors

- [declare](TypeDefinitionBuilder.md#declare)
- [export](TypeDefinitionBuilder.md#export)
- [indent](TypeDefinitionBuilder.md#indent)
- [parent](TypeDefinitionBuilder.md#parent)

### Methods

- [add](TypeDefinitionBuilder.md#add)
- [addObject](TypeDefinitionBuilder.md#addobject)
- [addOne](TypeDefinitionBuilder.md#addone)
- [build](TypeDefinitionBuilder.md#build)
- [child](TypeDefinitionBuilder.md#child)
- [close](TypeDefinitionBuilder.md#close)
- [docblock](TypeDefinitionBuilder.md#docblock)
- [line](TypeDefinitionBuilder.md#line)
- [open](TypeDefinitionBuilder.md#open)
- [required](TypeDefinitionBuilder.md#required)
- [root](TypeDefinitionBuilder.md#root)
- [type](TypeDefinitionBuilder.md#type)

## Constructors

### constructor

• **new TypeDefinitionBuilder**(`_parent?`, `depth?`, `modifier?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_parent?` | [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md) | `undefined` |
| `depth` | `number` | `0` |
| `modifier` | (`value`: `string`) => `string` | `undefined` |

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L12)

## Properties

### \_parent

• `Protected` `Optional` **\_parent**: [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

___

### \_required

• `Protected` **\_required**: `boolean` = `false`

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:10](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L10)

___

### children

• `Protected` **children**: [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)[] = `[]`

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L9)

___

### depth

• `Protected` **depth**: `number` = `0`

___

### lines

• `Protected` **lines**: `string`[] = `[]`

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:8](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L8)

___

### modifier

• `Protected` **modifier**: (`value`: `string`) => `string`

#### Type declaration

▸ (`value`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

`string`

## Accessors

### declare

• `get` **declare**(): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:19](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L19)

___

### export

• `get` **export**(): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:17](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L17)

___

### indent

• `Protected` `get` **indent**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:35](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L35)

___

### parent

• `get` **parent**(): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:86](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L86)

## Methods

### add

▸ **add**(`obj`, `required?`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |
| `required?` | `boolean` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:49](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L49)

▸ **add**(`name`, `type`, `required?`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |
| `required?` | `boolean` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:50](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L50)

___

### addObject

▸ `Protected` **addObject**(`obj`, `required?`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |
| `required` | `boolean` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:69](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L69)

___

### addOne

▸ `Protected` **addOne**(`name`, `type`, `required?`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |
| `required` | `boolean` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:74](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L74)

___

### build

▸ **build**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L14)

___

### child

▸ `Protected` **child**(`modifier?`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modifier` | (`value`: `string`) => `string` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:29](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L29)

___

### close

▸ **close**(): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:101](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L101)

___

### docblock

▸ **docblock**(`_comments`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_comments` | `string` \| `string`[] |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:60](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L60)

___

### line

▸ `Protected` **line**(`value`, `useModifier?`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `undefined` |
| `useModifier` | `boolean` | `true` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L21)

___

### open

▸ **open**(`type`, `name`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `name` | `string` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:44](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L44)

___

### required

▸ **required**(`required?`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `required` | `boolean` | `true` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:39](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L39)

___

### root

▸ **root**(): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:106](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L106)

___

### type

▸ **type**(`name`, `value`): [`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`TypeDefinitionBuilder`](TypeDefinitionBuilder.md)

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:81](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L81)
