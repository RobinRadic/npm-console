import { ServiceProvider } from '@radic/shared';
import { Input } from './Input';
import { Bindings, inject } from '@radic/core';

declare module '@radic/core/types/Foundation/Application' {
    export interface Bindings {
        input: typeof Input;
    }

    export interface Application {
        input: typeof Input;
    }
}

export class InputServiceProvider extends ServiceProvider {
    register() {
        this.app.instance('input', Input).addBindingGetter('input');
    }
}


export const ask = inject('input');
export type ask = Bindings['input']
