[@radic/console-input](../README.md) / [Exports](../modules.md) / FuzzypathQuestion

# Interface: FuzzypathQuestion<T\>

Provides options for a question for the `inquirer-fuzzy-path`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- [`PathQuestionOptions`](PathQuestionOptions.md)<`T`\>

  ↳ **`FuzzypathQuestion`**

## Table of contents

### Properties

- [default](FuzzypathQuestion.md#default)
- [depthLimit](FuzzypathQuestion.md#depthlimit)
- [itemType](FuzzypathQuestion.md#itemtype)
- [message](FuzzypathQuestion.md#message)
- [name](FuzzypathQuestion.md#name)
- [prefix](FuzzypathQuestion.md#prefix)
- [rootPath](FuzzypathQuestion.md#rootpath)
- [suffix](FuzzypathQuestion.md#suffix)
- [suggestOnly](FuzzypathQuestion.md#suggestonly)
- [type](FuzzypathQuestion.md#type)
- [when](FuzzypathQuestion.md#when)

### Methods

- [excludeFilter](FuzzypathQuestion.md#excludefilter)
- [excludePath](FuzzypathQuestion.md#excludepath)
- [filter](FuzzypathQuestion.md#filter)
- [transformer](FuzzypathQuestion.md#transformer)
- [validate](FuzzypathQuestion.md#validate)

## Properties

### default

• `Optional` **default**: `string`

The default value of the question.

#### Overrides

[PathQuestionOptions](PathQuestionOptions.md).[default](PathQuestionOptions.md#default)

#### Defined in

[packages/console-input/src/types.ts:185](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L185)

___

### depthLimit

• `Optional` **depthLimit**: `number`

#### Defined in

[packages/console-input/src/types.ts:189](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L189)

___

### itemType

• `Optional` **itemType**: ``"directory"`` \| ``"any"`` \| ``"file"``

#### Defined in

[packages/console-input/src/types.ts:177](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L177)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[message](PathQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[name](PathQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[prefix](PathQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### rootPath

• `Optional` **rootPath**: `string`

#### Defined in

[packages/console-input/src/types.ts:182](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L182)

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[suffix](PathQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### suggestOnly

• `Optional` **suggestOnly**: `boolean`

#### Defined in

[packages/console-input/src/types.ts:186](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L186)

___

### type

• `Optional` **type**: ``"fuzzypath"``

The type of the question.

#### Overrides

[PathQuestionOptions](PathQuestionOptions.md).[type](PathQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:170](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L170)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[when](PathQuestionOptions.md#when)

#### Defined in

node_modules/@types/inquirer/index.d.ts:303

## Methods

### excludeFilter

▸ `Optional` **excludeFilter**(`nodePath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodePath` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/console-input/src/types.ts:174](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L174)

___

### excludePath

▸ `Optional` **excludePath**(`nodePath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodePath` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/console-input/src/types.ts:171](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L171)

___

### filter

▸ `Optional` **filter**(`input`, `answers`): `any`

Post-processes the answer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The answer provided by the user. |
| `answers` | `T` | The answers provided by the user. |

#### Returns

`any`

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[filter](PathQuestionOptions.md#filter)

#### Defined in

node_modules/@types/inquirer/index.d.ts:298

___

### transformer

▸ `Optional` **transformer**(`input`, `answers`, `flags`): `string` \| `Promise`<`string`\>

Transforms the value to display to the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The input provided by the user. |
| `answers` | `T` | The answers provided by the users. |
| `flags` | `Object` | Additional information about the value. |
| `flags.isFinal?` | `boolean` | - |

#### Returns

`string` \| `Promise`<`string`\>

The value to display to the user.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[transformer](PathQuestionOptions.md#transformer)

#### Defined in

[packages/console-input/src/types.ts:140](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L140)

___

### validate

▸ `Optional` **validate**(`input`, `answers?`): `string` \| `boolean` \| `Promise`<`string` \| `boolean`\>

Validates the integrity of the answer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The answer provided by the user. |
| `answers?` | `T` | The answers provided by the user. |

#### Returns

`string` \| `boolean` \| `Promise`<`string` \| `boolean`\>

Either a value indicating whether the answer is valid or a `string` which describes the error.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[validate](PathQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
