import { command } from '@radic/console';
import { services } from '@radic/core';
import { Command } from '../../Command';

@command('list', 'List services that the application monitors')
export default class ListCommand extends Command {
    @services services: services;

    async handle(value: string) {
        const { out } = this;

        const services = this.services.all();
        if ( services.length == 0 ) {
            out.line(`{yellow.bold}No services are monitored{/reset}`);
        }
        out.line(`{green.bold}Monitored services:{/reset}`);
        for ( const service of services ) {
            const status = await service.status();
            this.out.line(`- ${service.name}: ${status}`);
        }
    }
}
