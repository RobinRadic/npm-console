// noinspection ES6UnusedImports
import inquirer, { Answers, Question } from 'inquirer';
import { AutocompleteQuestion,FileTreeSelectionQuestion, ColorQuestion, DatepickerQuestion, DirectoryQuestion, FileFolderQuestion, FilePathQuestion, FileSelectorQuestion, FuzzypathQuestion, MaxinputQuestion, PathQuestion, SuggestQuestion, TableQuestion, TreeQuestion } from '../src';
declare module 'inquirer' {

    export interface QuestionMap<T extends Answers = Answers> {
        autocomplete: AutocompleteQuestion<T>;
        path: PathQuestion<T>
        tree: TreeQuestion<T>
        fuzzypath: FuzzypathQuestion<T>
        'file-path': FilePathQuestion<T>
        filefolder: FileFolderQuestion<T>
        'file-tree-selection': FileTreeSelectionQuestion<T>
        'file-selector': FileSelectorQuestion<T>
        directory: DirectoryQuestion<T>
        datetime: DatepickerQuestion<T>
        'maxlength-input': MaxinputQuestion<T>
        color: ColorQuestion<T>
        suggest:SuggestQuestion<T>
        table:TableQuestion<T>
    }


}
