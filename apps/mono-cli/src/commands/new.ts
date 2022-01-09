import { command } from '@radic/console';
import { Command } from '../Command';
import { resolve } from 'path';
import { MonoRepoCreator } from '../mono/MonoRepoCreator';


@command('new <name>', 'Create a new monorepo', [ 'n' ])
export default class extends Command {

    async handle(name: string) {
        let path = resolve(this.app.paths.root, name);
        this.out.line(`path: ${path}`);
        const creator = new MonoRepoCreator(name);
        if ( !creator.validForCreate() ) {
            this.log.error('Not valid for create');
        }
        let hooks   = Object.keys(creator.hooks);
        let verbose = [ 'runYarnDataOut', 'runYarnDataErr' ];
        for ( let hook of hooks ) {
            creator.hooks[ hook ].tap('new', c => {
                if ( verbose.includes(hook) ) {
                    return this.log.log({
                        level  : 'verbose',
                        message: c,
                        label  : 'monorepo: ' + hook,
                    });
                }
                this.log.log({
                    level  : 'info',
                    message: hook,
                    label  : 'monorepo',
                });
            });
        }
        try {
            await creator.create();
        } catch (e) {
            return this.log.error(e);
        }
        this.log.success(`MonoRepo created in : ${creator.path}`);
    }
}
