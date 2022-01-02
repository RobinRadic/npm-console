import { Command } from '../../Command';
export default class extends Command {
    handle(name?: string): Promise<void>;
}
