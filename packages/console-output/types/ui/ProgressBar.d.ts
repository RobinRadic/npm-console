import ProgressBarClass, { ProgressBarOptions as BaseProgressBarOptions } from 'progress';
import { Figure, OutputConfig } from '../interfaces';
import { Ui } from './Ui';
import { Output } from '../Output';
export interface ProgressBarOptions extends Partial<BaseProgressBarOptions> {
    format?: string;
    output?: OutputConfig;
    style?: {
        borderColor?: string;
        borderFigure?: Figure;
        barColor?: string;
        barFigure?: Figure;
        backgroundColor?: string;
    };
}
export declare class ProgressBar {
    protected ui: Ui;
    constructor(ui: Ui);
    get out(): Output;
    bar(options?: ProgressBarOptions): ProgressBarClass;
}
