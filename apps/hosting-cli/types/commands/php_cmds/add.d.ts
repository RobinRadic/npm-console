import { php } from '@radic/hosting';
import { Command } from '../../Command';
export default class AddCommand extends Command {
    php: php;
    handle(path?: string): Promise<import("winston").Logger>;
}
