import { BaseCommand } from '@radic/console';
import { out } from '@radic/console-output/lib/OutputServiceProvider';
import { ask } from '@radic/console-input/lib/InputServiceProvider';
import { log } from '@radic/console-output/lib/log';
export declare class Command extends BaseCommand {
    log: log;
    out: out;
    ask: ask;
}
