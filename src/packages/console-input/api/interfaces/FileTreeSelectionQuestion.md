[@radic/console-input](../README.md) / FileTreeSelectionQuestion

# Interface: FileTreeSelectionQuestion<T\>

Provides options for a question for the `InputPrompt`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- [`FileTreeSelectionQuestionOptions`](FileTreeSelectionQuestionOptions.md)<`T`\>

  ↳ **`FileTreeSelectionQuestion`**

## Table of contents

### Properties

- [default](FileTreeSelectionQuestion.md#default)
- [hideChildrenOfValid](FileTreeSelectionQuestion.md#hidechildrenofvalid)
- [message](FileTreeSelectionQuestion.md#message)
- [multiple](FileTreeSelectionQuestion.md#multiple)
- [name](FileTreeSelectionQuestion.md#name)
- [onlyShowDir](FileTreeSelectionQuestion.md#onlyshowdir)
- [onlyShowValid](FileTreeSelectionQuestion.md#onlyshowvalid)
- [prefix](FileTreeSelectionQuestion.md#prefix)
- [root](FileTreeSelectionQuestion.md#root)
- [suffix](FileTreeSelectionQuestion.md#suffix)
- [transformer](FileTreeSelectionQuestion.md#transformer)
- [type](FileTreeSelectionQuestion.md#type)
- [when](FileTreeSelectionQuestion.md#when)

### Methods

- [filter](FileTreeSelectionQuestion.md#filter)
- [validate](FileTreeSelectionQuestion.md#validate)

## Properties

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[default](FileTreeSelectionQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### hideChildrenOfValid

• `Optional` **hideChildrenOfValid**: `boolean`

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[hideChildrenOfValid](FileTreeSelectionQuestionOptions.md#hidechildrenofvalid)

#### Defined in

[packages/console-input/src/types.ts:31](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L31)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[message](FileTreeSelectionQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### multiple

• `Optional` **multiple**: `boolean`

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[multiple](FileTreeSelectionQuestionOptions.md#multiple)

#### Defined in

[packages/console-input/src/types.ts:33](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L33)

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[name](FileTreeSelectionQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### onlyShowDir

• `Optional` **onlyShowDir**: `boolean`

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[onlyShowDir](FileTreeSelectionQuestionOptions.md#onlyshowdir)

#### Defined in

[packages/console-input/src/types.ts:28](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L28)

___

### onlyShowValid

• `Optional` **onlyShowValid**: `boolean`

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[onlyShowValid](FileTreeSelectionQuestionOptions.md#onlyshowvalid)

#### Defined in

[packages/console-input/src/types.ts:30](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L30)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[prefix](FileTreeSelectionQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### root

• `Optional` **root**: `string`

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[root](FileTreeSelectionQuestionOptions.md#root)

#### Defined in

[packages/console-input/src/types.ts:29](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L29)

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[suffix](FileTreeSelectionQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### transformer

• `Optional` **transformer**: `Function`

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[transformer](FileTreeSelectionQuestionOptions.md#transformer)

#### Defined in

[packages/console-input/src/types.ts:32](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L32)

___

### type

• `Optional` **type**: ``"file-tree-selection"``

The type of the question.

#### Overrides

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[type](FileTreeSelectionQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:46](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L46)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[when](FileTreeSelectionQuestionOptions.md#when)

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

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[filter](FileTreeSelectionQuestionOptions.md#filter)

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

[FileTreeSelectionQuestionOptions](FileTreeSelectionQuestionOptions.md).[validate](FileTreeSelectionQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
