[@radic/console-input](../README.md) / ColorQuestion

# Interface: ColorQuestion<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Answers` = `Answers` |

## Hierarchy

- [`ColorQuestionOptions`](ColorQuestionOptions.md)<`T`\>

  ↳ **`ColorQuestion`**

## Table of contents

### Properties

- [default](ColorQuestion.md#default)
- [message](ColorQuestion.md#message)
- [name](ColorQuestion.md#name)
- [prefix](ColorQuestion.md#prefix)
- [suffix](ColorQuestion.md#suffix)
- [type](ColorQuestion.md#type)
- [when](ColorQuestion.md#when)

### Methods

- [filter](ColorQuestion.md#filter)
- [validate](ColorQuestion.md#validate)

## Properties

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[ColorQuestionOptions](ColorQuestionOptions.md).[default](ColorQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[ColorQuestionOptions](ColorQuestionOptions.md).[message](ColorQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[ColorQuestionOptions](ColorQuestionOptions.md).[name](ColorQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[ColorQuestionOptions](ColorQuestionOptions.md).[prefix](ColorQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[ColorQuestionOptions](ColorQuestionOptions.md).[suffix](ColorQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### type

• `Optional` **type**: ``"color"``

The type of the question.

#### Overrides

[ColorQuestionOptions](ColorQuestionOptions.md).[type](ColorQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:94](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L94)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[ColorQuestionOptions](ColorQuestionOptions.md).[when](ColorQuestionOptions.md#when)

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

[ColorQuestionOptions](ColorQuestionOptions.md).[filter](ColorQuestionOptions.md#filter)

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

[ColorQuestionOptions](ColorQuestionOptions.md).[validate](ColorQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
