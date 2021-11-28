@radic/core

# @radic/core

## Table of contents

### Namespaces

- [DirectoryStorage](modules/DirectoryStorage.md)
- [ServiceStatus](modules/ServiceStatus.md)

### Enumerations

- [ExitCode](enums/ExitCode.md)
- [ProxyFlags](enums/ProxyFlags.md)
- [ServiceStatus](enums/ServiceStatus.md)

### Classes

- [Application](classes/Application.md)
- [ArrayCollection](classes/ArrayCollection.md)
- [CacheManager](classes/CacheManager.md)
- [CacheServiceProvider](classes/CacheServiceProvider.md)
- [Collection](classes/Collection.md)
- [ConfigRepository](classes/ConfigRepository.md)
- [CoreServiceProvider](classes/CoreServiceProvider.md)
- [DirectoryStorage](classes/DirectoryStorage.md)
- [Dispatcher](classes/Dispatcher.md)
- [DispatcherMixin](classes/DispatcherMixin.md)
- [FileCacheAdapter](classes/FileCacheAdapter.md)
- [Manager](classes/Manager.md)
- [PATH](classes/PATH.md)
- [Process](classes/Process.md)
- [ProcessManager](classes/ProcessManager.md)
- [Repository](classes/Repository.md)
- [Service](classes/Service.md)
- [ServiceManager](classes/ServiceManager.md)
- [SystemServiceProvider](classes/SystemServiceProvider.md)
- [TypeDefinitionBuilder](classes/TypeDefinitionBuilder.md)

### Interfaces

- [Bindings](interfaces/Bindings.md)
- [CacheAdapter](interfaces/CacheAdapter.md)
- [CacheConfiguration](interfaces/CacheConfiguration.md)
- [ConfigPart](interfaces/ConfigPart.md)
- [DirectoryStorageOptions](interfaces/DirectoryStorageOptions.md)
- [DispatcherEvents](interfaces/DispatcherEvents.md)
- [EnvPaths](interfaces/EnvPaths.md)
- [EnvPathsOptions](interfaces/EnvPathsOptions.md)
- [FileCacheAdapterOptions](interfaces/FileCacheAdapterOptions.md)
- [Hooks](interfaces/Hooks.md)
- [ListenerFn](interfaces/ListenerFn.md)
- [PathSearchOptions](interfaces/PathSearchOptions.md)
- [Paths](interfaces/Paths.md)
- [ProcessManagerData](interfaces/ProcessManagerData.md)
- [SystemConfiguration](interfaces/SystemConfiguration.md)

### Type aliases

