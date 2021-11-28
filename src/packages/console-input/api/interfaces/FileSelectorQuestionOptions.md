[@radic/console-input](../README.md) / FileSelectorQuestionOptions

# Interface: FileSelectorQuestionOptions<T\>

Provides options for a question for the `InputPrompt`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Answers` = `Answers` | The type of the answers. |

## Hierarchy

- [`PathQuestionOptions`](PathQuestionOptions.md)<`T`\>

  ↳ **`FileSelectorQuestionOptions`**

  ↳↳ [`FileSelectorQuestion`](FileSelectorQuestion.md)

## Table of contents

### Properties

- [default](FileSelectorQuestionOptions.md#default)
- [extensions](FileSelectorQuestionOptions.md#extensions)
- [message](FileSelectorQuestionOptions.md#message)
- [name](FileSelectorQuestionOptions.md#name)
- [onlyShowMatchingExtensions](FileSelectorQuestionOptions.md#onlyshowmatchingextensions)
- [path](FileSelectorQuestionOptions.md#path)
- [prefix](FileSelectorQuestionOptions.md#prefix)
- [root](FileSelectorQuestionOptions.md#root)
- [selectionType](FileSelectorQuestionOptions.md#selectiontype)
- [suffix](FileSelectorQuestionOptions.md#suffix)
- [type](FileSelectorQuestionOptions.md#type)
- [when](FileSelectorQuestionOptions.md#when)

### Methods

- [filter](FileSelectorQuestionOptions.md#filter)
- [transformer](FileSelectorQuestionOptions.md#transformer)
- [validate](FileSelectorQuestionOptions.md#validate)

## Properties

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[default](PathQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### extensions

• `Optional` **extensions**: `string`[]

#### Defined in

[packages/console-input/src/types.ts:224](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L224)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[message](PathQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[name](PathQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### onlyShowMatchingExtensions

• `Optional` **onlyShowMatchingExtensions**: `boolean`

#### Defined in

[packages/console-input/src/types.ts:227](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L227)

___

### path

• `Optional` **path**: `string`

#### Defined in

[packages/console-input/src/types.ts:223](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L223)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[prefix](PathQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### root

• `Optional` **root**: `any`

#### Defined in

[packages/console-input/src/types.ts:225](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L225)

___

### selectionType

• `Optional` **selectionType**: ``"file"`` \| ``"folder"`` \| ``"either"``

#### Defined in

[packages/console-input/src/types.ts:226](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L226)

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[suffix](PathQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### type

• `Optional` **type**: `string`

The type of the question.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[type](PathQuestionOptions.md#type)

#### Defined in

node_modules/@types/inquirer/index.d.ts:262

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[PathQuestionOptions](PathQuestionOptions.md).[when](PathQuestionOptions.md#when)

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

[PathQuestionOptions](PathQuestionOptions.md).[filter](PathQuestionOptions.md#filter)

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

[PathQuestionOptions](PathQuestionOptions.md).[transformer](PathQuestionOptions.md#transformer)

#### Defined in

[packages/console-input/src/types.ts:140](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/types.ts#L140)

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

[PathQuestionOptions](PathQuestionOptions.md).[validate](PathQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
