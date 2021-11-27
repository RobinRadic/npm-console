import { ServiceProvider } from '@radic/shared';
import { Output, OutputOptions } from './';

declare module '@radic/core/lib/types/config' {
    export interface Configuration {
        output?: OutputOptions;
    }
}
declare module '@radic/core/lib/Foundation/Application' {
    export interface Bindings {
        'output': Output;
        'output.options': OutputOptions;
    }

    export interface Application {
        output: Output;
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
            return new Output(app.get('output.options'));
        }, true);
        this.app.addBindingGetter('output');
    }
}
