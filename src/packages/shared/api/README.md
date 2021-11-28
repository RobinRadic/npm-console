@radic/shared

# @radic/shared

## Table of contents

### Namespaces

- [Diff](modules/Diff.md)

### Classes

- [Diff](classes/Diff.md)
- [ServiceProvider](classes/ServiceProvider.md)
- [Str](classes/Str.md)

### Interfaces

- [EachDeepOptions](interfaces/EachDeepOptions.md)
- [IServiceProvider](interfaces/IServiceProvider.md)
- [KeysDeepOptions](interfaces/KeysDeepOptions.md)
- [PackageJson](interfaces/PackageJson.md)
- [PackageJsonAddress](interfaces/PackageJsonAddress.md)
- [PackageJsonPerson](interfaces/PackageJsonPerson.md)

### Type aliases

- [Constructor](README.md#constructor)
- [EachDeepCallback](README.md#eachdeepcallback)
- [IServiceProviderClass](README.md#iserviceproviderclass)
- [KindsOf](README.md#kindsof)
- [PackageJsonDependencyTypes](README.md#packagejsondependencytypes)
- [WhatIs](README.md#whatis)

### Functions

- [eachDeep](README.md#eachdeep)
- [firstBy](README.md#firstby)
- [getParamNames](README.md#getparamnames)
- [isArray](README.md#isarray)
- [isArrayable](README.md#isarrayable)
- [isBoolean](README.md#isboolean)
- [isConstructor](README.md#isconstructor)
- [isDate](README.md#isdate)
- [isES6Promise](README.md#ises6promise)
- [isError](README.md#iserror)
- [isFunction](README.md#isfunction)
- [isIterable](README.md#isiterable)
- [isNativePromise](README.md#isnativepromise)
- [isNothing](README.md#isnothing)
- [isNumber](README.md#isnumber)
- [isNumberObject](README.md#isnumberobject)
- [isNumericString](README.md#isnumericstring)
- [isObject](README.md#isobject)
- [isPromise](README.md#ispromise)
- [isRegExp](README.md#isregexp)
- [isServiceProviderClass](README.md#isserviceproviderclass)
- [isString](README.md#isstring)
- [isStringNumber](README.md#isstringnumber)
- [keysDeep](README.md#keysdeep)
- [kindOf](README.md#kindof)
- [makeLog](README.md#makelog)
- [objectify](README.md#objectify)
- [wait](README.md#wait)

## Type aliases

### Constructor

Ƭ **Constructor**<`Type`\>: (...`args`: `any`[]) => `Type`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `any` |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[ServiceProvider.ts:14](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/ServiceProvider.ts#L14)

___

### EachDeepCallback

Ƭ **EachDeepCallback**: (`value`: `any`, `key`: `string`, `path`: `string`, `depth`: `number`, `parent`: `any`, `parentKey`: `string`, `parentPath`: `string`, `parents`: { `keys`: `string`[] ; `paths`: `string`[] ; `values`: `any`[]  }) => ``false`` \| `void`

#### Type declaration

▸ (`value`, `key`, `path`, `depth`, `parent`, `parentKey`, `parentPath`, `parents`): ``false`` \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `key` | `string` |
| `path` | `string` |
| `depth` | `number` |
| `parent` | `any` |
| `parentKey` | `string` |
| `parentPath` | `string` |
| `parents` | `Object` |
| `parents.keys` | `string`[] |
| `parents.paths` | `string`[] |
| `parents.values` | `any`[] |

##### Returns

``false`` \| `void`

#### Defined in

[eachDeep.ts:79](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/eachDeep.ts#L79)

___

### IServiceProviderClass

Ƭ **IServiceProviderClass**: `Object`

#### Defined in

[ServiceProvider.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/ServiceProvider.ts#L16)

___

### KindsOf

Ƭ **KindsOf**: ``"number"`` \| ``"string"`` \| ``"boolean"`` \| ``"function"`` \| ``"regexp"`` \| ``"array"`` \| ``"date"`` \| ``"error"`` \| ``"object"``

#### Defined in

[kindOf.ts:1](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L1)

___

### PackageJsonDependencyTypes

Ƭ **PackageJsonDependencyTypes**: ``"dependencies"`` \| ``"devDependencies"`` \| ``"peerDependencies"`` \| ``"optionalDependencies"``

#### Defined in

[types/packageJson.ts:2](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/types/packageJson.ts#L2)

___

### WhatIs

Ƭ **WhatIs**: ``"null"`` \| ``"undefined"`` \| ``"scalar"`` \| ``"object"`` \| ``"array"``

#### Defined in

[Diff.ts:94](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/Diff.ts#L94)

## Functions

### eachDeep

▸ **eachDeep**<`T`\>(`obj`, `callback`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `callback` | [`EachDeepCallback`](README.md#eachdeepcallback) |
| `options?` | [`EachDeepOptions`](interfaces/EachDeepOptions.md) |

#### Returns

`T`

#### Defined in

[eachDeep.ts:81](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/eachDeep.ts#L81)

___

### firstBy

▸ **firstBy**<`T`\>(`compare`, `direction?`): `IThenBy`<`T`\>

Full format to compare two elements and determine which sorts first.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compare` | (`v1`: `T`, `v2`: `T`) => `number` | function that receives two values from the sorted array and returns a number indicating which comes first: < 0: first comes first, 0: doesn't matter, > 0: second comes first. |
| `direction?` | `SortOrder` \| `opt` | can be used to reverse the sorting by passing -1 |

#### Returns

`IThenBy`<`T`\>

#### Defined in

[thenBy.ts:91](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/thenBy.ts#L91)

▸ **firstBy**<`T`, `U`\>(`select`, `direction?`): `IThenBy`<`T`\>

Shorthand for selecting a value to sort on from the sorted element.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `select` | (`v`: `T`) => `U` | function that receives a value from the sorted array and selects the thing to sort on |
| `direction?` | `SortOrder` \| `typedOpt`<`U`\> | reverse by passing -1. opt for other options |

#### Returns

`IThenBy`<`T`\>

#### Defined in

[thenBy.ts:97](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/thenBy.ts#L97)

▸ **firstBy**<`T`\>(`byPropertyName`, `direction?`): `IThenBy`<`T`\>

Shorthand for sorting on a simple property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `byPropertyName` | keyof `T` | is the name of the property to sort on as a string |
| `direction?` | `SortOrder` \| `typedOpt`<`any`\> | reverse by passing -1. opt for other options |

#### Returns

`IThenBy`<`T`\>

#### Defined in

[thenBy.ts:103](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/thenBy.ts#L103)

___

### getParamNames

▸ **getParamNames**(`func`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`string`[]

#### Defined in

[utils.ts:7](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/utils.ts#L7)

___

### isArray

▸ `Const` **isArray**(`v`): v is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is any[]

#### Defined in

[kindOf.ts:31](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L31)

___

### isArrayable

▸ `Const` **isArrayable**<`T`\>(`v`): v is Iterable<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is Iterable<T\>

#### Defined in

[kindOf.ts:37](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L37)

___

### isBoolean

▸ `Const` **isBoolean**(`v`): v is boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is boolean

#### Defined in

[kindOf.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L28)

___

### isConstructor

▸ **isConstructor**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[kindOf.ts:66](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L66)

___

### isDate

▸ `Const` **isDate**(`v`): v is Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is Date

#### Defined in

[kindOf.ts:32](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L32)

___

### isES6Promise

▸ **isES6Promise**(`p`): `boolean`

**`see`** https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `any` |

#### Returns

`boolean`

#### Defined in

[kindOf.ts:51](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L51)

___

### isError

▸ `Const` **isError**(`v`): v is Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is Error

#### Defined in

[kindOf.ts:33](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L33)

___

### isFunction

▸ `Const` **isFunction**(`v`): v is Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is Function

#### Defined in

[kindOf.ts:29](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L29)

___

### isIterable

▸ `Const` **isIterable**(`v`): v is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is any[]

#### Defined in

[kindOf.ts:38](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L38)

___

### isNativePromise

▸ **isNativePromise**(`p`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `any` |

#### Returns

`boolean`

#### Defined in

[kindOf.ts:55](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L55)

___

### isNothing

▸ `Const` **isNothing**(`v`): v is null

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is null

#### Defined in

[kindOf.ts:36](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L36)

___

### isNumber

▸ `Const` **isNumber**(`v`): v is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is number

#### Defined in

[kindOf.ts:26](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L26)

___

### isNumberObject

▸ **isNumberObject**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

`boolean`

#### Defined in

[kindOf.ts:42](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L42)

___

### isNumericString

▸ `Const` **isNumericString**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

#### Defined in

[kindOf.ts:39](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L39)

___

### isObject

▸ `Const` **isObject**(`v`): v is object

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is object

#### Defined in

[kindOf.ts:34](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L34)

___

### isPromise

▸ **isPromise**<`T`\>(`p`): p is PromiseLike<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `any` |

#### Returns

p is PromiseLike<T\>

#### Defined in

[kindOf.ts:63](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L63)

___

### isRegExp

▸ `Const` **isRegExp**(`v`): v is RegExp

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is RegExp

#### Defined in

[kindOf.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L30)

___

### isServiceProviderClass

▸ `Const` **isServiceProviderClass**(`value`): value is IServiceProviderClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is IServiceProviderClass

#### Defined in

[ServiceProvider.ts:3](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/ServiceProvider.ts#L3)

___

### isString

▸ `Const` **isString**(`v`): v is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is string

#### Defined in

[kindOf.ts:27](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L27)

___

### isStringNumber

▸ `Const` **isStringNumber**(`v`): v is string \| number

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is string \| number

#### Defined in

[kindOf.ts:40](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L40)

___

### keysDeep

▸ **keysDeep**(`obj`, `options?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |
| `options?` | [`KeysDeepOptions`](interfaces/KeysDeepOptions.md) |

#### Returns

`any`[]

#### Defined in

[eachDeep.ts:96](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/eachDeep.ts#L96)

___

### kindOf

▸ **kindOf**(`v`): [`KindsOf`](README.md#kindsof)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`KindsOf`](README.md#kindsof)

#### Defined in

[kindOf.ts:16](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/kindOf.ts#L16)

___

### makeLog

▸ `Const` **makeLog**(`namespace`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`any`

#### Defined in

[utils.ts:1](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/utils.ts#L1)

___

### objectify

▸ `Const` **objectify**(`obj`, `__namedParameters`): `any`

**`example`**

params = Object.entries(params).filter(([ key, value ]) => {
    return value.toString().length > 0;
}).reduce(utils.objectify, {});

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `__namedParameters` | [`any`, `any`] |

#### Returns

`any`

#### Defined in

[utils.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/utils.ts#L28)

___

### wait

▸ **wait**(`ms`, `cycles?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ms` | `number` | `undefined` |
| `cycles` | `number` | `1` |

#### Returns

`Promise`<`void`\>

#### Defined in

[wait.ts:4](https://github.com/robinradic/npm-console/blob/10cb77f/packages/shared/src/wait.ts#L4)
