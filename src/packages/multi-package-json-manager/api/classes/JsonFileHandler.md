[multi-package-json-manager](../README.md) / JsonFileHandler

# Class: JsonFileHandler

## Table of contents

### Constructors

- [constructor](JsonFileHandler.md#constructor)

### Properties

- [indent](JsonFileHandler.md#indent)
- [jsonStringify](JsonFileHandler.md#jsonstringify)
- [keyOrder](JsonFileHandler.md#keyorder)
- [packageSchemaJson](JsonFileHandler.md#packageschemajson)
- [updater](JsonFileHandler.md#updater)

### Methods

- [compileString](JsonFileHandler.md#compilestring)
- [detailsToPackageJson](JsonFileHandler.md#detailstopackagejson)
- [getCompileInterpolateExp](JsonFileHandler.md#getcompileinterpolateexp)
- [getFilePackageDetails](JsonFileHandler.md#getfilepackagedetails)
- [getFilesDetails](JsonFileHandler.md#getfilesdetails)
- [getFilesPackages](JsonFileHandler.md#getfilespackages)
- [setPackageSchemaJsonFilePath](JsonFileHandler.md#setpackageschemajsonfilepath)
- [writeDetailsToJsonFile](JsonFileHandler.md#writedetailstojsonfile)
- [writeDetailsToTestJsonFile](JsonFileHandler.md#writedetailstotestjsonfile)

## Constructors

### constructor

• **new JsonFileHandler**(`updater`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `updater` | [`Manager`](Manager.md)<[`PackageJson`](../interfaces/PackageJson.md)\> |

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:15](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L15)

## Properties

### indent

• **indent**: `number` = `4`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:13](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L13)

___

### jsonStringify

• `Protected` **jsonStringify**: [`JsonStringifyFunction`](../README.md#jsonstringifyfunction)

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:11](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L11)

___

### keyOrder

• **keyOrder**: keyof [`PackageJson`](../interfaces/PackageJson.md)[] = `[]`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:12](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L12)

___

### packageSchemaJson

• `Protected` **packageSchemaJson**: `Schema`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:10](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L10)

___

### updater

• `Protected` **updater**: [`Manager`](Manager.md)<[`PackageJson`](../interfaces/PackageJson.md)\>

## Methods

### compileString

▸ **compileString**(`str`, `details`, `variables?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `details` | [`FilePackageDetails`](../interfaces/FilePackageDetails.md) |
| `variables` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:96](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L96)

___

### detailsToPackageJson

▸ **detailsToPackageJson**(`details`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`FilePackageDetails`](../interfaces/FilePackageDetails.md) |

#### Returns

`string`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:72](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L72)

___

### getCompileInterpolateExp

▸ **getCompileInterpolateExp**(): `RegExp`

#### Returns

`RegExp`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:94](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L94)

___

### getFilePackageDetails

▸ **getFilePackageDetails**(`basePath`, `absoluteFilePath`, `pkg`): [`FilePackageDetails`](../interfaces/FilePackageDetails.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string` |
| `absoluteFilePath` | `string` |
| `pkg` | [`PackageJson`](../interfaces/PackageJson.md) |

#### Returns

[`FilePackageDetails`](../interfaces/FilePackageDetails.md)

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:41](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L41)

___

### getFilesDetails

▸ **getFilesDetails**(`basePath`, `absoluteFilePaths`): [`FilePackageDetails`](../interfaces/FilePackageDetails.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string` |
| `absoluteFilePaths` | `string`[] |

#### Returns

[`FilePackageDetails`](../interfaces/FilePackageDetails.md)[]

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:58](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L58)

___

### getFilesPackages

▸ **getFilesPackages**(`absoluteFilePaths`, `ignoreNotFound?`): `Record`<`string`, [`PackageJson`](../interfaces/PackageJson.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `absoluteFilePaths` | `string`[] | `undefined` |
| `ignoreNotFound` | `boolean` | `false` |

#### Returns

`Record`<`string`, [`PackageJson`](../interfaces/PackageJson.md)\>

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:25](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L25)

___

### setPackageSchemaJsonFilePath

▸ **setPackageSchemaJsonFilePath**(`packageSchemaJsonFilePath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageSchemaJsonFilePath` | `string` |

#### Returns

`void`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:19](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L19)

___

### writeDetailsToJsonFile

▸ **writeDetailsToJsonFile**(`details`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`FilePackageDetails`](../interfaces/FilePackageDetails.md) |

#### Returns

`void`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:67](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L67)

___

### writeDetailsToTestJsonFile

▸ **writeDetailsToTestJsonFile**(`details`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | [`FilePackageDetails`](../interfaces/FilePackageDetails.md) |

#### Returns

`void`

#### Defined in

[packages/multi-package-json-manager/src/JsonFileHandler.ts:84](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/JsonFileHandler.ts#L84)
