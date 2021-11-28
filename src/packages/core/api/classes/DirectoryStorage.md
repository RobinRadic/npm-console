[@radic/core](../README.md) / DirectoryStorage

# Class: DirectoryStorage

## Table of contents

### Constructors

- [constructor](DirectoryStorage.md#constructor)

### Properties

- [options](DirectoryStorage.md#options)

### Accessors

- [encoding](DirectoryStorage.md#encoding)

### Methods

- [compress](DirectoryStorage.md#compress)
- [decompress](DirectoryStorage.md#decompress)
- [ensureDir](DirectoryStorage.md#ensuredir)
- [ensureFile](DirectoryStorage.md#ensurefile)
- [ensureFileWithContent](DirectoryStorage.md#ensurefilewithcontent)
- [exists](DirectoryStorage.md#exists)
- [isDirectory](DirectoryStorage.md#isdirectory)
- [isFile](DirectoryStorage.md#isfile)
- [isSymbolicLink](DirectoryStorage.md#issymboliclink)
- [mergeOptions](DirectoryStorage.md#mergeoptions)
- [path](DirectoryStorage.md#path)
- [read](DirectoryStorage.md#read)
- [readJson](DirectoryStorage.md#readjson)
- [setEncoding](DirectoryStorage.md#setencoding)
- [stat](DirectoryStorage.md#stat)
- [withEncoding](DirectoryStorage.md#withencoding)
- [write](DirectoryStorage.md#write)
- [writeJson](DirectoryStorage.md#writejson)
- [env](DirectoryStorage.md#env)

## Constructors

### constructor

• **new DirectoryStorage**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DirectoryStorageOptions`](../interfaces/DirectoryStorageOptions.md) |

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:35](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L35)

## Properties

### options

• `Protected` **options**: [`DirectoryStorageOptions`](../interfaces/DirectoryStorageOptions.md)

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:29](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L29)

## Accessors

### encoding

• `Protected` `get` **encoding**(): `BufferEncoding`

#### Returns

`BufferEncoding`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:31](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L31)

• `Protected` `set` **encoding**(`encoding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

`void`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:33](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L33)

## Methods

### compress

▸ **compress**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:71](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L71)

___

### decompress

▸ **decompress**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:73](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L73)

___

### ensureDir

▸ **ensureDir**(...`parts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:81](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L81)

___

### ensureFile

▸ **ensureFile**(...`parts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:86](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L86)

___

### ensureFileWithContent

▸ **ensureFileWithContent**(`content`, ...`parts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `...parts` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:91](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L91)

___

### exists

▸ **exists**(...`parts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | `string`[] |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:98](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L98)

___

### isDirectory

▸ **isDirectory**(...`parts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | `string`[] |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:110](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L110)

___

### isFile

▸ **isFile**(...`parts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | `string`[] |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:106](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L106)

___

### isSymbolicLink

▸ **isSymbolicLink**(...`parts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | `string`[] |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:114](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L114)

___

### mergeOptions

▸ **mergeOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DirectoryStorageOptions`](../interfaces/DirectoryStorageOptions.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:43](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L43)

___

### path

▸ **path**(...`parts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | `any`[] |

#### Returns

`string`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:75](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L75)

___

### read

▸ **read**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:118](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L118)

___

### readJson

▸ **readJson**<`T`\>(`path`, `options?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | [`JsonOptions`](../interfaces/DirectoryStorage.JsonOptions.md) |

#### Returns

`T`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:127](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L127)

___

### setEncoding

▸ **setEncoding**(`_encoding?`): [`DirectoryStorage`](DirectoryStorage.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_encoding` | `BufferEncoding` | `'utf8'` |

#### Returns

[`DirectoryStorage`](DirectoryStorage.md)

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:66](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L66)

___

### stat

▸ **stat**(...`parts`): `Stats`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | `string`[] |

#### Returns

`Stats`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:102](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L102)

___

### withEncoding

▸ **withEncoding**<`T`\>(`encoding`, `callback`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |
| `callback` | (`storage`: [`DirectoryStorage`](DirectoryStorage.md)) => `T` |

#### Returns

`T`

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:58](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L58)

___

### write

▸ **write**(`path`, `content`): [`DirectoryStorage`](DirectoryStorage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `content` | `string` |

#### Returns

[`DirectoryStorage`](DirectoryStorage.md)

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:122](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L122)

___

### writeJson

▸ **writeJson**(`path`, `data`, `options?`): [`DirectoryStorage`](DirectoryStorage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `any` |
| `options` | [`JsonOptions`](../interfaces/DirectoryStorage.JsonOptions.md) |

#### Returns

[`DirectoryStorage`](DirectoryStorage.md)

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:137](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L137)

___

### env

▸ `Static` **env**(`type`, `name`, `suffix?`): [`DirectoryStorage`](DirectoryStorage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | keyof [`EnvPaths`](../interfaces/EnvPaths.md) |
| `name` | `string` |
| `suffix?` | `string` |

#### Returns

[`DirectoryStorage`](DirectoryStorage.md)

#### Defined in

[packages/core/src/Storage/DirectoryStorage.ts:54](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Storage/DirectoryStorage.ts#L54)
