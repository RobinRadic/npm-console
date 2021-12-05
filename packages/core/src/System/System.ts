import { inject, injectable } from '../Foundation';
import { path, paths, processes, services, users } from '../Decorators';
import { DiskCollection, ResolveDiskFn } from './Filesystem';

@injectable()
export class System {
    @services services: services;
    @processes processes: processes;
    @paths paths: paths;
    @path path: path;
    @users users: users;
    @inject('disks') protected disks: ResolveDiskFn;

    async getDisks(): Promise<DiskCollection> {
        return this.disks();
    }

}
