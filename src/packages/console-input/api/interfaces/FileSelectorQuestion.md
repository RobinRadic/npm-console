[@radic/console-input](../README.md) / FileSelectorQuestion

# Interface: FileSelectorQuestion<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Answers` = `Answers` |

## Hierarchy

- [`FileSelectorQuestionOptions`](FileSelectorQuestionOptions.md)<`T`\>

  ↳ **`FileSelectorQuestion`**

## Table of contents

### Properties

- [default](FileSelectorQuestion.md#default)
- [extensions](FileSelectorQuestion.md#extensions)
- [message](FileSelectorQuestion.md#message)
- [name](FileSelectorQuestion.md#name)
- [onlyShowMatchingExtensions](FileSelectorQuestion.md#onlyshowmatchingextensions)
- [path](FileSelectorQuestion.md#path)
- [prefix](FileSelectorQuestion.md#prefix)
- [root](FileSelectorQuestion.md#root)
- [selectionType](FileSelectorQuestion.md#selectiontype)
- [suffix](FileSelectorQuestion.md#suffix)
- [type](FileSelectorQuestion.md#type)
- [when](FileSelectorQuestion.md#when)

### Methods

- [filter](FileSelectorQuestion.md#filter)
- [transformer](FileSelectorQuestion.md#transformer)
- [validate](FileSelectorQuestion.md#validate)

## Properties

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[default](FileSelectorQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### extensions

• `Optional` **extensions**: `string`[]

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[extensions](FileSelectorQuestionOptions.md#extensions)

#### Defined in

[packages/console-input/src/types.ts:224](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L224)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[message](FileSelectorQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[name](FileSelectorQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### onlyShowMatchingExtensions

• `Optional` **onlyShowMatchingExtensions**: `boolean`

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[onlyShowMatchingExtensions](FileSelectorQuestionOptions.md#onlyshowmatchingextensions)

#### Defined in

[packages/console-input/src/types.ts:227](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L227)

___

### path

• `Optional` **path**: `string`

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[path](FileSelectorQuestionOptions.md#path)

#### Defined in

[packages/console-input/src/types.ts:223](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L223)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[prefix](FileSelectorQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### root

• `Optional` **root**: `any`

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[root](FileSelectorQuestionOptions.md#root)

#### Defined in

[packages/console-input/src/types.ts:225](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L225)

___

### selectionType

• `Optional` **selectionType**: ``"file"`` \| ``"folder"`` \| ``"either"``

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[selectionType](FileSelectorQuestionOptions.md#selectiontype)

#### Defined in

[packages/console-input/src/types.ts:226](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L226)

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[suffix](FileSelectorQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### type

• `Optional` **type**: ``"file-selector"``

The type of the question.

#### Overrides

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[type](FileSelectorQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:213](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L213)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[when](FileSelectorQuestionOptions.md#when)

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

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[filter](FileSelectorQuestionOptions.md#filter)

#### Defined in

node_modules/@types/inquirer/index.d.ts:298

___

### transformer

▸ `Optional` **transformer**(`input`, `answers`, `flags`): `string` \| `Promise`<`string`\>

Transforms the value to display to the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The input provided by the user. |
| `answers` | `T` | The answers provided by the users. |
| `flags` | `Object` | Additional information about the value. |
| `flags.isFinal?` | `boolean` | - |

#### Returns

`string` \| `Promise`<`string`\>

The value to display to the user.

#### Inherited from

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[transformer](FileSelectorQuestionOptions.md#transformer)

#### Defined in

[packages/console-input/src/types.ts:140](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L140)

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

[FileSelectorQuestionOptions](FileSelectorQuestionOptions.md).[validate](FileSelectorQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
