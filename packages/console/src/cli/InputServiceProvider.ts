import { ServiceProvider } from '../../core';
import { Input } from '@radic/console-input';

declare module '../../core/Foundation/Application' {
    export interface Bindings {
        input: typeof Input
    }
    export interface Application {
        input: typeof Input
    }
}
export class InputServiceProvider extends ServiceProvider {

    register(){
        this.app.instance('input', Input).addBindingGetter('input');
    }
}
