[@radic/console-input](../README.md) / DatepickerQuestionOptions

# Interface: DatepickerQuestionOptions<T\>

Provides options for a question for the `InputPrompt`.

**`see`** https://github.com/DerekTBrown/inquirer-datepicker-prompt#inquirer-datepicker-prompt

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- `Question`<`T`\>

  ↳ **`DatepickerQuestionOptions`**

  ↳↳ [`DatepickerQuestion`](DatepickerQuestion.md)

## Table of contents

### Properties

- [date](DatepickerQuestionOptions.md#date)
- [default](DatepickerQuestionOptions.md#default)
- [format](DatepickerQuestionOptions.md#format)
- [initial](DatepickerQuestionOptions.md#initial)
- [message](DatepickerQuestionOptions.md#message)
- [name](DatepickerQuestionOptions.md#name)
- [prefix](DatepickerQuestionOptions.md#prefix)
- [suffix](DatepickerQuestionOptions.md#suffix)
- [time](DatepickerQuestionOptions.md#time)
- [type](DatepickerQuestionOptions.md#type)
- [when](DatepickerQuestionOptions.md#when)

### Methods

- [filter](DatepickerQuestionOptions.md#filter)
- [validate](DatepickerQuestionOptions.md#validate)

## Properties

### date

• `Optional` **date**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `string` |
| `min?` | `string` |

#### Defined in

[packages/console-input/src/types.ts:329](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L329)

___

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

Question.default

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### format

• `Optional` **format**: `string`[]

**`see`** https://github.com/felixge/node-dateformat/#mask-options

#### Defined in

[packages/console-input/src/types.ts:326](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L326)

___

### initial

• `Optional` **initial**: `number` \| `Date`

#### Defined in

[packages/console-input/src/types.ts:327](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L327)

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

### time

• `Optional` **time**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `string` |
| `min?` | `string` |
| `minutes?` | `Object` |
| `minutes.interval?` | `number` |

#### Defined in

[packages/console-input/src/types.ts:334](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L334)

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
