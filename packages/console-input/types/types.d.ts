import { Answers, Question, QuestionMap } from 'inquirer';
export interface MyQuestionMap<T extends Answers = Answers> extends QuestionMap<T> {
    autocomplete: AutocompleteQuestion<T>;
    path: PathQuestion<T>;
    tree: TreeQuestion<T>;
    fuzzypath: FuzzypathQuestion<T>;
    'file-path': FilePathQuestion<T>;
    filefolder: FileFolderQuestion<T>;
    'file-tree-selection': FileTreeSelectionQuestion<T>;
    'file-selector': FileSelectorQuestion<T>;
    directory: DirectoryQuestion<T>;
    datetime: DatepickerQuestion<T>;
    'maxlength-input': MaxinputQuestion<T>;
    color: ColorQuestion<T>;
    suggest: SuggestQuestion<T>;
    table: TableQuestion<T>;
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface FileTreeSelectionQuestionOptions<T extends Answers = Answers> extends Question<T> {
    onlyShowDir?: boolean;
    root?: string;
    onlyShowValid?: boolean;
    hideChildrenOfValid?: boolean;
    transformer?: Function;
    multiple?: boolean;
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface FileTreeSelectionQuestion<T extends Answers = Answers> extends FileTreeSelectionQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'file-tree-selection';
}
export interface TreeItem {
    name?: string;
    value?: any;
    short?: string;
    open?: boolean;
    children?: TreeItem[];
}
/**
 * @link https://github.com/insightfuls/inquirer-tree-prompt#readme
 * Takes type, name, message, tree, [filter, validate, transformer, pageSize, loop, onlyShowValid, hideChildrenOfValid, multiple] properties.

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
 */
export interface TreeQuestionOptions<T> extends Question<T> {
    onlyShowValid?: boolean;
    tree?: TreeItem[];
    hideChildrenOfValid?: boolean;
    transformer?: Function;
    multiple?: boolean;
}
export interface TreeQuestion<T extends Answers = Answers> extends TreeQuestionOptions<T> {
    type?: 'tree';
}
export interface ColorQuestionOptions<T> extends Question<T> {
}
export interface ColorQuestion<T extends Answers = Answers> extends ColorQuestionOptions<T> {
    type?: 'color';
}
export interface SuggestQuestionOptions<T> extends Question<T> {
    suggestions?: string[];
}
export interface SuggestQuestion<T extends Answers = Answers> extends SuggestQuestionOptions<T> {
    type?: 'suggest';
}
export interface TableQuestionOptions<T> extends Question<T> {
    columns?: Array<{
        name?: string;
        value?: string;
    }>;
    rows?: Array<{
        name?: string;
        value?: string;
    }>;
    pageSize?: number;
}
export interface TableQuestion<T extends Answers = Answers> extends TableQuestionOptions<T> {
    type?: 'table';
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface PathQuestionOptions<T extends Answers = Answers> extends Question<T> {
    /**
     * Transforms the value to display to the user.
     *
     * @param input
     * The input provided by the user.
     *
     * @param answers
     * The answers provided by the users.
     *
     * @param flags
     * Additional information about the value.
     *
     * @returns
     * The value to display to the user.
     */
    transformer?(input: any, answers: T, flags: {
        isFinal?: boolean;
    }): string | Promise<string>;
}
/**
 * Provides options for a question for the `inquirer-path`.
 *
 * @template T
 * The type of the answers.
 */
export interface PathQuestion<T extends Answers = Answers> extends PathQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'path';
    default?: string | string[];
    multi?: boolean;
    directoryOnly?: boolean;
}
/**
 * Provides options for a question for the `inquirer-fuzzy-path`.
 *
 * @template T
 * The type of the answers.
 */
export interface FuzzypathQuestion<T extends Answers = Answers> extends PathQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'fuzzypath';
    excludePath?: (nodePath: any) => boolean;
    excludeFilter?: (nodePath: any) => boolean;
    itemType?: 'any' | 'directory' | 'file';
    rootPath?: string;
    default?: string;
    suggestOnly?: boolean;
    depthLimit?: number;
}
/**
 * Provides options for a question for the `inquirer-file-path`.
 *
 * @template T
 * The type of the answers.
 */
export interface FilePathQuestion<T extends Answers = Answers> extends PathQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'file-path';
    basePath?: string;
}
export interface FileSelectorQuestion<T extends Answers = Answers> extends FileSelectorQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'file-selector';
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface FileSelectorQuestionOptions<T extends Answers = Answers> extends PathQuestionOptions<T> {
    path?: string;
    extensions?: string[];
    root?: any;
    selectionType?: 'file' | 'folder' | 'either';
    onlyShowMatchingExtensions?: boolean;
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface FileFolderQuestion<T extends Answers = Answers> extends PathQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'filefolder-prompt';
    dialog?: {
        type?: string;
        config?: {
            title?: string;
            [key: string]: any;
        };
    };
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface DirectoryQuestionOptions<T extends Answers = Answers> extends Question<T> {
    basePath?: string;
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface DirectoryQuestion<T extends Answers = Answers> extends DirectoryQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'directory';
}
export interface AutocompleteQuestionOptions<T> extends Question<T> {
    suggestOnly?: boolean;
    searchText?: string;
    emptyText?: string;
    default?: string;
    pageSize?: number;
    filter?(options: Array<string>): Array<string>;
    validate?(line: string): boolean;
    source(answersSoFar: Answers, input: string): Promise<Array<string>>;
}
export interface AutocompleteQuestion<T extends Answers = Answers> extends AutocompleteQuestionOptions<T> {
    type?: 'autocomplete';
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface DirectoryQuestionOptions<T extends Answers = Answers> extends Question<T> {
    basePath?: string;
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface DirectoryQuestion<T extends Answers = Answers> extends DirectoryQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'directory';
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 * @see https://github.com/DerekTBrown/inquirer-datepicker-prompt#inquirer-datepicker-prompt
 */
export interface DatepickerQuestionOptions<T extends Answers = Answers> extends Question<T> {
    /** @see https://github.com/felixge/node-dateformat/#mask-options */
    format?: string[];
    initial?: Date | number;
    date?: {
        min?: string;
        max?: string;
    };
    time?: {
        min?: string;
        max?: string;
        minutes?: {
            interval?: number;
        };
    };
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface DatepickerQuestion<T extends Answers = Answers> extends DatepickerQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'datetime';
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface MaxinputQuestionOptions<T extends Answers = Answers> extends Question<T> {
    maxLength?: number;
}
/**
 * Provides options for a question for the `InputPrompt`.
 *
 * @template T
 * The type of the answers.
 */
export interface MaxinputQuestion<T extends Answers = Answers> extends MaxinputQuestionOptions<T> {
    /**
     * @inheritdoc
     */
    type?: 'maxlength-input';
}
