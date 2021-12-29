import { Cli, command } from '@radic/console';
import { PHP, php } from '@radic/hosting';
import { Command } from '../../Command';

@command('xdebug [phpversion] [command]', 'Enableor disable XDebug on various PHPs')
export default class XdebugCommand extends Command {
    @php php: php;

    builder = (cli:Cli) => {
        let phps = this.app.php.toArray();
        let phpchoices = phps.map(php => php.apiKey + '-' + php.shortVersion)
        cli.positional('phpversion', {
            choices: phpchoices
        });
        cli.positional('command', {
            choices: ['enable','disable']
        })
        return cli;
    }

    get phpchoices():string[]{return this.app.php.toArray().map(php => php.apiKey + '-' + php.shortVersion)}

    async handle(phpversion?: string, command?:'enable'|'disable') {
        const { ask, out, log } = this;
        if(!phpversion){
            phpversion = await ask.list('', this.phpchoices)
        }
        let php:PHP
        if(phpversion){
            let [api,version]=phpversion.split('-');
            php = this.php.get(version,api as any);
        }
        if(!php){
            return out.styled('error',`Could not find that PHP version. You might need to add it first`)
        }
        if(!command){
            command = await ask.list('Command', ['enable','disable'])
        }
        if(command === 'enable'){
            php.enableExtension('xdebug')
            return out.styled('success','XDebug Enabled')
        }
        if(command === 'disable'){
            php.disableExtension('xdebug')
            return out.styled('success','XDebug Disabled')
        }
    }
}
