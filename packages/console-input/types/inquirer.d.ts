// noinspection ES6UnusedImports
import inquirer, { Answers, Question } from 'inquirer';
import { FileTreeSelectionQuestion }   from 'inquirer-file-tree-selection-prompt';
import { AutocompleteQuestion, ColorQuestion, DatepickerQuestion, DirectoryQuestion, FileFolderQuestion, FilePathQuestion, FuzzypathQuestion, MaxinputQuestion, PathQuestion, SuggestQuestion, TableQuestion, TreeQuestion } from '../src';
declare module 'inquirer' {

    export interface QuestionMap<T extends Answers = Answers> {
        tree: TreeQuestion<T>
        path: PathQuestion<T>
        fuzzypath: FuzzypathQuestion<T>
        'file-path': FilePathQuestion<T>
        filefolder: FileFolderQuestion<T>
        directory: DirectoryQuestion<T>
        autocomplete: AutocompleteQuestion<T>;
        'file-tree-selection': FileTreeSelectionQuestion<T>
        datetime: DatepickerQuestion<T>
        'maxlength-input': MaxinputQuestion<T>
        color: ColorQuestion<T>
        suggest:SuggestQuestion<T>
        table:TableQuestion<T>
    }


}
