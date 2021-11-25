import { BaseCommand, coerce, command, option } from '@radic/console';
import { ConfigRepository, inject } from '@radic/core';
import { Input } from '@radic/console-input';

@command('test [suite]', 'Dev test stuff')
export default class TestCommand extends BaseCommand {
    @option('n', 'name')
    @coerce(value => value + 'asdf')
    name: string = 'ff';

    @inject('config') config: ConfigRepository<any>;

    async handle(suite?: string): Promise<any> {
        console.dir(this.config);
        console.log({ name: this.name, suite });
        this.cli.showHelp('log');
        await Input.fuzzypath('Pick the date')
    }
}
