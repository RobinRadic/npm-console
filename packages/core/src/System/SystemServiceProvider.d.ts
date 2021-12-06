import { ServiceProvider } from '@radic/shared';
import { ServiceManager } from './ServiceManager';
import { ProcessManager } from './ProcessManager';
import { PATH } from './PATH';
import { System } from './System';
import { UserManager } from './UserManager';
import { FilesystemServiceProvider } from './Filesystem/FilesystemServiceProvider';
declare module '../Foundation/Application' {
    interface Application {
        system: System;
        services: ServiceManager;
        processes: ProcessManager;
        path: PATH;
        users: UserManager;
    }
    interface Bindings {
        system: System;
        services: ServiceManager;
        processes: ProcessManager;
        path: PATH;
        users: UserManager;
    }
}
declare module '../types/config' {
    interface Configuration {
        system?: SystemConfiguration;
    }
}
export interface SystemConfiguration {
    services?: string[];
    processes?: string[];
}
export declare class SystemServiceProvider extends ServiceProvider {
    providers: (typeof FilesystemServiceProvider)[];
    load(): Promise<void>;
    register(): Promise<void>;
    registerUsers(): void;
    registerPATH(): void;
    registerProcesses(): void;
    registerServices(): void;
    registerSystem(): void;
    boot(): Promise<void>;
    bootProcesses(): Promise<void>;
    bootServices(): Promise<void>;
}
