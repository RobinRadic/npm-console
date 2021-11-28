[@radic/console-input](../README.md) / DirectoryQuestionOptions

# Interface: DirectoryQuestionOptions<T\>

Provides options for a question for the `InputPrompt`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- `Question`<`T`\>

  ↳ **`DirectoryQuestionOptions`**

  ↳↳ [`DirectoryQuestion`](DirectoryQuestion.md)

## Table of contents

### Properties

- [basePath](DirectoryQuestionOptions.md#basepath)
- [default](DirectoryQuestionOptions.md#default)
- [message](DirectoryQuestionOptions.md#message)
- [name](DirectoryQuestionOptions.md#name)
- [prefix](DirectoryQuestionOptions.md#prefix)
- [suffix](DirectoryQuestionOptions.md#suffix)
- [type](DirectoryQuestionOptions.md#type)
- [when](DirectoryQuestionOptions.md#when)

### Methods

- [filter](DirectoryQuestionOptions.md#filter)
- [validate](DirectoryQuestionOptions.md#validate)

## Properties

### basePath

• `Optional` **basePath**: `string`

#### Defined in

[packages/console-input/src/types.ts:257](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L257)

___

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

Question.default

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

Question.message

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

Question.name

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

Question.prefix

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

Question.suffix

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### type

• `Optional` **type**: `string`

The type of the question.

#### Inherited from

Question.type

#### Defined in

node_modules/@types/inquirer/index.d.ts:262

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

Question.when

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

Question.filter

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

Question.validate

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
