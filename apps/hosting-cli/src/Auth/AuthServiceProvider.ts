import { ServiceProvider } from '@radic/shared';
import { Guard } from './Guard';

declare module '@radic/core/types/Foundation/Application' {
    export interface Bindings {
        guard: Guard;
    }

    export interface Application {
        guard: Guard;
    }
}

declare module '@radic/core/types/types/config' {
    export interface Configuration {
        auth?: AuthConfiguration;
    }
}

export interface AuthConfiguration {
    currentUser?: string;
}

export class AuthServiceProvider extends ServiceProvider {
    public load(): any {
        this.app.addConfig<AuthConfiguration>({
            key     : 'auth',
            defaults: {
                currentUser: undefined,
            },
        });
    }

    register() {
        this.app.singleton('guard', Guard).addBindingGetter('guard');
    }
}
