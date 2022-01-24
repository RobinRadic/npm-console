import { Service, services } from '@radic/core';
import { Command } from '../../Command';
export default class ListCommand extends Command {
    services: services;
    handle(name?: string): Promise<void | import("winston").Logger>;
    restartService(service: Service): Promise<void>;
}
