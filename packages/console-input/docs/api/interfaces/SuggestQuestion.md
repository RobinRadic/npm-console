[@radic/console-input](../README.md) / [Exports](../modules.md) / SuggestQuestion

# Interface: SuggestQuestion<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Answers` = `Answers` |

## Hierarchy

- [`SuggestQuestionOptions`](SuggestQuestionOptions.md)<`T`\>

  ↳ **`SuggestQuestion`**

## Table of contents

### Properties

- [default](SuggestQuestion.md#default)
- [message](SuggestQuestion.md#message)
- [name](SuggestQuestion.md#name)
- [prefix](SuggestQuestion.md#prefix)
- [suffix](SuggestQuestion.md#suffix)
- [suggestions](SuggestQuestion.md#suggestions)
- [type](SuggestQuestion.md#type)
- [when](SuggestQuestion.md#when)

### Methods

- [filter](SuggestQuestion.md#filter)
- [validate](SuggestQuestion.md#validate)

## Properties

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[SuggestQuestionOptions](SuggestQuestionOptions.md).[default](SuggestQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[SuggestQuestionOptions](SuggestQuestionOptions.md).[message](SuggestQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[SuggestQuestionOptions](SuggestQuestionOptions.md).[name](SuggestQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[SuggestQuestionOptions](SuggestQuestionOptions.md).[prefix](SuggestQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[SuggestQuestionOptions](SuggestQuestionOptions.md).[suffix](SuggestQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### suggestions

• `Optional` **suggestions**: `string`[]

#### Inherited from

[SuggestQuestionOptions](SuggestQuestionOptions.md).[suggestions](SuggestQuestionOptions.md#suggestions)

#### Defined in

[packages/console-input/src/types.ts:99](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L99)

___

### type

• `Optional` **type**: ``"suggest"``

The type of the question.

#### Overrides

[SuggestQuestionOptions](SuggestQuestionOptions.md).[type](SuggestQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:103](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L103)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[SuggestQuestionOptions](SuggestQuestionOptions.md).[when](SuggestQuestionOptions.md#when)

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

[SuggestQuestionOptions](SuggestQuestionOptions.md).[filter](SuggestQuestionOptions.md#filter)

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

[SuggestQuestionOptions](SuggestQuestionOptions.md).[validate](SuggestQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
