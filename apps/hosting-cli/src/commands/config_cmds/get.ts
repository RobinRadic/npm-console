import { command} from '@radic/console';
import { Bindings, inject } from  '@radic/core';
import { dot } from 'dot-object';
import { Command } from '../../Command';

@command('get [key]', 'Manage authentication credentials')
export default class GetCommand extends Command {
    @inject('log') log: Bindings['log'];
    @inject('config') config: Bindings['config'];

    builder = (cli) => {
        return cli.epilogue('This was it kids, its set');
    };

    async handle(key: string) {
        if ( !this.config.has(key) ) {
            this.cli.exit(1, new Error(`Could not find config with key [${key}]`));
            return 1;
        }
        let colors = {
            string : '#EF674A',
            number : 'cyan',
            boolean: '#DBCC99',
            default: 'white',
        };
        const val  = this.config.get(key);
        this.out.writeln(`{green.bold}${key}{/green./bold}: `);
        let type = typeof val;
        if ( type === 'string' || type === 'number' || type === 'boolean' ) {
            return this.out.write(`{${colors[ type ]}}${val}{/${colors[ type ]}}`).nl;
        }
        if ( Array.isArray(val) ) {
            return this.out.dump(val).nl;
        }
        if ( type === 'object' ) {
            return Object.entries(dot(val)).forEach(([ key, val ]) => {
                this.out.write(`[{green}${key}{/green}]: `);
                let type = typeof val;
                if ( type === 'string' || type === 'number' || type === 'boolean' ) {
                    return this.out.write(`{${colors[ type ]}}${val}{/${colors[ type ]}}`).nl;
                }
                this.out.write(`{${colors.default}}${val}{${colors.default}}`).nl;

            });
        }
        this.out.write(`{${colors.default}}${val}{${colors.default}}`).nl;
    }
}
