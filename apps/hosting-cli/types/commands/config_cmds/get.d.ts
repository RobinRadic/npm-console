import { Bindings } from '@radic/core';
import { Command } from '../../Command';
export default class GetCommand extends Command {
    log: Bindings['log'];
    config: Bindings['config'];
    builder: (cli: any) => any;
    handle(key: string): Promise<void | import("@radic/console-output").Output | 1>;
}
