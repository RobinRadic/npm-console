[@radic/console-input](../README.md) / AutocompleteQuestionOptions

# Interface: AutocompleteQuestionOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Question`<`T`\>

  ↳ **`AutocompleteQuestionOptions`**

  ↳↳ [`AutocompleteQuestion`](AutocompleteQuestion.md)

## Table of contents

### Properties

- [default](AutocompleteQuestionOptions.md#default)
- [emptyText](AutocompleteQuestionOptions.md#emptytext)
- [message](AutocompleteQuestionOptions.md#message)
- [name](AutocompleteQuestionOptions.md#name)
- [pageSize](AutocompleteQuestionOptions.md#pagesize)
- [prefix](AutocompleteQuestionOptions.md#prefix)
- [searchText](AutocompleteQuestionOptions.md#searchtext)
- [suffix](AutocompleteQuestionOptions.md#suffix)
- [suggestOnly](AutocompleteQuestionOptions.md#suggestonly)
- [type](AutocompleteQuestionOptions.md#type)
- [when](AutocompleteQuestionOptions.md#when)

### Methods

- [filter](AutocompleteQuestionOptions.md#filter)
- [source](AutocompleteQuestionOptions.md#source)
- [validate](AutocompleteQuestionOptions.md#validate)

## Properties

### default

• `Optional` **default**: `string`

#### Overrides

Question.default

#### Defined in

[packages/console-input/src/types.ts:277](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L277)

___

### emptyText

• `Optional` **emptyText**: `string`

#### Defined in

[packages/console-input/src/types.ts:276](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L276)

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

[packages/console-input/src/types.ts:278](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L278)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

Question.prefix

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### searchText

• `Optional` **searchText**: `string`

#### Defined in

[packages/console-input/src/types.ts:275](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L275)

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

Question.suffix

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### suggestOnly

• `Optional` **suggestOnly**: `boolean`

#### Defined in

[packages/console-input/src/types.ts:274](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L274)

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

▸ `Optional` **filter**(`options`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string`[] |

#### Returns

`string`[]

#### Overrides

Question.filter

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

#### Overrides

Question.validate

#### Defined in

[packages/console-input/src/types.ts:282](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L282)
