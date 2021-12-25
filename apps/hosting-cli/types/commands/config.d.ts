import { Command } from '../Command';
export default class ConfigCommand extends Command {
    builder: (cli: any) => any;
    handle(): Promise<void>;
}
