import { Command } from '../Command';
export default class SiteCommand extends Command {
    enable: boolean;
    disable: boolean;
    wizard: boolean;
    handle(): Promise<void>;
}
