import { php } from '@radic/hosting';
import { Command } from '../../Command';
export default class ListCommand extends Command {
    php: php;
    handle(value: string): Promise<void>;
}
