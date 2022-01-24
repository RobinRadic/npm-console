import { services } from '@radic/core';
import { Command } from '../../Command';
export default class ListCommand extends Command {
    services: services;
    handle(value: string): Promise<void>;
}
