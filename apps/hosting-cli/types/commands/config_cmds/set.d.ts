import { Bindings } from '@radic/core';
import { Command } from '../../Command';
export default class SetCommand extends Command {
    config: Bindings['config'];
    reset: boolean;
    push: boolean;
    yes: boolean;
    handle(key: string, value: any): Promise<any>;
}