- [BlockType](README.md#blocktype)
- [DispatcherEvent](README.md#dispatcherevent)
- [GetServiceIdentifier](README.md#getserviceidentifier)
- [StartFn](README.md#startfn)

### Variables

- [app](README.md#app)

### Functions

- [binding](README.md#binding)
- [decorate](README.md#decorate)
- [id](README.md#id)
- [inject](README.md#inject)
- [injectable](README.md#injectable)
- [isCacheAdapter](README.md#iscacheadapter)
- [makeProxy](README.md#makeproxy)
- [named](README.md#named)
- [optional](README.md#optional)
- [postConstruct](README.md#postconstruct)
- [singleton](README.md#singleton)
- [tagged](README.md#tagged)
- [targetName](README.md#targetname)
- [unmanaged](README.md#unmanaged)

## Type aliases

### BlockType

Ƭ **BlockType**: ``"namespace"`` \| ``"interface"`` \| ``"class"`` \| `string`

#### Defined in

[packages/core/src/Support/TypeDefinitionBuilder.ts:1](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Support/TypeDefinitionBuilder.ts#L1)

___

### DispatcherEvent

Ƭ **DispatcherEvent**: keyof [`DispatcherEvents`](interfaces/DispatcherEvents.md)

#### Defined in

[packages/core/src/Dispatcher/Dispatcher.ts:60](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Dispatcher/Dispatcher.ts#L60)

___

### GetServiceIdentifier

Ƭ **GetServiceIdentifier**<`T`\>: keyof [`Bindings`](interfaces/Bindings.md) \| `interfaces.ServiceIdentifier`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/core/src/Foundation/Application.ts:19](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L19)

___

### StartFn

Ƭ **StartFn**: <T\>(`app`: [`Application`](classes/Application.md), ...`args`: `any`[]) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`app`, ...`args`): `Promise`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`Application`](classes/Application.md) |
| `...args` | `any`[] |

##### Returns

`Promise`<`T`\>

#### Defined in

[packages/core/src/Foundation/Application.ts:82](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L82)

## Variables

### app

• **app**: [`Application`](classes/Application.md) = `Application.instance`

#### Defined in

[packages/core/src/Foundation/index.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/index.ts#L9)

## Functions

### binding

▸ `Const` **binding**<`T`\>(`serviceIdentifier`): (`target`: `any`) => `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`unknown`\> |

#### Returns

`fn`

▸ (`target`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

##### Returns

`any`

#### Defined in

[packages/core/src/Foundation/index.ts:21](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/index.ts#L21)

___

### decorate

▸ **decorate**(`decorator`, `target`, `parameterIndexOrProperty?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decorator` | `DecoratorTarget`<`unknown`\> \| `ParameterDecorator` \| `MethodDecorator` |
| `target` | `any` |
| `parameterIndexOrProperty?` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/annotation/decorator_utils.d.ts:15

___

### id

▸ **id**(): `number`

#### Returns

`number`

#### Defined in

node_modules/inversify/lib/utils/id.d.ts:1

___

### inject

▸ `Const` **inject**(`serviceIdentifier`): (`proto`: `any`, `key`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | keyof [`Bindings`](interfaces/Bindings.md) |

#### Returns

`fn`

▸ (`proto`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `proto` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[packages/core/src/Foundation/index.ts:12](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/index.ts#L12)

___

### injectable

▸ **injectable**(): <T\>(`target`: `T`) => `T`

#### Returns

`fn`

▸ <`T`\>(`target`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `never`) => `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

##### Returns

`T`

#### Defined in

node_modules/inversify/lib/annotation/injectable.d.ts:1

___

### isCacheAdapter

▸ `Const` **isCacheAdapter**(`val`): val is CacheAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

val is CacheAdapter

#### Defined in

[packages/core/src/Cache/CacheAdapter.ts:24](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheAdapter.ts#L24)

___

### makeProxy

▸ **makeProxy**<`T`\>(`repository`): [`Repository`](classes/Repository.md)<`T`\> & `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `repository` | [`Repository`](classes/Repository.md)<`T`\> |

#### Returns

[`Repository`](classes/Repository.md)<`T`\> & `T`

#### Defined in

[packages/core/src/Config/Repository.ts:78](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Config/Repository.ts#L78)

___

### named

▸ **named**(`name`): <T\>(`target`: `DecoratorTarget`, `targetKey?`: `string` \| `symbol`, `indexOrPropertyDescriptor?`: `number` \| `TypedPropertyDescriptor`<`T`\>) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `number` \| `symbol` |

#### Returns

`fn`

▸ <`T`\>(`target`, `targetKey?`, `indexOrPropertyDescriptor?`): `void`

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `DecoratorTarget` |
| `targetKey?` | `string` \| `symbol` |
| `indexOrPropertyDescriptor?` | `number` \| `TypedPropertyDescriptor`<`T`\> |

##### Returns

`void`

#### Defined in

node_modules/inversify/lib/annotation/named.d.ts:1

___

### optional

▸ **optional**(): <T\>(`target`: `DecoratorTarget`, `targetKey?`: `string` \| `symbol`, `indexOrPropertyDescriptor?`: `number` \| `TypedPropertyDescriptor`<`T`\>) => `void`

#### Returns

`fn`

▸ <`T`\>(`target`, `targetKey?`, `indexOrPropertyDescriptor?`): `void`

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `DecoratorTarget` |
| `targetKey?` | `string` \| `symbol` |
| `indexOrPropertyDescriptor?` | `number` \| `TypedPropertyDescriptor`<`T`\> |

##### Returns

`void`

#### Defined in

node_modules/inversify/lib/annotation/optional.d.ts:1

___

### postConstruct

▸ `Const` **postConstruct**(): (`target`: { `constructor`: `NewableFunction`  }, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `target.constructor` | `NewableFunction` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

node_modules/inversify/lib/annotation/post_construct.d.ts:1

___

### singleton

▸ `Const` **singleton**<`T`\>(`identifier`, `onActivation?`): (`target`: `any`) => `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `any` |
| `onActivation?` | (`context`: `Context`, `injectable`: `T`) => `T` |

#### Returns

`fn`

▸ (`target`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

##### Returns

`any`

#### Defined in

[packages/core/src/Foundation/index.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/index.ts#L14)

___

### tagged

▸ **tagged**<`T`\>(`metadataKey`, `metadataValue`): <T_1\>(`target`: `DecoratorTarget`, `targetKey?`: `string` \| `symbol`, `indexOrPropertyDescriptor?`: `number` \| `TypedPropertyDescriptor`<`T_1`\>) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadataKey` | `string` \| `number` \| `symbol` |
| `metadataValue` | `unknown` |

#### Returns

`fn`

▸ <`T_1`\>(`target`, `targetKey?`, `indexOrPropertyDescriptor?`): `void`

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `DecoratorTarget` |
| `targetKey?` | `string` \| `symbol` |
| `indexOrPropertyDescriptor?` | `number` \| `TypedPropertyDescriptor`<`T_1`\> |

##### Returns

`void`

#### Defined in

node_modules/inversify/lib/annotation/tagged.d.ts:1

___

### targetName

▸ **targetName**(`name`): (`target`: `DecoratorTarget`, `targetKey`: `string`, `index`: `number`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`fn`

▸ (`target`, `targetKey`, `index`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `DecoratorTarget` |
| `targetKey` | `string` |
| `index` | `number` |

##### Returns

`void`

#### Defined in

node_modules/inversify/lib/annotation/target_name.d.ts:2

___

### unmanaged

▸ **unmanaged**(): (`target`: `DecoratorTarget`, `targetKey`: `string`, `index`: `number`) => `void`

#### Returns

`fn`

▸ (`target`, `targetKey`, `index`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `DecoratorTarget` |
| `targetKey` | `string` |
| `index` | `number` |

##### Returns

`void`

#### Defined in

node_modules/inversify/lib/annotation/unmanaged.d.ts:2
