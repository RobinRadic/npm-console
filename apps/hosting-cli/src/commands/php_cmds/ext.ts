import { Cli, command, option } from '@radic/console';
import { PHP, php } from '@radic/hosting';
import { Command } from '../../Command';
import { Collection } from '@radic/core';

@command('ext [phpversion]', 'Manage php extensions')
export default class ExtCommand extends Command {
    @php php: php;
    @option('l', 'List all extensions') list: boolean;
    @option('e', 'Enable the provided extension', { requiresArg: true }) enable: string;
    @option('d', 'Disable the provided extension', { requiresArg: true }) disable: string;

    @option('E', 'Choose extension to enable') Enable: boolean;
    @option('D', 'Choose extension to disable') Disable: boolean;


    builder = (cli: Cli) => {
        let phps       = this.app.php.toArray();
        let phpchoices = phps.map(php => php.apiKey + '-' + php.shortVersion);
        cli.positional('phpversion', {
            choices: phpchoices,
        });
        cli.positional('command', {
            choices: [ 'enable', 'disable' ],
        });
        cli.example('php ext -l', 'This will display all extensions')
        cli.example('php ext -e <name>', 'Enable <name> extension')
        cli.example('php ext -d xml', 'Disable xml extension')
        cli.example('php ext -E', 'Choose extension to enable')
        cli.example('php ext -D', 'Choose extension to disable')
        return cli;
    };

    async handle(phpversion?: string) {
        const { ask, out, log } = this;
        const php               = await this.getPHP(phpversion);
        if ( this.list ) {
            return await this.handleList(php);
        }
        if(this.Enable){
            let name = await ask.list('Choose extension to enable', Object.keys(php.disabledExtensions))
            out.write(php.enableExtension(name as any))
            return out.line(`Enabled {bold}${name}{/bold} extension.`)
        }
        if(this.Disable){
            let name = await ask.list('Choose extension to disable', Object.keys(php.enabledExtensions))
            out.write(php.disableExtension(name as any))
            return out.line(`Disabled {bold}${name}{/bold} extension.`)
        }
        if ( this.enable ) {
            out.write(php.enableExtension(this.enable as any));
            return out.line(`Enabled {bold}${this.enable}{/bold} extension.`)
        }
        if ( this.disable ) {
            out.write(php.disableExtension(this.disable as any));
            return out.line(`Disabled {bold}${this.disable}{/bold} extension.`)
        }
    }

    async handleList(php: PHP) {
        const { ask, out, log } = this;
        out.write(`{bold}extensions:{/bold} `);
        let extensions = Object.keys(php.availableExtensions).map(name => out.styled(php.hasEnabledExtension(name) ? 'success' : 'error', name, true));
        let columns    = Collection.make(extensions).split(Math.ceil(extensions.length / 10)).map((collection: Collection<string>) => {
            return collection.toArray().join(', ');
        }).join('\n');
        out.line(columns);
    }

    get phpchoices(): string[] {return this.app.php.toArray().map(php => php.apiKey + '-' + php.shortVersion);}

    async getPHP(phpversion?: string): Promise<PHP> {
        const { ask, out, log } = this;
        if ( !phpversion ) {
            phpversion = await ask.list('', this.phpchoices);
        }
        let php: PHP;
        if ( phpversion ) {
            let [ api, version ] = phpversion.split('-');
            php                  = this.php.get(version, api as any);
        }
        if ( !php ) {
            return out.styled('error', `Could not find that PHP version. You might need to add it first`);
        }
        return php;
    }
}
