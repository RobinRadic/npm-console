# Console Input

Based on inquirer. Includes a lot of extra prompts. Main purpose is to fire 'one-off' questions like:
```ts
const path = await Input.fileTree('Select the file to delete', '/')
```

### Installation

`yarn add @radic/console-input`

### Full API
*Created and/or modified all type definitions for each package it's options as can be checked in [types/inquirer.d.ts](types/inquirer.d.ts)*

```ts
export declare class Input {
    static get inquirer(): inquirer.Inquirer;
    static get Separator(): typeof inquirer.Separator;
    static get prompt(): inquirer.PromptModule;
    static register(name: string, prompt: PromptConstructor): typeof Input;
    static question(question: DistinctQuestion): Promise<any>;
    static input(message: string, defaultValue?: string, question?: Partial<InputQuestion>): Promise<any>;
    static color(message: string, defaultValue?: string, question?: Partial<ColorQuestion>): Promise<any>;
    static suggest(message: string, suggestions: string[], defaultValue?: string, question?: Partial<SuggestQuestion>): Promise<any>;
    static table(message: string, columns: TableQuestion['columns'], rows?: TableQuestion['rows'], defaultValue?: string, question?: Partial<TableQuestion>): Promise<any>;
    static confirm(message: string, defaultValue?: boolean, question?: Partial<ConfirmQuestion>): Promise<any>;
    static checkbox(message: string, choices: DistinctChoice<CheckboxChoiceMap>[], defaultChoice?: any, question?: Partial<CheckboxQuestion>): Promise<any>;
    static list(message: string, choices: DistinctChoice<ListChoiceMap>[], defaultChoice?: any, question?: Partial<ListQuestion>): Promise<any>;
    static autocomplete(message: string, source: (answersSoFar: Answers, input: string) => Promise<Array<string>>, question?: Partial<AutocompleteQuestion>): Promise<any>;
    static datetime(message: string, question?: Partial<DatepickerQuestion>): Promise<any>;
    static maxinputlength(message: string, maxLength: number, question?: Partial<MaxinputQuestion>): Promise<any>;
    static path(message: string, question?: Partial<PathQuestion>): Promise<any>;
    static directory(message: string, basePath?: string, question?: Partial<DirectoryQuestion>): Promise<any>;
    static fuzzypath(message: string, def?: string, question?: Partial<FuzzypathQuestion>): Promise<any>;
    static filePath(message: string, basePath?: string, question?: Partial<FilePathQuestion>): Promise<any>;
    static fsTree(message: string, root?: string, question?: Partial<FileTreePathSelectorQuestion>): Promise<any>;
    static fileTree(message: string, root?: string, question?: Partial<FileTreePathSelectorQuestion>): Promise<any>;
    static directoryTree(message: string, root?: string, question?: Partial<FileTreePathSelectorQuestion>): Promise<any>;
    static editorChoices: Array<{
        name: string;
        value: string;
    }>;
    static editorDefaultChoice: string;
    static editor(message: string, question: Partial<EditorQuestion>): Promise<any>;
    static edit(content: string, options?: IFileOptions): Promise<unknown>;
}
```

### Integrated third party prompts
```
inquirer.registerPrompt('path', require('inquirer-path'));
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'));
inquirer.registerPrompt('directory', require('inquirer-directory'));
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
inquirer.registerPrompt('datetime', require('inquirer-datepicker'));
inquirer.registerPrompt('maxlength-input', require('@matti-o7/inquirer-maxlength-input-prompt'));
inquirer.registerPrompt('file-path', require('inquirer-file-path'));
inquirer.registerPrompt('file-tree-selection', require('inquirer-file-tree-selection-prompt'));
inquirer.registerPrompt('file-selector', require('inquirer-file-selector-prompt'));
inquirer.registerPrompt('color', require('inquirer-chalk-pipe'));
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));
inquirer.registerPrompt('table', require('inquirer-table-prompt'));
```

### Some examples

```ts
if(await Input.confirm('Are you sure', true)){
    console.log('yes');
}
```
```ts
let choice = await Input.checkbox('Pick your foods', ['apples','pears','bananas']);
```
```ts
let choice = await Input.checkbox('Pick your food', [
    { checked: true,        key    : 'apples',        value  : 'Apples',    },
    Input.Separator(1),
    { checked: true,        key    : 'cheese',        value  : 'Cheese',    },
]);
```
```ts
let files = await ask.filetree('Pick the files you wish to delete', '/path/to/root', {
    multiple: true,
    root: '/path/to/root' // you can override parameters again in the options if you'd like
})
files.forEach(filePath => rm('-rf', filePath))
```
