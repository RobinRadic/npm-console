import inquirer, { Answers, CheckboxChoiceMap, CheckboxQuestion, ConfirmQuestion, DistinctChoice, EditorQuestion, InputQuestion, ListChoiceMap, ListQuestion } from 'inquirer';

import { editAsync, IFileOptions } from 'external-editor';
import { AutocompleteQuestion, ColorQuestion, DatepickerQuestion, DirectoryQuestion, FilePathQuestion, FileSelectorQuestion, FileTreeSelectionQuestion, FuzzypathQuestion, MaxinputQuestion, MyQuestionMap, PathQuestion, SuggestQuestion, TableQuestion, TreeItem, TreeQuestion } from './types';
import PromptConstructor = inquirer.prompts.PromptConstructor;

const isModuleInstalled = (name: string) => {
    try {
        let path = require.resolve(name);
        return !!path;
    } catch (e) {
        return false;
    }
};
type DistinctQuestion<T extends Answers = Answers> = MyQuestionMap<T>[keyof MyQuestionMap<T>];

const customPromptMap   = {
    'path'               : 'inquirer-path',
    'tree'               : 'inquirer-tree-prompt',
    'fuzzypath'          : 'inquirer-fuzzy-path',
    'directory'          : 'inquirer-directory',
    'autocomplete'       : 'inquirer-autocomplete-prompt',
    'datetime'           : 'inquirer-datepicker',
    'maxlength-input'    : '@matti-o7/inquirer-maxlength-input-prompt',
    'file-path'          : 'inquirer-file-path',
    'file-tree-selection': 'inquirer-file-tree-selection-prompt',
    'file-selector'      : 'inquirer-file-selector-prompt',
    'color'              : 'inquirer-chalk-pipe',
    'suggest'            : 'inquirer-prompt-suggest',
    'table'              : 'inquirer-table-prompt',
};
const customPromptTypes = Object.keys(customPromptMap);

export class Input {
    public static get customPromptMap() {return customPromptMap;}

    public static get customPromptTypes() {return customPromptTypes;}

    public static get inquirer() {return inquirer; }

    public static get Separator(): typeof inquirer.Separator {return this.inquirer.Separator; }

    public static get prompt() { return this.inquirer.prompt; };

    public static set prompt(prompt) { this.inquirer.prompt = prompt; };

    public static hasPrompt(name: string) {return this.inquirer.prompt.prompts[ name ] !== undefined;}

    public static ensureCustomPromptRegistered(name: string, silent: boolean = false) {
        if ( !this.customPromptTypes.includes(name) ) {
            return;
        }
        const moduleName = this.customPromptMap[ name ];
        if ( this.hasPrompt(name) ) return;
        if ( !isModuleInstalled(moduleName) ) {
            if ( silent ) {
                return false;
            }
            throw new Error(`Could not find the [${name}] prompt type. \nInstall the required npm dependency "${moduleName}" to fix this.\n`);
        }
        this.register(name, require(moduleName));
        return true;
    };

    public static register(name: string, prompt: PromptConstructor) {
        this.inquirer.registerPrompt(name, prompt);
        return this;
    }

    public static async question(question: DistinctQuestion) {
        this.ensureCustomPromptRegistered(question.type);
        let answers = await this.prompt<any>({ name: 'question', ...question } as any);
        return answers.question;
    }

    public static async input(message: string, defaultValue?: string, question: Partial<InputQuestion> = {}) {
        return await this.question({ type: 'input', message, default: defaultValue, ...question });
    }

    public static async color(message: string, defaultValue?: string, question: Partial<ColorQuestion> = {}) {
        return await this.question({ type: 'color', message, default: defaultValue, ...question });
    }

    public static async suggest(message: string, suggestions: string[], defaultValue?: string, question: Partial<SuggestQuestion> = {}) {
        return await this.question({ type: 'suggest', message, suggestions, default: defaultValue, ...question });
    }

    public static async table(message: string, columns: TableQuestion['columns'], rows?: TableQuestion['rows'], defaultValue?: string, question: Partial<TableQuestion> = {}) {
        return await this.question({ type: 'table', message, columns, rows, default: defaultValue, ...question });
    }

    public static async confirm(message: string, defaultValue: boolean = false, question: Partial<ConfirmQuestion> = {}) {
        return await this.question({ type: 'confirm', message, default: defaultValue, ...question });
    }

