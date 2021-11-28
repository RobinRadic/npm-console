[@radic/console-input](../README.md) / [Exports](../modules.md) / FileTreeSelectionQuestionOptions

# Interface: FileTreeSelectionQuestionOptions<T\>

Provides options for a question for the `InputPrompt`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- `Question`<`T`\>

  ↳ **`FileTreeSelectionQuestionOptions`**

  ↳↳ [`FileTreeSelectionQuestion`](FileTreeSelectionQuestion.md)

## Table of contents

### Properties

- [default](FileTreeSelectionQuestionOptions.md#default)
- [hideChildrenOfValid](FileTreeSelectionQuestionOptions.md#hidechildrenofvalid)
- [message](FileTreeSelectionQuestionOptions.md#message)
- [multiple](FileTreeSelectionQuestionOptions.md#multiple)
- [name](FileTreeSelectionQuestionOptions.md#name)
- [onlyShowDir](FileTreeSelectionQuestionOptions.md#onlyshowdir)
- [onlyShowValid](FileTreeSelectionQuestionOptions.md#onlyshowvalid)
- [prefix](FileTreeSelectionQuestionOptions.md#prefix)
- [root](FileTreeSelectionQuestionOptions.md#root)
- [suffix](FileTreeSelectionQuestionOptions.md#suffix)
- [transformer](FileTreeSelectionQuestionOptions.md#transformer)
- [type](FileTreeSelectionQuestionOptions.md#type)
- [when](FileTreeSelectionQuestionOptions.md#when)

### Methods

- [filter](FileTreeSelectionQuestionOptions.md#filter)
- [validate](FileTreeSelectionQuestionOptions.md#validate)

## Properties

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

Question.default

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### hideChildrenOfValid

• `Optional` **hideChildrenOfValid**: `boolean`

#### Defined in

[packages/console-input/src/types.ts:31](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L31)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

Question.message

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### multiple

• `Optional` **multiple**: `boolean`

#### Defined in

[packages/console-input/src/types.ts:33](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L33)

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

Question.name

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### onlyShowDir

• `Optional` **onlyShowDir**: `boolean`

#### Defined in

[packages/console-input/src/types.ts:28](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L28)

___

### onlyShowValid

• `Optional` **onlyShowValid**: `boolean`

#### Defined in

[packages/console-input/src/types.ts:30](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L30)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

Question.prefix

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### root

• `Optional` **root**: `string`

#### Defined in

[packages/console-input/src/types.ts:29](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L29)

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

Question.suffix

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### transformer

• `Optional` **transformer**: `Function`

#### Defined in

[packages/console-input/src/types.ts:32](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L32)

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
