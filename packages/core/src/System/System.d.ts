import { path, paths, processes, services, users } from '../Decorators';
import { DiskCollection, ResolveDiskFn } from './Filesystem';
export declare class System {
    services: services;
    processes: processes;
    paths: paths;
    path: path;
    users: users;
    protected disks: ResolveDiskFn;
    getDisks(): Promise<DiskCollection>;
}
