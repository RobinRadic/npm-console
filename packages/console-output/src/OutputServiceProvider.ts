import { ServiceProvider } from '@radic/shared';
import { Output, OutputOptions } from './';
import { IconGenerator } from './utils/IconGenerator';
import { Ui } from './ui';
import { Bindings, inject } from '@radic/core';

declare module '@radic/core/lib/types/config' {
    export interface Configuration {
        output?: OutputOptions;
    }
}
declare module '@radic/core/lib/Foundation/Application' {
    export interface Bindings {
        'output': Output;
        'output.ui': Ui;
        'output.options': OutputOptions;
    }

    export interface Application {
        output: Output;
        ui: Ui;
    }
}

export class OutputServiceProvider extends ServiceProvider {

    load() {
        this.config({
            key     : 'output',
            defaults: Output.defaultOptions,
            schema  : {
                inspect       : {
                    type                : 'object',
                    properties          : {
                        colors : { type: 'boolean' },
                        figures: { type: 'boolean' },
                    },
                    additionalProperties: true,
                },
                parsers       : { type: 'object' },
                quiet         : { type: 'boolean' },
                resetOnNewline: { type: 'boolean' },
            },
        });
    }

    register() {
        this.app.instance<OutputOptions>('output.options', Output.defaultOptions);
    }

    boot() {
        this.app.binding<Output>('output', app => {
            const output = new Output(app.get('output.options'));
            output.icons = new IconGenerator({
                cacheDir: app.paths.env.cache(),
            });
            return output;
        }, true);
        this.app.addBindingGetter('output');
        this.app.binding('output.ui', app => app.output.ui).addBindingGetter('ui', 'output.ui');
    }
}

export const out = inject('output');
export type out = Bindings['output']

