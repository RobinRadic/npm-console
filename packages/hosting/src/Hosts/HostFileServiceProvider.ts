import { ServiceProvider } from '@radic/shared';
import { HostFile } from './HostFile';


declare module '@radic/core/types/Foundation/Application' {
    export interface Bindings {
        hostfile: HostFile;
    }

    export interface Application {
        hostfile: HostFile;
    }
}

export class HostFileServiceProvider extends ServiceProvider {

    public register(): any {
        this.app.singleton('hostfile', HostFile).addBindingGetter('hostfile');
    }
}
