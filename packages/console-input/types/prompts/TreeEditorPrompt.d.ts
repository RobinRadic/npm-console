import BasePrompt from 'inquirer/lib/prompts/base';
import Paginator from 'inquirer/lib/utils/paginator';
import { Answers, ListQuestionOptions } from 'inquirer';
export interface TreeEditorItem {
    name?: string;
    value?: any;
    short?: string;
    open?: boolean;
    children?: TreeEditorItem[];
    parent?: TreeEditorItem;
    isValid?: boolean;
}
export interface TreeEditorQuestionOptions<T> extends ListQuestionOptions<T> {
    onlyShowValid?: boolean;
    tree?: TreeEditorItem[];
    hideChildrenOfValid?: boolean;
    transformer?: Function;
    multiple?: boolean;
}
export interface TreeQuestion<T extends Answers = Answers> extends TreeEditorQuestionOptions<T> {
    type?: 'tree';
}
export declare class TreeEditorPrompt extends BasePrompt<TreeQuestion> {
    done: (...args: any[]) => void;
    firstRender: boolean;
    tree: TreeEditorItem;
    shownList: TreeEditorItem[];
    paginator: Paginator;
    selectedList: any[];
    active: TreeEditorItem;
    constructor(questions: any, rl: any, answers: any);
    /**
     * @protected
     */
    _run(done: any): Promise<this>;
    _installKeyHandlers(): void;
    prepareChildrenAndRender(node: any): Promise<void>;
    prepareChildren(node: any): Promise<void>;
    runChildrenFunctionIfRequired(node: any): Promise<void>;
    cloneAndNormaliseChildren(node: any): void;
    validateAndFilterDescendants(node: any): Promise<void>;
    addValidity(node: any): Promise<void>;
    render(error?: any): void;
    createTreeContent(node?: TreeEditorItem, indent?: number): string;
    shortFor(node: any, isFinal?: boolean): any;
    nameFor(node: any, isFinal?: boolean): any;
    valueFor(node: any): any;
    onError(state: any): void;
    onSubmit(state: any): void;
    onUpKey(): void;
    onDownKey(): void;
    onLeftKey(): void;
    onRightKey(): void;
    moveActive(distance?: number): void;
    onTabKey(): void;
    onSpaceKey(): void;
    toggleSelection(): void;
    toggleOpen(): void;
}