    public static async checkbox(message: string, choices: DistinctChoice<CheckboxChoiceMap>[], defaultChoice?: any, question: Partial<CheckboxQuestion> = {}) {
        return await this.question({ type: 'checkbox', message, choices, default: defaultChoice, ...question });
    }

    public static async list(message: string, choices: DistinctChoice<ListChoiceMap>[], defaultChoice?: any, question: Partial<ListQuestion> = {}) {
        return await this.question({ type: 'list', message, choices, default: defaultChoice, ...question });
    }

    public static async autocomplete(message: string, source: (answersSoFar: Answers, input: string) => Promise<Array<string>>, question: Partial<AutocompleteQuestion> = {}) {
        return await this.question({ type: 'autocomplete', message, source, ...question });
    }

    public static async datetime(message: string, question: Partial<DatepickerQuestion> = {}) {
        return await this.question({ type: 'datetime', message, ...question });
    }

    public static async maxinputlength(message: string, maxLength: number, question: Partial<MaxinputQuestion> = {}) {
        return await this.question({ type: 'maxlength-input', message, maxLength, ...question });
    }

    public static async tree(message: string, tree: TreeItem[], question: Partial<TreeQuestion> = {}) {
        question.tree = tree;
        return await this.question({ type: 'tree', message, ...question });
    }

    public static async path(message: string, question: Partial<PathQuestion> = {}) {
        return await this.question({ type: 'path', message, ...question });
    }

    public static async directory(message: string, basePath: string = process.cwd(), question: Partial<DirectoryQuestion> = {}) {
        return await this.question({ type: 'directory', message, basePath, ...question });
    }

    public static async fuzzypath(message: string, def: string = process.cwd(), question: Partial<FuzzypathQuestion> = {}) {
        return await this.question({ type: 'fuzzypath', message, default: def, ...question });
    }

    public static async filePath(message: string, basePath: string = process.cwd(), question: Partial<FilePathQuestion> = {}) {
        return await this.question({ type: 'file-path', message, basePath, ...question });
    }

    public static async fileTree(message: string, root: string = process.cwd(), question: Partial<FileTreeSelectionQuestion> = {}) {
        return await this.question({ type: 'file-tree-selection', message, root, ...question });
    }

    public static async fileSelector(message: string, root: string = process.cwd(), question: Partial<FileSelectorQuestion> = {}) {
        return await this.question({ type: 'file-selector', message, root, ...question });
    }

    public static editorChoices: Array<{ name: string, value: string }> = [
        { name: 'code', value: 'code --new-window --wait --file-uri' },
        { name: 'xed', value: 'xed  --new-window --wait' },
    ];

    public static editorDefaultChoice: string = 'xed';

    public static async chooseEditor(message: string = 'Choose editor', editorChoices = this.editorChoices, defaultChoice = 'xed') {
        return await this.list('Editor', editorChoices, defaultChoice);
    }

    public static async editor(message: string, question: Partial<EditorQuestion>) {
        // process.env.EDITOR = 'code --new-window --wait --file-uri';
        // process.env.EDITOR = 'idea-php --wait';
        // process.env.EDITOR = process.env.VISUAL || process.env.EDITOR || 'xed';
        if ( !process.env.EDITOR ) {
            process.env.EDITOR = await this.chooseEditor();
        }
        return await this.question({ type: 'editor', message, ...question });
    }

    public static async edit(content: string, options?: IFileOptions) {
        return new Promise((resolve, reject) => {
            editAsync(content, (err, result) => {
                if ( err ) return reject(err);
                resolve(result);
            }, { ...options });
        });

    }

}

// inquirer.registerPrompt('path', require('inquirer-path'));
// inquirer.registerPrompt('tree', require('inquirer-tree-prompt'));
// inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'));
// inquirer.registerPrompt('directory', require('inquirer-directory'));
// inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
// inquirer.registerPrompt('datetime', require('inquirer-datepicker'));
// inquirer.registerPrompt('maxlength-input', require('@matti-o7/inquirer-maxlength-input-prompt'));
//
// inquirer.registerPrompt('file-path', require('inquirer-file-path'));
// inquirer.registerPrompt('file-tree-selection', require('inquirer-file-tree-selection-prompt'));
// inquirer.registerPrompt('file-selector', require('inquirer-file-selector-prompt'));
// inquirer.registerPrompt('color', require('inquirer-chalk-pipe'));
// inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));
// inquirer.registerPrompt('table', require('inquirer-table-prompt'));
