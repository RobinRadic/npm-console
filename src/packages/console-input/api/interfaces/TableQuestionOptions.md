[@radic/console-input](../README.md) / [Exports](../modules.md) / TableQuestionOptions

# Interface: TableQuestionOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Question`<`T`\>

  ↳ **`TableQuestionOptions`**

  ↳↳ [`TableQuestion`](TableQuestion.md)

## Table of contents

### Properties

- [columns](TableQuestionOptions.md#columns)
- [default](TableQuestionOptions.md#default)
- [message](TableQuestionOptions.md#message)
- [name](TableQuestionOptions.md#name)
- [pageSize](TableQuestionOptions.md#pagesize)
- [prefix](TableQuestionOptions.md#prefix)
- [rows](TableQuestionOptions.md#rows)
- [suffix](TableQuestionOptions.md#suffix)
- [type](TableQuestionOptions.md#type)
- [when](TableQuestionOptions.md#when)

### Methods

- [filter](TableQuestionOptions.md#filter)
- [validate](TableQuestionOptions.md#validate)

## Properties

### columns

• `Optional` **columns**: { `name?`: `string` ; `value?`: `string`  }[]

#### Defined in

[packages/console-input/src/types.ts:108](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L108)

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

### pageSize

• `Optional` **pageSize**: `number`

#### Defined in

[packages/console-input/src/types.ts:110](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L110)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

Question.prefix

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### rows

• `Optional` **rows**: { `name?`: `string` ; `value?`: `string`  }[]

#### Defined in

[packages/console-input/src/types.ts:109](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L109)

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
