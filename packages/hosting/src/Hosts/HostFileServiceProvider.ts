import { ServiceProvider } from '@radic/shared';
import { HostFile } from './HostFile';
import { SiteManager } from '../Servers/Sites';


declare module '@radic/core/lib/Foundation/Application' {
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
