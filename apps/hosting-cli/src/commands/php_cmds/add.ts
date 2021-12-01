import { command} from '@radic/console';
import { php} from '@radic/hosting';
import { Command } from '../../Command';

@command('add <path>', 'Add a PHP installation definition to the application to monitor')
export default class AddCommand extends Command {
    @php php: php;

    async handle(path: string) {
        const { php, ask, out, log } = this;
        if ( php.hasPath(path) ) {
            return this.log.warn(`${path} is already monitored`);
        }
        if ( !await php.isValidPhpPath(path) ) {
            return this.log.error(`${path} is a valid PHP installation`);
        }
        let v = await php.addFromPath(path);
        this.log.info(`Added PHP(${v.version}: ${v.api}) ${path}`);

    }
}
