import { Cli } from '@radic/console';
import { PHP, php } from '@radic/hosting';
import { Command } from '../../Command';
export default class ExtCommand extends Command {
    php: php;
    list: boolean;
    enable: string;
    disable: string;
    Enable: boolean;
    Disable: boolean;
    builder: (cli: Cli) => Cli;
    handle(phpversion?: string): Promise<void | import("@radic/console-output/lib/Output").Output>;
    handleList(php: PHP): Promise<void>;
    get phpchoices(): string[];
    getPHP(phpversion?: string): Promise<PHP>;
}
