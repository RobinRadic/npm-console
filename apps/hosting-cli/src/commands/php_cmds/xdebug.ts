import { Cli, command, option } from '@radic/console';
import { PHP, php } from '@radic/hosting';
import { Command } from '../../Command';
import { CheckboxChoiceMap, DistinctChoice } from 'inquirer';
import { uniq } from 'lodash';

@command('xdebug [command] [version] [sapi]', 'Enable or disable XDebug on various PHPs')
export default class XdebugCommand extends Command {
    @php php: php;
    @option('l', 'List all') list: boolean;

    builder = (cli: Cli) => {
        let phps = this.app.php.toArray();
        cli.positional('version', {
            choices: uniq(phps.map(php => php.shortVersion)),
        });
        cli.positional('command', {
            choices: [ 'enable', 'disable' ],
        });
        cli.positional('sapi', {
            choices: [ 'cli', 'fpm', 'all' ],
            default: 'all',
        });
        return cli;
    };

    get phpchoices(): DistinctChoice<CheckboxChoiceMap>[] {
        return this.app.php.toArray().map(php => {

            return {
                checked: php.isExtensionEnabled('xdebug'),
                name   : php.shortVersion + '-' + php.apiKey,
                value  : php,
            };
        });
    }

    async handle(phpversion?: string, command?: 'enable' | 'disable') {
        const { ask, out, log } = this;
        this.php.getPhpCache().clear();
        if ( this.list ) {
            let table = out.ui.table({ head: [ 'Version', 'SAPI', 'Status' ] });
            for ( const php of this.php.toArray() ) {
                let enabled = php.isExtensionEnabled('xdebug') ? '{green}enabled{/green}' : '{red}disabled{/red}';
                let version = `${php.semver.major}.${php.semver.minor}{dim}.${php.semver.patch}{/dim}`
                table.push([ out.parse(version), php.apiKey, out.parse(enabled) ]);
            }
            return out.line(table.toString());
        }
        if ( !phpversion ) {
            const answers: PHP[] = await ask.checkbox('Enable/disable XDebug', this.phpchoices);
            for ( const php of this.php.toArray() ) {
                let answer = answers.find(answer => answer.equals(php));
                if ( answer && !php.isExtensionEnabled('xdebug') ) {
                    php.enableExtension('xdebug');
                    log.info({
                        label  : php.apiKey + '-' + php.shortVersion,
                        message: out.parse('{green}enabled{/green}'),
                    });
                } else if ( !answer && php.isExtensionEnabled('xdebug') ) {
                    php.disableExtension('xdebug');

                    log.info({
                        label  : php.apiKey + '-' + php.shortVersion,
                        message: out.parse('{green}disabled{/green}'),
                    });
                }
            }
            return;
        }
        let php: PHP;
        if ( phpversion ) {
            let [ api, version ] = phpversion.split('-');
            php                  = this.php.get(version, api as any);
        }
        if ( !php ) {
            return out.styled('error', `Could not find that PHP version. You might need to add it first`);
        }
        if ( !command ) {
            command = await ask.list('Command', [ 'enable', 'disable' ]);
        }
        if ( command === 'enable' ) {
            php.enableExtension('xdebug');
            return out.styled('success', 'XDebug Enabled');
        }
        if ( command === 'disable' ) {
            php.disableExtension('xdebug');
            return out.styled('success', 'XDebug Disabled');
        }
    }
}
