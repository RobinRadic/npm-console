[@radic/console-input](../README.md) / DirectoryQuestion

# Interface: DirectoryQuestion<T\>

Provides options for a question for the `InputPrompt`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- [`DirectoryQuestionOptions`](DirectoryQuestionOptions.md)<`T`\>

  ↳ **`DirectoryQuestion`**

## Table of contents

### Properties

- [basePath](DirectoryQuestion.md#basepath)
- [default](DirectoryQuestion.md#default)
- [message](DirectoryQuestion.md#message)
- [name](DirectoryQuestion.md#name)
- [prefix](DirectoryQuestion.md#prefix)
- [suffix](DirectoryQuestion.md#suffix)
- [type](DirectoryQuestion.md#type)
- [when](DirectoryQuestion.md#when)

### Methods

- [filter](DirectoryQuestion.md#filter)
- [validate](DirectoryQuestion.md#validate)

## Properties

### basePath

• `Optional` **basePath**: `string`

#### Inherited from

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[basePath](DirectoryQuestionOptions.md#basepath)

#### Defined in

[packages/console-input/src/types.ts:257](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L257)

___

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[default](DirectoryQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[message](DirectoryQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[name](DirectoryQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[prefix](DirectoryQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[suffix](DirectoryQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### type

• `Optional` **type**: ``"directory"``

The type of the question.

#### Inherited from

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[type](DirectoryQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:270](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L270)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[when](DirectoryQuestionOptions.md#when)

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

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[filter](DirectoryQuestionOptions.md#filter)

#### Defined in

node_modules/@types/inquirer/index.d.ts:298

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

[DirectoryQuestionOptions](DirectoryQuestionOptions.md).[validate](DirectoryQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
