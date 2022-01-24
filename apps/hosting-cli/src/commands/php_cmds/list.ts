import { command, option } from '@radic/console';
import { php } from '@radic/hosting';
import { Command } from '../../Command';
import { cache } from '@radic/core';

@command('list', 'List PHP installations definitions that the application monitors')
export default class ListCommand extends Command {
    @php php: php;
    @cache cache: cache;
    @option('a', 'Show all columns') all: boolean;
    @option('p', 'Show bin/config paths') paths: boolean;
    @option('v', 'Show full version') versions: boolean;


    async handle(value: string) {
        const { ask, out, log } = this;
        this.php.getPhpCache().clear();
        let phps = this.php.toArray();

        if ( phps.length === 0 ) {
            out.line(`{yellow.bold}No PHP installations are monitored{/reset}`);
        }
        out.line(`{green.bold}Monitored PHP installations:{/reset}`);
        let baseColumns  = [ 'version', 'sapi', 'xdebug', 'date' ];
        let pathColumns  = [ 'bin', 'config path', 'config file', 'config dir' ];
        let extraColumns = [ 'display_errors', 'error_reporting', 'memory_limit', 'max_execution_time' ];
        let columns      = baseColumns;
        if ( this.all ) {
            columns = columns.concat(pathColumns).concat(extraColumns);
        } else {
            if ( this.paths ) {
                columns = columns.concat(pathColumns);
            }
        }

        const table = out.ui.table({
            head: columns,
        });
        for ( const php of phps ) {
            let xdebug = '{dim}not installed{/dim}';
            if ( php.hasAvailableExtension('xdebug') ) {
                xdebug = php.hasEnabledExtension('xdebug') ? '{green}enabled{/green}' : '{yellow}disabled{/yellow}';
            }
            let data: Record<string, any> = {
                version           : this.versions ? php.shortVersion : php.version,
                sapi              : php.apiKey,
                xdebug            : out.parse(xdebug),
                date              : php.date.toDateString(),
                bin               : php.bin,
                'config path'     : php.info.parsed[ 'Configuration File (php.ini) Path' ],
                'config file'     : php.info.parsed[ 'Loaded Configuration File' ],
                'config dir'      : php.info.parsed[ 'Scan this dir for additional .ini files' ],
                display_errors    : php.info.config.PHP.display_errors,
                error_reporting   : php.info.config.PHP.error_reporting,
                memory_limit      : php.info.config.PHP.memory_limit,
                max_execution_time: php.info.config.PHP.max_execution_time,
            };


            let row = columns.map(column => data[ column ]);
            table.push(row);


        }
        out.line(table.toString());
    }
}
