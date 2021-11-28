[@radic/console-input](../README.md) / [Exports](../modules.md) / MyQuestionMap

# Interface: MyQuestionMap<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Answers` = `Answers` |

## Hierarchy

- `QuestionMap`<`T`\>

  ↳ **`MyQuestionMap`**

## Table of contents

### Properties

- [autocomplete](MyQuestionMap.md#autocomplete)
- [checkbox](MyQuestionMap.md#checkbox)
- [color](MyQuestionMap.md#color)
- [confirm](MyQuestionMap.md#confirm)
- [datetime](MyQuestionMap.md#datetime)
- [directory](MyQuestionMap.md#directory)
- [editor](MyQuestionMap.md#editor)
- [expand](MyQuestionMap.md#expand)
- [file-path](MyQuestionMap.md#file-path)
- [file-selector](MyQuestionMap.md#file-selector)
- [file-tree-selection](MyQuestionMap.md#file-tree-selection)
- [filefolder](MyQuestionMap.md#filefolder)
- [fuzzypath](MyQuestionMap.md#fuzzypath)
- [input](MyQuestionMap.md#input)
- [list](MyQuestionMap.md#list)
- [maxlength-input](MyQuestionMap.md#maxlength-input)
- [number](MyQuestionMap.md#number)
- [password](MyQuestionMap.md#password)
- [path](MyQuestionMap.md#path)
- [rawList](MyQuestionMap.md#rawlist)
- [suggest](MyQuestionMap.md#suggest)
- [table](MyQuestionMap.md#table)
- [tree](MyQuestionMap.md#tree)

## Properties

### autocomplete

• **autocomplete**: [`AutocompleteQuestion`](AutocompleteQuestion.md)<`T`\>

#### Overrides

QuestionMap.autocomplete

#### Defined in

[packages/console-input/src/types.ts:6](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L6)

___

### checkbox

• **checkbox**: `CheckboxQuestion`<`T`\>

The `CheckboxQuestion` type.

#### Inherited from

QuestionMap.checkbox

#### Defined in

node_modules/@types/inquirer/index.d.ts:744

___

### color

• **color**: [`ColorQuestion`](ColorQuestion.md)<`T`\>

#### Overrides

QuestionMap.color

#### Defined in

[packages/console-input/src/types.ts:17](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L17)

___

### confirm

• **confirm**: `ConfirmQuestion`<`T`\>

The `ConfirmQuestion` type.

#### Inherited from

QuestionMap.confirm

#### Defined in

node_modules/@types/inquirer/index.d.ts:749

___

### datetime

• **datetime**: [`DatepickerQuestion`](DatepickerQuestion.md)<`T`\>

#### Overrides

QuestionMap.datetime

#### Defined in

[packages/console-input/src/types.ts:15](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L15)

___

### directory

• **directory**: [`DirectoryQuestion`](DirectoryQuestion.md)<`T`\>

#### Overrides

QuestionMap.directory

#### Defined in

[packages/console-input/src/types.ts:14](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L14)

___

### editor

• **editor**: `EditorQuestion`<`T`\>

The `EditorQuestion` type.

#### Inherited from

QuestionMap.editor

#### Defined in

node_modules/@types/inquirer/index.d.ts:754

___

### expand

• **expand**: `ExpandQuestion`<`T`\>

The `ExpandQuestion` type.

#### Inherited from

QuestionMap.expand

#### Defined in

node_modules/@types/inquirer/index.d.ts:739

___

### file-path

• **file-path**: [`FilePathQuestion`](FilePathQuestion.md)<`T`\>

#### Overrides

QuestionMap.file-path

#### Defined in

[packages/console-input/src/types.ts:10](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L10)

___

### file-selector

• **file-selector**: [`FileSelectorQuestion`](FileSelectorQuestion.md)<`T`\>

#### Overrides

QuestionMap.file-selector

#### Defined in

[packages/console-input/src/types.ts:13](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L13)

___

### file-tree-selection

• **file-tree-selection**: [`FileTreeSelectionQuestion`](FileTreeSelectionQuestion.md)<`T`\>

#### Overrides

QuestionMap.file-tree-selection

#### Defined in

[packages/console-input/src/types.ts:12](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L12)

___

### filefolder

• **filefolder**: [`FileFolderQuestion`](FileFolderQuestion.md)<`T`\>

#### Overrides

QuestionMap.filefolder

#### Defined in

[packages/console-input/src/types.ts:11](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L11)

___

### fuzzypath

• **fuzzypath**: [`FuzzypathQuestion`](FuzzypathQuestion.md)<`T`\>

#### Overrides

QuestionMap.fuzzypath

#### Defined in

[packages/console-input/src/types.ts:9](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L9)

___

### input

• **input**: `InputQuestion`<`T`\>

The `InputQuestion` type.

#### Inherited from

QuestionMap.input

#### Defined in

node_modules/@types/inquirer/index.d.ts:714

___

### list

• **list**: `ListQuestion`<`T`\>

The `ListQuestion` type.

#### Inherited from

QuestionMap.list

#### Defined in

node_modules/@types/inquirer/index.d.ts:729

___

### maxlength-input

• **maxlength-input**: [`MaxinputQuestion`](MaxinputQuestion.md)<`T`\>

#### Overrides

QuestionMap.maxlength-input

#### Defined in

[packages/console-input/src/types.ts:16](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L16)

___

### number

• **number**: `NumberQuestion`<`T`\>

The `NumberQuestion` type.

#### Inherited from

QuestionMap.number

#### Defined in

node_modules/@types/inquirer/index.d.ts:719

___

### password

• **password**: `PasswordQuestion`<`T`\>

The `PasswordQuestion` type.

#### Inherited from

QuestionMap.password

#### Defined in

node_modules/@types/inquirer/index.d.ts:724

___

### path

• **path**: [`PathQuestion`](PathQuestion.md)<`T`\>

#### Overrides

QuestionMap.path

#### Defined in

[packages/console-input/src/types.ts:7](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L7)

___

### rawList

• **rawList**: `RawListQuestion`<`T`\>

The `RawListQuestion` type.

#### Inherited from

QuestionMap.rawList

#### Defined in

node_modules/@types/inquirer/index.d.ts:734

___

### suggest

• **suggest**: [`SuggestQuestion`](SuggestQuestion.md)<`T`\>

#### Overrides

QuestionMap.suggest

#### Defined in

[packages/console-input/src/types.ts:18](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L18)

___

### table

• **table**: [`TableQuestion`](TableQuestion.md)<`T`\>

#### Overrides

QuestionMap.table

#### Defined in

[packages/console-input/src/types.ts:19](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L19)

___

### tree

• **tree**: [`TreeQuestion`](TreeQuestion.md)<`T`\>

#### Overrides

QuestionMap.tree

#### Defined in

[packages/console-input/src/types.ts:8](https://github.com/robinradic/npm-console/blob/27e41ef/packages/console-input/src/types.ts#L8)
