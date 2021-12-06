import { ServiceProvider } from '@radic/shared';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { DatabaseManager } from './DatabaseManager';
import { DatabasesConfiguration } from './types';
export { ConnectionOptions };
declare module '@radic/core/lib/Foundation/Application' {
    interface Application {
        db: DatabaseManager;
    }
    interface Bindings {
        db: DatabaseManager;
    }
}
declare module '@radic/core/lib/types/config' {
    interface Configuration {
        db?: DatabasesConfiguration;
    }
}
export declare class DatabaseServiceProvider extends ServiceProvider {
    load(): void;
    register(): void;
    boot(): Promise<void>;
}
