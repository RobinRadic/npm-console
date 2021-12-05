import { ServiceProvider } from '@radic/shared';
import { Guard } from './Guard';

declare module '@radic/core/lib/Foundation/Application' {
    export interface Bindings {
        guard: Guard;
    }

    export interface Application {
        guard: Guard;
    }
}

export class AuthServiceProvider extends ServiceProvider {
    register() {
        this.app.singleton('guard', Guard).addBindingGetter('guard');
    }
}
