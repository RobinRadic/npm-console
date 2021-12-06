import { ServiceProvider } from '@radic/shared';
import { HostFile } from './HostFile';
declare module '@radic/core/lib/Foundation/Application' {
    interface Bindings {
        hostfile: HostFile;
    }
    interface Application {
        hostfile: HostFile;
    }
}
export declare class HostFileServiceProvider extends ServiceProvider {
    register(): any;
}
