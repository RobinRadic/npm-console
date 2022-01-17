import ProgressBarClass, { ProgressBarOptions as BaseProgressBarOptions } from 'progress';
import { Figure, OutputConfig } from '../interfaces';
import { Ui } from './Ui';
import { merge } from 'lodash';
import { Output } from '../Output';
import { requireModule } from '../utils';


export interface ProgressBarOptions extends Partial<BaseProgressBarOptions> {
    format?: string;
    output?: OutputConfig;
    style?: {
        borderColor?: string,
        borderFigure?: Figure
        barColor?: string
        barFigure?: Figure
        backgroundColor?:string
    };
}

export class ProgressBar {
    constructor(protected ui: Ui) {}

    get out(): Output {return this.ui.output;}

    bar(options: ProgressBarOptions = {}):ProgressBarClass {

        options.style                          = options.style || {};
        let style: ProgressBarOptions['style'] = {
            borderColor : 'cyan',
            borderFigure: 'square',
            barColor    : 'blue',
            barFigure   : 'square',
            backgroundColor: 'white',
        };
        merge(style, options.style);
        delete options.style;

        let format;
        if ( options.format ) {
            format = options.format;
            delete options.format;
        } else {
            let border = `{${style.borderColor}}${this.out.figures[ style.borderFigure ]}{/${style.borderColor}}`;
            format     = `{b(${style.backgroundColor})}${border}{${style.barColor}}:bar{/${style.barColor}}${border}{/b(${style.backgroundColor})} :current/:total`;
        }
        format = this.out.parse(format);

        const Progress = requireModule('progress');

        const bar:ProgressBarClass = new Progress(format, {
            total     : 100,
            stream    : this.ui.output.stdout,
            complete  : this.ui.output.figures.square,
            incomplete: ' ',
            ...options,
        });
        return bar;
    }
}
