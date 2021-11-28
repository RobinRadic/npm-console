[@radic/console-input](../README.md) / [Exports](../modules.md) / MaxinputQuestion

# Interface: MaxinputQuestion<T\>

Provides options for a question for the `InputPrompt`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- [`MaxinputQuestionOptions`](MaxinputQuestionOptions.md)<`T`\>

  ↳ **`MaxinputQuestion`**

## Table of contents

### Properties

- [default](MaxinputQuestion.md#default)
- [maxLength](MaxinputQuestion.md#maxlength)
- [message](MaxinputQuestion.md#message)
- [name](MaxinputQuestion.md#name)
- [prefix](MaxinputQuestion.md#prefix)
- [suffix](MaxinputQuestion.md#suffix)
- [type](MaxinputQuestion.md#type)
- [when](MaxinputQuestion.md#when)

### Methods

- [filter](MaxinputQuestion.md#filter)
- [validate](MaxinputQuestion.md#validate)

## Properties

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[default](MaxinputQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### maxLength

• `Optional` **maxLength**: `number`

#### Inherited from

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[maxLength](MaxinputQuestionOptions.md#maxlength)

#### Defined in

[packages/console-input/src/types.ts:365](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L365)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[message](MaxinputQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[name](MaxinputQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[prefix](MaxinputQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[suffix](MaxinputQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### type

• `Optional` **type**: ``"maxlength-input"``

The type of the question.

#### Overrides

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[type](MaxinputQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:378](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L378)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[when](MaxinputQuestionOptions.md#when)

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

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[filter](MaxinputQuestionOptions.md#filter)

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

[MaxinputQuestionOptions](MaxinputQuestionOptions.md).[validate](MaxinputQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
