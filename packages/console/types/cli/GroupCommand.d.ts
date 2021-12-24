import { BaseCommand } from './BaseCommand';
export declare abstract class GroupCommand extends BaseCommand {
    handle(): Promise<void>;
}
