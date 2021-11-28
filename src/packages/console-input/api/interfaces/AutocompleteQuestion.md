[@radic/console-input](../README.md) / AutocompleteQuestion

# Interface: AutocompleteQuestion<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Answers` = `Answers` |

## Hierarchy

- [`AutocompleteQuestionOptions`](AutocompleteQuestionOptions.md)<`T`\>

  ↳ **`AutocompleteQuestion`**

## Table of contents

### Properties

- [default](AutocompleteQuestion.md#default)
- [emptyText](AutocompleteQuestion.md#emptytext)
- [message](AutocompleteQuestion.md#message)
- [name](AutocompleteQuestion.md#name)
- [pageSize](AutocompleteQuestion.md#pagesize)
- [prefix](AutocompleteQuestion.md#prefix)
- [searchText](AutocompleteQuestion.md#searchtext)
- [suffix](AutocompleteQuestion.md#suffix)
- [suggestOnly](AutocompleteQuestion.md#suggestonly)
- [type](AutocompleteQuestion.md#type)
- [when](AutocompleteQuestion.md#when)

### Methods

- [filter](AutocompleteQuestion.md#filter)
- [source](AutocompleteQuestion.md#source)
- [validate](AutocompleteQuestion.md#validate)

## Properties

### default

• `Optional` **default**: `string`

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[default](AutocompleteQuestionOptions.md#default)

#### Defined in

[packages/console-input/src/types.ts:277](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L277)

___

### emptyText

• `Optional` **emptyText**: `string`

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[emptyText](AutocompleteQuestionOptions.md#emptytext)

#### Defined in

[packages/console-input/src/types.ts:276](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L276)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[message](AutocompleteQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[name](AutocompleteQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### pageSize

• `Optional` **pageSize**: `number`

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[pageSize](AutocompleteQuestionOptions.md#pagesize)

#### Defined in

[packages/console-input/src/types.ts:278](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L278)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[prefix](AutocompleteQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### searchText

• `Optional` **searchText**: `string`

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[searchText](AutocompleteQuestionOptions.md#searchtext)

#### Defined in

[packages/console-input/src/types.ts:275](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L275)

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[suffix](AutocompleteQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### suggestOnly

• `Optional` **suggestOnly**: `boolean`

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[suggestOnly](AutocompleteQuestionOptions.md#suggestonly)

#### Defined in

[packages/console-input/src/types.ts:274](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L274)

___

### type

• `Optional` **type**: ``"autocomplete"``

The type of the question.

#### Overrides

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[type](AutocompleteQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:288](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L288)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[when](AutocompleteQuestionOptions.md#when)

#### Defined in

node_modules/@types/inquirer/index.d.ts:303

## Methods

### filter

▸ `Optional` **filter**(`options`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string`[] |

#### Returns

`string`[]

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[filter](AutocompleteQuestionOptions.md#filter)

#### Defined in

[packages/console-input/src/types.ts:280](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L280)

___

### source

▸ **source**(`answersSoFar`, `input`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `answersSoFar` | `Answers` |
| `input` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[source](AutocompleteQuestionOptions.md#source)

#### Defined in

[packages/console-input/src/types.ts:284](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L284)

___

### validate

▸ `Optional` **validate**(`line`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `string` |

#### Returns

`boolean`

#### Inherited from

[AutocompleteQuestionOptions](AutocompleteQuestionOptions.md).[validate](AutocompleteQuestionOptions.md#validate)

#### Defined in

[packages/console-input/src/types.ts:282](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L282)
