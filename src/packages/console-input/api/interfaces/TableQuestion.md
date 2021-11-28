[@radic/console-input](../README.md) / [Exports](../modules.md) / TableQuestion

# Interface: TableQuestion<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Answers` = `Answers` |

## Hierarchy

- [`TableQuestionOptions`](TableQuestionOptions.md)<`T`\>

  ↳ **`TableQuestion`**

## Table of contents

### Properties

- [columns](TableQuestion.md#columns)
- [default](TableQuestion.md#default)
- [message](TableQuestion.md#message)
- [name](TableQuestion.md#name)
- [pageSize](TableQuestion.md#pagesize)
- [prefix](TableQuestion.md#prefix)
- [rows](TableQuestion.md#rows)
- [suffix](TableQuestion.md#suffix)
- [type](TableQuestion.md#type)
- [when](TableQuestion.md#when)

### Methods

- [filter](TableQuestion.md#filter)
- [validate](TableQuestion.md#validate)

## Properties

### columns

• `Optional` **columns**: { `name?`: `string` ; `value?`: `string`  }[]

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[columns](TableQuestionOptions.md#columns)

#### Defined in

[packages/console-input/src/types.ts:108](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L108)

___

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[default](TableQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[message](TableQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[name](TableQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### pageSize

• `Optional` **pageSize**: `number`

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[pageSize](TableQuestionOptions.md#pagesize)

#### Defined in

[packages/console-input/src/types.ts:110](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L110)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[prefix](TableQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### rows

• `Optional` **rows**: { `name?`: `string` ; `value?`: `string`  }[]

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[rows](TableQuestionOptions.md#rows)

#### Defined in

[packages/console-input/src/types.ts:109](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L109)

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[suffix](TableQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### type

• `Optional` **type**: ``"table"``

The type of the question.

#### Overrides

[TableQuestionOptions](TableQuestionOptions.md).[type](TableQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:114](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L114)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[TableQuestionOptions](TableQuestionOptions.md).[when](TableQuestionOptions.md#when)

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

[TableQuestionOptions](TableQuestionOptions.md).[filter](TableQuestionOptions.md#filter)

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

[TableQuestionOptions](TableQuestionOptions.md).[validate](TableQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
