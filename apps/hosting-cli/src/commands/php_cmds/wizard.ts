import {  } from '@radic/hosting';
import { command,option } from '@radic/console';
import { Command } from '../../Command';

@command('wizard', 'Interactive PHP setup, config etc')
export default class WizardCommand extends Command {
    @option('s', 'Setup PHP interactively') setup: boolean = false;

    builder = (cli) => {
        return cli.epilogue('This was it kids, its set');
    };

    async handle(value: string) {
        const { ask, out, log } = this;
        out.dump(this.setup);
        // let scanPhp = await ask.confirm('Do you want to scan for PHP installations')
        let definePhp = await ask.confirm('Do you want to define PHP installation paths?');
        // if(scanPhp){
        //     await this.scanPhp();
        // }
        if ( definePhp ) {
            await this.definePhp();
        }

    }

    async scanPhp() {
        this.out.writeln('Scanned, found nothing');
    }

    async definePhp() {
        const { ask, out, log } = this;
        let done                        = false;
        const choices                   = [
            { key: 'define', value: 'Manual input' },
            { key: 'select', value: 'File select' },
            { key: 'done', value: 'Nevermind, done.' },
        ];
        while ( !done ) {
            let method = await ask.list('Define a PHP installation path', choices);
            method     = choices.find(c => c.value === method).key;
            if ( method === 'done' ) {
                done = true;
                continue;
            }
            let path;
            if ( method === 'define' ) {
                path = await ask.input('path', '/');
            } else if ( method === 'select' ) {
                path = await ask.directory('path', '/');
            }

            out.writeln(`[{green}path{/green}]: {cyan}${path}{/cyan}`);
        }
    }
}
