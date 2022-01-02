import { BaseCommand } from '@radic/console';
import { ask } from '@radic/console-input';
import { MonoRepo } from './mono';
import { out, log } from '@radic/console-output';
export declare class Command extends BaseCommand {
    monoRepo: MonoRepo;
    out: out;
    ask: ask;
    log: log;
    getPackageName(name?: string): Promise<string>;
    askPackageName(): Promise<string>;
}
