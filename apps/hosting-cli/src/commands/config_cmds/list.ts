import { command } from '@radic/console';
import { config } from '@radic/core';
import { dot } from 'dot-object';
import { Command } from '../../Command';

@command('list', 'Lists the configuration')
export default class ListCommand extends Command {
    @config config: config;

    builder = (cli) => {
        return cli.epilogue('This was it kids, its set');
    };

    async handle(value: string) {
        const all  = this.config.get();
        let colors = {
            string  : '#EF674A',
            number  : 'cyan',
            boolean : '#DBCC99',
            default : 'white',
            function: '#1471A1',
        };

        Object.entries(dot(all)).forEach(([ key, val ]) => {
            this.out.write(`[{green}${key}{/green}]: `);
            let type = typeof val;
            if ( type === 'string' || type === 'number' || type === 'boolean' ) {
                return this.out.write(`{${colors[ type ]}}${val}{/${colors[ type ]}}`).nl;
            }
            if ( type === 'function' ) {
                return this.out.write(`{${colors.function}}${val[ 'name' ] || key}(){/${colors.function}}`).nl;
            }
            this.out.write(`{${colors.default}}${val}{${colors.default}}`).nl;

        });
    }
}
