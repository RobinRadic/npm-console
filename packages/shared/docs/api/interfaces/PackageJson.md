[@radic/shared](../README.md) / [Exports](../modules.md) / PackageJson

# Interface: PackageJson

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [author](PackageJson.md#author)
- [bin](PackageJson.md#bin)
- [browser](PackageJson.md#browser)
- [bugs](PackageJson.md#bugs)
- [bundledDependencies](PackageJson.md#bundleddependencies)
- [config](PackageJson.md#config)
- [contributors](PackageJson.md#contributors)
- [cpu](PackageJson.md#cpu)
- [dependencies](PackageJson.md#dependencies)
- [description](PackageJson.md#description)
- [devDependencies](PackageJson.md#devdependencies)
- [directories](PackageJson.md#directories)
- [engines](PackageJson.md#engines)
- [files](PackageJson.md#files)
- [homepage](PackageJson.md#homepage)
- [keywords](PackageJson.md#keywords)
- [license](PackageJson.md#license)
- [main](PackageJson.md#main)
- [man](PackageJson.md#man)
- [name](PackageJson.md#name)
- [optionalDependencies](PackageJson.md#optionaldependencies)
- [os](PackageJson.md#os)
- [peerDependencies](PackageJson.md#peerdependencies)
- [repository](PackageJson.md#repository)
- [scripts](PackageJson.md#scripts)
- [version](PackageJson.md#version)
- [workspaces](PackageJson.md#workspaces)

## Properties

### author

• `Optional` **author**: `string` \| [`PackageJsonPerson`](PackageJsonPerson.md)

#### Defined in

[types/packageJson.ts:21](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L21)

___

### bin

• `Optional` **bin**: `Record`<`string`, `string`\>

#### Defined in

[types/packageJson.ts:26](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L26)

___

### browser

• `Optional` **browser**: `string`

#### Defined in

[types/packageJson.ts:25](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L25)

___

### bugs

• `Optional` **bugs**: [`PackageJsonAddress`](PackageJsonAddress.md)

#### Defined in

[types/packageJson.ts:19](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L19)

___

### bundledDependencies

• `Optional` **bundledDependencies**: `string`[]

#### Defined in

[types/packageJson.ts:47](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L47)

___

### config

• `Optional` **config**: `Record`<`string`, `string`\>

#### Defined in

[types/packageJson.ts:42](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L42)

___

### contributors

• `Optional` **contributors**: `string`[] \| [`PackageJsonPerson`](PackageJsonPerson.md)[]

#### Defined in

[types/packageJson.ts:22](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L22)

___

### cpu

• `Optional` **cpu**: `string`[]

#### Defined in

[types/packageJson.ts:50](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L50)

___

### dependencies

• `Optional` **dependencies**: `Record`<`string`, `string`\>

#### Defined in

[types/packageJson.ts:43](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L43)

___

### description

• `Optional` **description**: `string`

#### Defined in

[types/packageJson.ts:16](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L16)

___

### devDependencies

• `Optional` **devDependencies**: `Record`<`string`, `string`\>

#### Defined in

[types/packageJson.ts:44](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L44)

___

### directories

• `Optional` **directories**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bin?` | `string` |
| `doc?` | `string` |
| `example?` | `string` |
| `lib?` | `string` |
| `man?` | `string` |
| `test?` | `string` |

#### Defined in

[types/packageJson.ts:28](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L28)

___

### engines

• `Optional` **engines**: `Record`<`string`, `string`\>

#### Defined in

[types/packageJson.ts:48](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L48)

___

### files

• `Optional` **files**: `string`[]

#### Defined in

[types/packageJson.ts:23](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L23)

___

### homepage

• `Optional` **homepage**: `string`

#### Defined in

[types/packageJson.ts:18](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L18)

___

### keywords

• `Optional` **keywords**: `string`

#### Defined in

[types/packageJson.ts:17](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L17)

___

### license

• `Optional` **license**: `string`

#### Defined in

[types/packageJson.ts:20](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L20)

___

### main

• `Optional` **main**: `string`

#### Defined in

[types/packageJson.ts:24](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L24)

___

### man

• `Optional` **man**: `string`

#### Defined in

[types/packageJson.ts:27](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L27)

___

### name

• **name**: `string`

#### Defined in

[types/packageJson.ts:14](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L14)

___

### optionalDependencies

• `Optional` **optionalDependencies**: `Record`<`string`, `string`\>

#### Defined in

[types/packageJson.ts:46](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L46)

___

### os

• `Optional` **os**: `string`[]

#### Defined in

[types/packageJson.ts:49](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L49)

___

### peerDependencies

• `Optional` **peerDependencies**: `Record`<`string`, `string`\>

#### Defined in

[types/packageJson.ts:45](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L45)

___

### repository

• `Optional` **repository**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `directory?` | `string` |
| `type?` | ``"git"`` |
| `url?` | `string` |

#### Defined in

[types/packageJson.ts:36](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L36)

___

### scripts

• `Optional` **scripts**: `Record`<`string`, `string`\>

#### Defined in

[types/packageJson.ts:41](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L41)

___

### version

• **version**: `string`

#### Defined in

[types/packageJson.ts:15](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L15)

___

### workspaces

• **workspaces**: `string`[] \| { `nohoist`: `string`[] ; `packages`: `string`[]  }

#### Defined in

[types/packageJson.ts:13](https://github.com/robinradic/npm-console/blob/27e41ef/packages/shared/src/types/packageJson.ts#L13)
