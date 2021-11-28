[@radic/core](../README.md) / Application

# Class: Application

Deferred providers will for the first call of this function be prevented to register.
The provider will still be passed to the bootProvider function wich will for the first call also prevent booting
but bootProvider will set deferred to false. So on the second call of this function, it will be registered and booted

## Hierarchy

- `Container`

  ↳ **`Application`**

## Table of contents

### Constructors

- [constructor](Application.md#constructor)

### Properties

- [booted](Application.md#booted)
- [cache](Application.md#cache)
- [config](Application.md#config)
- [configParts](Application.md#configparts)
- [events](Application.md#events)
- [hooks](Application.md#hooks)
- [id](Application.md#id)
- [loaded](Application.md#loaded)
- [options](Application.md#options)
- [parent](Application.md#parent)
- [path](Application.md#path)
- [paths](Application.md#paths)
- [pkg](Application.md#pkg)
- [processes](Application.md#processes)
- [providers](Application.md#providers)
- [services](Application.md#services)
- [started](Application.md#started)
- [\_instance](Application.md#_instance)

### Accessors

- [bindingDictionary](Application.md#bindingdictionary)
- [instance](Application.md#instance)

### Methods

- [addBindingGetter](Application.md#addbindinggetter)
- [addConfig](Application.md#addconfig)
- [applyCustomMetadataReader](Application.md#applycustommetadatareader)
- [applyMiddleware](Application.md#applymiddleware)
- [bind](Application.md#bind)
- [binder](Application.md#binder)
- [binding](Application.md#binding)
- [boot](Application.md#boot)
- [bootProvider](Application.md#bootprovider)
- [createChild](Application.md#createchild)
- [error](Application.md#error)
- [exit](Application.md#exit)
- [get](Application.md#get)
- [getAll](Application.md#getall)
- [getAllAsync](Application.md#getallasync)
- [getAllNamed](Application.md#getallnamed)
- [getAllNamedAsync](Application.md#getallnamedasync)
- [getAllTagged](Application.md#getalltagged)
- [getAllTaggedAsync](Application.md#getalltaggedasync)
- [getAsync](Application.md#getasync)
- [getNamed](Application.md#getnamed)
- [getNamedAsync](Application.md#getnamedasync)
- [getTagged](Application.md#gettagged)
- [getTaggedAsync](Application.md#gettaggedasync)
- [initialize](Application.md#initialize)
- [instance](Application.md#instance)
- [isBooted](Application.md#isbooted)
- [isBound](Application.md#isbound)
- [isBoundNamed](Application.md#isboundnamed)
- [isBoundTagged](Application.md#isboundtagged)
- [isCurrentBound](Application.md#iscurrentbound)
- [isStarted](Application.md#isstarted)
- [load](Application.md#load)
- [loadAsync](Application.md#loadasync)
- [loadConfig](Application.md#loadconfig)
- [loadProvider](Application.md#loadprovider)
- [loadProviders](Application.md#loadproviders)
- [onActivation](Application.md#onactivation)
- [onDeactivation](Application.md#ondeactivation)
- [rebind](Application.md#rebind)
- [rebindAsync](Application.md#rebindasync)
- [register](Application.md#register)
- [registerPaths](Application.md#registerpaths)
- [registerProviders](Application.md#registerproviders)
- [resolve](Application.md#resolve)
- [restore](Application.md#restore)
- [singleton](Application.md#singleton)
- [snapshot](Application.md#snapshot)
- [start](Application.md#start)
- [unbind](Application.md#unbind)
- [unbindAll](Application.md#unbindall)
- [unbindAllAsync](Application.md#unbindallasync)
- [unbindAsync](Application.md#unbindasync)
- [unload](Application.md#unload)
- [unloadAsync](Application.md#unloadasync)
- [getInstance](Application.md#getinstance)
- [merge](Application.md#merge)

## Constructors

### constructor

• `Private` **new Application**()

Create a new Application instance.

#### Defined in

[packages/core/src/Foundation/Application.ts:184](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L184)

## Properties

### booted

• `Protected` **booted**: `boolean` = `false`

The booted flag.

#### Defined in

[packages/core/src/Foundation/Application.ts:129](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L129)

___

### cache

• **cache**: [`CacheManager`](CacheManager.md)

#### Defined in

[packages/core/src/Cache/CacheServiceProvider.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Cache/CacheServiceProvider.ts#L9)

___

### config

• **config**: [`ConfigRepository`](ConfigRepository.md)<`Configuration`\> & `Configuration`

#### Defined in

[packages/core/src/Foundation/Application.ts:41](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L41)

___

### configParts

• `Protected` **configParts**: [`ConfigPart`](../interfaces/ConfigPart.md)<`any`, `any`\>[] = `[]`

#### Defined in

[packages/core/src/Foundation/Application.ts:224](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L224)

___

### events

• **events**: [`Dispatcher`](Dispatcher.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:40](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L40)

___

### hooks

• **hooks**: [`Hooks`](../interfaces/Hooks.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:179](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L179)

___

### id

• **id**: `number`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:3

___

### loaded

• `Protected` **loaded**: `Object` = `{}`

Loaded service providers.

#### Defined in

[packages/core/src/Foundation/Application.ts:124](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L124)

___

### options

• `Readonly` **options**: `ContainerOptions`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:5

___

### parent

• **parent**: `Container`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:4

___

### path

• **path**: [`PATH`](PATH.md)

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:11](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L11)

___

### paths

• **paths**: [`Paths`](../interfaces/Paths.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:42](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L42)

___

### pkg

• **pkg**: `PackageJson`

#### Defined in

[packages/core/src/Foundation/Application.ts:44](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L44)

___

### processes

• **processes**: [`ProcessManager`](ProcessManager.md)

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:10](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L10)

___

### providers

• `Protected` **providers**: `any`[] = `[]`

Configured service providers.

#### Defined in

[packages/core/src/Foundation/Application.ts:119](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L119)

___

### services

• **services**: [`ServiceManager`](ServiceManager.md)

#### Defined in

[packages/core/src/System/SystemServiceProvider.ts:9](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/System/SystemServiceProvider.ts#L9)

___

### started

• `Protected` **started**: `boolean` = `false`

The started flag.

#### Defined in

[packages/core/src/Foundation/Application.ts:134](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L134)

___

### \_instance

▪ `Static` `Protected` **\_instance**: [`Application`](Application.md)

The application instance.

#### Defined in

[packages/core/src/Foundation/Application.ts:114](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L114)

## Accessors

### bindingDictionary

• `get` **bindingDictionary**(): `Lookup`<`Binding`<[`Bindings`](../interfaces/Bindings.md)\>\>

#### Returns

`Lookup`<`Binding`<[`Bindings`](../interfaces/Bindings.md)\>\>

#### Defined in

[packages/core/src/Foundation/Application.ts:159](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L159)

___

### instance

• `Static` `get` **instance**(): [`Application`](Application.md)

Get/create the instance.

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:139](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L139)

## Methods

### addBindingGetter

▸ **addBindingGetter**(`id`, `key?`): [`Application`](Application.md)

Add a getter for the binding.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `key` | `string` | `null` |

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:552](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L552)

___

### addConfig

▸ **addConfig**<`T`, `K`\>(`config`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ConfigPart`](../interfaces/ConfigPart.md)<`T`, `K`\> |

#### Returns

`void`

#### Defined in

[packages/core/src/Foundation/Application.ts:226](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L226)

___

### applyCustomMetadataReader

▸ **applyCustomMetadataReader**(`metadataReader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadataReader` | `MetadataReader` |

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:36

___

### applyMiddleware

▸ **applyMiddleware**(...`middlewares`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | `Middleware`[] |

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:35

___

### bind

▸ **bind**<`T`\>(`serviceIdentifier`): `BindingToSyntax`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |

#### Returns

`BindingToSyntax`<`T`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:19

___

### binder

▸ **binder**<`T`\>(`serviceIdentifier`, `func`, `singleton?`): `BindingInWhenOnSyntax`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `func` | (`app`: [`Application`](Application.md)) => `T` |
| `singleton?` | `boolean` |

#### Returns

`BindingInWhenOnSyntax`<`T`\>

#### Defined in

[packages/core/src/Foundation/Application.ts:514](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L514)

▸ **binder**<`T`\>(`serviceIdentifier`, `constructor`, `singleton?`): `BindingInWhenOnSyntax`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `constructor` | (...`args`: `any`[]) => `T` |
| `singleton?` | `boolean` |

#### Returns

`BindingInWhenOnSyntax`<`T`\>

#### Defined in

[packages/core/src/Foundation/Application.ts:515](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L515)

___

### binding

▸ **binding**<`T`\>(`serviceIdentifier`, `func`, `singleton?`): [`Application`](Application.md)

Register a binding.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `func` | (`app`: [`Application`](Application.md)) => `T` |
| `singleton?` | `boolean` |

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:500](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L500)

▸ **binding**<`T`\>(`serviceIdentifier`, `constructor`, `singleton?`): [`Application`](Application.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `constructor` | (...`args`: `any`[]) => `T` |
| `singleton?` | `boolean` |

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:501](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L501)

___

### boot

▸ **boot**(): `Promise`<[`Application`](Application.md)\>

Boot the application.

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[packages/core/src/Foundation/Application.ts:395](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L395)

___

### bootProvider

▸ `Protected` **bootProvider**(`provider`): `Promise`<[`Application`](Application.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `IServiceProvider` |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[packages/core/src/Foundation/Application.ts:416](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L416)

___

### createChild

▸ **createChild**(`containerOptions?`): `Container`

#### Parameters

| Name | Type |
| :------ | :------ |
| `containerOptions?` | `ContainerOptions` |

#### Returns

`Container`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:34

___

### error

▸ **error**(`error`, `exit?`): [`Application`](Application.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` \| `Error` |
| `exit?` | `boolean` \| [`ExitCode`](../enums/ExitCode.md) |

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:457](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L457)

___

### exit

▸ **exit**(`exitCode?`): `never`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `exitCode` | [`ExitCode`](../enums/ExitCode.md) | `ExitCode.OK` |

#### Returns

`never`

#### Defined in

[packages/core/src/Foundation/Application.ts:452](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L452)

___

### get

▸ **get**<`T`, `C`\>(`si`): `C` extends keyof [`Bindings`](../interfaces/Bindings.md) ? [`Bindings`](../interfaces/Bindings.md)[`C`] : `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`GetServiceIdentifier`](../README.md#getserviceidentifier)<`T`\> = [`GetServiceIdentifier`](../README.md#getserviceidentifier)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `si` | `C` |

#### Returns

`C` extends keyof [`Bindings`](../interfaces/Bindings.md) ? [`Bindings`](../interfaces/Bindings.md)[`C`] : `T`

#### Defined in

[packages/core/src/Foundation/Application.ts:46](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L46)

___

### getAll

▸ **getAll**<`T`\>(`serviceIdentifier`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |

#### Returns

`T`[]

#### Defined in

node_modules/inversify/lib/container/container.d.ts:43

___

### getAllAsync

▸ **getAllAsync**<`T`\>(`serviceIdentifier`): `Promise`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |

#### Returns

`Promise`<`T`[]\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:44

___

### getAllNamed

▸ **getAllNamed**<`T`\>(`serviceIdentifier`, `named`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `named` | `string` \| `number` \| `symbol` |

#### Returns

`T`[]

#### Defined in

node_modules/inversify/lib/container/container.d.ts:47

___

### getAllNamedAsync

▸ **getAllNamedAsync**<`T`\>(`serviceIdentifier`, `named`): `Promise`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `named` | `string` \| `number` \| `symbol` |

#### Returns

`Promise`<`T`[]\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:48

___

### getAllTagged

▸ **getAllTagged**<`T`\>(`serviceIdentifier`, `key`, `value`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `key` | `string` \| `number` \| `symbol` |
| `value` | `unknown` |

#### Returns

`T`[]

#### Defined in

node_modules/inversify/lib/container/container.d.ts:45

___

### getAllTaggedAsync

▸ **getAllTaggedAsync**<`T`\>(`serviceIdentifier`, `key`, `value`): `Promise`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `key` | `string` \| `number` \| `symbol` |
| `value` | `unknown` |

#### Returns

`Promise`<`T`[]\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:46

___

### getAsync

▸ **getAsync**<`T`\>(`serviceIdentifier`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:38

___

### getNamed

▸ **getNamed**<`T`\>(`serviceIdentifier`, `named`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `named` | `string` \| `number` \| `symbol` |

#### Returns

`T`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:41

___

### getNamedAsync

▸ **getNamedAsync**<`T`\>(`serviceIdentifier`, `named`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `named` | `string` \| `number` \| `symbol` |

#### Returns

`Promise`<`T`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:42

___

### getTagged

▸ **getTagged**<`T`\>(`serviceIdentifier`, `key`, `value`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `key` | `string` \| `number` \| `symbol` |
| `value` | `unknown` |

#### Returns

`T`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:39

___

### getTaggedAsync

▸ **getTaggedAsync**<`T`\>(`serviceIdentifier`, `key`, `value`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `key` | `string` \| `number` \| `symbol` |
| `value` | `unknown` |

#### Returns

`Promise`<`T`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:40

___

### initialize

▸ **initialize**(`options?`): `Promise`<[`Application`](Application.md)\>

Initialize the application.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ApplicationInitOptions` |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[packages/core/src/Foundation/Application.ts:240](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L240)

___

### instance

▸ **instance**<`Type`\>(`serviceIdentifier`, `value`): [`Application`](Application.md)

Register an instance binding.

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`Type`\> |
| `value` | `Type` |

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:535](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L535)

___

### isBooted

▸ **isBooted**(): `boolean`

Return whether the
application has booted.

#### Returns

`boolean`

bool

#### Defined in

[packages/core/src/Foundation/Application.ts:169](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L169)

___

### isBound

▸ **isBound**(`serviceIdentifier`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`any`\> |

#### Returns

`boolean`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:28

___

### isBoundNamed

▸ **isBoundNamed**(`serviceIdentifier`, `named`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`unknown`\> |
| `named` | `string` \| `number` \| `symbol` |

#### Returns

`boolean`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:30

___

### isBoundTagged

▸ **isBoundTagged**(`serviceIdentifier`, `key`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`unknown`\> |
| `key` | `string` \| `number` \| `symbol` |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:31

___

### isCurrentBound

▸ **isCurrentBound**<`T`\>(`serviceIdentifier`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |

#### Returns

`boolean`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:29

___

### isStarted

▸ **isStarted**(): `boolean`

Return whether the
application has started.

#### Returns

`boolean`

bool

#### Defined in

[packages/core/src/Foundation/Application.ts:177](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L177)

___

### load

▸ **load**(...`modules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...modules` | `ContainerModule`[] |

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:15

___

### loadAsync

▸ **loadAsync**(...`modules`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...modules` | `AsyncContainerModule`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:16

___

### loadConfig

▸ `Protected` **loadConfig**(`config`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Configuration` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/Foundation/Application.ts:251](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L251)

___

### loadProvider

▸ `Protected` **loadProvider**(`Provider`): `Promise`<`IServiceProvider`\>

Load the given provider.

#### Parameters

| Name | Type |
| :------ | :------ |
| `Provider` | `IServiceProviderClass` |

#### Returns

`Promise`<`IServiceProvider`\>

#### Defined in

[packages/core/src/Foundation/Application.ts:287](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L287)

___

### loadProviders

▸ `Protected` **loadProviders**(`Providers`): `Promise`<[`Application`](Application.md)\>

Load service providers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `Providers` | `IServiceProviderClass`[] |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[packages/core/src/Foundation/Application.ts:274](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L274)

___

### onActivation

▸ **onActivation**<`T`\>(`serviceIdentifier`, `onActivation`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `onActivation` | `BindingActivation`<`T`\> |

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:26

___

### onDeactivation

▸ **onDeactivation**<`T`\>(`serviceIdentifier`, `onDeactivation`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |
| `onDeactivation` | `BindingDeactivation`<`T`\> |

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:27

___

### rebind

▸ **rebind**<`T`\>(`serviceIdentifier`): `BindingToSyntax`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |

#### Returns

`BindingToSyntax`<`T`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:20

___

### rebindAsync

▸ **rebindAsync**<`T`\>(`serviceIdentifier`): `Promise`<`BindingToSyntax`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`T`\> |

#### Returns

`Promise`<`BindingToSyntax`<`T`\>\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:21

___

### register

▸ **register**(`Provider`): `Promise`<[`Application`](Application.md)\>

Register a Service Provider, if not instantiated, it will load the providers instance.

**`see`** IServiceProvider

**`see`** IServiceProviderClass

**`see`** loadProvider

#### Parameters

| Name | Type |
| :------ | :------ |
| `Provider` | `IServiceProviderClass` \| `IServiceProvider` |

#### Returns

`Promise`<[`Application`](Application.md)\>

#### Defined in

[packages/core/src/Foundation/Application.ts:358](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L358)

___

### registerPaths

▸ **registerPaths**(`cwd?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cwd?` | `string` |

#### Returns

`void`

#### Defined in

[packages/core/src/Foundation/Application.ts:200](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L200)

___

### registerProviders

▸ `Protected` **registerProviders**(`providers`): `Promise`<[`Application`](Application.md)\>

Register all given providers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providers` | `IServiceProvider`[] | An array of instantiated providers |

#### Returns

`Promise`<[`Application`](Application.md)\>

this

#### Defined in

[packages/core/src/Foundation/Application.ts:339](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L339)

___

### resolve

▸ **resolve**<`T`\>(`constructorFunction`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorFunction` | `Newable`<`T`\> |

#### Returns

`T`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:49

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:33

___

### singleton

▸ **singleton**<`Type`\>(`serviceIdentifier`, `constructor`): [`Application`](Application.md)

Register a singleton bindng.

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`Type`\> |
| `constructor` | (...`args`: `any`[]) => `Type` |

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:481](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L481)

▸ **singleton**<`Type`\>(`constructor`): [`Application`](Application.md)

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | (...`args`: `any`[]) => `Type` |

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:482](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L482)

___

### snapshot

▸ **snapshot**(): `void`

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:32

___

### start

▸ **start**<`T`\>(...`args`): `Promise`<`T`\>

Start the application.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/core/src/Foundation/Application.ts:438](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L438)

___

### unbind

▸ **unbind**(`serviceIdentifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`unknown`\> |

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:22

___

### unbindAll

▸ **unbindAll**(): `void`

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:24

___

### unbindAllAsync

▸ **unbindAllAsync**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:25

___

### unbindAsync

▸ **unbindAsync**(`serviceIdentifier`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifier`<`unknown`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:23

___

### unload

▸ **unload**(...`modules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...modules` | `ContainerModuleBase`[] |

#### Returns

`void`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:17

___

### unloadAsync

▸ **unloadAsync**(...`modules`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...modules` | `ContainerModuleBase`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/inversify/lib/container/container.d.ts:18

___

### getInstance

▸ `Static` **getInstance**(): [`Application`](Application.md)

Return a singleton
instance of Application

#### Returns

[`Application`](Application.md)

#### Defined in

[packages/core/src/Foundation/Application.ts:155](https://github.com/robinradic/npm-console/blob/10cb77f/packages/core/src/Foundation/Application.ts#L155)

___

### merge

▸ `Static` **merge**(`container1`, `container2`, ...`containers`): `Container`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container1` | `Container` |
| `container2` | `Container` |
| `...containers` | `Container`[] |

#### Returns

`Container`

#### Defined in

node_modules/inversify/lib/container/container.d.ts:13
