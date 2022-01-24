import { Manager } from '../Support/Manager';
import { Service } from './Service';
import { isPromise } from '@radic/shared';
import { config } from '../Decorators';


export class ServiceManager extends Manager<Service> {
    @config config: config;

    register(name: string) {
        if ( !this.has(name) ) {
            this.set(name, new Service(name));
        }
        if ( !this.config.system.services.includes(name) ) {
            this.config.system.services.push(name);
            this.config.save();
        }
        return this;
    }

    clear(){
        this.config.system.services=[];
        this.config.save();
        this.setItems([]);
        return this
    }

    async each(cb: (service: Service) => Promise<any> | any) {
        let services = this.all();
        if ( isPromise(cb) ) {
            await Promise.all(services.map(s => cb(s)));
            return this;
        }
        services.forEach(s => cb(s));
        return this;
    }

    async refreshAll() {
        await this.each(async s => s.refresh());
    }

    async startAll() {
        await this.each(async s => s.start());
    }

    async stopAll() {
        await this.each(async s => s.stop());
    }

    async restartAll() {
        await this.each(async s => s.restart());
    }

    async reloadAll() {
        await this.each(async s => s.reload());
    }

    async forceReloadAll() {
        await this.each(async s => s.forceReload());
    }

}
