import { command } from '@radic/console';
import { services } from '@radic/core';
import { Command } from '../../Command';

@command('clear', 'Clear services that the application monitors')
export default class ClearCommand extends Command {
    @services services: services;

    async handle(value: string) {
        const { services, out } = this;
        services.clear();
        out.line(`{green.bold}Services cleared{/reset}`);
    }
}
