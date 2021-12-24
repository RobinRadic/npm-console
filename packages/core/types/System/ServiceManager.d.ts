import { Manager } from '../Support/Manager';
import { Service } from './Service';
export declare class ServiceManager extends Manager<Service> {
    register(name: string): this;
    each(cb: (service: Service) => Promise<any> | any): Promise<this>;
    refreshAll(): Promise<void>;
    startAll(): Promise<void>;
    stopAll(): Promise<void>;
    restartAll(): Promise<void>;
    reloadAll(): Promise<void>;
    forceReloadAll(): Promise<void>;
}
