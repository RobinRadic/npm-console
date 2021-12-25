import { ServiceProvider } from '@radic/shared';
import { Guard } from './Guard';
declare module '@radic/core/types/Foundation/Application' {
    interface Bindings {
        guard: Guard;
    }
    interface Application {
        guard: Guard;
    }
}
declare module '@radic/core/types/types/config' {
    interface Configuration {
        auth?: AuthConfiguration;
    }
}
export interface AuthConfiguration {
    currentUser?: string;
}
export declare class AuthServiceProvider extends ServiceProvider {
    load(): any;
    register(): void;
}
