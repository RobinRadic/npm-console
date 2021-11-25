import { ServiceProvider } from '../../core';
import { Output, OutputOptions } from '@radic/console-output';

declare module '../../types/config' {
    export interface Configuration {
        output?: OutputOptions;
    }
}
declare module '../../core/Foundation/Application' {
    export interface Bindings {
        'out': Output;
        'out.options': OutputOptions;
    }

    export interface Application {
        out: Output;
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
                styles        : { type: 'object' },
                tableStyle    : { type: 'object' },
            },
        });
    }

    register() {
        this.app.instance<OutputOptions>('out.options', Output.defaultOptions);
    }

    boot() {
        this.app.binding<Output>('out', app => {
            return new Output(app.get('out.options'));
        }, true);
        this.app.addBindingGetter('out');
    }
}
