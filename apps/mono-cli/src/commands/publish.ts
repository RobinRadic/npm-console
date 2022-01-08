import { command, option } from '@radic/console';
import { Command } from '../Command';
import { ReleaseType } from 'semver';
import { wait } from '@radic/shared';


@command('publish [name]', 'Publish package(s)', [ 'p' ])
export default class extends Command {
    @option('a', 'All') all: boolean;
    @option('b', 'Bump segment', { choices: [ 'major', 'minor', 'patch' ] }) bump: ReleaseType = 'patch';
    @option('c', 'Commit repository before & after publish') commit: boolean;
    @option('B', 'Build package before publishing') build: boolean;
    @option('i', 'Interactive') interactive: boolean;


    async handle(name?: string) {
        if ( this.all ) {
            if ( await this.ask.confirm('Are you sure you want to increase version and publish for all packages??', true) ) {

                if(this.commit){
                    this.log.log({
                    level  : 'info',
                    message: `Comitting before bumping and publishing all`,
                    label  : 'git',
                });
                    await this.monoRepo.commitAll('before bumping and publishing all')
                    this.log.log({
                        level  : 'success',
                        message: `Comitted before bumping and publishing all`,
                        label  : 'git',
                    });
                }
                for ( const pkg of await this.monoRepo.getOrderedPackages() ) {
                    this.log.log({
                        level  : 'info',
                        message: `Bumping version ${pkg.version} to ${pkg.getBumpedVersion(this.bump)}`,
                        label  : pkg.coloredName,
                    });
                    pkg.bump(this.bump);
                    this.log.log({
                        level  : 'success',
                        message: `Bumped version ${pkg.version} to ${pkg.getBumpedVersion(this.bump)}`,
                        label  : pkg.coloredName,
                    });
                    if ( this.build ) {
                        pkg.builder.clean();
                        await wait(500);
                        pkg.builder.build();
                        await wait(1000);
                    }
                    pkg.builder.publish();
                    await wait(1000);
                }
                if(this.commit){
                    this.log.log({
                        level  : 'info',
                        message: `Comitting after bumping and publishing all`,
                        label  : 'git',
                    });
                    await this.monoRepo.commitAll('after bumping and publishing all')
                    this.log.log({
                        level  : 'success',
                        message: `Comitted after bumping and publishing all`,
                        label  : 'git',
                    });
                    this.log.log({
                        level  : 'info',
                        message: `Pushing commits and tags to remote`,
                        label  : 'git',
                    });
                    await this.monoRepo.git.push();
                    await this.monoRepo.git.pushTags();
                    this.log.log({
                        level  : 'success',
                        message: `Pushed commits and tags to remote`,
                        label  : 'git',
                    });
                }
            }
        } else {
            name      = await this.getPackageName(name);
            const pkg = this.monoRepo.getPackage(name);
            if ( this.interactive ) {

            } else {
                if ( await this.ask.confirm('Are you sure you want to increase version and publish?', true) ) {
                    if(this.commit){
                        await this.monoRepo.commitAll('before bumping and publishing ' +  pkg.name)
                    }
                    this.log.log({
                        level  : 'info',
                        message: `Bumping version ${pkg.version} to ${pkg.getBumpedVersion(this.bump)}`,
                        label  : pkg.coloredName,
                    });
                    pkg.bump(this.bump);
                    this.log.log({
                        level  : 'success',
                        message: `Bumped version ${pkg.version} to ${pkg.getBumpedVersion(this.bump)}`,
                        label  : pkg.coloredName,
                    });
                    if ( this.build ) {
                        pkg.builder.clean();
                        await wait(500);
                        pkg.builder.build();
                        await wait(1000);
                    }
                    pkg.builder.publish();
                    if(this.commit){
                        await this.monoRepo.commitAll('after bumping and publishing ' + pkg.name)
                    }
                }
            }
        }
    }
}
