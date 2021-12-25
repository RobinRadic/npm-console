import { php } from '@radic/hosting';
import { Command } from '../../Command';
export default class ScanCommand extends Command {
    php: php;
    clear: boolean;
    handle(value: string): Promise<any>;
}
