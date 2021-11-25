# Console Input
- Based on inquirer.
- Includes a lot of optional extra prompts, if the relevant peerDependency is installed
- Main purpose is to fire 'one-off' questions like:

```ts
const path = await Input.fileTree('Select the file to delete', '/')
```

## Toc
- [Installation](#installation)
- [Third party prompts](#third-party-prompts)
- [Full API](#full-api)
- [Examples](#some-examples)


### Installation

`yarn add @radic/console-input`

### Third party prompts
Third party prompts are `peerDependencies` so you'll have to install them yourself if you'd like to use em. Automatically integrated if installed.

```
- path:   inquirer-path
- fuzzypath:   inquirer-fuzzy-path
- directory:   inquirer-directory
- autocomplete:   inquirer-autocomplete-prompt
- datetime:   inquirer-datepicker
- maxlength-input:   @matti-o7/inquirer-maxlength-input-prompt
- file-path:   inquirer-file-path
- file-tree-selection:   inquirer-file-tree-selection-prompt
- file-selector:   inquirer-file-selector-prompt
- color:   inquirer-chalk-pipe
- suggest:   inquirer-prompt-suggest
- table:   inquirer-table-prompt
```

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
