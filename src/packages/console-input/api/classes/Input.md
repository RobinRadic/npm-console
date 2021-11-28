[@radic/console-input](../README.md) / Input

# Class: Input

## Table of contents

### Constructors

- [constructor](Input.md#constructor)

### Properties

- [editorChoices](Input.md#editorchoices)
- [editorDefaultChoice](Input.md#editordefaultchoice)

### Accessors

- [Separator](Input.md#separator)
- [customPromptMap](Input.md#custompromptmap)
- [customPromptTypes](Input.md#customprompttypes)
- [inquirer](Input.md#inquirer)
- [prompt](Input.md#prompt)

### Methods

- [autocomplete](Input.md#autocomplete)
- [checkbox](Input.md#checkbox)
- [chooseEditor](Input.md#chooseeditor)
- [color](Input.md#color)
- [confirm](Input.md#confirm)
- [datetime](Input.md#datetime)
- [directory](Input.md#directory)
- [edit](Input.md#edit)
- [editor](Input.md#editor)
- [ensureCustomPromptRegistered](Input.md#ensurecustompromptregistered)
- [filePath](Input.md#filepath)
- [fileSelector](Input.md#fileselector)
- [fileTree](Input.md#filetree)
- [fuzzypath](Input.md#fuzzypath)
- [hasPrompt](Input.md#hasprompt)
- [input](Input.md#input)
- [list](Input.md#list)
- [maxinputlength](Input.md#maxinputlength)
- [path](Input.md#path)
- [question](Input.md#question)
- [register](Input.md#register)
- [suggest](Input.md#suggest)
- [table](Input.md#table)
- [tree](Input.md#tree)

## Constructors

### constructor

• **new Input**()

## Properties

### editorChoices

▪ `Static` **editorChoices**: { `name`: `string` ; `value`: `string`  }[]

#### Defined in

[packages/console-input/src/Input.ts:145](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L145)

___

### editorDefaultChoice

▪ `Static` **editorDefaultChoice**: `string` = `'xed'`

#### Defined in

[packages/console-input/src/Input.ts:150](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L150)

## Accessors

### Separator

• `Static` `get` **Separator**(): typeof `Separator`

#### Returns

typeof `Separator`

#### Defined in

[packages/console-input/src/Input.ts:41](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L41)

___

### customPromptMap

• `Static` `get` **customPromptMap**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `autocomplete` | `string` |
| `color` | `string` |
| `datetime` | `string` |
| `directory` | `string` |
| `file-path` | `string` |
| `file-selector` | `string` |
| `file-tree-selection` | `string` |
| `fuzzypath` | `string` |
| `maxlength-input` | `string` |
| `path` | `string` |
| `suggest` | `string` |
| `table` | `string` |
| `tree` | `string` |

#### Defined in

[packages/console-input/src/Input.ts:35](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L35)

___

### customPromptTypes

• `Static` `get` **customPromptTypes**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/console-input/src/Input.ts:37](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L37)

___

### inquirer

• `Static` `get` **inquirer**(): `Inquirer`

#### Returns

`Inquirer`

#### Defined in

[packages/console-input/src/Input.ts:39](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L39)

___

### prompt

• `Static` `get` **prompt**(): `PromptModule`

#### Returns

`PromptModule`

#### Defined in

[packages/console-input/src/Input.ts:43](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L43)

• `Static` `set` **prompt**(`prompt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompt` | `PromptModule` |

#### Returns

`void`

#### Defined in

[packages/console-input/src/Input.ts:45](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L45)

## Methods

### autocomplete

▸ `Static` **autocomplete**(`message`, `source`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `source` | (`answersSoFar`: `Answers`, `input`: `string`) => `Promise`<`string`[]\> |
| `question` | `Partial`<[`AutocompleteQuestion`](../interfaces/AutocompleteQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:104](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L104)

___

### checkbox

▸ `Static` **checkbox**(`message`, `choices`, `defaultChoice?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `choices` | `DistinctChoice`<`CheckboxChoiceMap`<`Answers`\>, `AllChoiceMap`<`CheckboxChoiceMap`<`Answers`\>\>\>[] |
| `defaultChoice?` | `any` |
| `question` | `Partial`<`CheckboxQuestion`<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:96](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L96)

___

### chooseEditor

▸ `Static` **chooseEditor**(`message?`, `editorChoices?`, `defaultChoice?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Choose editor'` |
| `editorChoices` | { `name`: `string` ; `value`: `string`  }[] | `undefined` |
| `defaultChoice` | `string` | `'xed'` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:152](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L152)

___

### color

▸ `Static` **color**(`message`, `defaultValue?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `defaultValue?` | `string` |
| `question` | `Partial`<[`ColorQuestion`](../interfaces/ColorQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:80](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L80)

___

### confirm

▸ `Static` **confirm**(`message`, `defaultValue?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `undefined` |
| `defaultValue` | `boolean` | `false` |
| `question` | `Partial`<`ConfirmQuestion`<`Answers`\>\> | `{}` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:92](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L92)

___

### datetime

▸ `Static` **datetime**(`message`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `question` | `Partial`<[`DatepickerQuestion`](../interfaces/DatepickerQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:108](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L108)

___

### directory

▸ `Static` **directory**(`message`, `basePath?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `basePath` | `string` |
| `question` | `Partial`<[`DirectoryQuestion`](../interfaces/DirectoryQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:125](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L125)

___

### edit

▸ `Static` **edit**(`content`, `options?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | `IFileOptions` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[packages/console-input/src/Input.ts:166](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L166)

___

### editor

▸ `Static` **editor**(`message`, `question`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `question` | `Partial`<`EditorQuestion`<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:156](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L156)

___

### ensureCustomPromptRegistered

▸ `Static` **ensureCustomPromptRegistered**(`name`, `silent?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `silent` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[packages/console-input/src/Input.ts:49](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L49)

___

### filePath

▸ `Static` **filePath**(`message`, `basePath?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `basePath` | `string` |
| `question` | `Partial`<[`FilePathQuestion`](../interfaces/FilePathQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:133](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L133)

___

### fileSelector

▸ `Static` **fileSelector**(`message`, `root?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `root` | `string` |
| `question` | `Partial`<[`FileSelectorQuestion`](../interfaces/FileSelectorQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:141](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L141)

___

### fileTree

▸ `Static` **fileTree**(`message`, `root?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `root` | `string` |
| `question` | `Partial`<[`FileTreeSelectionQuestion`](../interfaces/FileTreeSelectionQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:137](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L137)

___

### fuzzypath

▸ `Static` **fuzzypath**(`message`, `def?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `def` | `string` |
| `question` | `Partial`<[`FuzzypathQuestion`](../interfaces/FuzzypathQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:129](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L129)

___

### hasPrompt

▸ `Static` **hasPrompt**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/console-input/src/Input.ts:47](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L47)

___

### input

▸ `Static` **input**(`message`, `defaultValue?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `defaultValue?` | `string` |
| `question` | `Partial`<`InputQuestion`<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:76](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L76)

___

### list

▸ `Static` **list**(`message`, `choices`, `defaultChoice?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `choices` | `DistinctChoice`<`ListChoiceMap`<`Answers`\>, `AllChoiceMap`<`ListChoiceMap`<`Answers`\>\>\>[] |
| `defaultChoice?` | `any` |
| `question` | `Partial`<`ListQuestion`<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:100](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L100)

___

### maxinputlength

▸ `Static` **maxinputlength**(`message`, `maxLength`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `maxLength` | `number` |
| `question` | `Partial`<[`MaxinputQuestion`](../interfaces/MaxinputQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:112](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L112)

___

### path

▸ `Static` **path**(`message`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `question` | `Partial`<[`PathQuestion`](../interfaces/PathQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:121](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L121)

___

### question

▸ `Static` **question**(`question`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `DistinctQuestion`<`Answers`\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:70](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L70)

___

### register

▸ `Static` **register**(`name`, `prompt`): typeof [`Input`](Input.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `prompt` | `PromptConstructor` |

#### Returns

typeof [`Input`](Input.md)

#### Defined in

[packages/console-input/src/Input.ts:65](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L65)

___

### suggest

▸ `Static` **suggest**(`message`, `suggestions`, `defaultValue?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `suggestions` | `string`[] |
| `defaultValue?` | `string` |
| `question` | `Partial`<[`SuggestQuestion`](../interfaces/SuggestQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:84](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L84)

___

### table

▸ `Static` **table**(`message`, `columns`, `rows?`, `defaultValue?`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `columns` | { `name?`: `string` ; `value?`: `string`  }[] |
| `rows?` | { `name?`: `string` ; `value?`: `string`  }[] |
| `defaultValue?` | `string` |
| `question` | `Partial`<[`TableQuestion`](../interfaces/TableQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:88](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L88)

___

### tree

▸ `Static` **tree**(`message`, `tree`, `question?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `tree` | [`TreeItem`](../interfaces/TreeItem.md)[] |
| `question` | `Partial`<[`TreeQuestion`](../interfaces/TreeQuestion.md)<`Answers`\>\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/console-input/src/Input.ts:116](https://github.com/robinradic/npm-console/blob/a206035/packages/console-input/src/Input.ts#L116)
