import { ServiceProvider } from '@radic/shared';
import { PATH, ProcessManager, ServiceManager, System, UserManager } from '../System';

declare module '../Foundation/Application' {
    export interface Application {
        system: System;
        services: ServiceManager;
        processes: ProcessManager;
        path: PATH;
        users: UserManager;
    }

    export interface Bindings {
        system: System;
        services: ServiceManager;
        processes: ProcessManager;
        path: PATH;
        users: UserManager;
    }
}
declare module '../types/config' {
    export interface Configuration {
        system?: SystemConfiguration;
    }
}

export interface SystemConfiguration {
    services?: string[];
    processes?: string[];
}


export class SystemServiceProvider extends ServiceProvider {
    providers = [];

    async load() {
        this.config({
            key     : 'system',
            defaults: {
                processes: [],
                services : [],
            },
        });
        this.config({
            key     : 'servers',
            defaults: {
                processes: [],
                services : [],
            },
        });
    }

    async register() {
        this.registerUsers();
        this.registerPATH();
        this.registerProcesses();
        this.registerServices();
        this.registerSystem();
    }

    registerUsers() {
        this.app.singleton('users', UserManager).addBindingGetter('users');
    }

    registerPATH() {
        this.app.instance('path', new PATH()).addBindingGetter('path');
    }

    registerProcesses() {
        this.app.singleton('processes', ProcessManager).addBindingGetter('processes');
    }

    registerServices() {
        this.app.singleton('services', ServiceManager).addBindingGetter('services');
    }

    registerSystem() {
        this.app.singleton('system', System).addBindingGetter('system');
    }

    async boot() {
        await Promise.all([ this.bootProcesses(), this.bootServices() ]);
    }

    async bootProcesses() {
        const processes: ProcessManager = this.app.get<ProcessManager>('processes');
        await processes.loadData();
        for ( const name of this.app.config.system.processes ) {
            processes.register(name);
        }
        await Promise.all(processes.all().map(p => p.refresh()));
    }

    async bootServices() {
        const services: ServiceManager = this.app.get<ServiceManager>('services');
        for ( const name of this.app.config.system.services ) {
            services.register(name);
        }
        await Promise.all(services.all().map(s => s.refresh()));
    }
}

