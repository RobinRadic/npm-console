import { command } from '@radic/console';
import { php } from '@radic/hosting';
import { Command } from '../../Command';

@command('list', 'List PHP installations definitions that the application monitors')
export default class ListCommand  extends Command {
    @php php: php;

    async handle(value: string) {
        const { ask, out, log } = this;
        let phps                        = this.php.toArray();
        if ( phps.length === 0 ) {
            out.line(`{yellow.bold}No PHP installations are monitored{/reset}`);
        }
        out.line(`{green.bold}Monitored PHP installations:{/reset}`);
        for ( const php of phps ) {
            this.out.line(`- PHP ${php.version}: ${php.apiKey}`);
        }
    }
}
