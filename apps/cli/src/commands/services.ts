import { BaseCommand, command } from '@radic/console';
import { ConfigRepository, inject, ServiceManager } from '@radic/core';

@command('services [name]', 'Services test stuff')
export default class ServicesCommand extends BaseCommand {
    @inject('config') config: ConfigRepository<any>;
    @inject('services') services: ServiceManager;

    async handle(name?: string): Promise<any> {
        console.log({ name });
        const services = await this.services.refreshAll();
        await this.services.each(async s => {
            let status = await s.exec('status');
            console.log('status', s.name, s.pids, status);
        });

    }
}
