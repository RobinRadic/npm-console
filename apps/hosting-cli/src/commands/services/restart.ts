import { command } from '@radic/console';
import { Service, services } from '@radic/core';
import { Command } from '../../Command';

@command('restart [name]', 'Restart services that the application monitors')
export default class ListCommand extends Command {
    @services services: services;

    async handle(name?:string) {
        const { out,log } = this;

        const services = this.services.all();

        if(!name) {
            for ( const service of services ) {
                await this.restartService(service)
            }
        }
        if(!this.services.has(name)){
            return log.error(`Service "${name}" does not exist or is not monitored`)
        }
        return this.restartService(this.services.get(name))
    }

    async restartService(service:Service){
        this.out.write(`- ${service.name}: `);
        await service.restart();
        const status = await service.status();
        this.out.write(` restarted [${status}]`).nl;
    }
}
