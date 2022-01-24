import { ServiceProvider } from '@radic/shared';
import { DiskCollection, FS } from '../System';
declare module '../Foundation/Application' {
    interface Application {
        fs: FS;
        disks(): Promise<DiskCollection>;
    }
    interface Bindings {
        fs: FS;
    }
}
export declare class FilesystemServiceProvider extends ServiceProvider {
    register(): void;
}
