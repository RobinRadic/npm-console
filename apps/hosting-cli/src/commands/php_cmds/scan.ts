import { command, option } from '@radic/console';
import { php, PHPApi } from '@radic/hosting';
import { Command } from '../../Command';
import {basename} from 'path'

@command('scan', 'Scan system for PHP installations to add as definitions that the application monitors')
export default class ScanCommand extends Command {
    @php php: php;

    @option('c', 'Clear all monitored php installations') clear: boolean = false;

    async handle(value: string) {
        const { php, ask, out, log } = this;
        if ( this.clear ) {
            php.clean();
            return this.log.info('Cleared all php installations');
        }
        php.getPhpCache().clear();
        let paths = await php.scan();
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
        // php.toArray().filter(php => php.isApi(PHPApi.FPM)).forEach(php => {
        //     let services = this.app.config.get<string[]>('system.services',[]);
        //     if(!services.includes(php.fpmServiceName)) {
        //         services.push(php.fpmServiceName)
        //         this.app.config.set('system.services', services);
        //     }
        // })
    }
}
