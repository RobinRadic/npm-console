import { Command } from '../Command';
export default class extends Command {
    handle(): Promise<void>;
}
