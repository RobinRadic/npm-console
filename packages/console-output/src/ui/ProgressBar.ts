import Progress, { ProgressBarOptions as BaseProgressBarOptions } from 'progress';
import { OutputConfig } from '../interfaces';
import { Output } from '../Output';
import { Ui } from './Ui';


export interface ProgressBarOptions extends Partial<BaseProgressBarOptions> {
    format?: string;
    output?: OutputConfig;
}

export class ProgressBar {
    constructor(protected ui: Ui) {}

    bar(options: ProgressBarOptions = {}) {

        let output;
        if ( 'output' in options ) {
            output = options.output;
            delete options.output;
        }

        let border = this.ui.output.parse(`{cyan}${this.ui.output.figures.square}{/cyan}`);
        let format = `${border}{blue}:bar{/blue}${border} :current/:total`;
        if ( 'format' in options ) {
            format = options.format;
            delete options.format;
        }

        format = this.ui.output.parse(format, output);

        const bar = new Progress(format, {
            total     : 100,
            stream    : this.ui.output.stdout,
            complete  : this.ui.output.figures.square,
            incomplete: ' ',
            ...options,
        });
        return bar;
    }
}
