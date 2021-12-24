import inquirer, { Answers, CheckboxChoiceMap, CheckboxQuestion, ConfirmQuestion, DistinctChoice, EditorQuestion, InputQuestion, ListChoiceMap, ListQuestion, PasswordQuestion } from 'inquirer';
import { IFileOptions } from 'external-editor';
import { AutocompleteQuestion, ColorQuestion, DatepickerQuestion, DirectoryQuestion, FilePathQuestion, FileSelectorQuestion, FileTreeSelectionQuestion, FuzzypathQuestion, MaxinputQuestion, MyQuestionMap, PathQuestion, SuggestQuestion, TableQuestion, TreeItem, TreeQuestion } from './types';
import PromptConstructor = inquirer.prompts.PromptConstructor;
declare type DistinctQuestion<T extends Answers = Answers> = MyQuestionMap<T>[keyof MyQuestionMap<T>];
export declare class Input {
    static get customPromptMap(): {
        path: string;
        tree: string;
        fuzzypath: string;
        directory: string;
        autocomplete: string;
        datetime: string;
        'maxlength-input': string;
        'file-path': string;
        'file-tree-selection': string;
        'file-selector': string;
        color: string;
        suggest: string;
        table: string;
    };
    static get customPromptTypes(): string[];
    static get inquirer(): inquirer.Inquirer;
    static get Separator(): typeof inquirer.Separator;
    static get prompt(): inquirer.PromptModule;
    static set prompt(prompt: inquirer.PromptModule);
    static hasPrompt(name: string): boolean;
    static ensureCustomPromptRegistered(name: string, silent?: boolean): boolean;
    static register(name: string, prompt: PromptConstructor): typeof Input;
    static question(question: DistinctQuestion): Promise<any>;
    static input(message: string, defaultValue?: string, question?: Partial<InputQuestion>): Promise<any>;
    static password(message: string, question?: Partial<PasswordQuestion>): Promise<any>;
    static color(message: string, defaultValue?: string, question?: Partial<ColorQuestion>): Promise<any>;
    static suggest(message: string, suggestions: string[], defaultValue?: string, question?: Partial<SuggestQuestion>): Promise<any>;
    static table(message: string, columns: TableQuestion['columns'], rows?: TableQuestion['rows'], defaultValue?: string, question?: Partial<TableQuestion>): Promise<any>;
    static confirm(message: string, defaultValue?: boolean, question?: Partial<ConfirmQuestion>): Promise<any>;
    static checkbox(message: string, choices: DistinctChoice<CheckboxChoiceMap>[], defaultChoice?: any, question?: Partial<CheckboxQuestion>): Promise<any>;
    static list(message: string, choices: DistinctChoice<ListChoiceMap>[], defaultChoice?: any, question?: Partial<ListQuestion>): Promise<any>;
    static autocomplete(message: string, source: (answersSoFar: Answers, input: string) => Promise<Array<string>>, question?: Partial<AutocompleteQuestion>): Promise<any>;
    static datetime(message: string, question?: Partial<DatepickerQuestion>): Promise<any>;
    static maxinputlength(message: string, maxLength: number, question?: Partial<MaxinputQuestion>): Promise<any>;
    static tree(message: string, tree: TreeItem[], question?: Partial<TreeQuestion>): Promise<any>;
    static path(message: string, question?: Partial<PathQuestion>): Promise<any>;
    static directory(message: string, basePath?: string, question?: Partial<DirectoryQuestion>): Promise<any>;
    static fuzzypath(message: string, def?: string, question?: Partial<FuzzypathQuestion>): Promise<any>;
    static filePath(message: string, basePath?: string, question?: Partial<FilePathQuestion>): Promise<any>;
    static fileTree(message: string, root?: string, question?: Partial<FileTreeSelectionQuestion>): Promise<any>;
    static fileSelector(message: string, root?: string, question?: Partial<FileSelectorQuestion>): Promise<any>;
    static editorChoices: Array<{
        name: string;
        value: string;
    }>;
    static editorDefaultChoice: string;
    static chooseEditor(message?: string, editorChoices?: {
        name: string;
        value: string;
    }[], defaultChoice?: string): Promise<any>;
    static editor(message: string, question: Partial<EditorQuestion>): Promise<any>;
    static edit(content: string, options?: IFileOptions): Promise<string>;
}
export {};
