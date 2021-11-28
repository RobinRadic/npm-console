[@radic/console-input](../README.md) / FilePathQuestion

# Interface: FilePathQuestion<T\>

Provides options for a question for the `inquirer-file-path`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- [`PathQuestionOptions`](PathQuestionOptions.md)<`T`\>

  ↳ **`FilePathQuestion`**

## Table of contents

### Properties

- [basePath](FilePathQuestion.md#basepath)
- [default](FilePathQuestion.md#default)
- [message](FilePathQuestion.md#message)
- [name](FilePathQuestion.md#name)
- [prefix](FilePathQuestion.md#prefix)
- [suffix](FilePathQuestion.md#suffix)
- [type](FilePathQuestion.md#type)
- [when](FilePathQuestion.md#when)

### Methods

- [filter](FilePathQuestion.md#filter)
- [transformer](FilePathQuestion.md#transformer)
- [validate](FilePathQuestion.md#validate)

## Properties

### basePath

• `Optional` **basePath**: `string`

#### Defined in

[packages/console-input/src/types.ts:206](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L206)

___

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[default](PathQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

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

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[suffix](PathQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### type

• `Optional` **type**: ``"file-path"``

The type of the question.

#### Overrides

[PathQuestionOptions](PathQuestionOptions.md).[type](PathQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:205](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L205)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[when](PathQuestionOptions.md#when)

#### Defined in

node_modules/@types/inquirer/index.d.ts:303

## Methods

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

[packages/console-input/src/types.ts:140](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L140)

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
