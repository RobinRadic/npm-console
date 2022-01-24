[@radic/core](../README.md) / Paths

# Interface: Paths

## Table of contents

### Properties

- [app](Paths.md#app)
- [env](Paths.md#env)
- [node](Paths.md#node)
- [pkg](Paths.md#pkg)
- [root](Paths.md#root)

### Methods

- [path](Paths.md#path)

## Properties

### app

• `Optional` **app**: `string`

#### Defined in

[packages/core/src/Foundation/Application.ts:51](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L51)

___

### env

• **env**: `Record`<keyof [`EnvPaths`](EnvPaths.md), (...`pargs`: `string`[]) => `string`\>

#### Defined in

[packages/core/src/Foundation/Application.ts:56](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L56)

___

### node

• `Optional` **node**: `string`

#### Defined in

[packages/core/src/Foundation/Application.ts:50](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L50)

___

### pkg

• `Optional` **pkg**: `string`

#### Defined in

[packages/core/src/Foundation/Application.ts:52](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L52)

___

### root

• `Optional` **root**: `string`

#### Defined in

[packages/core/src/Foundation/Application.ts:53](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L53)

## Methods

### path

▸ **path**(...`pargs`): `string`

resolves from root path

#### Parameters

| Name | Type |
| :------ | :------ |
| `...pargs` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/core/src/Foundation/Application.ts:55](https://github.com/robinradic/npm-packages/blob/81c68f6/packages/core/src/Foundation/Application.ts#L55)
