import { BaseCommand } from '@radic/console';
import { ask } from '@radic/console-input';
import { MonoRepo } from './mono';
import { out } from '@radic/console-output';
export declare class Command extends BaseCommand {
    monoRepo: MonoRepo;
    out: out;
    ask: ask;
    getPackageName(name?: string): Promise<string>;
    askPackageName(): Promise<string>;
}
