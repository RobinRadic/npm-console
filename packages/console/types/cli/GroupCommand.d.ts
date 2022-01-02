import { BaseCommand } from './BaseCommand';
export declare abstract class GroupCommand extends BaseCommand {
    static type: string;
    handle(): Promise<void>;
}
