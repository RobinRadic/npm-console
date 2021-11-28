[@radic/console-input](../README.md) / [Exports](../modules.md) / DatepickerQuestion

# Interface: DatepickerQuestion<T\>

Provides options for a question for the `InputPrompt`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- [`DatepickerQuestionOptions`](DatepickerQuestionOptions.md)<`T`\>

  ↳ **`DatepickerQuestion`**

## Table of contents

### Properties

- [date](DatepickerQuestion.md#date)
- [default](DatepickerQuestion.md#default)
- [format](DatepickerQuestion.md#format)
- [initial](DatepickerQuestion.md#initial)
- [message](DatepickerQuestion.md#message)
- [name](DatepickerQuestion.md#name)
- [prefix](DatepickerQuestion.md#prefix)
- [suffix](DatepickerQuestion.md#suffix)
- [time](DatepickerQuestion.md#time)
- [type](DatepickerQuestion.md#type)
- [when](DatepickerQuestion.md#when)

### Methods

- [filter](DatepickerQuestion.md#filter)
- [validate](DatepickerQuestion.md#validate)

## Properties

### date

• `Optional` **date**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `string` |
| `min?` | `string` |

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[date](DatepickerQuestionOptions.md#date)

#### Defined in

[packages/console-input/src/types.ts:329](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L329)

___

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[default](DatepickerQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### format

• `Optional` **format**: `string`[]

**`see`** https://github.com/felixge/node-dateformat/#mask-options

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[format](DatepickerQuestionOptions.md#format)

#### Defined in

[packages/console-input/src/types.ts:326](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L326)

___

### initial

• `Optional` **initial**: `number` \| `Date`

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[initial](DatepickerQuestionOptions.md#initial)

#### Defined in

[packages/console-input/src/types.ts:327](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L327)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[message](DatepickerQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[name](DatepickerQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[prefix](DatepickerQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[suffix](DatepickerQuestionOptions.md#suffix)

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

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[time](DatepickerQuestionOptions.md#time)

#### Defined in

[packages/console-input/src/types.ts:334](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L334)

___

### type

• `Optional` **type**: ``"datetime"``

The type of the question.

#### Overrides

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[type](DatepickerQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:354](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L354)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[when](DatepickerQuestionOptions.md#when)

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

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[filter](DatepickerQuestionOptions.md#filter)

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

[DatepickerQuestionOptions](DatepickerQuestionOptions.md).[validate](DatepickerQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
