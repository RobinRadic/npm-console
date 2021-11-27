import { ServiceProvider } from '@radic/shared';
import { Input } from './Input';

declare module '@radic/core/lib/Foundation/Application' {
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
