import { Command } from '../../Command';
export default class WizardCommand extends Command {
    setup: boolean;
    builder: (cli: any) => any;
    handle(value: string): Promise<void>;
    scanPhp(): Promise<void>;
    definePhp(): Promise<void>;
}
