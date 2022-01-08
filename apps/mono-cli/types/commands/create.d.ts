import { Command } from '../Command';
export default class extends Command {
    template: string;
    variables: string;
    handle(name?: string, path?: string): Promise<void>;
}
