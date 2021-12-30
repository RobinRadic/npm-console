import { BaseCommand } from '@radic/console';
import { MonoRepo } from './mono';
import { out } from '@radic/console-output';
export declare class Command extends BaseCommand {
    monoRepo: MonoRepo;
    out: out;
    getPackageName(name?: string): Promise<string>;
}
