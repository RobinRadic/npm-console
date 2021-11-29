[multi-package-json-manager](../README.md) / Manager

# Class: Manager<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PackageJson`](../interfaces/PackageJson.md) = [`PackageJson`](../interfaces/PackageJson.md) |

## Table of contents

### Constructors

- [constructor](Manager.md#constructor)

### Properties

- [\_dryRun](Manager.md#_dryrun)
- [\_testOutputDir](Manager.md#_testoutputdir)
- [\_testRun](Manager.md#_testrun)
- [basePath](Manager.md#basepath)
- [changes](Manager.md#changes)
- [fileHandler](Manager.md#filehandler)
- [files](Manager.md#files)
- [variables](Manager.md#variables)

### Accessors

- [isDryRun](Manager.md#isdryrun)
- [isTestRun](Manager.md#istestrun)
- [testOutputDir](Manager.md#testoutputdir)

### Methods

- [addChange](Manager.md#addchange)
- [addPackageJsons](Manager.md#addpackagejsons)
- [addVariables](Manager.md#addvariables)
- [enableDryRun](Manager.md#enabledryrun)
- [enableTestRun](Manager.md#enabletestrun)
- [merge](Manager.md#merge)
- [mergeAt](Manager.md#mergeat)
- [mergeVariables](Manager.md#mergevariables)
- [push](Manager.md#push)
- [run](Manager.md#run)
- [set](Manager.md#set)
- [setIndent](Manager.md#setindent)
- [setKey](Manager.md#setkey)
- [setKeyOrder](Manager.md#setkeyorder)
- [setVariable](Manager.md#setvariable)
- [splice](Manager.md#splice)
- [unset](Manager.md#unset)

## Constructors

### constructor

• **new Manager**<`T`\>(`basePath`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PackageJson`](../interfaces/PackageJson.md)<`T`\> = [`PackageJson`](../interfaces/PackageJson.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string` |

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:46](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L46)

## Properties

### \_dryRun

• `Protected` **\_dryRun**: `boolean` = `false`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:10](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L10)

___

### \_testOutputDir

• `Protected` **\_testOutputDir**: `string` = `'.jsonUpdaterTests'`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:12](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L12)

___

### \_testRun

• `Protected` **\_testRun**: `boolean` = `false`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:11](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L11)

___

### basePath

• `Readonly` **basePath**: `string`

___

### changes

• `Protected` **changes**: [`Change`](../interfaces/Change.md)[] = `[]`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:8](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L8)

___

### fileHandler

• `Protected` **fileHandler**: [`JsonFileHandler`](JsonFileHandler.md)

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:14](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L14)

___

### files

• `Protected` **files**: `string`[] = `[]`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:9](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L9)

___

### variables

• `Readonly` **variables**: [`Variables`](../README.md#variables) = `{}`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:13](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L13)

## Accessors

### isDryRun

• `get` **isDryRun**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:61](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L61)

___

### isTestRun

• `get` **isTestRun**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:63](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L63)

___

### testOutputDir

• `get` **testOutputDir**(): `string`

#### Returns

`string`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:65](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L65)

## Methods

### addChange

▸ `Protected` **addChange**(`change`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `change` | [`Change`](../interfaces/Change.md) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:67](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L67)

___

### addPackageJsons

▸ **addPackageJsons**(`globStr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `globStr` | `string` |

#### Returns

`void`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:78](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L78)

___

### addVariables

▸ **addVariables**(`variables`, `override?`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | [`Variables`](../README.md#variables) | `undefined` |
| `override` | `boolean` | `false` |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:31](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L31)

___

### enableDryRun

▸ **enableDryRun**(`enable?`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enable` | `boolean` | `true` |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:50](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L50)

___

### enableTestRun

▸ **enableTestRun**(`enable?`, `testOutputDir?`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enable` | `boolean` | `true` |
| `testOutputDir` | `string` | `'.jsonUpdaterTests'` |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:55](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L55)

___

### merge

▸ **merge**(`value`, `fileFilter?`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PackageJson`](../interfaces/PackageJson.md) |
| `fileFilter?` | [`FileFilterCallback`](../README.md#filefiltercallback) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:109](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L109)

___

### mergeAt

▸ **mergeAt**(`path`, `value`, `fileFilter?`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `fileFilter?` | [`FileFilterCallback`](../README.md#filefiltercallback) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:113](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L113)

___

### mergeVariables

▸ **mergeVariables**(`variables`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../README.md#variables) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:41](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L41)

___

### push

▸ **push**(`path`, `value`, `fileFilter?`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `fileFilter?` | [`FileFilterCallback`](../README.md#filefiltercallback) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:121](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L121)

___

### run

▸ **run**(): `void`

#### Returns

`void`

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:129](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L129)

___

### set

▸ **set**(`path`, `value`, `fileFilter?`): [`Manager`](Manager.md)<`T`\>

dot notated path / value setting

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `fileFilter?` | [`FileFilterCallback`](../README.md#filefiltercallback) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:100](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L100)

___

### setIndent

▸ **setIndent**(`indent`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `indent` | `number` |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:21](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L21)

___

### setKey

▸ **setKey**<`K`\>(`key`, `value`, `fileFilter?`): [`Manager`](Manager.md)<`T`\>

type safe key / value setting

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`PackageJson`](../interfaces/PackageJson.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `T`[`K`] |
| `fileFilter?` | [`FileFilterCallback`](../README.md#filefiltercallback) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:90](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L90)

___

### setKeyOrder

▸ **setKeyOrder**(`keyOrder`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyOrder` | keyof [`PackageJson`](../interfaces/PackageJson.md)[] |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:16](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L16)

___

### setVariable

▸ **setVariable**(`name`, `value`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:26](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L26)

___

### splice

▸ **splice**(`path`, `splice`, `fileFilter?`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `splice` | [`SpliceCallback`](../README.md#splicecallback) |
| `fileFilter?` | [`FileFilterCallback`](../README.md#filefiltercallback) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:125](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L125)

___

### unset

▸ **unset**(`path`, `fileFilter?`): [`Manager`](Manager.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fileFilter?` | [`FileFilterCallback`](../README.md#filefiltercallback) |

#### Returns

[`Manager`](Manager.md)<`T`\>

#### Defined in

[packages/multi-package-json-manager/src/Manager.ts:117](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/Manager.ts#L117)
