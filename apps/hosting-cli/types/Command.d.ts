import { BaseCommand } from '@radic/console';
import { log, out } from '@radic/console-output';
import { ask } from '@radic/console-input';
export declare class Command extends BaseCommand {
    log: log;
    out: out;
    ask: ask;
}
