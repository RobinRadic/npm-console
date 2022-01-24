import { services } from '@radic/core';
import { Command } from '../../Command';
export default class ClearCommand extends Command {
    services: services;
    handle(value: string): Promise<void>;
}
