import { php, PHP, PHPApi } from '@radic/hosting';
import { isFunction, isString } from '@radic/shared';
import { Command } from '../../Command';
import { Cli, command } from '@radic/console';
import { ServiceStatus } from '@radic/core';

@command('info [version] [api]', 'List PHP installations definitions that the application monitors')
export default class ListCommand extends Command {
    @php php: php;

    builder = (cli: Cli) => cli.string('version');

    async handle(version?: string, api: PHPApi.Key = 'CLI') {
        api                     = api.toUpperCase() as PHPApi.Key;
        const { ask, out, log } = this;
        let phps                = this.php.toArray();
        if ( phps.length === 0 ) {
            return out.line(`{yellow.bold}No PHP installations are monitored{/reset}`);
        }
        if ( !version ) {
            [ version, api ] = await ask.list('Select version', phps.map(php => ({ value: [ php.shortVersion, php.apiKey ], name: php.shortVersion + ' (' + php.apiKey + ')' })));
        }
        const php = this.php.get(version, api);
        if ( !php ) {
            this.log.error(`PHP version [${version}] is not monitored by the application`);
            out.line(`{green.bold}Monitored PHP installations:{/reset}`);
            for ( const php of phps ) {
                this.out.line(`- PHP ${php.version}: ${php.api}`);
            }
            return;
        }


        let show: Partial<Record<keyof PHP | string, any>> = {
            version   : true,
            bin       : true,
            api       : true,
            extensions: (extensions: PHP['extensions']) => Object.keys(extensions).join(', '),
        };
        if ( php.isFPM ) {
            let service       = await php.getFPMService();
            let serviceStatus = ServiceStatus.ACTIVE;// await service.status()
            let status;
            if ( ServiceStatus.isActive(serviceStatus) ) {
                status = out.color(serviceStatus, 'green');
            }
            if ( ServiceStatus.isInactive(serviceStatus) ) {
                status = out.color(serviceStatus, 'red');
            }
            if ( !status ) {
                status = out.color('error', 'red');
            }
            show.service = () => status;
        }
        show.xdebug                = () => php.hasExtension('xdebug') ? out.color('enabled', 'green') : out.color('disabled', 'red');
        let keys: Array<keyof PHP> = Object.keys(show) as any;

        keys.forEach(key => {
            if ( show[ key ] === false ) {
                return;
            }
            let value = php[ key ];
            out.write(`{bold}${key}:{/bold} `);
            if ( isFunction(show[ key ]) ) {
                let result = show[ key ](value, php);
                if ( !isString(result) ) {
                    return;
                }
                value = result;
            }
            return out.write(value.toString()).nl;

        });
    }
}
