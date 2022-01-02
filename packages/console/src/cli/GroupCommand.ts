import { BaseCommand } from './BaseCommand';


export abstract class GroupCommand extends BaseCommand {
    public static type='group'
    async handle() {}
}
