[@radic/core](../README.md) / Bindings

# Interface: Bindings

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cache](Bindings.md#cache)
- [config](Bindings.md#config)
- [events](Bindings.md#events)
- [path](Bindings.md#path)
- [paths](Bindings.md#paths)
- [pkg](Bindings.md#pkg)
- [processes](Bindings.md#processes)
- [services](Bindings.md#services)

## Properties

### cache

• **cache**: [`CacheManager`](../classes/CacheManager.md)

#### Defined in

[packages/core/src/Cache/CacheServiceProvider.ts:13](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheServiceProvider.ts#L13)

___

### config

• **config**: [`ConfigRepository`](../classes/ConfigRepository.md)<`Configuration`\> & `Configuration`

#### Defined in

[packages/core/src/Foundation/Application.ts:31](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L31)

___

### events

• **events**: [`Dispatcher`](../classes/Dispatcher.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L30)

___

### path

• **path**: [`PATH`](../classes/PATH.md)

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:17](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L17)

___

### paths

• **paths**: [`Paths`](Paths.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:34](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L34)

___

### pkg

• **pkg**: `PackageJson`

#### Defined in

[packages/core/src/Foundation/Application.ts:33](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L33)

___

### processes

• **processes**: [`ProcessManager`](../classes/ProcessManager.md)

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L16)

___

### services

• **services**: [`ServiceManager`](../classes/ServiceManager.md)

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:15](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L15)
