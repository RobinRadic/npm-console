import { BaseCommand } from '@radic/console';
import { log, out } from '@radic/console-output';
import { ask } from '@radic/console-input';

export class Command extends BaseCommand {
    @log log: log;
    @out out: out;
    @ask ask: ask;
}

