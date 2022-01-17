import { Command } from '../Command';
export default class extends Command {
    all: boolean;
    handle(name?: string): Promise<void>;
}
