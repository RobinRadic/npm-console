
import { ServiceProvider } from '@radic/shared';
import { ServiceManager } from './ServiceManager';
import { ProcessManager } from './ProcessManager';
import { PATH } from './PATH';

declare module '../Foundation/Application' {
    export interface Application {
        services: ServiceManager;
        processes: ProcessManager;
        path: PATH;
    }

    export interface Bindings {
        services: ServiceManager;
        processes: ProcessManager;
        path: PATH;
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
    providers = [
    ]

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
        this.registerPATH();
        this.registerProcesses();
        this.registerServices();
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

