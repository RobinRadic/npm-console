import { ServiceProvider } from '@radic/shared';
import { DiskCollection } from './DiskCollection';
import { FS } from './types';
declare module '../../Foundation/Application' {
    interface Application {
        fs: FS;
        disks(): Promise<DiskCollection>;
    }
    interface Bindings {
        fs: FS;
    }
}
export declare type ResolveDiskFn = (refresh?: boolean) => Promise<DiskCollection>;
export declare class FilesystemServiceProvider extends ServiceProvider {
    register(): void;
}
