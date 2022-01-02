import { Command } from '../Command';
export default class extends Command {
    push: boolean;
    tags: boolean;
    remote: string;
    handle(message?: string): Promise<void>;
}
