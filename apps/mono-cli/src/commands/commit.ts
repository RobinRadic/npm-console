import { command, option } from '@radic/console';
import { Command } from '../Command';


@command('commit [message]', 'Git add all & commit', ['C'])
export default class extends Command {
    @option('p', 'Push commits to remote') push: boolean = true;
    @option('t', 'Push tags to remote') tags: boolean;
    @option('r', 'Remote') remote:string='origin';

    async handle(message = 'update') {
        const git    = this.monoRepo.git;
        const status = await git.status();
        const files  = [].concat(status.not_added).concat(status.created).concat(status.deleted).concat(status.modified).concat(status.staged);
        this.log.log({
            level  : 'info',
            message: 'Adding all files to git',
            label  : 'git',
        });
        await git.add(files);
        this.log.log({
            level  : 'info',
            message: 'Comitting all added files',
            label  : 'git',
        });
        await git.commit(message);
        if ( this.push ) {
            this.log.log({
                level  : 'info',
                message: 'Pushing commits to remote',
                label  : 'git',
            });
            await git.push(this.remote, status.current);
            this.log.log({
                level  : 'success',
                message: 'Pushed commits to remote',
                label  : 'git',
            });
        }
        if ( this.tags ) {
            this.log.log({
                level  : 'info',
                message: 'Pushing tags to remote',
                label  : 'git',
            });
            await git.pushTags(this.remote);
            this.log.log({
                level  : 'success',
                message: 'Pushed tags to remote',
                label  : 'git',
            });
        }
        this.log.log({
            level  : 'success',
            message: 'Done',
            label  : 'git',
        });
    }
}
