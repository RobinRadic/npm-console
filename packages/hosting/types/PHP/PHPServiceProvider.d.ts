import { PHPManager } from './PHPManager';
import { ServiceProvider } from '@radic/shared';
export interface PhpVersionOptions {
    binPath: string;
}
export interface PhpOptions {
    versions?: PhpVersionOptions[];
}
declare module '@radic/core/types/types/config' {
    interface Configuration {
        php?: PhpOptions;
    }
}
declare module '@radic/core/types/Foundation/Application' {
    interface Bindings {
        php: PHPManager;
    }
    interface Application {
        php: PHPManager;
    }
}
export declare class PHPServiceProvider extends ServiceProvider {
    deferred: boolean;
    load(): void;
    register(): void;
    protected registerPhpManager(): void;
    boot(): Promise<void>;
}
