[@radic/console-input](../README.md) / TreeQuestionOptions

# Interface: TreeQuestionOptions<T\>

**`link`** https://github.com/insightfuls/inquirer-tree-prompt#readme
Takes type, name, message, tree, [filter, validate, transformer, pageSize, loop, onlyShowValid, hideChildrenOfValid, multiple] properties.

The extra options that this plugin provides are:

tree: (Array) list of tree items or (optionally asynchronous) function to obtain them; items are strings or objects with:

name: (String) to display in list; must provide this or value
value: (String) to put in answers hash; must provide this or name
short: (String) to display after selection
open: (Boolean) whether the item is expanded or collapsed
children: (Array or Function) list of child tree items or (optionally asynchronous) function to obtain them; function may return replacement item instead of just list of children
onlyShowValid: (Boolean) if true, will only show valid items (if validate is provided). Default: false.

hideChildrenOfValid: (Boolean) if true, will hide children of valid items (if validate is provided). Default: false.

transformer: (Function) a hook function to transform the display of item's value (when name is not given).

multiple: (Boolean) if true, will enable to select multiple items. Default: false.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Question`<`T`\>

  ↳ **`TreeQuestionOptions`**

  ↳↳ [`TreeQuestion`](TreeQuestion.md)

## Table of contents

### Properties

- [default](TreeQuestionOptions.md#default)
- [hideChildrenOfValid](TreeQuestionOptions.md#hidechildrenofvalid)
- [message](TreeQuestionOptions.md#message)
- [multiple](TreeQuestionOptions.md#multiple)
- [name](TreeQuestionOptions.md#name)
- [onlyShowValid](TreeQuestionOptions.md#onlyshowvalid)
- [prefix](TreeQuestionOptions.md#prefix)
- [suffix](TreeQuestionOptions.md#suffix)
- [transformer](TreeQuestionOptions.md#transformer)
- [tree](TreeQuestionOptions.md#tree)
- [type](TreeQuestionOptions.md#type)
- [when](TreeQuestionOptions.md#when)

### Methods

- [filter](TreeQuestionOptions.md#filter)
- [validate](TreeQuestionOptions.md#validate)

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

[packages/console-input/src/types.ts:81](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L81)

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

[packages/console-input/src/types.ts:83](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L83)

___

### name

• `Optional` **name**: `KeyUnion`<`T`\>

The key to save the answer to the answers-hash.

#### Inherited from

Question.name

#### Defined in

node_modules/@types/inquirer/index.d.ts:267

___

### onlyShowValid

• `Optional` **onlyShowValid**: `boolean`

#### Defined in

[packages/console-input/src/types.ts:79](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L79)

___

### prefix

• `Optional` **prefix**: `string`

The prefix of the `message`.

#### Inherited from

Question.prefix

#### Defined in

node_modules/@types/inquirer/index.d.ts:282

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

[packages/console-input/src/types.ts:82](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L82)

___

### tree

• `Optional` **tree**: [`TreeItem`](TreeItem.md)[]

#### Defined in

[packages/console-input/src/types.ts:80](https://github.com/robinradic/npm-console/blob/10cb77f/packages/console-input/src/types.ts#L80)

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
