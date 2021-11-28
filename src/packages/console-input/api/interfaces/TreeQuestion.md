[@radic/console-input](../README.md) / TreeQuestion

# Interface: TreeQuestion<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Answers` = `Answers` |

## Hierarchy

- [`TreeQuestionOptions`](TreeQuestionOptions.md)<`T`\>

  ↳ **`TreeQuestion`**

## Table of contents

### Properties

- [default](TreeQuestion.md#default)
- [hideChildrenOfValid](TreeQuestion.md#hidechildrenofvalid)
- [message](TreeQuestion.md#message)
- [multiple](TreeQuestion.md#multiple)
- [name](TreeQuestion.md#name)
- [onlyShowValid](TreeQuestion.md#onlyshowvalid)
- [prefix](TreeQuestion.md#prefix)
- [suffix](TreeQuestion.md#suffix)
- [transformer](TreeQuestion.md#transformer)
- [tree](TreeQuestion.md#tree)
- [type](TreeQuestion.md#type)
- [when](TreeQuestion.md#when)

### Methods

- [filter](TreeQuestion.md#filter)
- [validate](TreeQuestion.md#validate)

## Properties

### default

• `Optional` **default**: `any`

The default value of the question.

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[default](TreeQuestionOptions.md#default)

#### Defined in

node_modules/@types/inquirer/index.d.ts:277

___

### hideChildrenOfValid

• `Optional` **hideChildrenOfValid**: `boolean`

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[hideChildrenOfValid](TreeQuestionOptions.md#hidechildrenofvalid)

#### Defined in

[packages/console-input/src/types.ts:81](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L81)

___

### message

• `Optional` **message**: `AsyncDynamicQuestionProperty`<`string`, `T`\>

The message to show to the user.

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[message](TreeQuestionOptions.md#message)

#### Defined in

node_modules/@types/inquirer/index.d.ts:272

___

### multiple

• `Optional` **multiple**: `boolean`

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[multiple](TreeQuestionOptions.md#multiple)

#### Defined in

[packages/console-input/src/types.ts:83](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L83)

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[name](TreeQuestionOptions.md#name)

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### onlyShowValid

• `Optional` **onlyShowValid**: `boolean`

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[onlyShowValid](TreeQuestionOptions.md#onlyshowvalid)

#### Defined in

[packages/console-input/src/types.ts:79](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L79)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[prefix](TreeQuestionOptions.md#prefix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

___

### suffix

• `Optional` **suffix**: `string`

The suffix of the `message`.

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[suffix](TreeQuestionOptions.md#suffix)

#### Defined in

node_modules/@types/inquirer/index.d.ts:287

___

### transformer

• `Optional` **transformer**: `Function`

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[transformer](TreeQuestionOptions.md#transformer)

#### Defined in

[packages/console-input/src/types.ts:82](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L82)

___

### tree

• `Optional` **tree**: [`TreeItem`](TreeItem.md)[]

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[tree](TreeQuestionOptions.md#tree)

#### Defined in

[packages/console-input/src/types.ts:80](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L80)

___

### type

• `Optional` **type**: ``"tree"``

The type of the question.

#### Overrides

[TreeQuestionOptions](TreeQuestionOptions.md).[type](TreeQuestionOptions.md#type)

#### Defined in

[packages/console-input/src/types.ts:87](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L87)

___

### when

• `Optional` **when**: `AsyncDynamicQuestionProperty`<`boolean`, `T`\>

A value indicating whether the question should be prompted.

#### Inherited from

[TreeQuestionOptions](TreeQuestionOptions.md).[when](TreeQuestionOptions.md#when)

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

[TreeQuestionOptions](TreeQuestionOptions.md).[filter](TreeQuestionOptions.md#filter)

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

[TreeQuestionOptions](TreeQuestionOptions.md).[validate](TreeQuestionOptions.md#validate)

#### Defined in

node_modules/@types/inquirer/index.d.ts:317
