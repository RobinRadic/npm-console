import { Manager } from '../Support/Manager';
import { Service } from './Service';
import { config } from '../Decorators';
export declare class ServiceManager extends Manager<Service> {
    config: config;
    register(name: string): this;
    clear(): this;
    each(cb: (service: Service) => Promise<any> | any): Promise<this>;
    refreshAll(): Promise<void>;
    startAll(): Promise<void>;
    stopAll(): Promise<void>;
    restartAll(): Promise<void>;
    reloadAll(): Promise<void>;
    forceReloadAll(): Promise<void>;
}
