[@radic/console-input](../README.md) / SuggestQuestionOptions

# Interface: SuggestQuestionOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Question`<`T`\>

  ↳ **`SuggestQuestionOptions`**

  ↳↳ [`SuggestQuestion`](SuggestQuestion.md)

## Table of contents

### Properties

- [default](SuggestQuestionOptions.md#default)
- [message](SuggestQuestionOptions.md#message)
- [name](SuggestQuestionOptions.md#name)
- [prefix](SuggestQuestionOptions.md#prefix)
- [suffix](SuggestQuestionOptions.md#suffix)
- [suggestions](SuggestQuestionOptions.md#suggestions)
- [type](SuggestQuestionOptions.md#type)
- [when](SuggestQuestionOptions.md#when)

### Methods

- [filter](SuggestQuestionOptions.md#filter)
- [validate](SuggestQuestionOptions.md#validate)

## Properties

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

### suggestions

• `Optional` **suggestions**: `string`[]

#### Defined in

[packages/console-input/src/types.ts:99](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L99)

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
