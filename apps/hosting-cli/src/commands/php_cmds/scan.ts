import { command, option } from '@radic/console';
import { php } from '@radic/hosting';
import { Command } from '../../Command';

@command('scan', 'Scan system for PHP installations to add as definitions that the application monitors')
export default class ScanCommand extends Command {
    @php php: php;

    @option('c', 'Clear all cached php installations') clear: boolean = false;

    async handle(value: string) {
        const { php, ask, out, log } = this;
        if ( this.clear ) {
            php.clean();
            return this.log.info('Cleared all php installations');
        }
        let paths = await php.scan();
        out.dump(paths);
        paths = paths.filter(path => php.getBy('bin', path) === undefined);
        if ( paths.length === 0 ) {
            return this.log.info('Scan did not find any php installations that are not monitored');
        }
        let addPaths = await ask.checkbox(`Found ${paths.length} php installations that are not monitored. Select which versions to add`, paths);
        for ( const path of addPaths ) {
            if ( !php.hasPath(path) ) {
                let v = await php.addFromPath(path);
                this.log.info(`Added PHP(${v.version}: ${v.api}) ${path}`);
            }
        }
    }
}
