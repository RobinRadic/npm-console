multi-package-json-manager

# multi-package-json-manager

## Table of contents

### Classes

- [JsonFileHandler](classes/JsonFileHandler.md)
- [Manager](classes/Manager.md)

### Interfaces

- [Change](interfaces/Change.md)
- [FilePackageDetails](interfaces/FilePackageDetails.md)
- [PackageJson](interfaces/PackageJson.md)

### Type aliases

- [ChangeType](README.md#changetype)
- [FileFilterCallback](README.md#filefiltercallback)
- [JsonStringifyFunction](README.md#jsonstringifyfunction)
- [SpliceCallback](README.md#splicecallback)
- [Variables](README.md#variables)

## Type aliases

### ChangeType

Ƭ **ChangeType**: ``"set"`` \| ``"merge"`` \| ``"mergeAt"`` \| ``"unset"`` \| ``"push"`` \| ``"splice"``

#### Defined in

[packages/multi-package-json-manager/src/interfaces.ts:28](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/interfaces.ts#L28)

___

### FileFilterCallback

Ƭ **FileFilterCallback**: (`fileDetails`: [`FilePackageDetails`](interfaces/FilePackageDetails.md)) => `boolean`

#### Type declaration

▸ (`fileDetails`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fileDetails` | [`FilePackageDetails`](interfaces/FilePackageDetails.md) |

##### Returns

`boolean`

#### Defined in

[packages/multi-package-json-manager/src/interfaces.ts:26](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/interfaces.ts#L26)

___

### JsonStringifyFunction

Ƭ **JsonStringifyFunction**: (`doc`: `object` \| `any`[] \| `string` \| `number` \| `boolean` \| ``null``) => `string`

#### Type declaration

▸ (`doc`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `object` \| `any`[] \| `string` \| `number` \| `boolean` \| ``null`` |

##### Returns

`string`

#### Defined in

[packages/multi-package-json-manager/src/interfaces.ts:46](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/interfaces.ts#L46)

___

### SpliceCallback

Ƭ **SpliceCallback**: (`array`: `any`[]) => `number` \| [`number`, `number`]

#### Type declaration

▸ (`array`): `number` \| [`number`, `number`]

##### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

##### Returns

`number` \| [`number`, `number`]

#### Defined in

[packages/multi-package-json-manager/src/interfaces.ts:27](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/interfaces.ts#L27)

___

### Variables

Ƭ **Variables**: `Object`

#### Index signature

▪ [key: `string`]: `string` \| [`Variables`](README.md#variables)

#### Defined in

[packages/multi-package-json-manager/src/interfaces.ts:43](https://github.com/robinradic/npm-packages/blob/4d8f8f9/packages/multi-package-json-manager/src/interfaces.ts#L43)
